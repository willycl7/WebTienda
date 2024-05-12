import React from 'react';
import styled from 'styled-components';
import SearchBar from './SearchBar';

const HeaderContainer = styled.header`
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
`;

const Ul = styled.ul`
  list-style: none;
  display: flex;
`;

const Li = styled.li`
  margin-right: 20px;
`;

const A = styled.a`
  text-decoration: none;
  color: #ffff;
  font-weight: bold;
`;

const ControlsContainer = styled.div`
  display: flex;
  align-items: center;
`;

const CartIcon = styled.div`
  color: #ffff;
  font-size: 24px;
  cursor: pointer;
  margin-left: 20px; /* Ajusta el margen entre el icono del carrito y el SearchBar */
`;

const Header = ({ onSearch }) => {
  return (
    <HeaderContainer>
      <Nav>
        <Ul>
          <Li><A href="https://mrcrisss.github.io/trabajo-logica/index.html">Inicio</A></Li>
          <Li><A href="https://mrcrisss.github.io/trabajo-logica/acerca.html">Acerca de</A></Li>
          <Li><A href="https://mrcrisss.github.io/trabajo-logica/contacto.html">Contacto</A></Li>
          <Li><A href="https://mrcrisss.github.io/trabajo-logica/cotizacion.html">Cotizar</A></Li>
        </Ul>
      </Nav>
      <ControlsContainer>
        <SearchBar onSearch={onSearch} />
        <CartIcon>
          <i className="fas fa-shopping-cart"></i>
        </CartIcon>
      </ControlsContainer>
    </HeaderContainer>
  );
};

export default Header;
