import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import authService from '@/utils/authService'

const initialState = {
  user: null,
  loading: 'idle',
  error: null,
};

export const signUpAsync = createAsyncThunk('auth/signUp', async (userData) => {
  try {
    const response = await authService.signUp(userData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
});

export const signInAsync = createAsyncThunk('auth/signIn', async (userData) => {
  try {
    const response = await authService.signIn(userData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
});

export const logoutAsync = createAsyncThunk('auth/logout', async () => {
  await authService.logout();
});

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signUpAsync.fulfilled, (state, action) => {
        state.user = action.payload;
        state.error = null;
      })
      .addCase(signInAsync.fulfilled, (state, action) => {
        state.user = action.payload;
        state.error = null;
      })
      .addCase(logoutAsync.fulfilled, (state) => {
        state.user = null;
        state.error = null;
      })
      .addCase(signUpAsync.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(signInAsync.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export const { clearError } = authSlice.actions;
export default authSlice.reducer;
