import { Provider } from 'react-redux'
import store, { persistor } from '../redux/store';
import { PersistGate } from 'redux-persist/integration/react'

// import withRedux from 'next-redux-wrapper'
import MovieUpHeader from '../components/MovieUpHeader'
import '../styles/globals.sass'

function MyApp({ Component, pageProps }) {
  return (
    <Provider {...pageProps} store={store}>
      <PersistGate persistor={persistor}{...pageProps}>
        <div {...pageProps}>

          <MovieUpHeader />
          <Component {...pageProps} />
        </div>
      </PersistGate>
    </Provider>
  )

}

export default MyApp;
