import PropTypes from 'prop-types';
import { GalleryItem, GalleryImage } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ webformatURL, isOpenModal, index }) => {
  return (
    <GalleryItem>
      <GalleryImage
        src={webformatURL}
        alt=""
        onClick={() => isOpenModal(index)}
      />
    </GalleryItem>
  );
};

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  isOpenModal: PropTypes.func,
};
