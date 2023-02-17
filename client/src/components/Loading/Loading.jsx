import Globo from "assets/globo.gif"
import { CardContent, Img } from "theme"


export const Loading = () => {

    return (
        <>
            <CardContent color="rgb(95%, 89%, 79%)" m="0" p="0" radius="0"  h="632px" w="100%">
                <Img src={Globo} w="300px"  cover="contain"alt="Loading..." />
            </CardContent>
        </>
    )
}