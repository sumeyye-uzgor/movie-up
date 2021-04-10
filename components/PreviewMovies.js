import styles from "../styles/components/PreviewMovies.module.sass"
import MovieContainer from "./MovieContainer"
function PreviewMovies({ title }) {
    return (
        <div className={styles.previewContainer}>
            <div className={styles.topInfo}>
                <span className={styles.title}>{title}</span>
                <span className={styles.viewMore}>View More &rarr;</span>
            </div>

            <div className={styles.movies}>
                <MovieContainer className={styles.firstMovie} />
                <MovieContainer className={styles.secondMovie} />
                <MovieContainer className={styles.thirdMovie} />
            </div>

        </div>
    )
}
export default PreviewMovies