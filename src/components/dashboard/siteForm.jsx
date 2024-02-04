import React, { useState } from "react";
import "./siteForm.css";
import { siteFormData } from "./dashData";
import { optionActions } from "../../store/optionsSlice";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../ui/button";

const SiteForm = () => {
  const dispatch = useDispatch();
  const [users, setUsers] = useState(siteFormData);

  const [isChecked, setIsChecked] = useState(false);
  const [activeCard, setActiveCard] = useState(1);
  const selectedRow = useSelector((state) => state.option.selectedRow);

  const selectHandler = (event) => {
    event.preventDefault();
    const { id, checked } = event.target;
    console.log(id, checked);
    setIsChecked(checked);

    let tempUser = users.map((user) =>
      user.id == id ? { ...user, checkit: checked } : user
    );
    console.log(tempUser.filter((user) => user?.checkit === true));
    setUsers(tempUser);
  };

  const activeHandler = (event, id) => {
    event.preventDefault();
    console.log(id);

    if (id === activeCard && id >= 1) {
      setActiveCard(id + 1);
      dispatch(optionActions.selectRow(id + 1));
    }
  };

  return (
    <div>
      {users.map((ele) => (
        <div
          id={ele.id}
          className={`form__card ${ele.id <= activeCard ? "" : "inactive"} `}
        >
          <input
            id={ele.id}
            type="checkbox"
            onChange={selectHandler}
            checked={ele?.checkit || false}
          />
          <div>
            <div className="form">
              <h3>{ele.topic}</h3>
              {ele?.checkit && <h3>{ele.date}</h3>}
            </div>

            {ele?.checkit && <p className="p">{ele.remarks}</p>}
            <div className={`form form2 ${ele?.checkit ? "" : "vanish"}`}>
              {ele?.checkit && <h2>{ele.rem2}</h2>}
              <button
                id={ele.id}
                className="button form_btn"
                onClick={(event) => activeHandler(event, ele.id)}
              >
                {ele.btn_content}
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SiteForm;
