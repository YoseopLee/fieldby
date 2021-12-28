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
            <div className="tab-wrapper">
                <Link to=""><div className="tab">인기</div></Link>
                <Link to="new"><div className="tab">최신</div></Link>
                <div className="tab">팔로잉</div>
            </div>    
            <Routes>
                <Route path="" element={<PostPop/>} />
                <Route path="new" element={<PostNew/>} />
            </Routes>
        </>
    );
}

export default Post;