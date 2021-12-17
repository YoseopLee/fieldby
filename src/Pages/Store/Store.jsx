import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import BrandName from "../../Components/Store/Brand";
import ItemList from "../../Components/Store/ItemList";
import StoreBanner from "../../Components/Store/StoreBanner";


const Store = () => {
    const [itemlists, setItemLists] = useState([]);

    useEffect(() => {
        const getItemList = async() => {
            try {
                const json = await axios.get(`http://localhost:8000/api/v1/items/`);
                setItemLists(json.data.results);

            } catch (error) {
                console.log(error);
            }
        };
        getItemList();
    }, []);

    return (
        <StoreContainerCSS>
            <StoreBanner />
            <BrandName />
            <div className="store-line"></div>
            {itemlists.map((itemlist) => (
                <ItemList 
                    key={itemlist.id}
                    id={itemlist.id}
                    coverImg={itemlist.image}
                    name={itemlist.name}
                />
            ))}
        </StoreContainerCSS>
    );
}

const StoreContainerCSS = styled.div`
    margin-top : 60px;
    .store-line{
        border-bottom : 1px solid #dcdcdc;
        width : 100%;
        margin-top : 36px;
    }
`

export default Store;