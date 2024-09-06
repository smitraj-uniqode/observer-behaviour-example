import { types } from 'mobx-state-tree';

const RootStore = types.model("RootStore", {
    a: types.number,
    b: types.number,
    c: types.number,
    d: types.number,
}).actions((self) => ({
    setA(val: number) {
        self.a = val;
    },
    setB(val: number) {
        self.b = val;
    },
    setC(val: number) {
        self.c = val;
    },
    setD(val: number) {
        self.d = val;
    },
}));

// Create an instance of the RootStore
const store = RootStore.create({
    a: 10,
    b: 20,
    c: 30,
    d: 40,
});

export default store;