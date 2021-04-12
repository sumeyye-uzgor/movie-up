
import actionTypes from './types';

const INITIAL_STATE = {
    favorites: [],
}

const rootReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actionTypes.ADD_TO_FAVS:
            return {
                ...state,
                favorites: [...state.favorites, action.payload]
            }
        case actionTypes.REMOVE_FROM_FAVS:
            return {
                ...state,
                favorites: state.favorites.filter(item => item.imdbID !== action.payload.imdbID)
            }
        default:
            return state
    }
}

export default rootReducer;





