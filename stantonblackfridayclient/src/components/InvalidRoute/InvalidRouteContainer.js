import React from 'react';
import { connect } from 'react-redux';
import MainPaperComponent from '../MainPaperComponent';
import { Button, Typography } from '@material-ui/core';
import {NavLink} from 'react-router-dom';

import UserLostImage from '../../assets/img/lost.png'

const mapStateToProps = state => ({
})

const mapDispatchToProps = dispatch => ({
})

class InvalidRouteContainer extends React.Component {
    render() {
        return (
            <MainPaperComponent>
                <div style={{textAlign:"center"}}>
                    <Typography>
                        Oho ! It seems like you lost yourself !
                    </Typography>
                    <Typography>
                        Quick ! Here is a shortcut ! Come back to safety !
                    </Typography>
                    <Typography style={{marginTop:15}}>
                        <img alt="Wrong page genius" src={UserLostImage} style={{height:"35vh"}}/>
                    </Typography>
                    <NavLink to="/home" style={{ textDecoration: 'none' }}>
                        <Button color="primary" variant="contained" style={{marginTop:15}}>
                            Go back to safety
                        </Button>
                    </NavLink >
                </div>
            </MainPaperComponent>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(InvalidRouteContainer)