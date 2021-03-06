import { useRouter } from "next/router"
import axios from "axios"

import styles from "../../../../../styles/SearchResults.module.sass"
import ViewMovies from '../../../../../components/ViewMovies'
import Navbar from "../../../../../components/Navbar"
import SearchBar from "../../../../../components/SearchBar"
import { getRouteUrl } from "../../../../../redux/utils"
import { connect } from "react-redux"

function searchResults({ movies }) {
    const router = useRouter()
    const { title } = router.query
    return (
        <main>
            <Navbar name="Search Results" />
            <div className={styles.searchBar} >
                <SearchBar />
            </div>
            <div className={styles.titleContainer}>
                <span>
                    Search Results:
                </span>
                <span className={styles.title}>
                    {title}
                </span>
            </div>
            <ViewMovies movies={movies} />
        </main >
    )
}

searchResults.getInitialProps = async (ctx) => {
    const { query } = ctx
    const res = await axios.post(getRouteUrl(query))
    const movies = await res.data.Search
    return { movies }
}

export default connect()(searchResults)