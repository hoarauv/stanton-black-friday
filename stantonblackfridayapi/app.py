"""
    This is the main file used by the backend of StantonBlackFriday app

    StantonBlackFriday's purpose is to fetch data here and there regarding StarCitizen's in-game
    economical system and provide some data vizualisation to the user.
"""

from flask import Flask, request
import pandas
from models.tables_model import TablesModel
from models.ship_component_model import ShipComponentModel
from models.component_type_model import ComponentTypeModel
from models.component_class_model import ComponentClassModel
from models.item_types import ItemTypeModel
from models.item_model import ItemModel

app = Flask(__name__)
app.config.from_json(filename="flaskenv.json", silent=False)

tables = TablesModel("./table_config.json", "./resources/")

@app.route("/")
def index():
    """return the content of the index page"""
    return "Success"

ship_equipments_search_default_args = {
    "sortby": "component_size",
    "limit": "20",
    "start": "0",
}
@app.route("/ship_components")
def ship_equipments():
    """return the list of every ship_equipments viewmodels"""
    args = dict(request.args)
    # args = args | ship_equipments_search_default_args # shall work on 3.9
    for item in ship_equipments_search_default_args.keys():
        if item not in args.keys():
            args[item] = ship_equipments_search_default_args[item]
    
    # loading required tables
    table = pandas.DataFrame(tables.tables[ShipComponentModel])
    types = pandas.DataFrame(tables.tables[ComponentTypeModel])
    categories = pandas.DataFrame(tables.tables[ComponentClassModel])
    item = pandas.DataFrame(tables.tables[ItemModel])

    # merging tables
    table = table.merge(types, on="component_type_id")
    table = table.merge(categories, on="component_class_id")
    table = table.merge(item, on="item_id")

    # sort by
    table = table.sort_values(args["sortby"])

    # removing unnecessary columns
    table = table.drop(["component_type_id", "component_class_id"], axis=1)

    # handling pagination
    start = int(args["start"])
    limit = int(args["limit"])
    result = pandas.DataFrame(table[start:limit])
    return result.to_json(orient='records')

items_search_default_args = {
    "sortby": "size",
    "limit": 20,
    "start": 0,
}
@app.route("/items")
def items():
    """return the list of every ship_equipments viewmodels"""
    args = dict(request.args)
    # args = args | ship_equipments_search_default_args # shall work on 3.9
    for item in items_search_default_args.keys():
        if item not in args.keys():
            args[item] = items_search_default_args[item]
    
    # loading required tables
    table = pandas.DataFrame(tables.tables[ItemModel])
    item_types = pandas.DataFrame(tables.tables[ItemTypeModel])
    
    # merging tables
    table = table.merge(item_types, on="item_type_id")

    # removing unnecessary columns
    table = table.drop("item_type_id", axis=1)

    # handling pagination
    start = int(args["start"])
    limit = int(args["limit"])
    result = pandas.DataFrame(table[start:limit])
    return result.to_json(orient='records')
    
if __name__ == "__main__":
    app.run(debug=True)
