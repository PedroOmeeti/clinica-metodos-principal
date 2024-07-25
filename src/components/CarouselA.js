import "./CarouselA.components.css";
import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from 'reactstrap';





import Carrosel1 from './img/carrousel1.png'
import Carrosel2 from './img/psicologo novo.png'

import Carrosel3 from './img/fonocarrossel.png'
import Carrosel4 from './img/nutricao.png'
import "./CarouselA.components.css"


const items = [
  {
    src: [Carrosel1],
    key: 1,
    caption: 'Paciente e profissionais atuando juntos em prol da saúde',
    captionClass: 'caption1',
  },
  {
    src: [Carrosel2],
    key: 2,
    caption: 'PSICOLOGIA',
    captionClass: 'caption2',
  },
  {
    src: [Carrosel3],
    caption: 'FONOAUDIOLOGIA',
    key: 3,
    captionClass: 'caption3',
  },

  {
    src: [Carrosel4],
    caption: 'NUTRIÇÃO',
    key: 4,
    captionClass: 'caption4',
  }



];




function CarouselA() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} className='img-fluid' />
        <CarouselCaption

          captionHeader={item.caption}
          className={item.captionClass}
        />

      </CarouselItem>
    );
  });

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous} className='d-none d-sm-block'
    >
      <CarouselIndicators
        items={items}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
      />
      {slides}
      <CarouselControl
        direction="prev"
        directionText="Previous"
        onClickHandler={previous}
      />
      <CarouselControl
        direction="next"
        directionText="Next"
        onClickHandler={next}
      />
    </Carousel>
  );
}

export default CarouselA;