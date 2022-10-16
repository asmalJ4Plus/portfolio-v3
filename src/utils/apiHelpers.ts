import { AsyncThunk, AsyncThunkPayloadCreator, createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, RootState } from '../store';

export type ApiError = string | null;

export enum ApiStatusCode {
  idle = 'idle',
  pending = 'pending',
  succeeded = 'succeeded',
  failed = 'failed',
}

export type ApiStatus =
  | ApiStatusCode.idle
  | ApiStatusCode.pending
  | ApiStatusCode.succeeded
  | ApiStatusCode.failed;

export interface ApiState<ApiData> {
  data: ApiData;
  error: ApiError;
  status: ApiStatus;
}

/**
 * Returns the initial reducer state for API calls.
 */
export const getApiInitalState = <ApiData>(data: ApiData) =>
  ({
    error: null,
    status: ApiStatusCode.idle,
    data,
  } as ApiState<ApiData>);

interface ThunkAPIConfig {
  dispatch: AppDispatch;
  rejectValue: ApiError;
  state: RootState;
}

/**
 *
 * @param type The type of action (e.g. `'respondNoTap/respondNoTapAction'`).
 * @param thunk Async thunk payload creator callback (e.g. `async ({ emailId, didAttend }) => await graphql<LoadingStateData>(respondNoTap, { emailId, didAttend })`)
 * @returns
 */
export const createAsyncThunkAction = <Returned, ThunkArg = object | undefined>(
  type: string,
  thunk: AsyncThunkPayloadCreator<Returned, ThunkArg>,
): AsyncThunk<Returned, ThunkArg, ThunkAPIConfig> =>
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  createAsyncThunk<Returned, ThunkArg, ThunkAPIConfig>(type, async (arg, thunkAPI) => {
    try {
      // do some stuff here that happens on every action
      return await thunk(arg, thunkAPI);
    } catch (error) {
      // do some stuff here that happens on every error
      return thunkAPI.rejectWithValue(`${error}`);
    }
  });
