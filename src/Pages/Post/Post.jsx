import React, { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import MainBar from "../../Components/Common/Mainbar/MainBar";
import Navbar from "../../Components/Common/Navbar/Navbar";
import './Post.css';
import PostPop from "./PostPop";
import PostNew from "./PostNew";

const Post = () => {
    const [showList, setShowList] = useState(false);
    return (
        <>
            <MainBar />
            <Navbar />
            <div className="sort-list">
                <img src="images/updown.png" className="updown-btn" alt="" onClick={() => setShowList(!showList)}/>
                {
                    showList && 
                    <ul>
                        <Link to=""><li className="pop-tab">인기</li></Link>
                        <Link to="new"><li className="new-tab">최신</li></Link>
                    </ul>
                }
            </div>
            <Routes>
                <Route path="" element={<PostPop/>} />
                <Route path="new" element={<PostNew/>} />
            </Routes>
        </>
    );
}

export default Post;