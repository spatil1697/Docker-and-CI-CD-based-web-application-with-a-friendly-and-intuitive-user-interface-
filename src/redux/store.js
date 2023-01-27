import {createStore} from 'redux';
import rootReducer from './rootReducer'
import {composeWithDevTools} from 'redux-devtools-extension'
const store = createStore(rootReducer, composeWithDevTools());

export default store;

// import { cartReducer } from "./cartSlice";
// import storage from 'redux-persist/lib/storage';
// import rootReducer from './rootReducer'
// import { combineReducers, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';



// /*To persist in the store in local storage and rehydrate when the app loads again, 
// using Redux Persist.*/
// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist'
// const persistConfig = {
//   key: 'root',
//   storage,
// }

// const persistedReducer = persistReducer(persistConfig, rootReducer,)
// export const store = configureStore({
//   reducer: persistedReducer,
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }),
// })
// export const persistor = persistStore(store)

