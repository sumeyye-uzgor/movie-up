import { Provider } from 'react-redux'
import store, { persistor } from '../redux/store';
import { PersistGate } from 'redux-persist/integration/react'
import Head from "next/head"
// import withRedux from 'next-redux-wrapper'
import MovieUpHeader from '../components/MovieUpHeader'
import '../styles/globals.sass'


function MyApp({ Component, pageProps }) {
  return (
    <Provider {...pageProps} store={store}>
      <PersistGate persistor={persistor}{...pageProps}>
        <div {...pageProps}>
          <Head>
            <title>Movie UP</title>
            <link rel="icon" href="/MovieUP-Logo.svg" />
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
          </Head>
          <MovieUpHeader />
          <Component {...pageProps} />
        </div>
      </PersistGate>
    </Provider>
  )

}

export default MyApp;
