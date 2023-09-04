import axios from "axios";
import { GET_FILMS, NEXT_PAGE, PREV_PAGE, NUMBER_PAGE, MODIFY_FILM , GET_FILM_BY_ID, CLEAN_DETAIL, POST_FILM, RESET, DELETE_FILM } from "./actionsTypes";

const endPFilm = "http://localhost:3001/film";

export const getFilms = () => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get(`${endPFilm}`);
            return dispatch({ type: GET_FILMS, payload: data})
        } catch (error) {
            alert("Couldn't load the movie");           
        }
    };
};


export const getFilmById = (id) => {
    return async (dispatch) => {
        try {console.log("antes del console");
            const { data } = await axios.get(`${endPFilm}/${id}`);
        console.log("despues del console");
            
            console.log("aqui viaja desde action", data);
            return dispatch({ type: GET_FILM_BY_ID, payload: data})
        } catch (error) {
            alert("Couldn't load the detail* of the movie");           
        }
    };
};

export const postFilm = (form) => {
    return async (dispatch) => {
        try {
            const { data } = await axios.post(`${endPFilm}`,form);
            if (!data) throw Error();
            return dispatch({ type: POST_FILM, payload: data });
        } catch (error) {
            alert("The movie already exists")
        }
    };
};

export const deleteFilm = (id) => {
    return async (dispatch) => {
        try {
            const { data } = await axios.delete(`${endPFilm}/${id}`);
            if (!data) throw Error();
            return dispatch({ type: DELETE_FILM, payload: id})
        } catch (error) {
            alert("Couldn't delete the movie");       
        }
    };
};

export const modifyFilm = (id, payload)=>{
    return async (dispatch) =>{
        try {
        console.log("desde action sale: ", payload);
       const {data} = await axios.put(`${endPFilm}/${id}`, payload)
       return dispatch({type: MODIFY_FILM, payload: data});
     }catch (error) {
        alert("The movie already exists")
    }
    }
 };

export const cleanDetail = () => {
    return {
        type: CLEAN_DETAIL,
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



