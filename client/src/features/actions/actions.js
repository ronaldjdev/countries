import axios from "axios";
import { FILTER_COUNTRIES, GET_COUNTRIES, GET_COUNTRIES_BY_NAME, ORDER_COUNTRIES_ALF, ORDER_COUNTRIES_POP, GET_TOURIST_ACTIVITIES, GET_COUNTRY_DETAIL, GET_COUNTRIES_QUERY, FILTER_BY_ACTIVITIES } from "features/types";

export const getCountries = () => {
    return async (dispatch) => {
        let json = await axios.get("https://restcountries.com/v3/all", {
        });
        return dispatch({
            type: GET_COUNTRIES,
            payload: json.data
        })
    }
}

export const filterByContinents = (payload) => {
    return {
        type: FILTER_COUNTRIES,
        payload
    }
}

export const orderByName  = (payload) => {
    return {
        type: ORDER_COUNTRIES_ALF,
        payload
    }
}

export const orderByPop = (payload) => {
    return {
        type: ORDER_COUNTRIES_POP,
        payload
    }
}

export const getCountriesDetail = (id) => {
    return async (dispatch) => {
        try {
            let json = await axios.get(`https://restcountries.com/v3/name/${id}`)
            return dispatch({
                type: GET_COUNTRY_DETAIL,
                payload: json.data
            })
        } catch (error) {
            console.log(error);
        }
    }
}

export const getCountriesSearch = (name) => {
    return async  (dispatch) => {
        try {
            let json = await axios.get("https://restcountries.com/v3/name=" + name.charAt(0).toUpperCase() + name.slice(1))
            return dispatch({
                type: GET_COUNTRIES_QUERY,
                payload: json.data
            })
        } catch (error) {
            console.log(error);
        }
    }
}

export const filterByAct = (activity) => {
    return {
        type: FILTER_BY_ACTIVITIES,
        payload: activity
    }
}

export const getActivities = () => {
    return (dispatch) => {
        axios
            .get(`https://localhost:3001/activities`)
            .then((info) => {
                return dispatch({
                    type: GET_TOURIST_ACTIVITIES,
                    payload: info.data,
                });
            })
            .catch((err) => console.log(err));
    };
};


export const postActivity = (payload) => {
    return async (dispatch) => {
        const response = await axios.post("https://localhost:3001/activities", payload)
        console.log(response)
        return response
    }
}

export const getCountriesByName = (name) => {
    console.log(name)
    return {
        type: GET_COUNTRIES_BY_NAME,
        payload: name,

    }

}


export default getCountriesSearch;