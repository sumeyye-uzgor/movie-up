export const getRouteUrl = (searchQuery) => {
    const url = "https://www.omdbapi.com/?apikey=58074476&"
    if (searchQuery.id) {
        return `${url}i=${searchQuery.id}`
    }
    if (searchQuery.title) {
        if (searchQuery.year) {
            if (searchQuery.type) {
                return `${url}s=${searchQuery.title}&y=${searchQuery.year}&type=${searchQuery.type}&page1`

            }
            else {
                return `${url}s=${searchQuery.title}&y=${searchQuery.year}&page1`
            }

        }
        else {
            return `${url}s=${searchQuery.title}&page1`
        }
    }

}