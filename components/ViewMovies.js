import styles from "../styles/components/ViewMovies.module.sass"
import ViewMovieContainer from "./ViewMovieContainer"
function ViewMovies() {
    return (
        <div className={styles.moviesContainer}>
            <ViewMovieContainer />
            <ViewMovieContainer />
            <ViewMovieContainer />
            <ViewMovieContainer />
            <ViewMovieContainer />
        </div>
    )
}
export default ViewMovies