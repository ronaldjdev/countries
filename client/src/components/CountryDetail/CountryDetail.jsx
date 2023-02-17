import Airplane from "assets/airplane.gif"
import { CardContent } from "theme"

export const CountryDetail = () => {

    return (
        <>

            <CardContent
                color="white"
                m="0"
                src={Airplane}
                h="632px"
                w="100%"
                p="0"
                >
                <CardContent
                    color="rgba(19, 17, 17, 0.4)"
                    m="0"
                    h="632px"
                    w="100%"
                    blur="5px"
                    />
            
            </CardContent>
        </>
    )
}