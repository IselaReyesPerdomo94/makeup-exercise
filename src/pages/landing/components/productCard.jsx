import React from "react";
import styled from "@emotion/styled";

import logo from "../../../assets/clinique-logo.png";
import allAboutTheEyes from "../../../assets/all-about-the-eyes.png";

import Description from "./Description";

const ContainerStyled = styled.section`
  width: 77%;
  height: 93vh;
  display: grid;
  grid-template-columns: 1fr 47%;
  border-radius: 50px;
  box-sizing: border-box;
  overflow: hidden;
  align-self: center;
  box-shadow: -1px 28px 165px -77px rgba(112, 101, 112, 1);
`;

const Product = styled.div`
  background-color: #e0c2c0;
  padding: 2.5rem;
  display: grid;
  grid-template-rows: 30% 70%;
`;

const HeaderStyled = styled.header`
  display: flex;
  justify-content: space-between;

  img {
    height: 3rem;
  }

  nav {
    width: 90%;
  }

  ul { 
    height: 3rem;
    display: flex;
    justify-content: space-evenly;
    text-decoration: none;
    list-style: none;
    font-family: 'Poppins', sans-serif;
    color: #303030;
    font-size: 1rem;
    margin: 0;
    align-items: flex-end;
  }
`;

const ProductImage = styled.figure`
  display: flex;
  justify-content: center;
  margin: 0;

  img {
    height: 100%;
  }
`;

const ProductCard = () => {
  return (
    <ContainerStyled>
      <Product>
        <HeaderStyled>
          <img alt="logo" src={logo} />
          <nav>
            <ul>
              <li>Home</li>
              <li>Catalog</li>
              <li>Last chance</li>
              <li>Clinical reality</li>
            </ul>
          </nav>
        </HeaderStyled>
        <ProductImage>
          <img alt="product" src={allAboutTheEyes} />
        </ProductImage>
      </Product>
      <Description />
    </ContainerStyled>
  );
};

export default ProductCard;
