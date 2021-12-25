import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import Masonry from "react-masonry-css";
import { Link } from "react-router-dom";
import Spinner from "../../Components/Common/Spinner/Spinner";
import './Post.css';

const PostPop = () => {
    const [popPosts, setPopPosts] = React.useState([]);
    const [pageNumber, setPageNumber] = React.useState(1);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const getPopPosts = async(pageNumber) => {
            const json = await axios.get(`https://fair.way.golf/api/v1/post_list/popular/?page=${pageNumber}`);
            console.log(json.data);
            console.log(json.data.results);
            setPopPosts((prev) => [...prev, ...json.data.results]);
            setLoading(true);
        };
        getPopPosts(pageNumber);
    }, [pageNumber]) // dependencies 1

    const loadMore = () => {
        setPageNumber(prevPageNumber =>  prevPageNumber + 1)
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
        default : 3,
        700: 2
    }

    return (
        <>
        <Masonry
            breakpointCols={breakpoints}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
        >
            {popPosts.map((popPost) => (
                <div className="post" key={popPost.id}>
                    <Link to={`/post/${popPost.id}`}>
                        <div className="image-box">
                            <img src={popPost.image} alt="newpostimage" className="post-image" />
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

export default PostPop;