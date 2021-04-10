// import '../styles/globals.sass'
import styles from '../styles/components/SearchBox.module.sass'
import axios from 'axios';
function handleSubmit(e) {
    if (e.key === "Enter") {
        // console.log(e.target.value)
        axios.post(`https://www.omdbapi.com/?s=${e.target.value}&page=1&apikey=58074476`)
            .then(res => console.log(res.data.Search))

    }
    // console.log(e)

}
function SearchBox() {
    return (
        <div className={styles.searchBoxContainer}>
            <input type="text" onKeyPress={(e) => handleSubmit(e)} placeholder="Enter the movie name here" className={styles.searchInput} />
            <img src="/search.svg" className={styles.searchIcon} />
        </div>
    )
}

export default SearchBox