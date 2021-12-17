import PropTypes from 'prop-types';
import styled from 'styled-components';

const ItemDetail = ({coverImg, name}) => {
    return (
        <ItemDetailCSS>
            <img src={coverImg} alt={name} className="item-cover"/>
            <h1>{name}</h1>
        </ItemDetailCSS>
    )
};

ItemDetail.propTypes ={
    coverImg : PropTypes.string.isRequired,
    name : PropTypes.string.isRequired,
}

const ItemDetailCSS = styled.div`
    .item-cover{
        width : 100%;
    }
`

export default ItemDetail;