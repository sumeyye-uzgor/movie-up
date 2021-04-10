// import '../styles/globals.sass'
import styles from '../styles/components/MovieUpHeader.module.sass'
import SearchBox from './SearchBox'
import Link from "next/link"

function MovieUpHeader() {
    return (
        <header className={styles.headerContainer}>
            <div className={styles.itemsContainer}>
                <Link href="/"><img src="/MovieUP-Logo.svg" className={styles.logo} /></Link>

                <span className={styles.home}>
                    <Link href="/">Home</Link>
                </span>
                <span className={styles.favs}>
                    <Link href="/favorites">Favorites</Link>
                </span>
            </div>

            <SearchBox />
        </header>
    )
}

export default MovieUpHeader