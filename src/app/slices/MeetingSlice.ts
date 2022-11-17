import { createSlice } from "@reduxjs/toolkit";

interface meetingInitialState {
  toasts: Array<any>;
}

const initialState: meetingInitialState = {
  toasts: [],
};

export const meetingsSlice = createSlice({
  name: "meetings",
  initialState,
  reducers: {
    setToasts: (state, action) => {
      state.toasts = action.payload;
    },
  },
});

export const { setToasts } = meetingsSlice.actions;
