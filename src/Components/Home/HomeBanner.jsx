import React from "react"
import SwiperCore, {Autoplay} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
import { useEffect, useState } from "react/cjs/react.development";
import styled from "styled-components";
import { http } from "../Common/Api/CacheAPI";

SwiperCore.use(Autoplay);

const HomeBanner = () => {
    const [homeBanners, setHomeBanners] = useState([]);

    useEffect(() => {
        const getHomeBanners = async() => {
            const json = await http.get(
                `/homebanners`,
                {
                    cache : true,
                }
            )
            setHomeBanners(json.data.results);
        };
        getHomeBanners();
    }, [])

    return (
        <HomeBannerCSS>
            <Swiper
                className="home-banner"
                spaceBetween={50}
                slidesPerView={1}
                autoplay = {{ delay : 3000 }}
            >
                
                    {homeBanners.map((homeBanner) => (
                        <SwiperSlide>
                            <div key={homeBanner.id}>
                                <img src={homeBanner.image} alt="" className="home-banner-image"/>
                            </div>
                        </SwiperSlide>
                    ))}
                
            </Swiper>
        </HomeBannerCSS>
    )
}

const HomeBannerCSS = styled.div`
    .thumbs-wrapper{
        display : none;
    }
    .control-dots{
        display : none;
    }
    .control-arrow{
        display : none;
    }
    .carousel-status{
        text-shadow : none;
        background-color : #747474;
        right : 5px;
        border-radius : 9px;
    }
`

export default HomeBanner;