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
                {/* <div className={styles.firstArrowContainer}>
                    <PreviewMovieContainer />
                    <div className={styles.leftArrow}>&larr;</div>
                </div> */}
                <div className={styles.backMovies}>
                    <PreviewMovieContainer />
                </div>
                <div className={styles.arrow}>&larr;</div>

                <PreviewMovieContainer className={styles.secondMovie} />
                <div className={styles.arrow}>&rarr;</div>
                <div className={styles.backMovies}>
                    <PreviewMovieContainer />
                </div>
            </div>

        </div>
    )
}
export default PreviewMovies