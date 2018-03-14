import {
  createReactNavigationReduxMiddleware,
  createReduxBoundAddListener
} from 'react-navigation-redux-helpers';

const navigatorMiddleware = createReactNavigationReduxMiddleware(
  'root',
  state => state.navigatorState
);

const addListener = createReduxBoundAddListener('root');

export {
  navigatorMiddleware,
  addListener
};
