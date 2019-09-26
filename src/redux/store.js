import { createStore, /*applyMiddleware*/ } from 'redux';
import rootReducer from "./rootReducer";
// promise middle ware causing problems
// import promiseMiddleware from 'redux-promise-middleware';
// const createStoreWithMiddleware = applyMiddleware(promiseMiddleware())(createStore);
// const store = createStoreWithMiddleware(rootReducer);
const store = createStore(rootReducer)

export default store;