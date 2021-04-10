import styles from "../styles/components/PreviewMovies.module.sass"
import ViewMovieContainer from "./ViewMovieContainer"
function ViewMovies({ title }) {
    return (
        <div className={styles.previewContainer}>
            Navbar {title}
            <div className={styles.topInfo}>
                <span className={styles.title}>{title}</span>
                <span className={styles.viewMore}>View More &rarr;</span>
            </div>

            <div className={styles.movies}>
                <ViewMovieContainer />
            </div>

        </div>
    )
}
export default ViewMovies