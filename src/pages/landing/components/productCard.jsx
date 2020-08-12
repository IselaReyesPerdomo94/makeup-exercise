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
  display: grid;
  padding: 2.5rem;
  background-color: #e0c2c0;
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
    margin: 0;
    display: flex;
    color: #303030;
    font-size: 1rem;
    list-style: none;
    text-decoration: none;
    align-items: flex-end;
    justify-content: space-evenly;
    font-family: 'Poppins', sans-serif;
  }
`;

const ProductImage = styled.figure`
  margin: 0;
  display: flex;
  justify-content: center;

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
