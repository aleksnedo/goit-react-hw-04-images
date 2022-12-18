import { Component } from 'react';
import PropTypes from 'prop-types';
import { Overlay, ModalStyle } from './Modal.styled';

export class Modal extends Component {
  static propTypes = {
    toggleModal: PropTypes.func.isRequired,
    largeImageURL: PropTypes.string.isRequired,
  };

  componentDidMount() {
    window.addEventListener('keydown', this.onClickEscape);
  }

  componentWillUnmount() {
    window.addEventListener('keydown', this.onClickEscape);
  }

  onClickEscape = e => {
    e.code === 'Escape' && this.props.toggleModal();
  };

  onClickBackdrop = e => {
    e.currentTarget === e.target && this.props.toggleModal();
  };

  render() {
    return (
      <Overlay onClick={this.onClickBackdrop}>
        <ModalStyle>
          <img src={this.props.largeImageURL} alt="" />
        </ModalStyle>
      </Overlay>
    );
  }
}

// export const Modal = ({ tags, largeImageURL, backdropClick }) => {
//   return (
// <Overlay onClick={backdropClick}>
//   <ModalStyle>
//     <img src={largeImageURL} alt={tags} />
//   </ModalStyle>
// </Overlay>
//   );
// };

// Modal.propTypes = {
//   tags: PropTypes.string.isRequired,
//   largeImageURL: PropTypes.string.isRequired,
//   backdropClick: PropTypes.func,
// };
