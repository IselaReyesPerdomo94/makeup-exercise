import React from 'react';
import styled from '@emotion/styled';
import ProductCard from './pages/landing/components/productCard';

const Container = styled.body`
    display: flex;
    box-sizing: border-box;
    height: 100vh;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #EAC9C7;
`
function App() {
    return (
        <Container>
            <ProductCard />
        </Container>
        
    );
}

export default App;