import React, { useState } from "react";
import {
    Box,
    Stack
} from '@mui/material';
import NodeA from "./NodeA";
import NodeB from "./NodeB";
import store from "./root";
import Counter from "./counter";
import { observer } from "mobx-react-lite";
import PrintOnly from "./PrintOnly";
import PrintOnlyWithObserver from "./PrintOnlyWithObserver";

const Tree: React.FC = observer(() => {
    const [ e, setE ] = React.useState<number>(50);

    console.log('Root of tree')

    return (
        <Stack flexDirection='column' spacing={2} p={'10px'}>
            <PrintOnly />
            <PrintOnlyWithObserver />
            <Box sx={{
                border: '1px solid #000',
                p: '8px',
                width: '200px',
            }}>
                <p>C: {store.c}</p>
            </Box>
            <Stack spacing={2}>
                <NodeA/>
                <NodeB/>
            </Stack>
            <Stack spacing={2}>
                <CounterAB />
                <Counter label='C' value={store.c} increment={() => store.setC(store.c + 1)} decrement={() => store.setC(store.c - 1)} />
                <Counter label='D' value={store.d} increment={() => store.setD(store.d + 1)} decrement={() => store.setD(store.d - 1)} />
                <Counter label='E' value={e} increment={() => setE(prev => prev + 1)} decrement={() => setE(prev => prev - 1)} />
            </Stack>
        </Stack>
    )
})

const CounterAB: React.FC = observer(() => {
    console.log('CounterAB');

    return (
        <Box
            sx={{
                border: '1px solid #000',
                p: '8px',
                width: '300px',
            }}
        >
            <Counter label='A' value={store.a} increment={() => store.setA(store.a + 1)} decrement={() => store.setA(store.a - 1)} />
            <Counter label='B' value={store.b} increment={() => store.setB(store.b + 1)} decrement={() => store.setB(store.b - 1)} />
        </Box>
    )
});

export default Tree;
