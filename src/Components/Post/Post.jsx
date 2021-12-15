import PropTypes from 'prop-types';

const PostEach = ({ text, created, image, image2, image3, image4, image5, image6, image7, image8, image9, image10 }) => {
    return (
        <div>
            <p>{text}</p>
            <span>{created}</span>
            <img src={image} alt=""/>
            <img src={image2} alt=""/>
            <img src={image3} alt=""/>
        </div>
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

export default PostEach;