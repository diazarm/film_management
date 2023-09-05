import {
    GET_FILMS,
    NEXT_PAGE,
    PREV_PAGE,
    NUMBER_PAGE,
    MODIFY_FILM,
    GET_FILM_BY_ID,
    CLEAN_DETAIL,
    POST_FILM,
    RESET,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOGOUT, 
    DELETE_FILM, 
    REGISTER_SUCCESS, 
    REGISTER_FAILURE,
  } from "./actionsTypes";
  
  const initialState = {
    countries: [],
    countriesCopy: [],
    filmDetail: {},
    activities: [],
    modifyFilm: {},
    numPage: 1,
    isAuthenticated: false,
    authToken: null,
    error: null,
    registrationData:{},
  };
  
  const reducer = (state = initialState, { type, payload }) => { 
    switch (type) {
      case GET_FILMS:
        return {
          ...state,
          countries: payload,
          countriesCopy: payload,
        };
  
      case NEXT_PAGE:
        return {
          ...state,
          numPage: state.numPage + 1,
        };
      case PREV_PAGE:
        return {
          ...state,
          numPage: state.numPage - 1,
        };
      case NUMBER_PAGE:
        return {
          ...state,
          numPage: payload,
        };
      case GET_FILM_BY_ID:
        return {
          ...state,
          filmDetail: payload,
        };
      case CLEAN_DETAIL:
        return {
          ...state,
          filmDetail: {},
        };
  
      case POST_FILM:
        return {
          ...state,
          activities: [...state.activities, payload],
        };
      case MODIFY_FILM:
        return {
          ...state,
          modifyFilm: payload, 
        };
      case LOGIN_SUCCESS:
        return {
          ...state,
          isAuthenticated: true,
          authToken: payload, 
          error: null,
        };
      case LOGIN_FAILURE:
        return {
          ...state,
          isAuthenticated: false,
          authToken: null,
          error: payload, 
        };
      case LOGOUT:
        return initialState;
  
      case RESET:
        return {
          ...state,
          countries: state.countriesCopy,
          numPage: 1,
        };
      case DELETE_FILM:
        return {
          ...state,
          activities: state.activities.filter((activity) => activity.id !== payload),
          numPage: 1,
        };
        case REGISTER_SUCCESS:
          return {
            ...state,
            registrationData: { ...state.registrationData, ...payload },
          };
        
      case REGISTER_FAILURE:
        return {
          ...state,
          registrationData: null,
          error: payload,
        };
      default:
        return { ...state };
    }
  };
  
  export default reducer;
  