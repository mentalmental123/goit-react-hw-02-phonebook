// import { configureStore, combineReducers } from "@reduxjs/toolkit";
// import { contactsReducer } from "./contactsSlice";
// import { filterReducer } from "./filterContactsSlice";

// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from "redux-persist";
// import storage from "redux-persist/lib/storage";
// import { authReducer } from "./auth/slice";

// const persistConfig = {
//   key: "root",
//   storage,
//   blacklist: ["filter"],
// };

// // const authPersistConfig = {
// //   key: "auth",
// //   storage,
// //   whitelist: ["token"],
// // };

// const rootReducer = combineReducers({
//   contacts: contactsReducer,
//   filter: filterReducer,
// });

// const allReducers = combineReducers({
//   r1: persistReducer(
//     {
//       key: "root",
//       storage,
//       blacklist: ["filter"],
//     },
//     rootReducer
//   ),
//   r2: persistReducer(
//     {
//       key: "auth",
//       storage,
//       whitelist: ["token"],
//     },
//     authReducer
//   ),
// });

// // const persistedReducer = persistReducer(persistConfig, rootReducer);

// const store = configureStore({
//   reducer: allReducers,
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }),
//   devTools: process.env.NODE_ENV === "development",
// });

// export const persistor = persistStore(store);
// export default store;

import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { contactsReducer } from "./contactsSlice";
import { authReducer } from "./auth/slice";
import { filterReducer } from "./filterContactsSlice";

// Persisting token field from auth slice to localstorage
const authPersistConfig = {
  key: "auth",
  storage,
  whitelist: ["token"],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    contacts: contactsReducer,
    filter: filterReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: process.env.NODE_ENV === "development",
});

export const persistor = persistStore(store);
export default store;
