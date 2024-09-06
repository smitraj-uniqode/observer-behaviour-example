import React from "react";
import {
    Box
} from '@mui/material';
import {observer} from "mobx-react-lite";
import store from "./root";

const NodeA: React.FC = observer(() => {

    console.log('NodeA');

    return (
        <Box
            sx={{
                border: '1px solid #000',
                p: '8px',
                width: '200px',
            }}
        >
            <p>A: {store.a}</p>
            <p>D: {store.d}</p>
        </Box>
    )
})

export default NodeA;