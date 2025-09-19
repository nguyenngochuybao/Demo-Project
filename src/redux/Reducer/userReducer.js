// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

// const initialState = {
//     user: null,
//     loading: false,
//     error: null,
// };

// export const registerUser = createAsyncThunk(
//     "auth/registerUser",
//     async ( userData, { rejectWithValue } ) =>
//     {
//         try
//         {
//             const res = await axios.post( "http://localhost:3000/user", userData );
//             return res.data;
//         } catch ( err )
//         {
//             return rejectWithValue( err.response?.data || "Register failed" );
//         }
//     }
// );

// const userSlice = createSlice( {
//     name: 'user',
//     initialState: initialState,
//     reducers: {},
//     extraReducers: ( builder ) =>
//     {
//         builder
//             .addCase( registerUser.pending, ( state ) =>
//             {
//                 state.loading = true;
//                 state.error = null;
//             } )
//             .addCase( registerUser.fulfilled, ( state, action ) =>
//             { 
//                 state.loading = false;
//                 state.user = action.payload;
//             } )
//             .addCase( registerUser.rejected, ( state, action ) =>
//             {
//                 state.loading = false;
//                 state.error = action.payload;
//             })
//     }
// } );
// export default userSlice.reducer;