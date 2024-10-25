import React, { useEffect, useState } from "react";
import CommonHeading from "../common/CommonHeading";
import { facility } from "../data/Data"; // Leave facility as is
import { BASE_URL } from '../../config';
import axios from 'axios';
import { useInView } from "react-intersection-observer";
import "animate.css";


export default function Rooms() {
  const [roomItems, setRoomItems] = useState([]); // State to hold room items

  const { ref, inView } = useInView({ threshold: 0.1 });

  const getAnimationClass = (index) => {
    if (index % 3 === 0) return inView ? "animate__slideInLeft" : "opacity-0";
    if (index % 3 === 1) return inView ? "animate__slideInRight" : "opacity-0";
    return inView ? "animate__zoomIn" : "opacity-0";
  };

  const fetchTours = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/tours`, { withCredentials: true });
      console.log("API response data:", response.data);
      setRoomItems(response.data); // Set the room items state with the API data
    } catch (error) {
      console.error("Error fetching tours:", error);
    }
  };

  // Use useEffect to trigger fetchTours on component load
  useEffect(() => {
    fetchTours();
  }, []);

  return (
    <div
      ref={ref}
      className="text-xl container-xxl py-5"
    >
      <div className="container">
        <CommonHeading heading="Our Rooms" title="Rooms" subtitle="Explore Our" />
        <div className="row g-4">
          {roomItems.map((item, key) => (
            <div
              key={key}
              className={`col-lg-4 col-md-6 mb-4 animate__animated ${getAnimationClass(key)}`}
              style={{
                transition: 'transform 0.5s ease-in-out, opacity 0.5s ease-in-out',
              }}
            >
              <div className="room-item shadow rounded overflow-hidden">
                <div className="position-relative">
                  <img className="img-fluid" src={item.img} alt="img" />
                  <small className="position-absolute start-0 top-100 translate-middle-y bg-primary text-white rounded py-1 px-3 ms-4">
                    {item.price}
                  </small>
                </div>
                <div className="p-4 mt-2">
                  <div className="d-flex justify-content-between mb-3">
                    <h5 className="mb-0">{item.name}</h5>
                    <div className="ps-2">
                      {[...Array(item.stars)].map((_, index) => (
                        <small key={index} className="fa fa-star text-primary"></small>
                      ))}
                    </div>
                  </div>
                  <div className="d-flex mb-3">
                    {facility.map((facilityItem, facilityIndex) => (
                      <small className="border-end me-3 pe-3" key={facilityIndex}>
                        <i className={facilityItem.iconClass}></i>
                        {facilityItem.quantity} {facilityItem.facility}
                      </small>
                    ))}
                  </div>
                  <p className="text-body mb-3">{item.description}</p>
                  <div className="d-flex justify-content-between">
                    <a className="btn btn-sm btn-primary rounded py-2 px-4" href="#">
                      {item.yellowbtn}
                    </a>
                    <a className="btn btn-sm btn-dark rounded py-2 px-4" href="#">
                      {item.darkbtn}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
