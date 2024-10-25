
import React, { useState, useEffect } from "react";
import Heading from "../common/Heading";
import { about } from "../data/Data";
import { useInView } from "react-intersection-observer";

export default function About() {
  // State for counting
  const [counts, setCounts] = useState([0, 0, 0]);

  // Set up the intersection observer for the counters
  const { ref: counterRef, inView: countersInView } = useInView({ threshold: 0.1 });

  useEffect(() => {
    if (countersInView) {
      const counters = [...counts];
      const interval = setInterval(() => {
        let done = true;
        for (let i = 0; i < counters.length; i++) {
          if (counters[i] < parseInt(about[i].count)) {
            counters[i] += Math.ceil(parseInt(about[i].count) / 20); // Adjust this value to control speed
            done = false;
          }
        }
        setCounts([...counters]);
        if (done) clearInterval(interval);
      }, 100); // Moderate interval time
      return () => clearInterval(interval);
    }
  }, [countersInView, counts]);

  // Image visibility state
  const { ref: imgRef1, inView: imgInView1 } = useInView({ threshold: 0.1 });
  const { ref: imgRef2, inView: imgInView2 } = useInView({ threshold: 0.1 });
  const { ref: imgRef3, inView: imgInView3 } = useInView({ threshold: 0.1 });
  const { ref: imgRef4, inView: imgInView4 } = useInView({ threshold: 0.1 });

  return (
    <>
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6">
              <h6 className="section-title text-start text-primary text-uppercase">
                About Us
              </h6>
              <h1 className="mb-4">
                Welcome to{" "}
                <span className="text-primary text-uppercase">Hotelier</span>
              </h1>
              <p className="mb-4">
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit,
                sed stet lorem sit clita duo justo magna dolore erat amet
              </p>
              <div className="row g-3 pb-4">
                {about.map((item, index) => (
                  <div className="col-sm-4" key={index} ref={counterRef}>
                    <div className="border rounded p-1">
                      <div className="border rounded text-center p-4">
                        {item.icon}
                        <h2 className="mb-1" data-toggle="counter-up">
                          {countersInView ? counts[index] : 0}
                        </h2>
                        <p className="mb-0">{item.text}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <a className="btn btn-primary py-3 px-5 mt-2" href="">
                Explore More
              </a>
            </div>
            <div className="col-lg-6">
              <div className="row g-3">
                <div className="col-6 text-end" ref={imgRef1}>
                  <img
                    className={`img-fluid rounded w-75 transition-all duration-700 ${imgInView1 ? "animate__animated animate__fadeInLeft" : "opacity-0"}`}
                    src="/assets/img/about-1.jpg"
                    style={{ marginTop: "25%" }}
                    alt="About Us Image 1"
                  />
                </div>
                <div className="col-6 text-start" ref={imgRef2}>
                  <img
                    className={`img-fluid rounded w-100 transition-all duration-700 ${imgInView2 ? "animate__animated animate__fadeInRight" : "opacity-0"}`}
                    src="/assets/img/about-2.jpg"
                    alt="About Us Image 2"
                  />
                </div>
                <div className="col-6 text-end" ref={imgRef3}>
                  <img
                    className={`img-fluid rounded w-50 transition-all duration-700 ${imgInView3 ? "animate__animated animate__fadeInUp" : "opacity-0"}`}
                    src="/assets/img/about-3.jpg"
                    alt="About Us Image 3"
                  />
                </div>
                <div className="col-6 text-start" ref={imgRef4}>
                  <img
                    className={`img-fluid rounded w-75 transition-all duration-700 ${imgInView4 ? "animate__animated animate__fadeInLeft" : "opacity-0"}`}
                    src="/assets/img/about-4.jpg"
                    alt="About Us Image 4"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
