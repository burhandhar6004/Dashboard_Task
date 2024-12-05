import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const albumsSlice = createSlice({
    name : "album",
    initialState:{
        albums:[],
        isLoading: false,
        isSuccess: false,
        isError: false,
    },
    reducers:{},
    extraReducers: (builder) => {
        builder
          .addCase(fetchAlbums.pending, (state, action) => {
            state.isLoading = true;
            state.isSuccess = false;
            state.isError = false;
          })
          .addCase(fetchAlbums.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.isError = false;
            state.albums = action.payload;
          })
          .addCase(fetchAlbums.rejected, (state, action) => {
            state.isLoading = false;
            state.isSuccess = false;
            state.isError = true;
          });
      },
})

export default albumsSlice.reducer

export const fetchAlbums = createAsyncThunk("FETCH/ALBUMS", async () => {
    try {
      const respone = await axios.get(
        "https://jsonplaceholder.typicode.com/albums"
      );
      return respone.data;
    } catch (error) {
      console.log(error);
    }
  });