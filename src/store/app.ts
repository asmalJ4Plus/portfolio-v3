import { PayloadAction, createSlice } from '@reduxjs/toolkit';

// Define a type for the slice state
export interface PageState {
  page: string;
}

// Define the initial state using that type
const initialState: PageState = {
  page: 'KEEBS',
};

export const pageSlice = createSlice({
  name: 'page',
  initialState,
  reducers: {
    updatePage: (state, action: PayloadAction<string>) => {
      state.page = action.payload;
    },
  },
});

export const { updatePage } = pageSlice.actions;
export default pageSlice.reducer;
