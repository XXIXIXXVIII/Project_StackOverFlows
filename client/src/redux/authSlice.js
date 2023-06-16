import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import publicClient from "../configAPIClient/publicClient";

const authSlice = createSlice({
  name: "authSlice",
  initialState: {
    login: {
      currentUser: null,
      isFetching: false,
      error: false,
    }
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginRedux.pending, (state) => {
        state.login.isFetching = true;
      })
      .addCase(loginRedux.fulfilled, (state, action) => {
        state.login.currentUser = action.payload;
        state.login.isFetching = false;
      })
      .addCase(loginRedux.rejected, (state) => {
        state.login.isFetching = false;
        state.login.error = true;
      })
      .addCase(signupRedux.pending, (state) => {
        state.login.isFetching = true})
      .addCase(signupRedux.fulfilled,(state, action)=>{
        state.login.currentUser = action.payload;
        state.login.isFetching = false;
      })
      .addCase(signupRedux.rejected, (state,action) => {
        console.log(action);
        state.login.isFetching = false;
        state.login.error = action.error.message;
      })
      .addCase(logoutRedux.fulfilled,(state, action)=>{
        state.login.currentUser = action.payload;
      })
      .addCase(refresh.fulfilled,(state,action)=>{
        state.login.currentUser = action.payload;
      })
  },
});

export const loginRedux = createAsyncThunk(
  "auth/loginRedux",
  async ({ username, password }) => {
    const result = await publicClient.post("/auth/login", {
      username,
      password,
    });
    console.log(result.data);
    localStorage.setItem("accessToken", result.data.accessToken);
    return result.data.userData;
  }
);

export const signupRedux = createAsyncThunk("auth/signupRedux",async ({displayname, username, password})=>{
  try {
    const result = await publicClient.post("/auth/signup", {displayname, username, password})
    console.log(result.data.dataUser );
    localStorage.setItem("accessToken", result.data.accessToken)
    console.log(result.data);
    return result.data.dataUser
  } catch (error) {
   throw new Error(error.response.data.message)
  }
})

export const logoutRedux = createAsyncThunk('auth/logout',()=>{
  const result = ""
  return result
})

export const refresh = createAsyncThunk('auth/refresh',async({id})=>{
  try {
    const result = await publicClient.get(`/user/${id}`)
    return result.data
  } catch (error) {
    throw new Error(error.response.data.message)
  }
  

})

export default authSlice.reducer;
