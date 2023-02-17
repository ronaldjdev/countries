import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountries, filterByContinents, orderByName, orderByPop, filterByAct, getActivities } from "features/actions";
import Office from "assets/office.webp"
import { Card } from "components/Card/Card"
import { CardContent, Parallax } from "theme"
import { Paginated } from "components/Paginated/Paginated";

export const Home = () => {
    const dispatch = useDispatch()
    const allCountries = useSelector((state) => state.countries)
    const activities = useSelector((state) => state.allActivities)

    const [orden, setOrden] = useState("")
    const [currentPage, setCurrentPage] = useState(1)
    let [countriesPerPage, setCountriesPerPage] = useState(9)

    const indexOfLastCountrie = currentPage * countriesPerPage
    const indexOfFirstCountrie = indexOfLastCountrie - countriesPerPage
    const currentCountries = allCountries.slice(indexOfFirstCountrie, indexOfLastCountrie)

    const pag = (pageNumber) => {
        setCurrentPage(pageNumber)
    }
    useEffect(() => {
        dispatch(getCountries());
        dispatch(getActivities());
    }, [dispatch])

    // const handleFilteredCountrie = (e) => {
    //     dispatch(filterByContinents(e.target.value))
    // };

    // const handleSort = (e) => {
    //     e.preventDefault()
    //     dispatch(orderByName(e.target.value))
    //     setCurrentPage(1)
    //     setOrden(`Ordenado ${e.target.value}`)
    // };

    // const handleSortPop = (e) => {
    //     e.preventDefault()
    //     dispatch(orderByPop(e.target.value))
    //     setCurrentPage(1)
    //     setOrden(`Ordenado ${e.target.value}`)
    // };

    // const handleFilterByAct = (e) => {
    //     e.preventDefault()
    //     e.target.value === "none" ? dispatch(getCountries()) :
    //         dispatch(filterByAct(e.target.value))
    //     setCurrentPage(1)
    // }
    return (

        <>
            <Parallax>

                {/* <CardContent
                    color="white"
                    m="0"
                    src={Office}
                    h="632px"
                    w="100%"
                    p="0"
                > */}
                <CardContent
                    color="rgba(19, 17, 17, 0.4)"
                    m="0"
                    h="100%"
                    w="100%"
                    blur="5px"
                    direction="row"
                    p="15px"
                    wrap="wrap"
                >
                    {currentCountries.length ? currentCountries.map((e) => {
                        return (
                            <Card flag={e.flags.png} name={e.name.common} alt={e.alt} continent={e.continents} key={e.cca3} id={e.cca3} />
                        )

                    }) : <h1>no hay paises</h1>}
                <Paginated
                    countriesPerPage={countriesPerPage}
                    fullCountries={allCountries.length}
                    paginate={pag}
                />
                </CardContent>
                {/* </CardContent> */}
            </Parallax>
        </>
    )
}