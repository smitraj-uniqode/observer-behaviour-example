import React from "react";
import {
    Box
} from '@mui/material';

const PrintOnly: React.FC = (() => {

    console.log('PrintOnly without observer');

    return (
        <Box
            sx={{
                border: '1px solid #000',
                p: '8px',
                width: '200px',
            }}
        >
            Print only
        </Box>
    )
})

export default PrintOnly;