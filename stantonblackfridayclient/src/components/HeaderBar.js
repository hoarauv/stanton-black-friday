import React from 'react';
import {AppBar, Button, Toolbar, Typography, Avatar} from '@material-ui/core/';
import Search from '@material-ui/icons/Search';

import BackgroundAppBarImage from '../assets/img/banner_00.jpg';
import SC_LOGO_AVATAR from '../assets/img/SC_logo.png';

/**
 * Represents the picture on top of the header
 * @return {ReactNode} - a React Node to be rendered
 */
const HeaderBarImage = () => (
  <AppBar position="static"
    style={{
      height: '15vh',
      backgroundImage: `url(${BackgroundAppBarImage})`,
      backgroundSize: 'cover',
      filter: 'blur(4px)',
    }}
  >
  </AppBar>
);

/**
 * Represents "readable" content of the header (title and navigations buttons)
 * @return {ReactNode} - a React Node to be rendered
 */
const HeaderBarNavigationAndTitle = () => (
  <AppBar position="static">
    <Toolbar style={{
      paddingBottom: '1vh',
      paddingTop: '1vh',
    }}>
      <a href="/home">
        <Avatar alt="SBF" src={SC_LOGO_AVATAR} />
      </a>
      <Typography style={{marginLeft: '2vw'}} noWrap variant="h3">
        Stanton Black Friday
      </Typography>
      <section style={{
        marginLeft: 'auto',
        marginRight: -12,
      }}>
        <Button
          style={{marginRight: '1vw'}}
          variant="contained"
          href="/search-item"
        >
          <Search />
          <Typography>Browse items</Typography>
        </Button>
        <Button disabled={true} variant="contained" href="/">
          <Search />
          <Typography>Browse ship components</Typography>
        </Button>
      </section>
    </Toolbar>
  </AppBar>
);

/**
 * Represent the bar that is displayed on top of every website pages
 * @return {ReactNode} the React Node of the header to be displayed
 */
export const HeaderBar = () => (
  <>
    <HeaderBarImage />
    <HeaderBarNavigationAndTitle />
  </>
);
