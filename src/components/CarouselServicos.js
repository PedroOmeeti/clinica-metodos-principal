import React from 'react';
import Slider from 'react-slick';
import { FaChevronLeft, FaChevronRight, FaChalkboardTeacher } from 'react-icons/fa';
import './CarouselServicos.components.css';
import { RiPsychotherapyLine, RiComputerLine } from "react-icons/ri";
import { IoNutritionOutline } from "react-icons/io5";
import { MdHearing } from "react-icons/md";
import { TbPhysotherapist } from "react-icons/tb";
import { FaHandsHoldingChild } from "react-icons/fa6";
import { LuStethoscope } from "react-icons/lu";
import { MdElderlyWoman, MdGroups, MdOutlinePsychology } from "react-icons/md";
import { GiLovers } from "react-icons/gi";
import { ImHome } from "react-icons/im";
import { SlBriefcase } from "react-icons/sl";
import { IoExtensionPuzzle } from "react-icons/io5";

const services = [
  { icon: <RiPsychotherapyLine />, name: 'Psicologia' },
  { icon: <IoNutritionOutline />, name: 'Nutrição' },
  { icon: <MdHearing />, name: 'Fonoaudiologia' },
  { icon: <TbPhysotherapist />, name: 'Fisioterapia' },
  { icon: <FaHandsHoldingChild />, name: 'Psicopedagogia' },
  { icon: <LuStethoscope />, name: 'Clínica Geral' },
  { icon: <MdElderlyWoman />, name: 'Geriatria' },
  { icon: <GiLovers />, name: 'Terapia de Casal' },
  { icon: <ImHome />, name: 'Terapia Familiar' },
  { icon: <SlBriefcase />, name: 'Orientação Vocacional' },
  { icon: <RiComputerLine />, name: 'Terapia On-line' },
  { icon: <MdGroups />, name: 'Terapia em Grupo' },
  { icon: <MdOutlinePsychology />, name: 'Psiquiatria' },
  { icon: <FaChalkboardTeacher />, name: 'Treinamentos Corporativos' },
  { icon: <IoExtensionPuzzle />, name: 'ABA' },
  // Adicione mais serviços conforme necessário
];

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', left: '-35px', zIndex: 1 }}
      onClick={onClick}
    >
      <FaChevronLeft size={30} />
    </div>
  );
};

const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', right: '-35px', zIndex: 1 }}
      onClick={onClick}
    >
      <FaChevronRight size={30} />
    </div>
  );
};

const ServiceCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className='mb-5' style={{ position: 'relative', padding: '0 50px' }}>
      <h2 className='text-center mt-5'>Nossos Serviços</h2>
      <Slider {...settings}>
        {services.map((service, index) => (
          <div key={index} className="service-item">
            <div className="icon">{service.icon}</div>
            <div className="name">{service.name}</div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ServiceCarousel;