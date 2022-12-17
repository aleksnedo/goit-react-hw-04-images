import { Overlay, ModalStyle } from './Modal.styled';
import PropTypes from 'prop-types';

export const Modal = ({ tags, largeImageURL, backdropClick }) => {
  return (
    <Overlay onClick={backdropClick}>
      <ModalStyle>
        <img src={largeImageURL} alt={tags} />
      </ModalStyle>
    </Overlay>
  );
};

Modal.propTypes = {
  tags: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  backdropClick: PropTypes.func,
};
