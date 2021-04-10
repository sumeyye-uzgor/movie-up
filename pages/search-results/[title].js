import ViewMovies from '../../components/ViewMovies'
import { useRouter } from "next/router"

function searchResults() {
    const router = useRouter()
    const { title } = router.query

    return (
        <div>
            <ViewMovies title={title} />
        </div>
    )
}

export default searchResults