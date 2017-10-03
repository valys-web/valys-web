import React from 'react';

import Carousel from 'react-bootstrap/lib/Carousel';
import Image from './Resources/Image';

const MainCarousel = () => (
  <div className="container">
    <Carousel interval={null}>
      <Carousel.Item>
        <img src="img/carousel-1.jpg"/>
      </Carousel.Item>
      <Carousel.Item>
        <img src="img/carousel-2.jpg"/>
      </Carousel.Item>
      <Carousel.Item>
        <img src="img/carousel-3.jpg"/>
      </Carousel.Item>
    </Carousel>
  </div>
);

export default MainCarousel;
