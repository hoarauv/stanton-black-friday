import React from 'react';
import BuildIcon from '@material-ui/icons/Build';
import CategoryIcon from '@material-ui/icons/Category';
import {ListItem, ListItemText, ListItemAvatar, Divider}
  from '@material-ui/core';
import PropTypes from 'prop-types';

/**
 * Represents the icon displayed next to an item
 * @param {object} props - Holding the type of item to display
 * @return {ReactNode} - React Node of the icon to be displayed
 */
const SearchItemListRowAvatar = ({type}) => (
  <ListItemAvatar style={{title: `content: ${type}`}}>
    {{
      'Consumable': <CategoryIcon/>,
      'Ship component': <BuildIcon/>,
    }[type]}
  </ListItemAvatar>
);

SearchItemListRowAvatar.propTypes = {
  type: PropTypes.string.isRequired,
};

/**
 * Represents a single item (in-game) displayed in a list
 * @param {object} props - The properties of the Component
 * @return {ReactNode} - The React Node of the list of items
 */
export const SearchItemListRow = (props) => (
  <>
    <ListItem>
      <SearchItemListRowAvatar type={props.type}/>
      <ListItemText>{props.name}</ListItemText>
    </ListItem>
    <Divider />
  </>
);

SearchItemListRow.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
