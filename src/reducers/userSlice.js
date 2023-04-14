import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userList: [],
  loggedInUser: {}
};

export const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addNewUser: (state, action) => {
      state.userList = [...state.userList, action.payload]
    },
    login: (state, action) => {
      const {email, password} = action.payload
      const existUser = state.userList.length > 0 && state.userList.filter(u => u.email === email && u.password === password) || [];
      if(existUser.length > 0) state.loggedInUser = existUser[0];
    },
    logout: (state) => {
      state.loggedInUser = {};
    },
  }
});

export const {addNewUser, login, logout} = userSlice.actions;

export default userSlice.reducer;
