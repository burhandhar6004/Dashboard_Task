import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const commentsSlice= createSlice({
    name :"comments",
    initialState :{
        comments : [],
        isLoading: false,
        isSuccess: false,
        isError: false,
    },
    reducers:{},

    extraReducers: (builder) => {
        builder
          .addCase(fetchComments.pending, (state, action) => {
            state.isLoading = true;
            state.isSuccess = false;
            state.isError = false;
          })
          .addCase(fetchComments.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.isError = false;
            state.comments = action.payload;
          })
          .addCase(fetchComments.rejected, (state, action) => {
            state.isLoading = false;
            state.isSuccess = false;
            state.isError = true;
          });
      },
})


export default commentsSlice.reducer

export const fetchComments = createAsyncThunk("FETCH/COMMENTS", async () => {
    try {
      const respone = await axios.get(
        "https://jsonplaceholder.typicode.com/comments"
      );
      return respone.data;
    } catch (error) {
      console.log(error);
    }
  });