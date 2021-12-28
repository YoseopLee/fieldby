import PropTypes from 'prop-types';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import styled from 'styled-components';

const PostDetail = ({ coverImg, coverImg2, coverImg3 ,text }) => {
    return (
        <PostDetailCSS>
            <Carousel showArrows={false}>
                <div>
                    <img src={coverImg} alt=""/>
                </div>
                <div>
                    <img src={coverImg2} alt=""/>
                </div>
                <div>
                    <img src={coverImg3} alt=""/>
                </div>
            </Carousel>
            <p>{text}</p>
        </PostDetailCSS>
    )
};

PostDetail.propTypes = {
    text : PropTypes.string.isRequired,
    created : PropTypes.string.isRequired,
    coverImg : PropTypes.string.isRequired,
    coverImg2 : PropTypes.string,
    coverImg3 : PropTypes.string,
    image4 : PropTypes.string,
    image5 : PropTypes.string,
    image6 : PropTypes.string,
}

const PostDetailCSS = styled.div`
    height : 100vh;
`

export default PostDetail;