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
                    <div className="tab-wrapper">
                        <Link to=""><div className="pop-tab">인기</div></Link>
                        <Link to="new"><div className="new-tab">최신</div></Link>
                    </div>
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