import { useEffect, useState } from "react"

import "./AppHeader.css"

const AppHeader = () => {
	const body = document.body
	const [icon, setIcon] = useState("☾")
	const [themeText, setThemeText] = useState("Dark")
	const isDarkTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
	const prefersDarkTheme = localStorage.getItem("darkTheme")

    function setDarkTheme() {
        body.setAttribute("data-dark-theme", "")
		setIcon("☀")
		setThemeText("Light")
    }

	useEffect(() => {
		if ((prefersDarkTheme === "true") || (isDarkTheme && prefersDarkTheme === null)) {
           setDarkTheme()
           localStorage.setItem("darkTheme", "true")
        } 
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	return (
		<header className="app-header">
			<h1>Where in the world?</h1>
			<button
				className="theme-button"
				onClick={() => {
					body.toggleAttribute("data-dark-theme")
					setIcon(icon === "☾"? "☀": "☾")
					setThemeText(themeText === "Dark"? "Light": "Dark")
					prefersDarkTheme === "true"
						?localStorage.setItem("darkTheme", "false")
						:localStorage.setItem("darkTheme", "true")
				}}
			>
				<span className="theme-icon">{icon}</span>
				Toggle {themeText} mode
			</button>
		</header>
	)
}

export default AppHeader
