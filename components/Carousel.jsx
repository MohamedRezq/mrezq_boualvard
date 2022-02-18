import React, { Component } from "react";
import Slider from "react-slick";
import ServiceCard from "./ServiceCard";
import hardServicesImg from "./../assets/hard_services.jpg"
import softServicesImg from "./../assets/soft_services.jpg"
import managementServicesImg from "./../assets/management_services.jpg"
import healthServicesImg from "./../assets/healthServicesImg.jpg"
import propertyServicesImg from "./../assets/propertyServicesImg.jpg"
import sterServicesImg from "./../assets/sterServicesImg.jpg"

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", top: "40%" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", top: "40%"}}
      onClick={onClick}
    />
  );
}

export default class CustomArrows extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      responsive: [
        
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 2
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
      
    };
    return (
      <div>
        <Slider {...settings}>
          <ServiceCard title="Hard Services" content="we are specialized in high-quality cleaning services to deliver cleanest work environment." img={hardServicesImg} />
          <ServiceCard title="Management Services" content="we are specialized in high-quality cleaning services to deliver cleanest work environment." img={managementServicesImg} />
          <ServiceCard title="Soft Services" content="we are specialized in high-quality cleaning services to deliver cleanest work environment." img={softServicesImg} />
          <ServiceCard title="Health &#38; Safety Services" content="we are specialized in high-quality cleaning services to deliver cleanest work environment." img={healthServicesImg} />
          <ServiceCard title="Property Management Services" content="we are specialized in high-quality cleaning services to deliver cleanest work environment." img={propertyServicesImg} />
          <ServiceCard title="Sterilisation &#38; Disinfection Services" content="we are specialized in high-quality cleaning services to deliver cleanest work environment." img={sterServicesImg} />
        </Slider>
      </div>
    );
  }
}