import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    user: null,
    loading: false,
    error: null,
};

export const registerUser = createAsyncThunk(
    "user/registerUser",
    async ( userData, { rejectWithValue } ) =>
    {
        try
        {
            const res = await axios.post( "http://localhost:3000/users", userData );
            return res.data;
        } catch ( err )
        {
            return rejectWithValue( err.response?.data || "Register failed" );
        }
    }
);

export const loginUser = createAsyncThunk(
    "user/loginUser",
    async ( loginData ) =>
    {
        try
        {
            const res = await axios.get( "http://localhost:3000/users", loginData );
            return res.data;
        } catch ( err )
        {
            console.log( err, "err" );
           
        }
    }
)

const userSlice = createSlice( {
    name: 'user',
    initialState: initialState,
    reducers: {},
    extraReducers: ( builder ) =>
    {

        // Register
        builder
            .addCase( registerUser.pending, ( state ) =>
            {
                state.loading = true;
                state.error = null;
            } )
            .addCase( registerUser.fulfilled, ( state, action ) =>
            {
                state.loading = false;
                state.user = action.payload;
            } )
            .addCase( registerUser.rejected, ( state, action ) =>
            {
                state.loading = false;
                state.error = action.payload;
            } )
        
        // Login
        builder
            .addCase( loginUser.pending, ( state ) =>
            {
                state.loading = true;
                state.error = null;
            } )
            .addCase( loginUser.fulfilled, ( state, action ) =>
            {
                state.loading = false;
                state.currentUser = action.payload;
            } )
            .addCase( loginUser.rejected, ( state, action ) =>
            {
                state.loading = false;
                state.error = action.payload;
            } );
    }
} );
export default userSlice.reducer;