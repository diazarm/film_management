import axios from "axios";
import { GET_FILMS, NEXT_PAGE, PREV_PAGE, NUMBER_PAGE, MODIFY_FILM , GET_FILM_BY_ID, CLEAN_DETAIL, POST_FILM, RESET, DELETE_FILM, LOGIN_SUCCESS, LOGIN_FAILURE, REGISTER_SUCCESS, REGISTER_FAILURE } from "./actionsTypes";
import bcrypt from 'bcryptjs';

const endPFilm = "http://localhost:3001/film";
const endPRegister = "http://localhost:3001";
const endLogin = "http://localhost:3001/login";



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
        try {console.log("antes del console", id);
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

export const ingreso = (credentials) => {
  console.log("clave de login", credentials.password);
  return async (dispatch) => {
    try {
      // Cifra la contraseña de forma asincrónica
      const hashedPassword = await bcrypt.hash(credentials.password, 10);

      
      // Actualiza las credenciales con la contraseña cifrada
      const credentialsWithHashedPassword = {
        ...credentials,
        password: hashedPassword,
      };
      
      const jsonData = JSON.stringify(credentialsWithHashedPassword);
      console.log("enviado desde login", jsonData);
      const response = await axios.post(`${endLogin}`, jsonData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      // Si las credenciales son correctas, actualiza el estado con el token
      if (!response) throw Error();
      return dispatch({
        type: LOGIN_SUCCESS,
        payload: response.data.token,
      });
    } catch (error) {
      dispatch({
        type: LOGIN_FAILURE,
        payload: 'Credenciales incorrectas',
      });
    }
  };
};


  export const register = (formData) => {
    console.log("envia por action", formData);
    return async (dispatch) => {
      try {
        const jsonData = JSON.stringify(formData); // Convierte el objeto a JSON
        const response = await axios.post(`${endPRegister}`, jsonData, {
          headers: {
            'Content-Type': 'application/json', // Indica que estás enviando JSON
          },
        });
        if (!response) throw Error();
        return dispatch({
          type: REGISTER_SUCCESS,
          payload: response.data,
        });
      } catch (error) {
        alert("No se pudo registrar");
      }
    };
  };
  
