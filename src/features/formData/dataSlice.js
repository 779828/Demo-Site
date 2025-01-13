import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addSubmission: (state, action) => {
      state.data.push(action.payload);
    },
  },
});

export const { addSubmission } = userSlice.actions;

export default userSlice.reducer;
