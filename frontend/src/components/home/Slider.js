
import React from "react";
import { testimonial } from "../data/Data";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useInView } from 'react-intersection-observer';

export default function Sliders() {
  const { ref, inView } = useInView({ threshold: 0.1 });

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,           // Enable autoplay
    autoplaySpeed: 3000,      // Set delay for auto-slide in milliseconds
    cssEase: "linear",        // Smooth animation transition
  };

  return (
    <div
      ref={ref}
      className={`container-xxl testimonial my-5 py-5 bg-dark wow ${inView ? "animate__animated animate__fadeIn" : "opacity-0"}`}
      style={{ transition: 'opacity 0.5s ease-in-out' }}
    >
      <div className="container">
        <div className="owl-carousel testimonial-carousel py-5">
          <Slider {...settings}>
            {testimonial.map((item, key) => (
              <div
                key={key}
                className="testimonial-item position-relative bg-white rounded overflow-hidden shadow-lg transition-transform duration-500 hover:scale-105"
              >
                <p className="p-4">{item.description}</p>
                <div className="d-flex align-items-center px-4 pb-4">
                  <img
                    className="img-fluid flex-shrink-0 rounded-full"
                    src={item.img}
                    alt={item.name}
                    style={{ width: "45px", height: "45px" }}
                  />
                  <div className="ps-3">
                    <h6 className="fw-bold mb-1">{item.name}</h6>
                    <small className="text-muted">{item.profession}</small>
                  </div>
                </div>
                {item.icon}
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}
