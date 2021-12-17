import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react/cjs/react.development";
import styled from "styled-components";

const BrandName = () => {
    const [brandnames, setBrandNames] = useState([]);

    useEffect(() => {
        const getBrandNames = async() => {
            try {
                const json = await axios.get(`http://localhost:8000/api/v1/brands/`);
                setBrandNames(json.data.results);
            } catch (error) {
                console.log(error);
            }
        };
        getBrandNames();
    }, [])

    return(
        <BrandNameCSS>
            {brandnames.map((brandname) => (
                <h1>{brandname.name}</h1>
            ))}
        </BrandNameCSS>
    )
}

const BrandNameCSS = styled.div`
    margin-top : 100px;
`

export default BrandName;