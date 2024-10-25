
import React, { useRef, useState, useEffect } from "react";
import { socialIcons, team } from "../data/Data";
import CommonHeading from "../common/CommonHeading";
import 'animate.css';

export default function Teams() {
  // Create refs for team members
  const teamRefs = useRef([]);
  const [inView, setInView] = useState(Array(team.length).fill(false));

  const handleScroll = () => {
    const newInView = [...inView];

    teamRefs.current.forEach((ref, index) => {
      if (ref && ref.getBoundingClientRect().top < window.innerHeight) {
        newInView[index] = true;
      }
    });

    setInView(newInView);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="container-xxl py-5">
      <div className="container">
        <CommonHeading heading="Our Team" subtitle="Explore Our" title="Staffs" />
        <div className="row g-4">
          {team.map((item, index) => (
            <div
              className={`col-lg-3 col-md-6`}
              key={index}
              ref={el => teamRefs.current[index] = el}
            >
              <div
                className={`rounded shadow overflow-hidden transition-all duration-700 ${
                  inView[index]
                    ? index % 2 === 0
                      ? "animate__animated animate__fadeInLeft"
                      : "animate__animated animate__fadeInRight"
                    : "opacity-0"
                }`}
              >
                <div className="position-relative">
                  <img className="img-fluid" src={item.image} alt="img" />
                  <div className="position-absolute start-50 top-100 translate-middle d-flex align-items-center">
                    {socialIcons.slice(0, 3).map((val, index) => (
                      <a
                        className="btn btn-square btn-primary mx-1"
                        href=""
                        key={index}
                      >
                        {val.icon}
                      </a>
                    ))}
                  </div>
                </div>
                <div className="text-center p-4 mt-3">
                  <h5 className="fw-bold mb-0">{item.name}</h5>
                  <small>{item.designation}</small>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
