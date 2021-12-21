import { MasonryInfiniteGrid } from "@egjs/react-infinitegrid";
import axios from "axios";
import React, { useEffect } from "react";
import styled from "styled-components";
import MainBar from "../../Components/Common/Mainbar/MainBar";
import Navbar from "../../Components/Common/Navbar/Navbar";
import PostList from "../../Components/Post/PostList";

const getNextPosts = (nextGroupKey, count) => {
    const nextPosts = [];
    const nextKey = nextGroupKey * count;

    for (let i = 0; i < count; ++i){
        nextPosts.push({groupKey: nextGroupKey, key : nextKey + i});
    }
    return nextPosts;
}

const Post = () => {
    const [posts, setPosts] = React.useState(() => getNextPosts(0,10));
    
    useEffect(() => {
        const getPosts = async() => {
            const json = await axios.get(`https://fair.way.golf/api/v1/posts/`);
            console.log(json.data);
            console.log(json.data.results);
            setPosts(json.data.results);
        };
        getPosts();
    }, []) // dependencies empty

    return (
        <>
        <MainBar />
        <Navbar />
        <MasonryInfiniteGrid
            className="post-container"
            placeholder={<div className="placeholder"></div>}
            gap={0}
            onRequestAppend={(e) => {
                const nextGroupKey = (+e.groupKey || 0 ) + 1;
                
                e.wait();
                e.currentTarget.appendPlaceholders(5, nextGroupKey);
                setTimeout(() => {
                    e.ready();
                    setPosts([
                        ...posts,
                        ...getNextPosts(nextGroupKey, 10),
                    ]);
                }, 1000);
            }}>
                {posts.map((post)=>(
                    <PostList
                        data-grid-groupkey={post.groupKey}
                        key={post.key}
                        id={post.id}
                        coverImg={post.image}
                    />
                ))}
        </MasonryInfiniteGrid>             
        </>
    );
}

export default Post;