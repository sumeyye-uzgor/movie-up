import { logger } from 'redux-logger'
import { createStore, applyMiddleware } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import thunk from 'redux-thunk'

import rootReducer from './rootReducer'

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart']
}


const persistedReducer = persistReducer(persistConfig, rootReducer)
const middlewares = [thunk];
if (process.env.NODE_ENV === 'development') {
    middlewares.push(logger);
}
const store = createStore(persistedReducer, applyMiddleware(...middlewares))
export const persistor = persistStore(store)
export default store

