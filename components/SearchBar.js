import styles from "../styles/components/SearchBar.module.sass"
import SearchBox from './SearchBox'
function SearchBar() {
    return (
        <div className={styles.searchBarContainer}>
            <select className={styles.selectInput}>
                <option className={styles.selectOption} disabled selected>Year</option>
                <option className={styles.selectOption}>1996</option>
                <option className={styles.selectOption}>1997</option>
            </select>
            <select className={styles.selectInput}>
                <option className={styles.selectOption} disabled selected>Type</option>
                <option className={styles.selectOption}>1996</option>
                <option className={styles.selectOption}>1997</option>
            </select>

            <SearchBox />
            <button className={styles.btn}>Search &rarr;</button>
        </div>
    )
}
export default SearchBar