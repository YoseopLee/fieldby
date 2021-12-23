import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import Masonry from "react-masonry-css";
import { Link } from "react-router-dom";
import MainBar from "../../Components/Common/Mainbar/MainBar";
import Navbar from "../../Components/Common/Navbar/Navbar";
import FadeLoader from "react-spinners/FadeLoader";
import './Post.css';
import Spinner from "../../Components/Common/Spinner/Spinner";

const Post = () => {
    const [posts, setPosts] = React.useState([]);
    const [pageNumber, setPageNumber] = React.useState(1);
    const [loading, setLoading] = useState(false);
    
    useEffect(() => {
        const getPosts = async(pageNumber) => {
            const json = await axios.get(`https://fair.way.golf/api/v1/posts/?page=${pageNumber}`);
            console.log(json.data);
            console.log(json.data.results);
            setPosts((prev) => [...prev, ...json.data.results]);
            setLoading(true);
        };
        getPosts(pageNumber);
    }, [pageNumber]) // dependencies empty

    const loadMore = () => {
        setPageNumber(prevPageNumber => prevPageNumber + 1)
    }

    const pageEnd = useRef();
    
    useEffect(() => {
        if(loading){
            const observer = new IntersectionObserver((entries) => {
                console.log(entries);
                if(entries[0].isIntersecting){
                    loadMore();
                }
            },{threshold:0});

            observer.observe(pageEnd.current);
        }
    }, [loading]);

    const breakpoints = {
        default: 4,
        1100: 3,
        700 : 2 
    }

    return (
        <>
        <MainBar />
        <Navbar />
        <Masonry
            breakpointCols={breakpoints}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
        >       
            {posts.map((post)=>(
                    <div className="post" key={post.id}>
                        <Link to = {`/post/${post.id}`}>
                            <div className='image-box'>
                                <img src={post.image} className="post-image" alt=""/>
                            </div>
                        </Link>
                    </div>
            ))}
            
        </Masonry>
        <div className="loading" ref={pageEnd}>
            <Spinner />
        </div>
        </>
    );
}

export default Post;