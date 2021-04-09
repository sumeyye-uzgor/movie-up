// import '../styles/globals.sass'
import styles from '../styles/components/SearchBox.module.sass'

function SearchBox() {
    return (
        <div className={styles.searchBoxContainer}>
            <input type="text" placeholder="Enter the movie name here" className={styles.searchInput} />
            <img src="/search.svg" className={styles.searchIcon} />

        </div>
    )
}

export default SearchBox