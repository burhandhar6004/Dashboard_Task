import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const todosSlice = createSlice({
    name : "todo",
    initialState:{
        todos :[],
        isLoading: false,
        isSuccess: false,
        isError: false,
    },

    reducers:{},
    extraReducers: (builder) => {
        builder
          .addCase(fetchTodos.pending, (state, action) => {
            state.isLoading = true;
            state.isSuccess = false;
            state.isError = false;
          })
          .addCase(fetchTodos.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.isError = false;
            state.todos = action.payload;
          })
          .addCase(fetchTodos.rejected, (state, action) => {
            state.isLoading = false;
            state.isSuccess = false;
            state.isError = true;
          });
      },
})

export default todosSlice.reducer


export const fetchTodos = createAsyncThunk("FETCH/TODOS", async () => {
    try {
      const respone = await axios.get(
        "https://jsonplaceholder.typicode.com/todos"
      );
      return respone.data;
    } catch (error) {
      console.log(error);
    }
  });