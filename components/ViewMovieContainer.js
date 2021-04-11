import styles from '../styles/components/ViewMovieContainer.module.sass'
// import imageUrl from 'movie-image.png';


function ViewMovieContainer() {
    const imageUrl = "https://m.media-amazon.com/images/M/MV5BMTQwMzQ5Njk1MF5BMl5BanBnXkFtZTcwNjIxNzIxNw@@._V1_SX300.jpg"
    return (
        <div className={styles.viewMovieContainer}>
            <div className={styles.imageContainer} style={{ backgroundImage: `url("${imageUrl}")` }}>
                {/* <img src="/movie-image.png" className={styles.image} /> */}
                <span className={styles.label}>Biography</span>
                <button className={styles.addFavButton}>
                    <img src="/heart-icon.svg" />
                </button>
            </div>
            <div className={styles.details}>
                <div className={styles.imdbDetails}>
                    <span className={styles.image}>
                        <img src="/IMDB-icon.png" />
                        <span className={styles.point}>8.8</span>
                    </span>
                </div>
                <div className={styles.year}>2019</div>
                <div className={styles.title}>The GodFather</div>
                <div className={styles.description}>
                    The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.
                </div>

            </div>
        </div >
    )
}

export default ViewMovieContainer