
import { createSlice } from '@reduxjs/toolkit';
const themeSlice = createSlice({
  name: 'theme',
  initialState: { themeMode: 'white' },
  reducers : {
    themeModeRedux: (state, action)=>{
      state.themeMode= action.payload
    }
  }
})

export const {themeModeRedux} = themeSlice.actions
export default themeSlice.reducer