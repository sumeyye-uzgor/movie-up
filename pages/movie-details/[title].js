// import { useRouter } from "next/router"
import axios from "axios"
import styles from "../../styles/MovieDetails.module.sass"
import PreviewMovies from '../../components/PreviewMovies'
import Navbar from "../../components/Navbar"

function movieDetails({ movie }) {
    // const router = useRouter()
    // const { title } = router.query
    const genres = movie.Genre.split(",")
    console.log(movie)
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
                        <button className={styles.addFavButton}>
                            <img src="/heart-icon.svg" width="30px" height="30px" />
                            <span>Add to favorites</span>
                        </button>
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
                    genres.map((genre, idx) => <span className={styles.label}>{genre}</span>)
                }

            </div>
            <PreviewMovies title="Related Movies" />

        </main >
    )
}

movieDetails.getInitialProps = async (ctx) => {
    const res = await axios.post(`https://www.omdbapi.com/?apikey=58074476&i=tt6508228`)
    const movie = await res.data
    return { movie }
}


export default movieDetails