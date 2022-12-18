import { Component } from 'react';
import { toast } from 'react-toastify';
import { ImSearch } from 'react-icons/im';
import {
  Header,
  SearchForm,
  SearchButton,
  ButtonLabel,
  SearchInput,
} from './Searchbar.styled';

export class Searchbar extends Component {
  state = {
    query: '',
  };

  onQueryFormChange = evt => {
    const { value } = evt.currentTarget;
    this.setState({ query: value.toLowerCase() });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.query.trim() === '') {
      return toast.warn('Please enter a keyword');
    }
    this.props.onSubmit(this.state.query);
    this.setState({ query: '' });
  };

  render() {
    return (
      <Header>
        <SearchForm onSubmit={this.handleSubmit}>
          <SearchButton type="submit">
            <ImSearch />
            <ButtonLabel>Search</ButtonLabel>
          </SearchButton>

          <SearchInput
            type="text"
            autoComplete="off"
            value={this.state.query}
            placeholder="Search images and photos"
            onChange={this.onQueryFormChange}
          />
        </SearchForm>
      </Header>
    );
  }
}
