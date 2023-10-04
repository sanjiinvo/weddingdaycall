import React, { Component } from 'react';

class ImagePreloader extends Component {
  constructor(props) {
    super(props);

    this.state = {
      imagesLoaded: false,
    };
  }

  componentDidMount() {
    const { imageUrls } = this.props;
    const images = [];

    // Создаем новые изображения и устанавливаем обработчики событий загрузки
    imageUrls.forEach((url) => {
      const image = new Image();
      image.src = url;
      image.onload = this.handleImageLoad;
      images.push(image);
    });

    this.setState({ images });
  }

  handleImageLoad = () => {
    const { images } = this.state;
    const { imageUrls } = this.props;

    // Проверяем, все ли изображения загружены
    if (images.length === imageUrls.length) {
      this.setState({ imagesLoaded: true });
    }
  };

  render() {
    const { imagesLoaded } = this.state;
    const { children } = this.props;

    return imagesLoaded ? children : null;
  }
}

export default ImagePreloader;
