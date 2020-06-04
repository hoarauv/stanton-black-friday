"""
    Represents all the tables used by the solution
"""

import json
import pandas
from models.item_model import ItemModel
from models.ship_component_model import ShipComponentModel
from models.component_type_model import ComponentTypeModel
from models.component_class_model import ComponentClassModel
from models.trade_option_model import TradeOptionModel
from models.item_types import ItemTypeModel

required_references = [
    "items",
    "trade_options",
    "component_infos",
    "component_types",
    "component_classes",
]

class TablesModel: # for now pylint: disable=too-few-public-methods
    """
        This class contains all the data meant to be accessed during the application runtime and
        stored when done
    """
    def __init__(self, table_config_path: str, relative_path: str = None):
        """TablesModel's constructor

        Arguments:
            self..
            table_config_path {str} -- The path to the configuration path of the database, acquaint
                the class of every document it requires to be mounted properly
        """

        # open configuration file and parse it into a json object
        with open(table_config_path) as json_config_file:
            json_object: dict = json.load(json_config_file)

        # check if every resource is provided
        keys = list(json_object.keys())
        for ref in required_references:
            if ref not in keys or len(json_object[ref]) == 0:
                raise ResourceWarning(f"{ref} table reference is missing"\
                " in the tables_models configuration file")

        # update paths with prefixes, if asked so
        if relative_path is not None:
            TablesModel.__update_csv_paths_according_to_rel_path(relative_path, json_object)

        # load csv files
        self.__mount_data_frames(json_object)

    def __mount_data_frames(self, paths_dict: dict):
        self.tables = {
            TradeOptionModel:           pandas.read_csv(paths_dict["trade_options"]),
            ShipComponentModel:         pandas.read_csv(paths_dict["component_infos"]),
            ComponentClassModel:        pandas.read_csv(paths_dict["component_classes"]),
            ComponentTypeModel:         pandas.read_csv(paths_dict["component_types"]),
            ItemModel:                  pandas.read_csv(paths_dict["items"]),
            ItemTypeModel:              pandas.read_csv(paths_dict["item_types"])
        }

    @staticmethod
    def __update_csv_paths_according_to_rel_path(
            relative_path: str,
            json_object: dict,
        ) -> None:
        """
            This function is used by TablesModel when a relative path is provided at its
            initialization. It makes sure that no the paths are corrects
        """
        # TODO Correct below thereafter. There must be a way to do this in a prettier way

        # These "while" loops remove every "/" char at the end of the relative path and the
        # beginning of the filename of every value of the paths config file
        while relative_path[-1] == '/':
            relative_path = relative_path[:-1]
        keys = list(json_object.keys())
        for key in keys:
            tmp_value = json_object[key]
            while tmp_value[0] == "/":
                tmp_value = tmp_value[1:]

            # update path to complete path
            json_object[key] = f"{relative_path}/{tmp_value}"
