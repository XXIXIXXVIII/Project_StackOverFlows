import { createSlice } from '@reduxjs/toolkit';
const showNavBarSlice = createSlice({
  name: 'navBar',
  initialState: { show: true },
  reducers : {
    ShowNavBarRedux: (state, action)=>{

      state.show= action.payload
    }
  }
})

export const {ShowNavBarRedux} = showNavBarSlice.actions
export default showNavBarSlice.reducer