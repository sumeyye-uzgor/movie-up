import actionTypes from './types.js'
export const addToFavs = (movie) => (
    {
        type: actionTypes.ADD_TO_FAVS,
        payload: movie
    }
)
export const removeFromFavs = (movie) => (
    {
        type: actionTypes.REMOVE_FROM_FAVS,
        payload: movie
    }
)