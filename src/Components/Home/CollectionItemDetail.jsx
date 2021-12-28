import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const CollectionItemDetail = ({ id , itemImages, brandName, itemName, itemPrice }) => {
    return(
        <CollectionItemDetailCSS>
            <Link to={`/item/${id}`}>
                <div className="item">
                    <div className="item-thumbnail" style={{backgroundImage : `url(${itemImages})`}}>
                        <div className="cover"></div>
                    </div>
                    <div className="item-contents">
                        <div className="brand-name">{brandName}</div>
                        <div className="item-name">{itemName}</div>
                        <div className="item-price">
                            <div className="item-price_value">{itemPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원</div>
                        </div>
                    </div>
                </div>
            </Link>
        </CollectionItemDetailCSS>
    )
}

const CollectionItemDetailCSS = styled.div`
    .item{
        margin-top : 3px;
        margin-bottom : 3px;
        .item-thumbnail{
            text-align:center;
            overflow-y:hidden;
            position:relative;
            text-align:center;
            border-radius:6px;
            /* opacity:0; */
            background-size:cover;
            background-repeat:no-repeat;
            background-position:center;
            width : 204px;
            height : 250px;
            margin-right : 8px;
            margin-bottom : 8px;
            
        }
        .item-contents{
            width : auto;
            display : flex;
            flex-direction : column;
            justify-content : center;
            padding-left : 1.2px;
            .brand-name{
                color : #212121;
                font-size : 12px;
                font-weight : 700;
            }
            .item-name{
                font-size : 11px;
                margin-bottom : 6px;
                display : -webkit-box;
                -webkit-line-clamp : 2;
                -webkit-box-orient : vertical;
                width : 100%;
                heigth : 30px;
                line-height : 16px;
                overflow : hidden;
                text-overflow : ellipsis;
                color : #212121;
                font-weight : 400;
            }
            .item-price{
                display : flex;
                .item-price_value{
                    font-weight : 700;
                    font-size : 11px;
                }
            }
        }
    }
`

export default CollectionItemDetail;