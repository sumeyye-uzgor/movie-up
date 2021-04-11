import { useRouter } from "next/router"

import styles from "../../styles/MovieDetails.module.sass"
import PreviewMovies from '../../components/PreviewMovies'
import Navbar from "../../components/Navbar"

function movieDetails() {
    const router = useRouter()
    const { title } = router.query
    return (
        <main>
            <Navbar name={title} />

            <div className={styles.titleContainer}>
                <span className={styles.title}>
                    {title}
                </span>
            </div>
            <div className={styles.movieDetails}>
                <img src="/movie-image.png" className={styles.imageContainer} />
                <div className={styles.details}>
                    <div className={styles.imdbDetails}>
                        <span className={styles.image}>
                            <img src="/IMDB-icon.png" />
                            <span className={styles.point}>8.8</span>
                        </span>
                    </div>
                    <div className={styles.buttonContainer}>
                        <button className={styles.addFavButton}>
                            <img src="heart-icon.svg" />
                            <span>Add to favorites</span>
                        </button>
                    </div>
                    <div className={styles.year}>1996</div>
                    <div className={styles.detailsTitle}>The Gotfather</div>
                    <div className={styles.description}>
                        The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.
                    </div>
                </div>
            </div>
            <div className={styles.labelContainer}>
                <span className={styles.label}>Biography</span>
                <span className={styles.label}>Sci-Fi</span>
                <span className={styles.label}>Action</span>
                <span className={styles.label}>Psychology</span>
            </div>
            <PreviewMovies title="Related Movies" />

        </main >
    )
}

export default movieDetails