import styles from '../styles/components/ViewMovieContainer.module.sass'
// import imageUrl from 'movie-image.png';
import { connect } from "react-redux"
import { addToFavs } from "../redux/actions"


function ViewMovieContainer({ movie, addToFavs }) {
    // const imageUrl = "https://m.media-amazon.com/images/M/MV5BMTQwMzQ5Njk1MF5BMl5BanBnXkFtZTcwNjIxNzIxNw@@._V1_SX300.jpg"
    return (
        <div className={styles.viewMovieContainer}>
            <div className={styles.imageContainer} style={{ backgroundImage: `url("${movie.Poster}")` }}>
                {/* <img src="/movie-image.png" className={styles.image} /> */}
                <span className={styles.label}>Biography</span>
                <button className={styles.addFavButton} onClick={() => {
                    console.log(movie)
                    addToFavs(movie)
                }}>
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
                <div className={styles.year}>{movie.Year}</div>
                <div className={styles.title}>{movie.Title}</div>
                <div className={styles.description}>
                    The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.
                </div>

            </div>
        </div >
    )
}

const mapDispatchToProps = dispatch => ({
    addToFavs: movie => dispatch(addToFavs(movie))
})
export default connect(null, mapDispatchToProps)(ViewMovieContainer)