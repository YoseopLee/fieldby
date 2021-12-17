import PropTypes from 'prop-types';
import { Carousel } from 'react-responsive-carousel';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
import styled from 'styled-components';

const PostEach = ({ text, created, image, image2, image3, image4, image5, image6, image7, image8, image9, image10 }) => {
    return (
        <PostEachCSS>
            <Carousel showArrows={false}>
                <div>
                    <img src={image} alt=""/>
                </div>
                <div>
                    <img src={image2} alt=""/>
                </div>
                <div>
                    <img src={image3} alt=""/>
                </div>
            </Carousel>
            <p>{text}</p>
            <span>{created}</span>
        </PostEachCSS>
    )
}

PostEach.propTypes = {
    text : PropTypes.string.isRequired,
    created : PropTypes.string.isRequired,
    image : PropTypes.string.isRequired,
    image2 : PropTypes.string,
    image3 : PropTypes.string,
    image4 : PropTypes.string,
    image5 : PropTypes.string,
    image6 : PropTypes.string,
}

const PostEachCSS = styled.div`
    height : 100vh;
`

export default PostEach;