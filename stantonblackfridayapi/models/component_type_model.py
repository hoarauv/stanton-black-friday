"""
    Represents the category of ship component in-game (military, civilian, competition..)
"""

from dataclasses import dataclass

@dataclass
class ComponentTypeModel(): # pylint: disable=too-few-public-methods
    """
        This class contains the data meant to be stored regarding ship's components types
        in-game
    """
    name: str
    component_type_id: int
