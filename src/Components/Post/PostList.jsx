import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const PostList = ({id, coverImg}) => {
    return(
        <PostListCSS>
            <div className="post">
                <Link to = {`/post/${id}`}>
                    <div className='image-box'>
                        <img src={coverImg} className="post-image" alt=""/>
                    </div>
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
    width : calc(50% - 2px);
    margin-top : 60px;
    .post{
    }
    .post-image{
        width : 100%;
        height : 100%;
    }

`;

export default PostList;