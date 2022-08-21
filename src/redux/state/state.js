import { createSlice } from '@reduxjs/toolkit';
import reducer from './reducer';

export const slice = createSlice({
  name: 'pagination',
  initialState: {
    valid: 1,
    value: 0,
    service: undefined,
    barber: undefined,
    agenda: undefined
  },
  ...reducer
});

export const { changePage, reset, setService, setBarber, clearService, clearBarber } = slice.actions;
export const state = state => state.state;

export default slice.reducer;
