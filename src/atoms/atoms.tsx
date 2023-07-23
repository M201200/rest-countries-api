import { atom } from "recoil";

export const searchCountryValue = atom({
    key: "searchCountryValue",
    default: ""
})

export const searchByRegion = atom({
    key: "searchByRegion",
    default: ""
})

export const searchIcon = atom({
    key: "searchIcon",
    default: "src\\assets\\magnifying-glass-light-theme.svg"
})