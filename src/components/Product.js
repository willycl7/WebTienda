import React from 'react';
import styled from 'styled-components';

const ProductCard = styled.div`
  background-color: #f9f9f9;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  opacity: 85%;
`;

const ProductImageContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const ProductImage = styled.img`
  max-height: 100px;
  max-width: 100px;
`;

const ProductInfo = styled.div`
  text-align: center;
  margin-top: 10px; /* Ajusta el margen superior aquí */
`;

const ProductName = styled.h3`
  margin: 0;
  font-size: 18px;
`;

const ProductDescription = styled.p`
  margin: 0;
  margin-top: 1px; /* Ajusta el margen superior aquí */
  font-size: 14px;
  color: #666;
`;

const ProductPrice = styled.h3`
  margin: 0;
  margin-top: 1px; /* Ajusta el margen superior aquí */
  font-size: 16px;
`;

const AddToCartButton = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  margin-top: 4px; /* Ajusta el margen superior aquí */
  cursor: pointer;
  transition: background-color 0.3s ease;
  align-self: center;

  &:hover {
    background-color: #0056b3;
  }
`;

const Product = ({ name, price, image, description, addToCart }) => {
  return (
    <ProductCard>
      <ProductImageContainer>
        <ProductImage src={image} alt={name} />
      </ProductImageContainer>
      <ProductInfo>
        <ProductName>{name}</ProductName>
        <ProductDescription>{description}</ProductDescription>
        <ProductPrice>${price}</ProductPrice>
        <AddToCartButton onClick={addToCart}>Añadir al carrito</AddToCartButton>
      </ProductInfo>
    </ProductCard>
  );
};

export default Product;
