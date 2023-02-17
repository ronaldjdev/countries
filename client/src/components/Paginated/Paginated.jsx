import { ContPage } from "theme"

export const Paginated = ({countriesPerPage, fullCountries, paginate}) => {
    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(fullCountries/countriesPerPage); i++) {
        pageNumbers.push(i)
    }

    return(
        <ContPage>
            <ul>
                {
                    pageNumbers &&
                    pageNumbers.map(number => (
                        
                        <button  key={number} onClick={() => paginate(number)}>{number}</button>
                        
                    ))
                }
            </ul>
        </ContPage>
    )
}