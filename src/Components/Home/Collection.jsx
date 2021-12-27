import React from 'react';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react/cjs/react.development';
import axios from 'axios';

const Collection = ({ title, contents}) => {
    const [collectionDetails, setCollectionDetails] = useState([]);
    const idNumber = useState(1);

    useEffect(() => {
        const getCollectionDetails = async() => {
            try {   
                const json = await axios.get(`https://fair.way.golf/api/v1/collections/${idNumber}`);
                console.log(json.data);
                console.log(json.data.results.posts);
                setCollectionDetails(json.data.results.posts);
            } catch (error) {
                console.log(error);
            }
        };
        getCollectionDetails(idNumber);
    }, [idNumber])

    return (
        <div>
            <h1>{title}</h1>
            <span>{contents}</span>
            
        </div>
    );
}

Collection.propTypes = {
    id : PropTypes.number.isRequired,
    title : PropTypes.string.isRequired,
    contents : PropTypes.string.isRequired,
}

export default Collection;