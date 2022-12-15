// import { Component } from 'react';
import { Overlay, ModalStyle } from './Modal.styled';

export const Modal = ({ tags, largeImageURL, backdropClick }) => {
  return (
    <Overlay onClick={backdropClick}>
      <ModalStyle>
        <img src={largeImageURL} alt={tags} />
      </ModalStyle>
    </Overlay>
  );
};
