import styles from '../styles/components/PreviewMovieContainer.module.sass'
import HeartIcon from "../public/svg_images/heart-solid.svg"


function PreviewMovieContainer() {
    return (
        <div className={styles.movieContainer}>
            <img src="/movie-image.png" className={styles.image} />
            <div className={styles.details}>
                <div className={styles.imdbDetails}>
                    <span className={styles.image}>
                        <img src="/IMDB-icon.png" />
                        <span className={styles.point}>8.8</span>
                    </span>
                    <span>
                        <span className={styles.label}>Action</span>
                        <span className={styles.label}>Biography</span>
                    </span>
                </div>
                <div className={styles.year}>2019</div>
                <div className={styles.title}>The GodFather</div>
                <div className={styles.description}>
                    The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.
                </div>
                <button className={styles.addFavButton}>
                    <HeartIcon color="white" width="20px" height="20px" />
                    <span>Add to favorites</span>
                </button>
            </div>
        </div>
    )
}

export default PreviewMovieContainer