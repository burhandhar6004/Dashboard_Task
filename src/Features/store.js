import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./Users/userSlice"
import postReducer from "./posts/postsSlice"
import commentsReducer from "./comments/commentsSlice"
import photosReducer from "./photos/photosSlice"
import todosReducer from "./todos/todosSlice"
import albumsReducer from "./albums/albumsSlice"

const store = configureStore({
    reducer:{
        users : userReducer,
        posts : postReducer,
        comments : commentsReducer,
        photos : photosReducer,
        todos : todosReducer,
        albums : albumsReducer
    }
})

export default store;
