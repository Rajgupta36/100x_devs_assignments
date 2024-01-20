import { atom } from "recoil"
const phone = atom({
    key: "number",
    default: 0
});
export { phone };