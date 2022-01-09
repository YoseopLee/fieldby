import React from 'react';
import PropTypes from 'prop-types';
import SwiperCore, { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
import "swiper/components/pagination/pagination.scss"
import styled from 'styled-components';

SwiperCore.use(Pagination);

const PostDetail = ({ coverImg, coverImg2, coverImg3, coverImg4, coverImg5, coverImg6, coverImg7, coverImg8, coverImg9, coverImg10 }) => {
    return (
        <PostDetailCSS>
            <Swiper
                className='post-swiper'
                pagination={true}
            >
                {coverImg !== null ? (
                    <SwiperSlide>
                        <div className='post-each-image' style={{backgroundImage: `url(${coverImg})`}}></div> 
                    </SwiperSlide>
                ) : (
                    null
                )}
                {coverImg2 !== null ? (
                    <SwiperSlide>
                        <div className='post-each-image' style={{backgroundImage: `url(${coverImg2})`}}></div> 
                    </SwiperSlide>
                ) : (
                    null
                )} 
                {coverImg3 !== null ? (
                    <SwiperSlide>
                        <div className='post-each-image' style={{backgroundImage: `url(${coverImg3})`}}></div> 
                    </SwiperSlide>
                ) : (
                    null
                )}
                {coverImg4 !== null ? (
                    <SwiperSlide>
                        <div className='post-each-image' style={{backgroundImage: `url(${coverImg4})`}}></div>  
                    </SwiperSlide>
                ) : (
                    null
                )}
                {coverImg5 !== null ? (
                    <SwiperSlide>
                        <div className='post-each-image' style={{backgroundImage: `url(${coverImg5})`}}></div> 
                    </SwiperSlide>
                ) : (
                    null
                )}
                {coverImg6 !== null ? (
                    <SwiperSlide>
                        <div className='post-each-image' style={{backgroundImage: `url(${coverImg6})`}}></div> 
                    </SwiperSlide>
                ) : (
                    null
                )}
                {coverImg7 !== null ? (
                    <SwiperSlide>
                        <div className='post-each-image' style={{backgroundImage: `url(${coverImg7})`}}></div> 
                    </SwiperSlide>
                ) : (
                    null
                )}
                {coverImg8 !== null ? (
                    <SwiperSlide>
                        <div className='post-each-image' style={{backgroundImage: `url(${coverImg8})`}}></div> 
                    </SwiperSlide>
                ) : (
                    null
                )}
                {coverImg9 !== null ? (
                    <SwiperSlide>
                        <div className='post-each-image' style={{backgroundImage: `url(${coverImg9})`}}></div> 
                    </SwiperSlide>
                ) : (
                    null
                )}
                {coverImg10 !== null ? (
                    <SwiperSlide>
                        <div className='post-each-image' style={{backgroundImage: `url(${coverImg10})`}}></div> 
                    </SwiperSlide>
                ) : (
                    null
                )}
            </Swiper>
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
    .swiper-container{
        overflow : inherit;
        .swiper-wrapper{
        }
        .swiper-pagination{
            bottom : -24px;
        }
    }
    .swiper-pagination-bullet{
        height : 6px;
        width : 6px;
    }
    .swiper-pagination-bullet-active{
        background : #212121;
    }
    .swiper-slide > div{
        background-size : cover;
        background-position : center;
        background-repeat : no-repeat;
        height : 430px;
    }
`

export default PostDetail;