import React from "react"
import { Link } from "react-router-dom";
import styled from "styled-components";

const CollectionPostDetail = ({ id, postImages }) => {
    return (
        <CollectionPostDetailCSS>
            <Link to={`/post/${id}`}>
            <div className="post-each" style={{backgroundImage : `url(${postImages})`}}>
                <div className="cover"></div>
            </div>
            </Link>
            
        </CollectionPostDetailCSS>
    )
}

const CollectionPostDetailCSS = styled.div`
    .post-each{
        text-align:center;
        overflow-y:hidden;
        position:relative;
        text-align:center;
        border-radius:6px;
        /* opacity:0; */
        background-size:cover;
        background-repeat:no-repeat;
        background-position:center;
        width : 204px;
        height : 250px;
        margin-right : 8px;
        .cover{
            width:100%;
            height:100%;
            position:absolute;
            overflow:hidden;
            text-align:center;	
        }
    }
`

export default CollectionPostDetail;