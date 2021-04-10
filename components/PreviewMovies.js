import styles from "../styles/components/PreviewMovies.module.sass"
import PreviewMovieContainer from "./PreviewMovieContainer"
function PreviewMovies({ title }) {
    return (
        <div className={styles.previewContainer}>
            <div className={styles.topInfo}>
                <span className={styles.title}>{title}</span>
                <span className={styles.viewMore}>View More &rarr;</span>
            </div>

            <div className={styles.movies}>
                <PreviewMovieContainer className={styles.firstMovie} />
                <PreviewMovieContainer className={styles.secondMovie} />
                <PreviewMovieContainer className={styles.thirdMovie} />
            </div>

        </div>
    )
}
export default PreviewMovies