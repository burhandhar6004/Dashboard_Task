import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const photosSlice = createSlice({
    name : "photos",
    initialState:{
        photos : [],
        isLoading: false,
        isSuccess: false,
        isError: false,

    },
    reducers:{},
    extraReducers: (builder) => {
        builder
          .addCase(fetchPhotos.pending, (state, action) => {
            state.isLoading = true;
            state.isSuccess = false;
            state.isError = false;
          })
          .addCase(fetchPhotos.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.isError = false;
            state.photos = action.payload;
          })
          .addCase(fetchPhotos.rejected, (state, action) => {
            state.isLoading = false;
            state.isSuccess = false;
            state.isError = true;
          });
      },
})

export default photosSlice.reducer;

export const fetchPhotos = createAsyncThunk("FETCH/PHOTOS", async () => {
    try {
      const respone = await axios.get(
        "https://jsonplaceholder.typicode.com/photos"
      );
      return respone.data;
    } catch (error) {
      console.log(error);
    }
  });