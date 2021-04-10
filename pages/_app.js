import { Provider } from 'react-redux'
import store, { persistor } from '../redux/store';
import { PersistGate } from 'redux-persist/integration/react'

// import withRedux from 'next-redux-wrapper'
import Navbar from '../components/Navbar'
import '../styles/globals.sass'

function MyApp({ Component, pageProps }) {
  return (
    <Provider {...pageProps} store={store}>
      <PersistGate persistor={persistor}{...pageProps}>
        <div {...pageProps}>
          <Navbar />
          <Component {...pageProps} />
        </div>
      </PersistGate>
    </Provider>
  )

}

export default MyApp;
