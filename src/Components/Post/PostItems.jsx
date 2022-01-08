import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const PostItems = ({ id, thumbnail, brand, name, price }) => {
    return (
        <PostItemsContainerCSS>
            <Link to={`/item/${id}`}>
                <div className="post-item-thumbnail">
                    <img src={thumbnail} alt="" className="post-item-thumbnail-img"/>
                </div>
                <div className="post-item-wrapper">
                    <div className="post-item-brand">{brand}</div>
                    <div className="post-item-name">{name}</div>
                    <div className="post-item-price">{price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원</div>
                </div>
            </Link>
        </PostItemsContainerCSS>
    )
}

const PostItemsContainerCSS = styled.div`
    a{
        display : flex;
        align-items : center;
        width : auto;
        padding : 8px;
    }
    border : 1px solid rgba(0, 0, 0, 0.11);
    box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.11);
    background-color : #fff;
    border-radius: 14px;
    margin-right : 10px;
    .post-item-thumbnail{
        width : 60px;
        height : 60px;
        .post-item-thumbnail-img{
            width : 100%;
            height : 100%;
        }
    }
    .post-item-wrapper{
        padding-left : 10px;
        .post-item-brand{
            font-weight : 700;
            font-size : 12px;
        }
        .post-item-name{
            max-height : 32px;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow : hidden;
            line-height: 16px;
            font-size: 13px;
            letter-spacing: -.33px;
        }
        .post-item-price{
            padding-top : 2px;
            font-weight : 700;
            line-height: 16px;
            font-size: 13px;
            letter-spacing: -.33px;
        }
    }
`

export default PostItems;