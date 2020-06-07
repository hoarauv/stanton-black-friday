import React, { Component } from 'react';
import { IconButton, Toolbar, AppBar, TextField } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search';
import PropTypes from 'prop-types';

export default class SearchBarComponent extends Component {
    render() {
        return (
            <AppBar position="relative" color="secondary">
                <Toolbar style={{marginTop:10, marginBottom:10}}>
                    <TextField
                        disabled={this.props.disabled === true}
                        variant="outlined"
                        label="Search for an item {WIP.}"
                        defaultValue={this.props.preFill ? this.props.preFill : ""}
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
    placeholder:PropTypes.string,
    preFill:PropTypes.string,
    onSearch:PropTypes.func.isRequired
}