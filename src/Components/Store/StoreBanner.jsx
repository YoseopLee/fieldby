import axios from "axios";
import React, {useState} from "react";
import { Carousel } from "react-responsive-carousel";
import { useEffect } from "react/cjs/react.development";
import styled from "styled-components";

const StoreBanner = () => {
    const [storebanners, setStoreBanners] = useState([]);

    useEffect(() => {
        const getStoreBanners = async() => {
            try {
                const json = await axios.get(`https://fair.way.golf/api/v1/storebanner/hidden`);
                setStoreBanners(json.data.results);
            } catch (error) {
                console.log(error);
            }
        };
        getStoreBanners();
    }, []); // dependencies empty

    return(
        <StoreBannerCSS>
            <Carousel autoPlay={true} infiniteLoop={true}>
                    {storebanners.map((storebanner) => (
                        <div key={storebanner.id}>    
                            <img src={storebanner.image} alt=""/>
                        </div>    
                    ))}
            </Carousel>
        </StoreBannerCSS>
    );
}

const StoreBannerCSS = styled.div`
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

export default StoreBanner;