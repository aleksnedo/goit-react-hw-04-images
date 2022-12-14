import { Component } from 'react';
import { GalleryItem, GalleryImage } from './ImageGalleryItem.styled';

export class ImageGalleryItem extends Component {
  state = { isShowModal: false };

  render() {
    return (
      <GalleryItem>
        <GalleryImage
          src={this.props.webformatURL}
          alt={this.props.tags}
        ></GalleryImage>
      </GalleryItem>
    );
  }
}
