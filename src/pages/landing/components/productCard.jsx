import React from 'react';
import styled from '@emotion/styled'

import Description from './Description';

const ContainerStyled = styled.section`
    width: 77%;
    height: 93vh;
    display: grid;
    grid-template-columns: 1fr 47%;
    border-radius: 50px;
    box-sizing: border-box;
    overflow: hidden;
    align-self: center;
    box-shadow: -1px 28px 165px -77px rgba(112,101,112,1);
`;

const Product = styled.div`
    background-color: #E0C2C0;
`

const ProductCard = () => {
    return(<ContainerStyled>
        <Product/>
        <Description/>
    </ContainerStyled>)
};

export default ProductCard;