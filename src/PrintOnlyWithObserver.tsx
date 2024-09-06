import React from "react";
import {
    Box
} from '@mui/material';
import {observer} from "mobx-react-lite";

const PrintOnlyWithObserver: React.FC = observer(() => {

    console.log('PrintOnlyWithObserver');

    return (
        <Box
            sx={{
                border: '1px solid #000',
                p: '8px',
                width: '200px',
            }}
        >
            Print only with observer
        </Box>
    )
})

export default PrintOnlyWithObserver;