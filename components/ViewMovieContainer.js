import styles from '../styles/components/ViewMovieContainer.module.sass'
// import imageUrl from 'movie-image.png';
import { connect } from "react-redux"
import { addToFavs, removeFromFavs } from "../redux/actions"
import { useRouter } from 'next/dist/client/router'
import HeartIcon from "../public/svg_images/heart-solid.svg"


function ViewMovieContainer({ movie, addToFavs, favoriteMovies, delFromFavs }) {
    const router = useRouter()
    // console.log(movie)
    // const imageUrl = "https://m.media-amazon.com/images/M/MV5BMTQwMzQ5Njk1MF5BMl5BanBnXkFtZTcwNjIxNzIxNw@@._V1_SX300.jpg"
    return (
        <div className={styles.viewMovieContainer}>
            <div className={styles.imageContainer}>
                <img src={movie.Poster} className={styles.image} onClick={() => router.push(`/movie-details/${movie.imdbID}`)} />
                <div className={styles.buttonsContainer}>
                    <span className={styles.label} onClick={() => router.push(`/movie-details/${movie.imdbID}`)}>Biography</span>
                    {
                        favoriteMovies.find(item => item.imdbID === movie.imdbID) ?
                            (<button className={styles.delFavButton} onClick={() => {
                                delFromFavs(movie)
                            }}>
                                {/* <img src="/heart-icon.svg" /> */}
                                <HeartIcon color="#f5c518" width="20px" height="20px" />
                            </button>)
                            :
                            (<button className={styles.addFavButton} onClick={() => {
                                addToFavs(movie)
                            }}>
                                <HeartIcon color="#fffdf5" width="20px" height="20px" />
                            </button>)
                    }
                </div>
            </div>
            <div className={styles.details} onClick={() => router.push(`/movie-details/${movie.imdbID}`)}>
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
        </ div >
    )
}
const mapStateToProps = (state) => ({
    favoriteMovies: state.favorites
})
const mapDispatchToProps = dispatch => ({
    addToFavs: movie => dispatch(addToFavs(movie)),
    delFromFavs: movie => dispatch(removeFromFavs(movie))
})
export default connect(mapStateToProps, mapDispatchToProps)(ViewMovieContainer)