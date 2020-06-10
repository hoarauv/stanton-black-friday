import React, {Component} from 'react';
import {IconButton, Toolbar, AppBar, TextField} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import PropTypes from 'prop-types';

/**
 * Represents the component used as the view of a search bar
 * The action resulting on the validation of the search can be provided through
 * the prop variable: onSearch
 */
export default class SearchBarComponent extends Component {
  /**
   * Renders the component
   * @return {ReactNode} - The react node to be displayed to show the search
   *  bar
   */
  render() {
    return (
      <AppBar position="relative" color="secondary">
        <Toolbar style={{marginTop: 10, marginBottom: 10}}>
          <TextField
            disabled={this.props.disabled === true}
            variant="outlined"
            label="Search for an item {WIP.}"
            defaultValue={this.props.preFill ? this.props.preFill : ''}
          />
          <IconButton disabled={this.props.disabled === true}>
            <SearchIcon/>
          </IconButton>
        </Toolbar>
      </AppBar>
    );
  }
}

SearchBarComponent.propTypes = {
  disabled: PropTypes.bool,
  placeholder: PropTypes.string,
  preFill: PropTypes.string,
  onSearch: PropTypes.func.isRequired,
};
