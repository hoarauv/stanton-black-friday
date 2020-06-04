"""
    Represents the type type of buyable, harvestable or minable item in-game (ship component,
    personnal equipment, consumable..)
"""

from dataclasses import dataclass

@dataclass
class ItemTypeModel: # pylint: disable=too-few-public-methods
    """This class links an item type to its name"""
    item_type_id: int
    name: str
