import React, { useEffect, useState } from "react"
import { useParams } from "react-router";
import styled from "styled-components"
import { http } from "../../Components/Common/Api/CacheAPI";
import DetailBar from "../../Components/Common/Detailbar/DetailBar"
import PostDetail from "../../Components/Post/PostDetail";
import PostItems from "../../Components/Post/PostItems";
import PostUser from "../../Components/Post/PostUser";

const PostEach = () => {
    const [postEach, setPostEach] = useState([]);
    const [postEachUser, setPostUserEach] = useState([]);
    const [postEachUserProfile, setPostEachUserProfile] = useState([]);
    const [postEachItems, setPostEachItems] = useState([]);
    
    const {id} = useParams();
    useEffect(() => {
        const getPostEaches = async() => {
            try {
                const json = await http.get(
                    `/posts/${id}/`,
                    {
                        cache : true,
                    }
                );
                console.log(json.data);
                console.log(json.data.user);
                console.log(json.data.user.profile);
                console.log(json.data.items);
                setPostEach(json.data);
                setPostUserEach(json.data.user);
                setPostEachUserProfile(json.data.user.profile);
                setPostEachItems(json.data.items);
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
            <PostUser 
                username={postEachUser.username}
                thumbnail={postEachUserProfile.thumbnail}  
                height={postEachUserProfile.height}
            />
            <PostDetail
                coverImg={postEach.image}
                coverImg2={postEach.image2}
                coverImg3={postEach.image3}
                coverImg4={postEach.image4}
                coverImg5={postEach.image5} 
                coverImg6={postEach.image6}
                coverImg7={postEach.image7}
                coverImg8={postEach.image8}
                coverImg9={postEach.image9}
                coverImg10={postEach.image10}
                text={postEach.text}
            />
            <div className="post-item-container">
                {postEachItems.map((postEachItem)=> (
                    <PostItems 
                        id={postEachItem.id}
                        thumbnail={postEachItem.image}
                        brand={postEachItem.brand.name}
                        name={postEachItem.name}
                        price={postEachItem.price}
                    />
                ))}
            </div>
        </PostEachCSS>
        </>
    )
}

const PostEachCSS = styled.div`
    margin-top : 55px;
    overflow : hidden;
    .post-item-container{
        display : -webkit-box;
        overflow-x : auto;
        overflow-y : hidden;
        padding-left : 12px;
        margin-top : 36px;
    }
`

export default PostEach