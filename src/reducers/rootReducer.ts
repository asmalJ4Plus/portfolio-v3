import { combineReducers } from 'redux';
import { appReducer, AppReducerProps } from './appReducer';

export type StoreState = {
  app: AppReducerProps;
};

export default combineReducers({
  app: appReducer,
});
