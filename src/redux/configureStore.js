// import { createStore, applyMiddleware, compose } from "redux";
// import rootReducer from "./reducers";
// import { forbiddenWordsMiddleware } from "./middlewares"
//
// const storeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//
// const store = createStore(
//     rootReducer,
//     storeEnhancer(applyMiddleware(forbiddenWordsMiddleware))
// );
//
// export default store;

import { createStore, compose } from "redux";
import rootReducer from "./reducers";

const storeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer);

export default store;