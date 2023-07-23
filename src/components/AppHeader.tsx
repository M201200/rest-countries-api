import { useState } from "react"
import { useRecoilState } from "recoil";
import { searchIcon } from "../atoms/atoms";
import "./AppHeader.css"

const AppHeader = () => {

    const body = document.body
    
    const darkThemeIcon = "src\\assets\\icon-moon.svg"
    const lightThemeIcon ="src\\assets\\icon-sun.svg"

    const lightThemeSearchIcon = "src\\assets\\magnifying-glass-light-theme.svg"
    const darkThemeSearchIcon = "src\\assets\\magnifying-glass-dark-theme.svg"

    const [currentSearchIcon, setSearchIcon] = useRecoilState(searchIcon)
    const [icon, setIcon] = useState(darkThemeIcon)
    const [themeText, setThemeText] = useState("Dark")


    return (
        <header className="app-header">
            <h1>Where in the world?</h1>
            <button 
            className="theme-button" 
            onClick={()=> {
                body.toggleAttribute("data-dark-theme")
                setIcon(icon === darkThemeIcon? lightThemeIcon: darkThemeIcon)
                setThemeText(themeText === "Dark"? "Light": "Dark")
                setSearchIcon(currentSearchIcon === lightThemeSearchIcon? darkThemeSearchIcon: lightThemeSearchIcon)
                }
                }>
            <img className="theme-icon" src={icon} alt="theme-icon" />{themeText} mode</button>
        </header>
    )
}

export default AppHeader