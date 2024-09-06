import React from "react";
import {
    Box
} from '@mui/material';
import {observer} from "mobx-react-lite";
import store from "./root";

const NodeB: React.FC = observer(() => {
    console.log('Node B')

    return (
        <Box
            sx={{
                border: '1px solid #000',
                p: '8px',
                width: '200px',
            }}
        >
            <p>B: {store.b}</p>
            <p>D: {store.d}</p>
        </Box>
    )
})

export default NodeB;