import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userList: [],
};

export const userSlice = createSlice({
  name: 'users',
  initialState,
  reducer: {
    addNewUser: (state, action) => {
      state.userList = [...state.userList, action.payload]
    }
  }
});

export const {addNewUser} = userSlice.actions;

export default userSlice.reducer;
