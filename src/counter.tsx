// src/components/Counter.tsx
import React from "react";
import { Button, Typography, Box } from "@mui/material";

interface CounterProps {
    label: string;
    value: number;
    increment: () => void;
    decrement: () => void;
}

const Counter: React.FC<CounterProps> = ({ label, value, increment, decrement }) => {
    return (
        <Box display="flex" alignItems="center" gap={2}>
            <Button variant="contained" color="primary" onClick={decrement}>
                -
            </Button>
            <Typography variant="h4">{label}: {value}</Typography>
            <Button variant="contained" color="primary" onClick={increment}>
                +
            </Button>
        </Box>
    );
};

export default Counter;
