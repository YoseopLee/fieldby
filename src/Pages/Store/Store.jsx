import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import styled from "styled-components";
import ItemList from "../../Components/Store/ItemList";
import StoreBanner from "../../Components/Store/StoreBanner";
import MainBar from "../../Components/Common/Mainbar/MainBar";
import Navbar from "../../Components/Common/Navbar/Navbar";
import Spinner from "../../Components/Common/Spinner/Spinner";
import StoreSkeleton from "../../Components/Common/Skeleton/StoreSkeleton";


const Store = () => {
    const [itemlists, setItemLists] = useState([]);
    const [pageNumber, setPageNumber] = useState(1);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getItemList = async(pageNumber) => {
            try {
                const json = await axios.get(`https://fair.way.golf/api/v1/item_list/new/?page=${pageNumber}`);
                console.log(json.data);
                console.log(json.data.results);
                setItemLists((prev) => [...prev, ...json.data.results]);
                setLoading(false);
            } catch (error) {
                console.log(error);
            }
        };
        getItemList(pageNumber);
    }, [pageNumber]);

    const loadMore = () => {
        setPageNumber(prevPageNumber => prevPageNumber + 1)
    }

    const pageEnd = useRef();

    useEffect(() => {
        if(loading){
            const observer = new IntersectionObserver((entries) => {
                console.log(entries);
                if(entries[0].isIntersecting){
                    loadMore();
                }
            },{threshold:0});

            observer.observe(pageEnd.current);
        }
    }, [loading]);

    return (
        <>
        <MainBar />
        <Navbar />
        {loading ? (
            <StoreSkeleton />
        ) : (
            <StoreContainerCSS>
                <StoreBanner />
                <div className="item-container">
                    {itemlists.map((itemlist) => (
                        <ItemList 
                            key={itemlist.id}
                            id={itemlist.id}
                            coverImg={itemlist.image}
                            name={itemlist.name}
                            brand={itemlist.brand.name}
                            price={itemlist.price}
                        />
                    ))}
                </div>
            </StoreContainerCSS>
        )}
        <div className="loading" ref={pageEnd}>
                <Spinner />
        </div>
        </>

    );
}

const StoreContainerCSS = styled.div`
    margin-top : 60px;
    .store-line{
        border-bottom : 1px solid #dcdcdc;
        width : 100%;
        margin-top : 36px;
    }
    .item-container{
        margin-top : 36px;
        display : flex;
        flex-wrap : wrap;
        justify-content : space-between;
    }
`

export default Store;