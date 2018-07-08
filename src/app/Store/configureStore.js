import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "../reducers/rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";

export const configureStore = preloadedState => {
  const middlewares = [thunk];
  const middlewareEnhancer = applyMiddleware(...middlewares);

  const storeEnhancers = [middlewareEnhancer];

  const composedEnhancer = composeWithDevTools(...storeEnhancers);

  const store = createStore(rootReducer, preloadedState, composedEnhancer);

  return store;
};
