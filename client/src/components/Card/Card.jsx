import { Link } from "react-router-dom"
import { CardContent, Img, Title3, Subtitle, Button } from "theme"
export const Card = ({ flag, name, continent, id, alt }) => {

    return (

        <>
            <CardContent h="250px" w="220px" >
                <CardContent w="220px">
                    <Img w="130px" h="70px" src={flag} alt={alt ? alt : "Imagen no disponible"} />
                </CardContent>
                <Title3>{name}</Title3>
                <Subtitle p="15px" color="tomato">{continent}</Subtitle>
                <Link to={`/countries/${id}`}><Button >Ver Más</Button></Link>
            </CardContent>
        </>

    )
}