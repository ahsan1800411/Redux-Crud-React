import { createSlice } from '@reduxjs/toolkit';
import { UsersData } from './../FakeData';

const initialState = {
  value: UsersData,
};
export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUsers: (state, action) => {
      state.value.push(action.payload);
    },

    deleteUser: (state, action) => {
      state.value.splice(action.payload, 1);
    },
    updateUser: (state, action) => {
      state.value.map((user) => {
        if (user.id === action.payload.id) {
          user.username = action.payload.username;
        }
      });
    },
  },
});

export const { addUsers, deleteUser, updateUser } = usersSlice.actions;

export default usersSlice.reducer;
