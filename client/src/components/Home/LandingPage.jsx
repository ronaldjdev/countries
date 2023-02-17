import { Button, CardContent, Subtitle, Title1 } from "theme"
import { Link } from "react-router-dom"
import Humans from "assets/humans.png"


export const LandingPage = () => {
    //coment


    return (
        <>
            <CardContent color="white" m="0" p="0" direction="row" w="100%">
                <CardContent color="rgb(95%, 89%, 79%)" m="0">
                    <Title1 transform="uppercase" >PI - Soy Henry </Title1>
                    <Subtitle color="tomato" >Countries</Subtitle>
                    <Link to="/countries"><Button bg="rgba(0,0,0,0)"> Comencemos! 👉 </Button></Link>
                </CardContent>
                <CardContent color="white" m="0" direction="row" src={Humans} />
            </CardContent>
        </>
    )
}