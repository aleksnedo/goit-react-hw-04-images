import { Component } from 'react';
import PropTypes from 'prop-types';
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
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.query);
    // e.preventDefault();
    // if (this.state.query.trim() === '') {
    //   return toast.warn('Please enter a keyword');
    // }
    // this.props.onSubmit(this.state.query);
    // this.setState({ query: '' });
  };

  handleFormChange = e => {
    const { value } = e.currentTarget;
    this.setState({ query: value.toLowerCase() });
  };

  render() {
    const { handleSubmit, handleFormChange } = this;

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
            value={this.state.query}
            placeholder="Search images and photos"
            onChange={handleFormChange}
          />
        </SearchForm>
      </Header>
    );
  }
}
