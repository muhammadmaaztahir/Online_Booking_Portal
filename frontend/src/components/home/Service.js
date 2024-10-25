
import React from "react";
import CommonHeading from "../common/CommonHeading";
import { services } from "../data/Data";

export default function Services() {
  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
          <CommonHeading
            heading="Our Services"
            title="Services"
            subtitle="Explore Our"
          />
        </div>
        <div className="row g-4">
          {services.map((item, index) => (
            <div className="col-lg-4 col-md-6" key={index}>
              <div className="card rounded shadow overflow-hidden h-100 position-relative">
                <div className="card-body d-flex flex-column align-items-center justify-content-center text-center">
                  <div className="service-icon bg-transparent mb-3">
                    <div className="w-100 h-100 d-flex align-items-center justify-content-center">
                      {item.icon}
                    </div>
                  </div>
                  <h5 className="mb-3">{item.name}</h5>
                  <p className="text-body mb-0">{item.discription}</p>
                </div>
                <div className="flip-card-back position-absolute top-0 left-0 w-100 h-100 d-flex align-items-center justify-content-center bg-primary text-white rounded">
                  <div>
                    <h5 className="mb-3">More About {item.name}</h5>
                    <p>{item.discription}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Add the following styles to your CSS file */}
      <style jsx>{`
        .card {
          perspective: 1000px;
        }

        .card:hover .flip-card-back {
          transform: rotateY(0deg);
        }

        .flip-card-back {
          transform: rotateY(180deg);
          transition: transform 0.6s;
          backface-visibility: hidden;
        }

        .card-body {
          transition: transform 0.6s;
          backface-visibility: hidden;
        }
      `}</style>
    </div>
  );
}











