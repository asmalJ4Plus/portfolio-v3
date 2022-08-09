import { UpdatePageAction } from '../actions/appActions';
import * as type from '../actions/types';

export type AppReducerProps = {
  page: string;
};

const initialState = {
  page: 'home',
};

export const appReducer = (state = initialState, action: UpdatePageAction) => {
  switch (action.type) {
    case type.UPDATE_PAGE:
      return { ...state, page: action.payload };
    default:
      return state;
  }
};
