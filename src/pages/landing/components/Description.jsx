import React from 'react';
import styled from '@emotion/styled';

const DescriptionStyled = styled.div`
    display: grid;
    grid-template-rows: 1fr 1fr;
    background-color: #FCFAFA;
    gap: 1rem;
    padding: 2.5rem;
`;

const HeaderStyled = styled.header`
    display: flex;
    justify-content: flex-end;
`;

const Title = styled.h2`
    font-family: 'Vidaloka', serif;
`

const Description = () => {
    return(
        <DescriptionStyled>
            <HeaderStyled>
                shop
                <Title>
    All about the base
</Title>
            </HeaderStyled>

        </DescriptionStyled>
    )
};

export default Description;

