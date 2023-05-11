import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchGreeting = createAsyncThunk('fetchGreeting', async () => {
  const response = await fetch('http://localhost:3000/api/messages');
  const data = await response.json();
  return data.greeting;
});

const greetingSlice = createSlice({
  name: 'greet',
  initialState:
      {
        message: '',
      },
  extraReducers: {
    [fetchGreeting.fulfilled]: (state, action) => {
      state.message = action.payload;
    },
  },
});

export default greetingSlice.reducer;
