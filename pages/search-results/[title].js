import { useRouter } from "next/router"

import styles from "../../styles/SearchResults.module.sass"
import ViewMovies from '../../components/ViewMovies'
import Navbar from "../../components/Navbar"

function searchResults() {
    const router = useRouter()
    const { title } = router.query

    return (
        <main>
            <Navbar name="Search Results" />
            <div className={styles.titleContainer}>
                <span>
                    Search Results:
                </span>
                <span className={styles.title}>
                    {title}
                </span>
            </div>
            <ViewMovies />
        </main >
    )
}

export default searchResults