import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { loginUser } from 'actions/userActions';
import { UserModel } from 'models/models';

interface UserState {
  user: UserModel
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | undefined;
};

const initialState: UserState = {
  user: {
    token: '',
    username: '',
  },
  status: 'idle',
  error: undefined,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserModel>) => {
      state.user = action.payload;
      state.status = 'succeeded';
    },
    clearUser: (state) => {
      state.user = {
        token: '',
        username: '',
      };
      state.status = 'idle';
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.user = action.payload;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
