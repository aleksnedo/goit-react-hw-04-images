import { GalleryList } from './ImageGallery.styled';
import PropTypes from 'prop-types';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

export const Gallery = ({ items, isOpenModal }) => {
  return (
    <GalleryList>
      {items.map(({ id, webformatURL }, index) => {
        return (
          <ImageGalleryItem
            key={id}
            webformatURL={webformatURL}
            index={index}
            isOpenModal={isOpenModal}
          />
        );
      })}
    </GalleryList>
  );
};

Gallery.propTypes = {
  isOpenModal: PropTypes.func.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
    })
  ),
};
