import { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import { fetchImages } from 'components/api/api';
import { Searchbar } from 'components/Searchbar/Searchbar';
import { Gallery } from 'components/ImageGallery/ImageGallery';

export class App extends Component {
  state = {
    query: '',
    page: 1,
    images: [],
    isLoading: false,
    error: null,
  };

  handleFormSubmit = query => {
    this.setState({ query });
  };

  render() {
    return (
      <>
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ToastContainer autoClose={3000} position="top-left" theme="dark" />
        <Gallery items={this.state.images} />
      </>
    );
  }
}
