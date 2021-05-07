import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Imagen1 from '../src/img/IMG_3792.JPG';
import Imagen2 from '../src/img/IMG_3807.JPG';
import Imagen3 from '../src/img/IMG_3812.JPG';
import Imagen4 from '../src/img/IMG_5364.jpeg';
import Imagen5 from '../src/img/IMG_5422.JPG';

const items = [
  {
    src: Imagen1,
    altText: 'Imagen 1',
    caption: 'Highlands'
  },
  {
    src: Imagen2,
    altText: 'Imagen 2',
    caption: 'Highlands'
  },
  {
    src: Imagen3,
    altText: 'Imagen 3',
    caption: 'Highlands'
  },
  {
    src: Imagen4,
    altText: 'Imagen 4',
    caption: 'Highlands'
  },
  {
    src: Imagen5,
    altText: 'Imagen 5',
    caption: 'Highlands'
  }
];

const App = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} width="100%" height="750px" />
        <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
      </CarouselItem>
    );
  });

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
    >
      <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
      {slides}
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
    </Carousel>
  );
}

export default App;