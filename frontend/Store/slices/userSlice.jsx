// userSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Define your initial state
const initialState = {
  data: null,  // To store user data from the API
  loading: 'idle',
  error: null,
};

// Create an async thunk for fetching user data from the API
export const fetchUserData = createAsyncThunk('user/fetchUserData', async () => {
  try {
    // Make an API request to fetch user data here
    const response = await fetch('/api/user-data'); // Replace with your actual API endpoint
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
});

// Create the user slice
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserData.pending, (state) => {
        state.loading = 'pending';
        state.error = null;
      })
      .addCase(fetchUserData.fulfilled, (state, action) => {
        state.loading = 'fulfilled';
        state.data = action.payload;
      })
      .addCase(fetchUserData.rejected, (state, action) => {
        state.loading = 'rejected';
        state.error = action.error.message;
      });
  },
});

export default userSlice.reducer;
