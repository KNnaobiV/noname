import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import authService from '@/utils/authService';
import { toast } from 'react-toastify';
import { obfuscateToken } from '@/utils/encryptTokens';

const initialState = {
	user: null,
	loading: false,
	error: null,
};

export const signUpAsync = createAsyncThunk('auth/signUp', async (userData) => {
	try {
		const { data } = await authService.signUp(userData);
		return data;
	} catch (error) {
		throw error.response.data;
	}
});

export const signInAsync = createAsyncThunk('auth/signIn', async (userData) => {
	try {
		const { data } = await authService.signIn(userData);

		return data;
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
			.addCase(signUpAsync.pending, (state, action) => {
				state.user = null;
				state.error = null;
				state.loading = true;
			})
			.addCase(signInAsync.pending, (state, action) => {
				state.user = null;
				state.error = null;
				state.loading = true;
			})
			.addCase(signUpAsync.fulfilled, (state, action) => {
				toast.success('Account created successfully');
				state.user = action.payload;
				state.error = null;
				state.loading = false;
			})
			.addCase(signInAsync.fulfilled, (state, action) => {
				localStorage.setItem('accessToken', obfuscateToken(true, action.payload.access));
				localStorage.setItem('refreshToken', obfuscateToken(true, action.payload.refresh));
				// localStorage.setItem('user', obfuscateToken(true, JSON.stringify(res.data.updatedOwner)));
				console.log(action.payload);
				toast.success('Login successful');
				state.user = action.payload.user;
				state.error = null;
				state.loading = false;
			})
			.addCase(logoutAsync.fulfilled, (state) => {
				state.user = null;
				state.error = null;
				state.loading = false;
			})
			.addCase(signUpAsync.rejected, (state, action) => {
				state.error = action.error.message;
				state.loading = false;
			})
			.addCase(signInAsync.rejected, (state, action) => {
				state.error = action.error.message;
				state.loading = false;
			});
	},
});

export const { clearError } = authSlice.actions;
export default authSlice.reducer;
