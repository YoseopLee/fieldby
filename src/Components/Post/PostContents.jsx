import React from "react";
import styled from "styled-components";

const PostContents = ({text}) => {
    return (
        <PostContentsCSS>
            <p className="post-contents-text">
                {text}
            </p>
        </PostContentsCSS>
    )
}


const PostContentsCSS = styled.div`
    padding : 16px;
    .post-contents-text {
        font-size : 12px;
        letter-spacing : .33px;
    }
`

export default PostContents