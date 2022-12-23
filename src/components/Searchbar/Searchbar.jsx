import { useState } from 'react';
import PropTypes from 'prop-types';
import { ImSearch } from 'react-icons/im';
import {
  Header,
  SearchForm,
  SearchButton,
  ButtonLabel,
  SearchInput,
} from './Searchbar.styled';

export default function Searchbar({ onSubmit }) {
  const [query, setQuery] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(query);
    setQuery('');
  };

  const handleFormChange = e => {
    const { value } = e.currentTarget;
    setQuery(value.toLowerCase());
  };

  return (
    <Header>
      <SearchForm onSubmit={handleSubmit}>
        <SearchButton type="submit">
          <ImSearch />
          <ButtonLabel>Search</ButtonLabel>
        </SearchButton>

        <SearchInput
          type="text"
          autoComplete="off"
          value={query}
          placeholder="Search images and photos"
          onChange={handleFormChange}
        />
      </SearchForm>
    </Header>
  );
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
