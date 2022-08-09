import * as type from './types';

export type UpdatePageAction = {
  type: string;
  payload: string;
};

export const updatePageAction = (page: string): UpdatePageAction => ({
  type: type.UPDATE_PAGE,
  payload: page,
});
