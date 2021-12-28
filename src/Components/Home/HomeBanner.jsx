import axios from "axios";
import React from "react"
import { Carousel } from "react-responsive-carousel";
import { useEffect, useState } from "react/cjs/react.development";
import styled from "styled-components";

const HomeBanner = () => {
    const [homeBanners, setHomeBanners] = useState([]);

    useEffect(() => {
        const getHomeBanners = async() => {
            const json = await axios.get(`https://fair.way.golf/api/v1/homebanners`)
            setHomeBanners(json.data.results);
        };
        getHomeBanners();
    }, [])

    return (
        <HomeBannerCSS>
            <Carousel autoPlay={true} infiniteLoop={true}>
                {homeBanners.map((homeBanner) => (
                    <div key={homeBanner.id}>
                        <img src={homeBanner.image} alt=""/>
                    </div>
                ))}
            </Carousel>
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