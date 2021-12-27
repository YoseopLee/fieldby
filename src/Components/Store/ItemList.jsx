import React from "react";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types'
import styled from "styled-components";

const ItemList = ({id, coverImg, brand ,name, price}) => {
    return (
        <ItemListCSS>
            <Link to={`/item/${id}`}>
            <div className="item">   
                <div className="item-thumbnail">
                    <img src={coverImg} className="item-image" alt={name}/>
                </div>
                <div className="item-contents">
                    <div className="brand">{brand}</div>
                    <div className="item-name">{name}</div>
                    <div className="price">
                        <div className="price_value">{price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원</div>
                        <div className="item-heart"></div>
                    </div>
                </div>
            </div>
            </Link>
        </ItemListCSS>
    );
}

ItemList.propTypes = {
    id : PropTypes.number.isRequired,
    coverImg : PropTypes.string.isRequired,
    brand : PropTypes.string.isRequired,
    name : PropTypes.string.isRequired,
    price : PropTypes.number.isRequired,
}

const ItemListCSS = styled.div`
    width : calc(50% - 1px);
    margin-bottom : 8px;
    a{
        
    }
    .item{
        display : flex;
        flex-direction : column;
        padding-bottom : 16px;
        .item-thumbnail{
            position : relative;
            .item-image{
                margin : 0 auto;
                width : 100%;
            }
        }
        .item-contents{
            padding-left : 16px;
            padding-top : 12px;
            .brand{
                color : #212121;
                font-size : 13px;
                font-weight : 800;
            }
            .item-name{
                font-size : 12px;
                margin-top : 6px;
                margin-bottom : 12px;
                text-overflow : ellipsis;
                width : calc(100% - 24px);
                overflow : hidden;
                display : -webkit-box;
                -webkit-line-clamp : 2;
                -webkit-box-orient : vertical;
                word-wrap : break-word;
            }
            .price{
                width : calc(100% - 18px);
                font-weight : bold;
                font-size : 12px;
                display : flex;
                align-items : baseline;
                justify-content : space-between;
                .price_value{
                    font-weight : bold;
                    font-size : 12px;
                }
            }
        }
        
    }
`

export default ItemList;