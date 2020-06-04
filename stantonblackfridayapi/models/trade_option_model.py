"""
    Represents a purchase or selling opportunity in-game
"""

from dataclasses import dataclass

@dataclass
class TradeOptionModel: # pylint: disable=too-few-public-methods
    """
        This class contains the data meant to be stored regarding any ship buy or sell option
        in-game
    """
    shop_id: int
    item_id: int
    is_buy_option: bool
    value: int
