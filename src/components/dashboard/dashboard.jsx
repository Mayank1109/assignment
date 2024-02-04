import { tableData } from "./dashData";
import React, { useState } from "react";
import "./dashboard.css";
import Button from "../../ui/button";
import { siteData } from "./dashData";
import DashDocCard from "./dashDocCard";
import arrow from "../../assets/Arrow.svg";
import check from "../../assets/check.svg";
const Dashboard = () => {
  const statusData = [
    {
      id: "n1",
      num: "1",
      active: true,
    },
    {
      id: "n2",
      num: "2",
      active: false,
    },
    {
      id: "n3",
      num: "3",
      active: false,
    },
  ];

  return (
    <>
      <section className="dashboard section">
        <div className=" dash__content grid">
          <div className="dash__content btn__grp">
            <Button>Complete Profile</Button>
          </div>
          <div className="user__profile"></div>
        </div>
      </section>

      <section className="site__choice section">
        <div className="site__content grid">
          <div className="site">Choose your new site</div>
          <div className="status">
            {statusData.map((current, index, array) => (
              <>
                <div
                  className={`num ${current.active ? "active" : ""}`}
                  key={current.id}
                >
                  {current.active && <img src={check} />} {current.num}
                </div>
                {!(statusData.length == current.num) && (
                  <img
                    className={array[index + 1].active ? "active" : ""}
                    src={arrow}
                  />
                )}
              </>
            ))}
          </div>
        </div>
      </section>

      <section className="site__pic section">
        <DashDocCard type="text" data={siteData} />
      </section>
    </>
  );
};

export default Dashboard;
