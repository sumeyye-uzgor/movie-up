
import actionTypes from './types';

const INITIAL_STATE = {
    movies: [],
    favorites: [],
    populars: [],
    relateds: [],
}

const rootReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actionTypes.FETCH_MOVIES:
            return {
                ...state,
                movies: action.payload
            }
        case actionTypes.FETCH_RELATEDS:
            return {
                ...state,
                relateds: action.payload
            }
        case actionTypes.FETCH_POPULARS:
            return {
                ...state,
                populars: action.payload
            }
        case actionTypes.ADD_TO_FAVS:
            return {
                ...state,
                favorites: [...favorites, action.payload]
            }
        case actionTypes.REMOVE_FROM_FAVS:
            return {
                ...state,
                favorites: favorites.filter(item => item.id !== action.payload.id)
            }
        default:
            return state
    }
}

export default rootReducer;





