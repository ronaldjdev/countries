import { CountryDetail } from "components/CountryDetail/CountryDetail"
import { Home, LandingPage } from "components/Home"
import { Route } from "react-router-dom"

export const Routes = () => {
    return (

        <>
            <Route exact path="/" component={LandingPage} />
            <Route path="/home" component={LandingPage} />
            <Route path="/countries" component={Home} />
            <Route exact path="/countries/:id" component={CountryDetail} />
        </>

    )
}