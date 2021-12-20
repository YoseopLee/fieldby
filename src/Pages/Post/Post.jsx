import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import MainBar from "../../Components/Common/Mainbar/MainBar";
import Navbar from "../../Components/Common/Navbar/Navbar";
import PostList from "../../Components/Post/PostList";

const Post = () => {
    const [posts, setPosts] = useState([]); 
    
    useEffect(() => {
        const getPosts = async() => {
            const json = await axios.get(`http://localhost:8000/api/v1/posts/`);
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
        <PostContainerCSS>
            {posts.map((post)=>(
                <PostList
                    key={post.id}
                    id={post.id}
                    coverImg={post.image}
                />
            ))}                   
        </PostContainerCSS>
        </>
    );
}

const PostContainerCSS = styled.div`
    margin-top : 60px;
`

export default Post;