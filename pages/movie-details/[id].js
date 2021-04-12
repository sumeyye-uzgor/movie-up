// import { useRouter } from "next/router"
import axios from "axios"
import styles from "../../styles/MovieDetails.module.sass"
import PreviewMovies from '../../components/PreviewMovies'
import Navbar from "../../components/Navbar"
import { addToFavs, removeFromFavs } from "../../redux/actions"
import { connect } from "react-redux"

function movieDetails({ movie, addToFavs, delFromFavs, favoriteMovies }) {
    const genres = movie.Genre.split(",")
    return (
        <main>
            <Navbar name={movie.Title} />

            <div className={styles.titleContainer}>
                <span className={styles.title}>
                    {movie.Title}
                </span>
            </div>
            <div className={styles.movieDetails}>
                <img src={movie.Poster} className={styles.imageContainer} />
                <div className={styles.details}>
                    <div className={styles.imdbDetails}>
                        <span className={styles.image}>
                            <img src="/IMDB-icon.png" />
                            <span className={styles.point}>{movie.imdbRating}</span>
                        </span>
                    </div>
                    <div className={styles.buttonContainer}>
                        {
                            favoriteMovies.find(item => item.imdbID === movie.imdbID) ?
                                (<button className={styles.delFavButton} onClick={() => {
                                    delFromFavs(movie)
                                }}>
                                    <img src="/heart-icon.svg" width="30px" height="30px" />
                                    <span>Remove from favorites</span>

                                </button>)
                                :
                                (<button className={styles.addFavButton} onClick={() => { addToFavs(movie) }}>
                                    <img src="/heart-icon.svg" width="30px" height="30px" />
                                    <span>Add to favorites</span>

                                </button>)
                        }

                    </div>
                    <div className={styles.year}>{movie.Year}</div>
                    <div className={styles.detailsTitle}>{movie.Title}</div>
                    <div className={styles.description}>
                        {movie.Plot}
                    </div>
                </div>
            </div>
            <div className={styles.labelContainer}>
                {
                    genres.map((genre, idx) => <span className={styles.label} key={idx}>{genre}</span>)
                }

            </div>
            <PreviewMovies title="Related Movies" />

        </main >
    )
}

movieDetails.getInitialProps = async (ctx) => {
    const { query } = ctx
    console.log(query.id)
    const res = await axios.post(`https://www.omdbapi.com/?apikey=58074476&i=${query.id}`)
    const movie = await res.data
    console.log(movie)
    return { movie }
}
const mapDispatchToProps = (dispatch) => ({
    addToFavs: movie => dispatch(addToFavs(movie)),
    delFromFavs: movie => dispatch(removeFromFavs(movie)),

})

const mapStateToProps = state => ({
    favoriteMovies: state.favorites
})

export default connect(mapStateToProps, mapDispatchToProps)(movieDetails)