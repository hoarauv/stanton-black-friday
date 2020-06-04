"""
    Represents the category of ship component in-game (military, civilian, competition..)
"""

from dataclasses import dataclass

@dataclass
class ComponentClassModel(): # pylint: disable=too-few-public-methods
    """
        This class contains the data meant to be stored regarding ship's components levels
        in-game
    """
    name: str
    component_class_id: int
