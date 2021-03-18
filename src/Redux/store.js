import { createStore } from "redux";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

const State = {
  mode: "light"
};

const Reduser = (STATE = State, a) => { 
  
  if (a.type === "gantiMode") {
    return { ...STATE, mode: a.mode };
  }
  return STATE;
};
const persistedReduser = persistReducer(
  {key: "root", storage}, Reduser
)

const isDev = process.env.NODE_ENV === 'development'
export const store = createStore(persistedReduser, isDev ? window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() : '')
export const persistor = persistStore(store)





