import Head from 'next/head'
import PreviewMovies from '../components/PreviewMovies'
import SearchBar from '../components/SearchBar'
import styles from '../styles/Home.module.sass'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Movie UP</title>
        <link rel="icon" href="/MovieUP-Logo.svg" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </Head>
      <main className={styles.main}>
        <div className={styles.imageContainer}>
          <img src="/people-in-cinema.png" className={styles.backgroundImage} />
          <div className={styles.imageText}>
            <h2 className={styles.welcome}>Welcome to</h2>
            <h1 className={styles.movieUp}>MovieUP.</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent semper turpis sit amet tincidunt efficitur. Nullam sed feugiat risus, eleifend dignissim lectus. Sed id purus magna. Vestibulum blandit egestas arcu, at convallis massa facilisis sed. Vestibulum ultrices ex ut luctus mollis. Aenean dui tellus, blandit sed mauris non, fringilla commodo dui.
            </p>
          </div>
        </div>
        <SearchBar />
        <PreviewMovies title="Popular Movies" />

      </main>
    </div>
  )
}
