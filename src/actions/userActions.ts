import { createAsyncThunk } from '@reduxjs/toolkit';
import { submitLoginRequest } from 'api/api';
import { UserModel } from 'models/models';

export const loginUser = createAsyncThunk(
  'users/login',
  async (query: {username: string, password: string}): Promise<UserModel> => {
    const userDetails = await submitLoginRequest(query.username, query.password);
    localStorage.setItem('user', JSON.stringify(userDetails));
    return userDetails;
  }
)