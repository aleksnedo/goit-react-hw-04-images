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
// export class ImageGalleryItem extends Component {
//   state = { isShowModal: false };

//   componentDidMount() {
//     window.addEventListener('keydown', this.onClickEscape);
//   }

//   componentWillUnmount() {
//     window.removeEventListener('keydown', this.onClickEscape);
//   }

//   onClickEscape = e => {
//     if (this.state.isShowModal) {
//       if (e.code === 'Escape') {
//         this.toggleModal();
//       }
//     }
//   };

//   onClickBackdrop = e => {
//     if (this.state.isShowModal) {
//       if (e.currentTarget === e.target) {
//         this.toggleModal();
//       }
//     }
//   };

//   toggleModal = () => {
//     this.setState(({ isShowModal }) => ({ isShowModal: !isShowModal }));
//   };

//   render() {
//     const { tags, largeImageURL, webformatURL } = this.props;
//     const { isShowModal } = this.state;
//     return (
// <GalleryItem>
//   <GalleryImage
//     src={webformatURL}
//     alt={tags}
//     onClick={this.toggleModal}
//   />
//   {isShowModal && (
//     <Modal
//       largeImageURL={largeImageURL}
//       tags={tags}
//       onClick={this.onClickBackdrop}
//     />
//   )}
// </GalleryItem>
//     );
//   }
// }
