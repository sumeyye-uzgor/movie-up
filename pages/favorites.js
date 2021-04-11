import { connect } from "react-redux"
import styles from "../styles/Favorites.module.sass"
import Navbar from "../components/Navbar"
import ViewMovies from "../components/ViewMovies"

function favorites({ favoriteMovies }) {
    return (
        <main>
            <Navbar name="Favorites" />
            <div className={styles.titleContainer}>
                Favorites
            </div>
            {
                favoriteMovies.length > 0 ?
                    <ViewMovies movies={favoriteMovies} />
                    :
                    <div className={styles.titleContainer}>
                        You don't have any favorites yet! &#x1F61E;
                    </div>
            }
        </main >
    )
}

const mapStateToProps = (state) => ({
    favoriteMovies: state.favorites
})

export default connect(mapStateToProps)(favorites)