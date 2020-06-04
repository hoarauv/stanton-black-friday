"""
    This is the class supposed to represent the default viewmodel class of a ship equipment of any
    kind
"""

import json
from models.item_model import ItemModel
from models.ship_component_model import ShipComponentModel
from models.component_class_model import ComponentClassModel
from models.component_type_model import ComponentTypeModel
# from models.trade_option_model import TradeOptionModel
from models.tables_model import TablesModel

class ShipComponent(): # for now pylint: disable=too-few-public-methods
    """This class contains the data meant to be displayed regarding a ship component"""
    def __init__(
                self,
                model: ShipComponentModel,
                db: TablesModel
        ):
        """ShipComponent's constructor

        Arguments:
            self..
            model {ShipComponentModel} -- the row of the component to be displayed
        """
        self.__model = model
        self.__db_ptr = db
    def get_ship_component_data(self) -> json:
        """
            Seek the data needed to display this specific component
        """
        result = {}
        result["name"] = self.__get_name()
        result["class"] = self.__get_category()
        result["type"] = self.__get_component_type()
        return json.dumps(result)
    def __get_component_type(self) -> str:
        types = self.__db_ptr.tables[ComponentTypeModel]
        component_type = types \
            .where(types["component_type_id"] == self.__model.component_class_id)["name"]
        return component_type
    def __get_category(self) -> str:
        categories = self.__db_ptr.tables[ComponentClassModel]
        category = categories \
            .where(categories["component_class_id"] == self.__model.component_class_id)["name"]
        return category
    def __get_name(self) -> str:
        items = self.__db_ptr.tables[ItemModel]
        name = items.where(items["item_id"] == self.__model.component_class_id)["name"]
        return name
