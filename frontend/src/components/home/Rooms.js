import React, { useEffect, useState } from "react";
import CommonHeading from "../common/CommonHeading";
import { facility } from "../data/Data"; // Leave facility as is
import { BASE_URL } from '../../config';
import axios from 'axios';

export default function Rooms() {
  const [roomItems, setRoomItems] = useState([]); // State to hold room items

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
    <>
      <div className="container-xxl py-5">
        <div className="container">
          <CommonHeading
            heading="Our Rooms"
            title="Rooms"
            subtitle="Explore Our"
          />
          <div className="row g-4">
            {roomItems.map((item, key) => (
              <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s" key={key}>
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
                      <div className="ps-2">{item.star}</div>
                    </div>
                    <div className="d-flex mb-3">
                      {facility.map((facilityItem, index) => (
                        <small key={index} className="border-end me-3 pe-3">
                          {facilityItem.icon}
                          {facilityItem.quantity} {facilityItem.facility}
                        </small>
                      ))}
                    </div>
                    <p className="text-body mb-3">{item.description}</p>
                    <div className="d-flex justify-content-between">
                      <a
                        className="btn btn-sm btn-primary rounded py-2 px-4"
                        href=""
                      >
                        {item.yellowbtn}
                      </a>
                      <a className="btn btn-sm btn-dark rounded py-2 px-4" href="">
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
    </>
  );
}
