import React from "react";
import SideBar from "./components/SideBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UsersTables from "./Pages/UsersTables";
import PostTables from "./Pages/PostTables";
import CommentsTable from "./Pages/CommentsTable";
import PhotosModal from "./Pages/PhotosModal";
import Todos from "./Pages/Todos";
import Albums from "./Pages/Albums";
import CommentSection from "./Pages/CommentSection";
import PhotoSection from "./Pages/PhotoSection";
import Dashboard from "./Pages/Dashboard";

const App = () => {
  return (
    <BrowserRouter>
      <SideBar />
      <div className="p-1 sm:ml-64 flex">
        <div className="p-1 rounded-lg dark:border-gray-700 w-full">
          <Routes>
            <Route path="/users" element={<UsersTables />} />
            <Route path="/posts" element={<PostTables/>}/>
            <Route path="/comments" element = {<CommentsTable/>} />
            <Route path="/photos" element = {<PhotosModal/>} />
            <Route path="/todos" element= {<Todos/>}/>
            <Route path="/albums" element={<Albums/>}/>
            <Route path="/viewcomments/:id" element={<CommentSection/>}/>
            <Route path="/viewphotos/:id" element={<PhotoSection/>}/>
            <Route path="/dashboard" element={<Dashboard/>}/>

          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
