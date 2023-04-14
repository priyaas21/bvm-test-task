import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { BASE_URL, endpoints } from '../utils';

const initialState = {
  userList: [],
  isLoading: false,
  error: null
};

export const userSlice = createSlice({
  name: 'users',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(addUserData.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(addUserData.fulfilled, (state, action) => {
      state.isLoading = false;
      state.userList = [...state.userList, action.payload];
      state.error = null;
    })
    builder.addCase(addUserData.rejected, (state, action) => {
      state.isLoading = false;
      state.userList = [];
      state.error = action.error.message;
    })
  },
});
export default userSlice.reducer;

export const addUserData = createAsyncThunk(
  'user/addNewUser',
  async (user) => {
    console.log('====uerlll=====', BASE_URL+endpoints.users)
      const response =  await fetch(BASE_URL + endpoints.users, {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
          'Content-type': 'application/json',
        },
      });
      return response.json();
  }
)
