import { GET_COUNTRIES, GET_COUNTRY_BY_NAME, NEXT_PAGE, PREV_PAGE, NUMBER_PAGE, GET_FILM_BY_ID, CLEAN_DETAIL, POST_ACTIVITY, RESET, GET_ACTIVITIES, SORT_BY_NAME, SORT_BY_POPULATION, FILTER_CONTINENT, FILTER_ACTIVITY, DELETE_ACTIVITY, } from "./actionsTypes";

const initialState = {
    countries: [],
    countriesCopy: [],
    filmDetail: {},
    activities: [],
    numPage: 1,
};

const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_COUNTRIES:
            return {
                ...state,
                countries: payload,
                countriesCopy: payload,
            };
        case GET_ACTIVITIES:
            return {
                ...state,
                activities: payload,
            };
        case GET_COUNTRY_BY_NAME:
            return {
                ...state,
                countries: payload,
                numPage: 1,
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
      
        case POST_ACTIVITY:
            return {
                ...state,
                activities: [...state.activities, payload],
            };
        case SORT_BY_NAME:
            return {
                ...state,
                countries: payload === "A - Z"
                    ? state.countries.slice().sort((a, b) => a.name.localeCompare(b.name))
                    : state.countries.slice().sort((a, b) => b.name.localeCompare(a.name)),
                numPage: 1,
            };
        case SORT_BY_POPULATION:
            return {
                ...state,
                countries: payload === "Max - Min"
                    ? state.countries.slice().sort((a, b) => b.population - a.population)
                    : state.countries.slice().sort((a, b) => a.population - b.population),
                numPage: 1,
            };
        case FILTER_CONTINENT:
            return {
                ...state,
                countries: state.countriesCopy
                    .filter(country => country.continent === payload),
                numPage: 1,
            };
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
        case DELETE_ACTIVITY:
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