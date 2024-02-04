import React from "react";
import road from "../../assets/add_road.png";
import plane from "../../assets/flight.png";
import Arrow from "../../assets/arrow_back_ios_new.svg";

import Button from "../../ui/button";
const SiteOverview = (props) => {
  const heads = ["Overview", "Why ?", "What ?"];
  const landmarks = [
    {
      name: "Airport",
      dist: "100 km",
      img: plane,
      sub: "Airport 1",
    },
    {
      name: "Airport",
      dist: "25 km",
      img: plane,
      sub: "Green Which Terminal",
    },
    {
      name: "Highway",
      dist: "100 km",
      img: road,
      sub: "Highway Number 5",
    },
  ];

  return (
    <div>
      {heads.map((head) => (
        <div className="overview__card">
          <h1
            style={{
              marginBottom: "30px",
              fontSize: "2rem",
              fontWeight: "500",
            }}
          >
            {head}
          </h1>
          <p>{props.overview}</p>
        </div>
      ))}

      <div className="overview__card">
        <h1
          style={{
            marginBottom: "30px",
            fontSize: "2rem",
            fontWeight: "500",
          }}
        >
          Landmarks
        </h1>

        <div>
          {landmarks.map((l) => (
            <div
              className="flex__box"
              style={{
                justifyContent: "space-between",
                padding: "10px",
                borderBottom: "3px solid var(--body-color)",
              }}
            >
              <h1
                className="flex__box"
                style={{
                  padding: "0rem 5px",
                  color: "var(--higlight-color)",
                  fontWeight: "300",
                  fontSize: "var(--h3-font-size)",
                }}
              >
                <img src={l.img} alt="" style={{ marginRight: "5px" }} />
                {l.name}
              </h1>
              <div className="landmarks">
                <h2>{l.dist}</h2>
                <p>{l.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="overview__card">
        <h1
          style={{
            marginBottom: "30px",
            fontSize: "2rem",
            fontWeight: "500",
          }}
        >
          Map
        </h1>
        <img src={props.map} alt="" />
        <div className="schedule__btn">
          <Button className="comp">
            Schedule a call
            <img src={Arrow} alt="" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SiteOverview;
