import React from 'react';
import BuildIcon from '@material-ui/icons/Build';
import CategoryIcon from '@material-ui/icons/Category';
import {ListItem, ListItemText, ListItemAvatar, Divider} from '@material-ui/core';

function SearchItemListRowAvatar({type}) {
    return (
    <ListItemAvatar style={{title:`content: ${type}`}}>
        {{
            "Consumable":<CategoryIcon/>,
            "Ship component":<BuildIcon/>,
        }[type]}
    </ListItemAvatar>
    );
}

export const SearchItemListRow = (props) => (
    <>
        <ListItem>
            <SearchItemListRowAvatar type={props.type}/>
            <ListItemText>{props.name}</ListItemText>
        </ListItem>
        <Divider />
    </>
)