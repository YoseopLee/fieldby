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
                const json = await axios.get(`http://localhost:8000/api/v1/storebanners/`);
                setStoreBanners(json.data.results);
            } catch (error) {
                console.log(error);
            }
        };
        getStoreBanners();
    }, []); // dependencies empty

    return(
        <StoreBannerCSS>
            <Carousel> 
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
    height : 50px;
`

export default StoreBanner;