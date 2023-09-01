import axios from "axios";
import { GET_COUNTRIES, GET_COUNTRY_BY_NAME, NEXT_PAGE, PREV_PAGE, NUMBER_PAGE, GET_FILM_BY_ID, CLEAN_DETAIL, POST_ACTIVITY, RESET, GET_ACTIVITIES, SORT_BY_NAME, SORT_BY_POPULATION, FILTER_CONTINENT, DELETE_ACTIVITY } from "./actionsTypes";

const endPFilm = "http://localhost:3001/film";
const endPActivities = "http://localhost:3001/activities";

export const getCountries = () => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get(`${endPFilm}`);
            return dispatch({ type: GET_COUNTRIES, payload: data})
        } catch (error) {
            alert("Countries couldn't be loaded");           
        }
    };
};

export const getCountryByName = (name) => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get(`${endPFilm}/?name=${name}`);
            return dispatch({ type: GET_COUNTRY_BY_NAME, payload: data})
        } catch (error) {
            alert("Try another name please");           
        }
    };
};

export const getFilmById = (id) => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get(`${endPFilm}/${id}`);
            return dispatch({ type: GET_FILM_BY_ID, payload: data})
        } catch (error) {
            alert("Couldn't load the detail of the movie");           
        }
    };
};

export const postActivity = (form) => {
    return async (dispatch) => {
        try {
            const { data } = await axios.post(`${endPActivities}`,form);
            if (!data) throw Error();
            return dispatch({ type: POST_ACTIVITY, payload: data });
        } catch (error) {
            alert("The activity already exists")
        }
    };
};

export const getActivities = () => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get(`${endPActivities}`);
            return dispatch({ type: GET_ACTIVITIES, payload: data})
        } catch (error) {
            alert("No activities available");           
        }
    };
};

export const deleteActivity = (id) => {
    return async (dispatch) => {
        try {
            const { data } = await axios.delete(`${endPActivities}/${id}`);
            if (!data) throw Error();
            return dispatch({ type: DELETE_ACTIVITY, payload: id})
        } catch (error) {
            alert("Couldn't delete the activity");       
        }
    };
};


export const cleanDetail = () => {
    return {
        type: CLEAN_DETAIL,
    };
};

export const sortByName = (value) => {
    console.log("esto es value " + value)
    return {
        type: SORT_BY_NAME,
        payload: value,
    };
};
export const sortByPopulation = (value) => {
        return {
        type: SORT_BY_POPULATION,
        payload: value,
    };
};

export const filterContinent = (value) => {
    return {
        type: FILTER_CONTINENT,
        payload: value,
    };
};

export const nextPage = () => {
    return {
        type: NEXT_PAGE,
    };
};
export const prevPage = () => {
    return {
        type: PREV_PAGE,
    };
};
export const numberPage = (number) => {
    return {
        type: NUMBER_PAGE,
        payload: number,
    };
};

export const reset = () => {
    return {
        type: RESET,
    };
};



