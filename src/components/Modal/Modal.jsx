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

// export class oldModal extends Component {
//   static propTypes = {
//     toggleModal: PropTypes.func.isRequired,
//     largeImageURL: PropTypes.string.isRequired,
//   };

//   componentDidMount() {
//     window.addEventListener('keydown', this.onClickEscape);
//   }

//   componentWillUnmount() {
//     window.addEventListener('keydown', this.onClickEscape);
//   }

//   onClickEscape = e => {
//     e.code === 'Escape' && this.props.toggleModal();
//   };

//   onClickBackdrop = e => {
//     e.currentTarget === e.target && this.props.toggleModal();
//   };

//   render() {
//     return (
//       <Overlay onClick={this.onClickBackdrop}>
//         <ModalStyle>
//           <img src={this.props.largeImageURL} alt="" />
//         </ModalStyle>
//       </Overlay>
//     );
//   }
// }
