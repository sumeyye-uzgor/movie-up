import actionTypes from './types.js'
export const fetchMovies = (movies) => (
    {
        type: actionTypes.FETCH_MOVIES,
        payload: movies
    }
)
export const fetchDetailedMovie = (movie) => (
    {
        type: actionTypes.FETCH_DETAILED_MOVIE,
        payload: movie
    }
)
export const fetchRelateds = (relateds) => (
    {
        type: actionTypes.FETCH_RELATEDS,
        payload: relateds
    }
)
export const fetchPopulars = (populars) => (
    {
        type: actionTypes.FETCH_POPULARS,
        payload: populars
    }
)
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