import React, { useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Product from './components/Product';
import Header from './components/Header';

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap');

  body {
    font-family: 'Poppins', sans-serif;
    margin: 0;
    padding: 0;
  }
`;

const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 20px;
  padding: 20px;
`;

const AppContainer = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
`;

const BackgroundImage = styled.img`
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
object-fit: cover;
clip-path: polygon(0 0, 100% 0, 100% 80%, 50% 95%, 0 80%);
z-index: -1;
/* opacity: 0.9; Cambia este valor para ajustar la opacidad */
`;

const App = () => {
  const [cart, setCart] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const addToCart = (product) => {
    const existingItemIndex = cart.findIndex(item => item.name === product.name);
    if (existingItemIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[existingItemIndex].quantity++;
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const handleSearch = (searchTerm) => {
    const filtered = allProducts.filter(product =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  const allProducts = [
    { name: "XTECH CASE", price: 10, image: "https://www.intelaf.com/images/productos/gran/casxtxtq100-r.jpg", description: "LIQUIDACION CASE XTECH MICROATX XTQ-100 CON FUENTE DE 250 WATTS REAL" },
    { name: "TARJETA MADRE ASUS ", price: 10, image: "https://www.intelaf.com/images/productos/gran/mb-as-tga620mpw.jpg", description: "TARJETA MADRE ASUS TUF GAMING A620M-PLUS WIFI SOCKET AMD AM5 4x SLOT PARA MEMORIA RAM DDR5" },
    { name: "TARJETA PCI ", price: 10, image: "https://www.intelaf.com/images/productos/gran/tarjpcipar-mh-1.jpg", description: "MANHATTAN 158220 TARJETA PCI PARALELO UN PUERTO DB25" },
    { name: "TARJETA DE VIDEO ASUS", price: 10, image: "https://www.intelaf.com/images/productos/gran/vd-as-gt10302gc.jpg", description: "TARJETA DE VIDEO ASUS GEFORCE GT 1030 2GB DDR5 64BIT PCI EXPRESS 3.0" },
    { name: "TARJETA DE VIDEO ASUS", price: 10, image: "https://www.intelaf.com/images/productos/gran/vd-as-phg1030o2.jpg", description: "TARJETA DE VIDEO ASUS GEFORCE GT 1030 OC 2GB GDDR5 64BIT PCI EXPRESS 3.0" },
    { name: "MEMORIA RAM KINGSTON ", price: 10, image: "https://www.intelaf.com/images/productos/gran/ddr4-8kn-fr2a36.jpg", description: "MEMORIA RAM KINGSTON FURY DDR4 8GB 3600MHZ CL16 COLOR NEGRO RGB KF436C16RB2A/8" },
    { name: "MEMORIA RAM KINGSTON", price: 10, image: "https://www.intelaf.com/images/productos/gran/ddr4-16-knf1236.jpg", description: "MEMORIA RAM KINGSTON FURY DDR4 16GB 3600MHZ CL16 COLOR NEGRO KF436C16RB12/16" },
    { name: "MONITOR LED ASUS", price: 10, image: "https://www.intelaf.com/images/productos/gran/ledasusv24ehf-r.jpg", description: "LIQUIDACION MONITOR LED ASUS DE 23.8 PULGADAS EYECARE PARA GAMING RESOLUCION DE 1920 x1080 VA24EHF HD" },
    { name: "MONITOR LED ASUS", price: 10, image: "https://www.intelaf.com/images/productos/gran/led-asu-vy279hf.jpg", description: "MONITOR LED ASUS 27 1920x1080 VY279HF HDMI IPS 100Hz" },
    { name: "DELL", price: 10, image: "https://www.intelaf.com/images/productos/gran/hp-pb450-7z7h9l.jpg", description: "DELL INSPIRON 3535 RYZEN 3 7320U 2.4GHZ 8GB 512GB M.2 PCI-e 15 W11H" },
    { name: "Cable Manhattan", price: 10, image: "https://www.intelaf.com/images/productos/gran/cab-mh-svga6.jpg", description: "Cable Manhattan 311731 SVGA 6 Pies / 1.8 Metros 28AWG" },
    { name: "DISCO DURO INTERNO ", price: 10, image: "https://www.intelaf.com/images/productos/gran/1tb-seasky-sat6.jpg", description: "DISCO DURO INTERNO 1TB SEAGATE SKYHAWK PARA VIGILANCIA SATA 6GBPS 64MB" },
    // Más productos...
  ];

  useState(() => {
    setFilteredProducts(allProducts);
  }, []);

  return (
    <>
      <GlobalStyles />
      <AppContainer>
        <BackgroundImage src="https://images.unsplash.com/photo-1607799279861-4dd421887fb3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Background Image" />
        <Header onSearch={handleSearch} />
        <ProductsGrid>
          {filteredProducts.map((product, index) => (
            <Product
              key={index}
              name={product.name}
              price={product.price}
              image={product.image}
              description={product.description}
              addToCart={() => addToCart(product)}
            />
          ))}
        </ProductsGrid>
      </AppContainer>
    </>
  );
};

export default App;
