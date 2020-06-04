"""This is the class supposed to represent the default model class of any item in the game"""

from models.item_model import ItemModel
from models.tables_model import TablesModel

class Item: # for now pylint: disable=too-few-public-methods
    """
        This class contains the data meant to be displayed regarding any buyable or sellable
        item
    """
    def __init__(
            self,
            model: ItemModel,
            db: TablesModel
    ):
        """Item's constructor

        Arguments:
            self..
            prices {List[int]} -- The list of the prices
        """
