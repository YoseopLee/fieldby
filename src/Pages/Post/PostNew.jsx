import axios from "axios";
import { cacheAdapterEnhancer } from "axios-extensions";
import React, { useEffect, useRef, useState } from "react";
import Masonry from "react-masonry-css";
import { Link } from "react-router-dom";
import PostSkeleton from "../../Components/Common/Skeleton/PostSkeleton";
import Spinner from "../../Components/Common/Spinner/Spinner";
import './Post.css';


const http = axios.create({
    baseURL : 'https://fair.way.golf/api/v1',
    Accept : 'application.json',
    adapter : cacheAdapterEnhancer(
        axios.defaults.adapter,
        {enabledByDefault : false}
    ),
})

const PostNew = () => {
    const [newPosts, setNewPosts] = React.useState([]);
    const [pageNumber, setPageNumber] = React.useState(1);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getNewPosts = async(pageNumber) => {
            const json = await http.get(
                `/post_list/new/?page=${pageNumber}`,
                {
                    cache : true,   
                },
            );
            console.log(json.data);
            console.log(json.data.results);
            setNewPosts((prev) => [...prev, ...json.data.results]);
            setLoading(false);
        };
        getNewPosts(pageNumber);
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

    const PostSkeletonContainer = new Array(8).fill(1).map((_, i) => {
        return <PostSkeleton key={i} />
    })

    return (
        <>
        {loading ? (
            <div className="skeleton-post-container">
                {PostSkeletonContainer}
            </div>
        ) : (
            <Masonry
                breakpointCols={breakpoints}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column"
            >
                {newPosts.map((newPost) => (
                    <div className="post" key={newPost.id}>
                        <Link to={`/post/${newPost.id}`}>
                            <div className="image-box">
                                <img src={newPost.image} alt="newpost" className="post-image" />
                            </div>
                        </Link>
                    </div>
                ))}
            </Masonry>
        )}
        <div className="loading" ref={pageEnd}>
            <Spinner />
        </div>
        </>
    );
}

export default PostNew;