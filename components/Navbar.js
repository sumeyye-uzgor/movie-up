// import '../styles/globals.sass'
import styles from '../styles/components/Navbar.module.sass'
import SearchBox from './SearchBox'

function Navbar() {
    return (
        <nav className={styles.navbarContainer}>
            <div className={styles.itemsContainer}>
                <img src="/MovieUP-Logo.svg" className={styles.logo} />
                <span className={styles.home}>Home</span>
                <span className={styles.favs}>Favorites</span>
            </div>

            <SearchBox />
        </nav>
    )
}

export default Navbar