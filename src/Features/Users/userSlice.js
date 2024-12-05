import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const userSlice = createSlice({
  name: "user",
  initialState: {
    users: [],
    isLoading: false,
    isSuccess: false,
    isError: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state, action) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.isError = false;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
      });
  },
});

export default userSlice.reducer;

export const fetchUsers = createAsyncThunk("FETCH/USERS", async () => {
  try {
    const respone = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    return respone.data;
  } catch (error) {
    console.log(error);
  }
});
