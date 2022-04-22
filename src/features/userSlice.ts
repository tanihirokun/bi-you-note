import {createSlice, } from '@reduxjs/toolkit';
import { RootState } from '../app/store';


const initialState= {
  user: {
    uid: '',
    photoUrl: '',
    displayName: '',
  }
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logOut: (state) => {
      state.user = {uid:'', photoUrl:'', displayName:''}
    },

  },
});

export const { login, logOut } = userSlice.actions;
export const selectUser = (state: RootState) => state.user.user;
export default userSlice.reducer;
