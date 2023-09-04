import { GET_FILMS,  NEXT_PAGE, PREV_PAGE, NUMBER_PAGE, MODIFY_FILM, GET_FILM_BY_ID, CLEAN_DETAIL, POST_FILM, RESET,  FILTER_ACTIVITY, DELETE_FILM, } from "./actionsTypes";

const initialState = {
    countries: [],
    countriesCopy: [],
    filmDetail: {},
    activities: [],
    numPage: 1,
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
                numPage: state.numPage + 1
            };
        case PREV_PAGE:
            return {
                ...state,
                numPage: state.numPage - 1
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
                activities: [...state.activities, payload],
            }
        case FILTER_ACTIVITY:
            return {
                ...state,
                countries: state.countriesCopy.filter(country =>
                    country.activities.some(activity => activity.name === payload)
                ),
                numPage: 1,
            };
              
        case RESET:
            return {
                ...state,
                countries: state.countriesCopy,
                numPage: 1,
            };
        case DELETE_FILM:
            return {
                ...state,
                activities: state.activities.filter(activity => activity.id !== payload),
                numPage: 1,
            };
        default:
            return { ...state };
    }
};

export default reducer;