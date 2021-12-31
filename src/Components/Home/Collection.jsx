import React from 'react';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react/cjs/react.development';
import CollectionPostDetail from './CollectionPostDetail';
import CollectionItemDetail from './CollectionItemDetail';
import styled from 'styled-components';
import CollectionSkeleton from '../Common/Skeleton/CollectionSkeleton';
import { http } from '../Common/Api/CacheAPI';


const Collection = ({ id, title, contents }) => {
    const [collectionPosts, setCollectionPosts] = useState([]);
    const [collectionItems, setCollectionItems] = useState([]);
    const [collectionStatus, setCollectionStatus] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getCollectionDetails = async() => {
            try {   
                // get 점검
                const json = await http.get(
                    `/collections/${id}`,
                    {
                        cache : true,
                    }
                );
                console.log(json.data);
                setLoading(false);
                setCollectionStatus(json.data)
                setCollectionPosts(json.data.posts);
                setCollectionItems(json.data.items);
            } catch (error) {
                console.log(error);
            }
        };
        getCollectionDetails(id);
    }, [id]) 

    const CollectionSkeletonContainer = new Array(2).fill(1).map((_, i) => {
        return <CollectionSkeleton key={i} />
    })

    return (
        <CollectionContainerCSS>
            <div className="collection-wrapper">
                <div className="collection-title">{title}</div>
                <div className="collection-subtitle">{contents}</div>
            </div>
            {loading ? (
                <div className="skeleton-collection-container">{CollectionSkeletonContainer}</div>
            ) : (
                <>
                {collectionStatus.collection_type === "style" ? (
                    <div className="post-container">
                        {collectionPosts.map((collectionPost) => (
                            <CollectionPostDetail
                                key={collectionPost.id}
                                id={collectionPost.id} 
                                postImages={collectionPost.image}
                            />
                        ))}     
                    </div>
                    ) : (
                        <div className="item-container">
                            {collectionItems.map((collectionItem) => (
                                <CollectionItemDetail 
                                    key={collectionItem.id}
                                    id={collectionItem.id}
                                    itemImages={collectionItem.image}
                                    brandName={collectionItem.brand.name}
                                    itemName={collectionItem.name}
                                    itemPrice={collectionItem.price}
                                />
                            ))}    
                        </div>
                    )
                }
                </>
            )}    
        </CollectionContainerCSS>
    );
}

const CollectionContainerCSS = styled.div`
    padding-top : 24px;
    .collection-wrapper{
        margin-bottom : 14px;
        line-height : 100%;
        padding-left : 18px;

        .collection-title{
            font-weight : bold;
            font-size : 16px;
            margin-top : 4px;
            color : #212121;
        }

        .collection-subtitle{
            font-size : 11px;
            color : #747474;
            font-weight : 400;
            margin-top : 3px;
        }
    }
    .post-container{
        display : flex;
        overflow : auto;
        justify-content : space-between;
        padding-left : 18px;
        -ms-overflow-style : none;
        scrollbar-width : none;
    }
    .post-container::-webkit-scrollbar{
        display : none;
    }
    .item-container{
        display : flex;
        overflow-x : auto;
        padding-left : 18px;
        -ms-overflow-style : none;
        scrollbar-width : none;
    }
    .item-container::-webkit-scrollbar{
        display : none;
    }
`

Collection.propTypes = {
    id : PropTypes.number.isRequired,
    title : PropTypes.string.isRequired,
    contents : PropTypes.string.isRequired,
}

export default Collection;