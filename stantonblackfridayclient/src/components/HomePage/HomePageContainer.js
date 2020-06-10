import React from 'react';
import {connect} from 'react-redux';
import {Typography, Grid, Card, Box, Link} from '@material-ui/core';
import {MainPaperComponent} from '../MainPaperComponent';
import {loremipsum} from '../lorem-ipsum';

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => ({
});

/**
 * Represents the view the user lands on first
 */
class HomePageContainer extends React.Component {
  /**
   * Renders the component
   * @return {ReactNode} - The react node to display
   */
  render() {
    return (
      <MainPaperComponent>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4}>
            <Card>
              <Box padding={3}>
                <Typography variant="h5">
                  Well ! That&#39;s a start !
                </Typography>
                <Typography>
                  It&#39;s not much, but it&#39;s a webapp
                </Typography>
              </Box>
            </Card>
            <Card style={{marginTop: 10}}>
              <Box padding={3}>
                <Typography>
                  Here are some things to do for now
                </Typography>
                <Typography>
                  You can : <Link href="/search-item">Browse the items
                  registered in the database</Link> or <Link href="/">
                      look for a more detailed list of the ship components
                  </Link> (still work in progress..)
                </Typography>
              </Box>
            </Card>
          </Grid>
          <Grid item xs={12} sm={8}>
            {loremipsum}
          </Grid>
        </Grid>
      </MainPaperComponent>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePageContainer);
