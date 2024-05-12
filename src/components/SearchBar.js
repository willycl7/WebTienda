import React, { useState } from 'react';
import styled from 'styled-components';

const SearchInput = styled.input`
  padding: 10px 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  width: 200px;
  transition: width 0.3s ease;

  &:focus {
    width: 300px;
    outline: none;
  }
`;

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
    onSearch(event.target.value); // Llama a la función onSearch
  };

  return (
    <SearchInput
      type="text"
      placeholder="Buscar productos."
      value={searchTerm}
      onChange={handleChange}
    />
  );
};

export default SearchBar;
