import { configureStore } from '@reduxjs/toolkit';
import usersReducer from '../features/Users';

export const store = configureStore({
  reducer: {
    users: usersReducer,
  },
});
