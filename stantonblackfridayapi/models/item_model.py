"""
    Represents any buyable, harvestable or minable item in-game
"""

from dataclasses import dataclass

@dataclass
class ItemModel: # pylint: disable=too-few-public-methods
    """This class contains the data meant to be stored regarding any item in-game"""
    name: str
    item_id: int # refers to the unique id of the item
    item_type_id: int # refers to the type of item (ship component, consumable, etc.)
