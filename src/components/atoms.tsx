import { atom } from "recoil";

export const searchCountryValue = atom({
    key: "searchCountryValue",
    default: ""
})

export const searchByRegion = atom({
    key: "searchByRegion",
    default: ""
})