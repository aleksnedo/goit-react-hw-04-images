import { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { fetchImages } from 'components/api/api';
import { Searchbar } from 'components/Searchbar/Searchbar';
import { Gallery } from 'components/ImageGallery/ImageGallery';
import { Loader } from 'components/Loader/Loader';
import { LoadMoreBtn } from 'components/Button/Button';
import { Modal } from 'components/Modal/Modal';

export class App extends Component {
  state = {
    page: 0,
    query: '',
    images: [],
    largeImageURL: '',
    totalImages: 0,
    error: null,
    isLoading: false,
    showModal: false,
  };

  async componentDidUpdate(_, prevState) {
    const { page, query } = this.state;

    if (prevState.page !== page || prevState.query !== query) {
      try {
        this.setState({ isLoading: true });

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

    // if (
    //   prevState.query !== this.state.query ||
    //   prevState.page !== this.state.page
    // ) {
    //   try {
    //     this.setState({ isLoading: true, images: [] });
    //     const { query, page } = this.state;
    //     const queryImage = await fetchImages(query, page);
    //     this.setState(prevState => ({
    //       images: [...prevState.images, ...queryImage],
    //     }));
    //   } catch (error) {
    //     toast.error('Fetch Error');
    //   } finally {
    //     this.setState({ isLoading: false });
    //   }
    // }
  }

  handleFormSubmit = query => {
    if (query.trim() === '') {
      return toast.warn('Please enter a keyword');
    } else if (query === this.state.query) {
      return;
    }
    this.setState({ query: query, page: 1, images: [], isLoading: true });
  };

  loadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
      isLoading: true,
    }));
  };

  openModal = index => {
    this.setState(({ images }) => ({
      showModal: true,
      largeImageURL: images[index].largeImageURL,
    }));
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };

  render() {
    const { isLoading, images, largeImageURL, showModal } = this.state;
    const { toggleModal, openModal, handleFormSubmit, loadMore } = this;

    return (
      <>
        <Searchbar onSubmit={handleFormSubmit} />
        {images.length !== 0 && (
          <Gallery items={images} isOpenModal={openModal} />
        )}
        <ToastContainer autoClose={3000} position="top-left" theme="dark" />
        {showModal && (
          <Modal toggleModal={toggleModal} largeImageURL={largeImageURL} />
        )}
        {isLoading && <Loader />}

        {images.length > 0 && !isLoading && <LoadMoreBtn onClick={loadMore} />}
      </>
    );
  }
}
