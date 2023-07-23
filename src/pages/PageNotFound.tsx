import AppLink from "../components/AppLink"
import "./PageNotFound.css"

const PageNotFound = () => {
    return <main className="not-found"><h1 >404 Page not found</h1> <AppLink to={"/"} key={"Not found"}>{"\u2190"} Back to Main page</AppLink></main>
}

export default PageNotFound