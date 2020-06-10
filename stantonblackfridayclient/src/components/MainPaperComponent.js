import React from 'react';
import {Paper, Box} from '@material-ui/core';
import PropTypes from 'prop-types';

/**
 * Component used as a main visual container for all the pages
 * @param {object} props - Props of the component
 * @return {ReactNode} - The ReactNode holding the content of the page
 */
export const MainPaperComponent = (props) => (
  <Box paddingX={6} paddingY={4} >
    <Paper style={{minHeight: '20vh'}}>
      <Box paddingY={4} paddingX={2} id="MainPaperComponent">
        {props.children}
      </Box>
    </Paper>
  </Box>
);

MainPaperComponent.propTypes = {
  children: PropTypes.node.isRequired,
};
