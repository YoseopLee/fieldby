import React from "react";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types'
import styled from "styled-components";

const ItemList = ({id, coverImg, name}) => {
    return (
        <ItemListCSS>
            <div className="item">   
                <Link to={`/item/${id}`}>
                    <img src={coverImg} className="item-image" alt={name}/>
                </Link>
                    <div className="item-name">{name}</div>
            </div>
        </ItemListCSS>
    );
}

ItemList.propTypes = {
    id : PropTypes.number.isRequired,
    coverImg : PropTypes.string.isRequired,
    name : PropTypes.string.isRequired,
}

const ItemListCSS = styled.div`
    margin-top : 36px;
    
    .item{
        display : flex;
        width : calc(50% - 2px);
        .item-image{
            height : 200px;
        }
        .item-name{
            font-size : 13px;
        }
    }
`

export default ItemList;