import React from 'react';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react/cjs/react.development';
import axios from 'axios';
import CollectionPostDetail from './CollectionPostDetail';
import ConllectionItemDetail from './CollectionItemDetail';


const Collection = ({ id, title, contents}) => {
    const [collectionPosts, setCollectionPosts] = useState([]);
    const [collectionItems, setCollectionItems] = useState([]);

    useEffect(() => {
        const getCollectionDetails = async() => {
            try {   
                // get 점검
                const json = await axios.get(`https://fair.way.golf/api/v1/collections/${id}`);
                console.log(json.data);
                setCollectionPosts(json.data.posts);
                setCollectionItems(json.data.items);
            } catch (error) {
                console.log(error);
            }
        };
        getCollectionDetails(id);
    }, [id]) 

    return (
        <div>
            <h1>{title}</h1>
            <span>{contents}</span>
            {collectionPosts.map((collectionPost) => (
                <CollectionPostDetail
                    key={collectionPost.id}
                    id={collectionPost.id} 
                    postImages={collectionPost.image}
                />
            ))}
            {collectionItems.map((collectionItem) => (
                <ConllectionItemDetail 
                    key={collectionItem.id}
                    id={collectionItem.id}
                    itemImages={collectionItem.image}
                />
            ))}
        </div>
    );
}

Collection.propTypes = {
    id : PropTypes.number.isRequired,
    title : PropTypes.string.isRequired,
    contents : PropTypes.string.isRequired,
}

export default Collection;