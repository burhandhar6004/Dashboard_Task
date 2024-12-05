import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const postsSlice = createSlice({
    name : "posts",
    initialState:{
        posts :[],
        isLoading: false,
        isSuccess: false,
        isError: false,
    },

    reducers:{},

    extraReducers: (builder) => {
        builder
          .addCase(fetchPosts.pending, (state, action) => {
            state.isLoading = true;
            state.isSuccess = false;
            state.isError = false;
          })
          .addCase(fetchPosts.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.isError = false;
            state.posts = action.payload;
          })
          .addCase(fetchPosts.rejected, (state, action) => {
            state.isLoading = false;
            state.isSuccess = false;
            state.isError = true;
          });
      },
})


export default postsSlice.reducer

export const fetchPosts = createAsyncThunk("FETCH/POSTS", async () => {
    try {
      const respone = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      return respone.data;
    } catch (error) {
      console.log(error);
    }
  });