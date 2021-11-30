import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: false
}

export const slice = createSlice({
  name: 'styleControl',
  initialState,
  reducers: {
    on: (state) => {
      state.value = true
    },
    off: (state) => {
      state.value = false
    }
  }
})

export const { on, off } = slice.actions

export default slice.reducer