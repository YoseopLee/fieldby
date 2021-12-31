import React, {useState} from "react";
import SwiperCore, {Autoplay} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect } from "react/cjs/react.development";
import styled from "styled-components";
import { http } from "../Common/Api/CacheAPI";

SwiperCore.use(Autoplay);

const StoreBanner = () => {
    const [storebanners, setStoreBanners] = useState([]);

    useEffect(() => {
        const getStoreBanners = async() => {
            try {
                const json = await http.get(
                    `/storebanner/hidden`,
                    {
                        cache : true,
                    }
                );
                setStoreBanners(json.data.results);
            } catch (error) {
                console.log(error);
            }
        };
        getStoreBanners();
    }, []); // dependencies empty

    return(
        <StoreBannerCSS>
            <Swiper
                className="store-banner"
                slidesPerView={1}
                autoplay = {{delay : 3000}}
            >
                    {storebanners.map((storebanner) => (
                        <SwiperSlide>
                            <div key={storebanner.id}>    
                                <img src={storebanner.image} alt="" className="store-banner-image"/>
                            </div>    
                        </SwiperSlide>
                    ))}
            </Swiper>
        </StoreBannerCSS>
    );
}

const StoreBannerCSS = styled.div`
`

export default StoreBanner;