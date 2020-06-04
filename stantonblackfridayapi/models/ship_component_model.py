"""
    Represents any ship component in-game (weapons, shields, powerplants, etc.)
"""

from dataclasses import dataclass
from models.item_model import ItemModel

@dataclass
class ShipComponentModel(ItemModel): # pylint: disable=too-few-public-methods
    """This class contains the data meant to be stored regarding any ship component in-game"""
    component_type_id: int
    component_class_id: int
    component_grade: int
    component_size: int
