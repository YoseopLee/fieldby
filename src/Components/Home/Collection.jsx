import React from 'react';
import PropTypes from 'prop-types';

function Collection({id, title, contents, collection_type}){
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