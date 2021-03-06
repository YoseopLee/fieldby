import axios from "axios";
import React, { useState } from "react";
import { useParams } from "react-router";
import { useEffect } from "react/cjs/react.development";
import styled from "styled-components";
import { http } from "../../Components/Common/Api/CacheAPI";
import DetailBar from "../../Components/Common/Detailbar/DetailBar";
import ItemDetail from "../../Components/Item/ItemDetail";

const Item = () => {
    const [item, setItem] = useState([]);
    const {id} = useParams();
    useEffect(() => {
        const getItems = async() => {
            try {
                const json = await http.get(
                    `/items/${id}/`,
                    {
                        cache : true,
                    }
                );
                console.log(json.data);
                setItem(json.data);
            } catch (error) {
                console.log(error);
            }
        };
        getItems();
    }, [id]);
    
    return(
        <>
        <DetailBar />
        <ItemCSS>
            <ItemDetail 
                coverImg = {item.image}
                name = {item.name}
            />
        </ItemCSS>
        </>
    );
}  

const ItemCSS = styled.div` 
    margin-top : 60px;
`

export default Item;