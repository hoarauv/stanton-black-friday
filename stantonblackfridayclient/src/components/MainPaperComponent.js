import React, {Component} from 'react';
import {Paper, Box} from '@material-ui/core';

export default class MainPaperComponent extends Component {
  render() {
    return (
      <Box paddingX={6} paddingY={4} >
        <Paper style={{minHeight: '20vh'}}>
          <Box paddingY={4} paddingX={2} id="MainPaperComponent">
            {this.props.children}
          </Box>
        </Paper>
      </Box>
    );
  }
}
