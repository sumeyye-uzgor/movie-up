
import Navbar from '../components/Navbar'
import '../styles/globals.sass'

function MyApp({ Component, pageProps }) {
  return (
    <div {...pageProps}>
      <Navbar />
      <Component {...pageProps} />
    </div>
  )

}

export default MyApp
