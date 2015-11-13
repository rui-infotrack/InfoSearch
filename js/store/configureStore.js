import rootReducer from '../reducers';
import thunk from 'redux-thunk';
import routes from '../routes';
import { reduxReactRouter } from 'redux-router';
import createHistory from 'history/lib/createBrowserHistory';
import {
  applyMiddleware,
  compose,
  createStore
} from 'redux';

export default function configureStore() {
  const middleware = applyMiddleware(thunk);

  const createStoreWithMiddleware = compose(
    middleware,
    reduxReactRouter({ routes, createHistory })
  );

  const store = createStoreWithMiddleware(createStore)(
    rootReducer
  );
  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers/index');

      store.replaceReducer(nextRootReducer);
    });
  }
  return store;
}
