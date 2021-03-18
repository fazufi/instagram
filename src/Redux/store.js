import { connect } from "react-redux";
import { createStore } from "redux";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

const State = {
  colour: "white"
};

const Reduser = (STATE = State, a) => { 
  
  if (a.type === "gantiColour") {
    return { ...STATE, colour: a.colour };
  }
  return STATE;
};
const persistedReduser = persistReducer(
  {key: "root", storage}, Reduser
)

const isDev = process.env.NODE_ENV === 'development'
export const store = createStore(persistedReduser, isDev ? window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() : '')
export const persistor = persistStore(store)

export const mapStateToProps = (STATE) => {
  return { ...STATE };
};

const mapDispatchToProps = (dispatch) => {
  return {
    gantiColour: (data) => dispatch({ type: "gantiColour", colour: data }),
  };
};



