import { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { fetchImages } from 'components/api/api';
import { Searchbar } from 'components/Searchbar/Searchbar';
import { Gallery } from 'components/ImageGallery/ImageGallery';
import { Loader } from 'components/Loader/Loader';

export class App extends Component {
  state = {
    page: 1,
    query: '',
    error: null,
    images: [],
    isLoading: false,
  };

  async componentDidUpdate(_, prevState) {
    if (
      prevState.query !== this.state.query ||
      prevState.page !== this.state.page
    ) {
      try {
        this.setState({ isLoading: true, images: [] });

        const { query, page } = this.state;
        const queryImage = await fetchImages(query, page);
        this.setState(prevState => ({
          images: [...prevState.images, ...queryImage],
        }));
      } catch (error) {
        toast.error('Fetch Error');
      } finally {
        this.setState({ isLoading: false });
      }
    }
  }

  handleFormSubmit = query => {
    this.setState({
      query,
      page: 1,
      error: null,
      images: [],
      isLoading: false,
    });
  };

  render() {
    const { isLoading, error, query, images } = this.state;
    return (
      <>
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ToastContainer autoClose={3000} position="top-left" theme="dark" />
        {isLoading && <Loader />}
        {error && <p>{error}</p>}
        {query && <Gallery items={images} />}
      </>
    );
  }
}
