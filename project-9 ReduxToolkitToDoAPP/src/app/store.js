import {configureStore} from '@reduxjs/toolkit';
import todosReducer from '../features/Todo/ToDoSlice.js';

export const store = configureStore({
    reducer: todosReducer
});