import React from 'react';
import styled from 'styled-components';


const PostList = () => {
    const [a, setA] = useState(null);
    useEffect(()=>{

    }, [])
    
    return(
        <PostListCSS>
            <div className="header"></div>
            <div className="contents">
                <div className="name"></div>
                <div className="description"></div>
            </div>
        </PostListCSS>
    )
}

const PostListCSS = styled.div`
    .header{

    }
    .contents{
        display:flex;
        flex-direction:column;
        justify-content:center;
        .name{
            font-size:17px;
            font-weight:bold;
        }
        .description{
            font-size:15px;
        }
    }

`;

export default PostList;