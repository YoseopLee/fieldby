import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import MainBar from "../../Components/Common/Mainbar/MainBar";
import Navbar from "../../Components/Common/Navbar/Navbar";
import './Post.css';
import PostPop from "./PostPop";
import PostNew from "./PostNew";

const Post = () => {
    
    return (
        <>
            <MainBar />
            <Navbar />
            <div className="pop-new">
                <div className="pop-tab"><Link to="">인기</Link></div>
                <div className="new-tab"><Link to="new">최신</Link></div>
            </div>
            <Routes>
                <Route path="" element={<PostPop/>} />
                <Route path="new" element={<PostNew/>} />
            </Routes>
        </>
    );
}

export default Post;