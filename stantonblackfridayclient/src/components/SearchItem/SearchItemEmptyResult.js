import React from 'react';
import {ReactComponent as NotFound} from '../../assets/img/not-found.svg';
import {Typography, Grid} from '@material-ui/core';

export const SearchItemEmptyResult = () => (
  <Grid alignContent="space-between" alignItems="center" container style={{marginTop: 20}}>
    <Grid item md={2} xs={false}></Grid>
    <Grid item md={1} xs={3}>
      <NotFound style={{width: 50, height: 'auto'}}/>
    </Grid>
    <Grid item md={7} xs={9}>
      <Typography variant="h5">
                Uh-Oh!
      </Typography>
      <Typography>
                We're sorry, but we were unable to find anything like that in our database...
      </Typography>
    </Grid >
    <Grid item md={2} xs={false}></Grid>
  </Grid>
);
