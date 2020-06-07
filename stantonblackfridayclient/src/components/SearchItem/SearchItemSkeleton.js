import React from 'react';
import { Skeleton } from '@material-ui/lab';

export const SearchItemSkeleton = () => (
    <>
        <Skeleton style={{marginTop:20}} variant="text"/>
        <Skeleton style={{marginTop:3}} variant="text"/>
        <Skeleton style={{marginTop:3}} variant="text"/>
    </>
);