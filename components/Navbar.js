import styles from "../styles/components/Navbar.module.sass"

function Navbar({ name }) {
    return (
        <nav className={styles.navbarContainer}>
            <span className={styles.home}>Home / </span>
            <span className={styles.route}>{name}</span>
        </nav>
    )
}

export default Navbar