import React from "react";
import PropTypes from 'prop-types';
import styled from "styled-components";

const PostUser = ({username, thumbnail, height}) => {
    return (
        <PostUserContainerCSS>
            <div className="user-thumbnail-info-wrapper">
                <div className="post-user-thumbnail">
                    <img src={thumbnail} alt="" className="post-user-thumbnail-img"/>
                </div>
                <div className="post-user-info-wrapper">
                    <div className="post-user-name">{username}</div>
                    <div className="post-user-height">{height}cm</div>
                </div>
            </div>
            <div className="post-user-follow">
                <button className="post-user-follow-btn">
                    팔로우
                </button>
            </div>
        </PostUserContainerCSS>
    )
}

const PostUserContainerCSS = styled.div`
    display : flex;
    align-items : center;
    padding : 8px 16px;
    justify-content : space-between;
    .user-thumbnail-info-wrapper{
        display : flex;
    }
    .post-user-thumbnail{
        overflow : hidden;
        position : relative;
        border-radius : 100%;
        width : 34px;
        height : 34px;
        .post-user-thumbnail-img{
            object-fit : cover;
            border : 0;
            width : 100%;
            height : 100%;
        }
    }
    .post-user-info-wrapper{
        display : flex;
        flex-direction : column;
        justify-content : center;
        margin-left : 8px;
        .post-user-name{
            font-size : 13px;
            font-weight : bold;
        }
        .post-user-height{
            font-size : 12px;
            color : rgba(34,34,34, .5);
            letter-spacing : .3px;
        }
    }
    .post-user-follow{
        .post-user-follow-btn{
            min-width : 82px;
            border : none;
            margin : 0;
            background-color : #212121;
            color : #fff;
            border-radius : 10px;
            padding : 9px 18px;
            font-size : 13px;
            font-weight : bold;
            letter-spacing : .33px;
        }
    }
`

export default PostUser;
