import styles from "../styles/components/ViewMovies.module.sass"
import { connect } from "react-redux"
import ViewMovieContainer from "./ViewMovieContainer"
function ViewMovies({ movies }) {
    console.log(movies)
    return (
        <div className={styles.moviesContainer}>
            {
                movies.length > 0 ?
                    movies.map(movie => <ViewMovieContainer movie={movie} key={movie.imdbId} />)
                    :
                    <div className={styles.titleContainer}>
                        The movie that you search couldn't be found. Please try again.
                </div>
            }
        </div>
    )
}
const mapStateToProps = (state) => ({
    movies: state.movies
})
export default connect(mapStateToProps)(ViewMovies)