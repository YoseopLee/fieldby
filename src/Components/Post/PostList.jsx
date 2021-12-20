import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const PostList = ({id, coverImg}) => {
    return(
        <PostListCSS>
            <div className="post">
                <Link to = {`/post/${id}`}>
                    <img src={coverImg} className="post-image" alt=""/>
                </Link>
            </div>
        </PostListCSS>
    );
}

PostList.propTypes = {
    id : PropTypes.number.isRequired,
    coverImg : PropTypes.string.isRequired,
}

const PostListCSS = styled.div`
    margin-top : 60px;
    .post{
        .post-image{
            height : 500px;
            width : 100%;
        }
    }

`;

export default PostList;