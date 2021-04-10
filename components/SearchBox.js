// import '../styles/globals.sass'
import styles from '../styles/components/SearchBox.module.sass'
import axios from 'axios';
import { connect } from "react-redux"
import { fetchMovies } from '../redux/actions';
import { useRouter } from 'next/router'

function SearchBox(props) {
    const router = useRouter()
    const handleSubmit = (e) => {
        if (e.key === "Enter") {
            // console.log(e.target.value)
            axios.post(`https://www.omdbapi.com/?s=${e.target.value}&page=1&apikey=58074476`)
                .then(res => props.fetchMovies(res.data.Search))
                .then(router.push(`/search-results/${e.target.value}`))
                .then(e.target.value = "")

        }
    }
    return (
        <div className={styles.searchBoxContainer}>
            <input type="text" onKeyPress={(e) => handleSubmit(e)} placeholder="Enter the movie name here" className={styles.searchInput} />
            <img src="/search.svg" className={styles.searchIcon} />
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchMovies: movies => dispatch(fetchMovies(movies))

    }
}

export default connect(null, mapDispatchToProps)(SearchBox)