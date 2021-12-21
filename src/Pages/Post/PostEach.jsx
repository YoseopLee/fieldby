import axios from "axios";
import React, { useEffect, useState } from "react"
import { useParams } from "react-router";
import styled from "styled-components"
import DetailBar from "../../Components/Common/Detailbar/DetailBar"
import PostDetail from "../../Components/Post/PostDetail";

const PostEach = () => {
    const [postEach, setPostEach] = useState([]);
    const {id} = useParams();
    useEffect(() => {
        const getPostEaches = async() => {
            try {
                const json = await axios.get(`https://fair.way.golf/api/v1/posts/${id}/`);
                console.log(json.data);
                setPostEach(json.data);
            } catch (error) {
                console.log(error);
            };
        };
        getPostEaches();
    }, [id]);

    return (
        <>
        <DetailBar />
        <PostEachCSS>
            <PostDetail
                coverImg = {postEach.image}
                coverImg2 = {postEach.image2}
                coverImg3 = {postEach.image3}
                text = {postEach.text}
            />
        </PostEachCSS>
        </>
    )
}

const PostEachCSS = styled.div`
    margin-top : 60px;
`

export default PostEach