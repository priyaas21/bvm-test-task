import { createAsyncThunk } from '@reduxjs/toolkit';
import {BASE_URL, endpoints} from  '../utils';

export const addUserData = createAsyncThunk(
  'user/addNewUser',
  async (user, {rejectWithValue }) => {
    try {
      const response = await fetch(BASE_URL+endpoints.users, {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });
      return response.json();
    }catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
)
