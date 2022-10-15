import { combineReducers } from 'redux';
import { AppReducerProps, appReducer } from './appReducer';

export type StoreState = {
  app: AppReducerProps;
};

export default combineReducers({
  app: appReducer,
});
