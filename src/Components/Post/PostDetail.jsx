import React from 'react';
import PropTypes from 'prop-types';
import SwiperCore, { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
import "swiper/components/pagination/pagination.scss"
import styled from 'styled-components';

SwiperCore.use(Pagination);

const PostDetail = ({ coverImg, coverImg2, coverImg3, coverImg4, coverImg5, coverImg6, coverImg7, coverImg8, coverImg9, coverImg10 ,text }) => {
    return (
        <PostDetailCSS>
            <Swiper
                className='post-swiper'
                pagination={{clickable : true}}
            >
                {coverImg !== null ? (
                    <SwiperSlide>
                        <img src={coverImg} alt=""/> 
                    </SwiperSlide>
                ) : (
                    null
                )}
                {coverImg2 !== null ? (
                    <SwiperSlide>
                        <img src={coverImg2} alt=""/> 
                    </SwiperSlide>
                ) : (
                    null
                )} 
                {coverImg3 !== null ? (
                    <SwiperSlide>
                        <img src={coverImg3} alt=""/> 
                    </SwiperSlide>
                ) : (
                    null
                )}
                {coverImg4 !== null ? (
                    <SwiperSlide>
                        <img src={coverImg4} alt=""/> 
                    </SwiperSlide>
                ) : (
                    null
                )}
                {coverImg5 !== null ? (
                    <SwiperSlide>
                        <img src={coverImg5} alt=""/> 
                    </SwiperSlide>
                ) : (
                    null
                )}
                {coverImg6 !== null ? (
                    <SwiperSlide>
                        <img src={coverImg6} alt=""/> 
                    </SwiperSlide>
                ) : (
                    null
                )}
                {coverImg7 !== null ? (
                    <SwiperSlide>
                        <img src={coverImg7} alt=""/> 
                    </SwiperSlide>
                ) : (
                    null
                )}
                {coverImg8 !== null ? (
                    <SwiperSlide>
                        <img src={coverImg8} alt=""/> 
                    </SwiperSlide>
                ) : (
                    null
                )}
                {coverImg9 !== null ? (
                    <SwiperSlide>
                        <img src={coverImg9} alt=""/> 
                    </SwiperSlide>
                ) : (
                    null
                )}
                {coverImg10 !== null ? (
                    <SwiperSlide>
                        <img src={coverImg10} alt=""/> 
                    </SwiperSlide>
                ) : (
                    null
                )}
            </Swiper>
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
    .swiper-slide > img{
        width : 100%;
    }
    .swiper-wrapper{
        height : 500px;
    }
`

export default PostDetail;