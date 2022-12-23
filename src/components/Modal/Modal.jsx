import { useEffect } from 'react';
// import PropTypes from 'prop-types';
import { Overlay, ModalStyle } from './Modal.styled';

export default function Modal({ toggleModal, largeImageURL }) {
  useEffect(() => {
    const onClickEscape = e => e.code === 'Escape' && toggleModal();
    window.addEventListener('keydown', onClickEscape);
    return () => {
      window.removeEventListener('keydown', onClickEscape);
    };
  });

  const onClickBackdrop = e => {
    e.currentTarget === e.target && toggleModal();
  };

  return (
    <Overlay onClick={onClickBackdrop}>
      <ModalStyle>
        <img src={largeImageURL} alt="" />
      </ModalStyle>
    </Overlay>
  );
}
