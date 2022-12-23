import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { fetchImages } from 'components/api/api';
import Searchbar from 'components/Searchbar/Searchbar';
import { Gallery } from 'components/ImageGallery/ImageGallery';
import { Loader } from 'components/Loader/Loader';
import { LoadMoreBtn } from 'components/Button/Button';
import Modal from 'components/Modal/Modal';

export default function App() {
  const [page, setPage] = useState(0);
  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);
  const [largeImageURL, setLargeImageURL] = useState('');
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isShowLoadMore, setIsShowLoadMore] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (!page || !query) {
      return;
    }
    setIsLoading(true);

    const queryImage = fetchImages(query, page);
    queryImage
      .then(({ data }) => {
        if (data.hits.length < 12) {
          setIsShowLoadMore(true);
        }
        if (data.total === 0) {
          setIsLoading(false);
          return toast.error('Nothing was found for your request');
        }

        const parsedImages = data.hits.map(
          ({ id, webformatURL, largeImageURL }) => ({
            id,
            webformatURL,
            largeImageURL,
          })
        );
        setImages(images => [...images, ...parsedImages]);
      })
      .catch(() => {
        setError(toast.error('Ups'));
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [page, query]);

  const handleFormSubmit = newQuery => {
    if (newQuery.trim() === '') {
      return toast.warn('Please enter a keyword');
    } else if (newQuery === query) {
      return;
    }
    setQuery(newQuery);
    setPage(1);
    setImages([]);
    setIsLoading(true);
    setIsShowLoadMore(false);
  };

  const loadMore = () => {
    setPage(prevPage => prevPage + 1);
    setIsLoading(true);
  };

  const openModal = index => {
    setShowModal(true);
    setLargeImageURL(images[index].largeImageURL);
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <Searchbar onSubmit={handleFormSubmit} />
      <ToastContainer autoClose={3000} position="top-left" theme="dark" />
      {error && <p>{error}</p>}
      {images.length !== 0 && (
        <Gallery items={images} isOpenModal={openModal} />
      )}
      {showModal && (
        <Modal toggleModal={toggleModal} largeImageURL={largeImageURL} />
      )}
      {isLoading && <Loader />}

      {images.length > 0 && !isLoading && !isShowLoadMore && (
        <LoadMoreBtn onClick={loadMore} />
      )}
    </>
  );
}
