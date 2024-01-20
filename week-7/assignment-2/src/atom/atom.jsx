import { atom } from "recoil"

const colorAtom = atom({
    key: 'color', // unique ID (with respect to other atoms/selectors)
    default: 'white', // default value (aka initial value)
});

export { colorAtom };