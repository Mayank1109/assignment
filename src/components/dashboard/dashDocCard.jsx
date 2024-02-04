import React from "react";
import "./dashDocCard.css";
import Address from "../../assets/Iconinteractions.svg";
import UpArrow from "../../assets/north_east.svg";
import Arrow from "../../assets/arrow_back_ios_new.svg";
import sideArrow from "../../assets/arrow_forward_ios.svg";
import Button from "../../ui/button";
import ProgressBar from "./progressBar";
import SiteOverview from "./siteOverview";
import SiteForm from "./siteForm";
const DashDocCard = (props) => {
  return (
    <>
      <div className="doc">
        jMarket
        <img src={sideArrow} alt="" /> Category 1
        <img src={sideArrow} alt="" /> Theme park site
        <img src={sideArrow} alt="" />
      </div>

      {props.data.map((ele) => (
        <div className="card grid" key={ele.id}>
          <img src={ele.site} alt="" style={{ marginBottom: "1rem" }} />

          <div className="site__card">
            <div className="div__grp">
              <h1
                style={{
                  marginBottom: "30px",
                  fontSize: "2rem",
                }}
              >
                {ele.name}
              </h1>
              <div>
                <div>
                  <img src={Address} alt="" /> Address of the site
                </div>
                <div className="flex__box" style={{ marginBottom: "30px" }}>
                  {ele.recreation.map((re) => (
                    <div
                      className="flex__box recreations"
                      style={{ marginTop: "10px" }}
                    >
                      <img src={re.recpic} alt="" />
                      <p style={{ fontSize: "var(--mb-0-75)" }}>{re.rec}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ marginBottom: "25px" }}>
                <Button className="view">
                  <img src={UpArrow} alt="" /> View opportunity on polygon{" "}
                </Button>
              </div>

              <div className="flex__box">
                {ele.extra.map((ex) => (
                  <>
                    <div style={{ marginRight: "2rem", marginTop: "5px" }}>
                      <h2
                        style={{
                          fontSize: "1.2rem",
                          color: "var(--title-color-dark)",
                        }}
                      >
                        {ex.extra_value}
                      </h2>
                      <p style={{ fontSize: "var(--mb-0-75)" }}>
                        {ex.extra_desc}
                      </p>
                    </div>
                  </>
                ))}
              </div>
            </div>

            <div className="bttn__grp">
              <Button className="oho">Complete</Button>
              <Button className="comp">
                Site visit <img src={Arrow} alt="" />
              </Button>
              <div className="status__grp flex__box">
                <h2>Rs 20,00,000</h2>
                <p>Rs 65,00,000</p>
              </div>
              <ProgressBar value="2000000" max="6500000" />
            </div>
          </div>

          <div className="site__data__card">
            <SiteOverview overview={ele.overview} map={ele.map} />
            <div>
              <SiteForm />
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default DashDocCard;
