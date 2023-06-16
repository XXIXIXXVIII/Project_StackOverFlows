import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import publicClient from "../configAPIClient/publicClient"
import queryString from "query-string"

const questionSlice = createSlice({
  name:'questionSlice',
  initialState:{question:[]},
  reducers:{},
  extraReducers: builder=>{
    builder
      .addCase(getQuestion.fulfilled,(state,action)=>{
        state.question=action.payload
      })
  }
})

export const getQuestion = createAsyncThunk('question/getQuestion', async({ sortBy, currentPage, perPage, q })=>{

  try {
    const url = `?${queryString.stringify({ sortBy, currentPage, perPage, q })}`
    const result = await publicClient.get(`/questions${url}`)

    return result.data
  } catch (error) {
    console.log(error);
  }
})

export default questionSlice.reducer