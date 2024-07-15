import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import { reducer } from '../features/users/Userlist.slice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    users: reducer
  },
});
