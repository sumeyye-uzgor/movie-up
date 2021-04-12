// import '../styles/globals.sass'
import styles from '../styles/components/SearchBox.module.sass'
import { useRouter } from 'next/router'

function SearchBox(props) {
    const router = useRouter()
    const handleSubmit = (e) => {
        if (e.key === "Enter") {
            router.push(`/search-results/${e.target.value}`)
            e.target.value = ""

        }
    }
    return (
        <div className={styles.searchBoxContainer}>
            <input type="text" onKeyPress={(e) => handleSubmit(e)} placeholder="Enter the movie name here" className={styles.searchInput} />
            <img src="/search.svg" className={styles.searchIcon} />
        </div>
    )
}



export default SearchBox