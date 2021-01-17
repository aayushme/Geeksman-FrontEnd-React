import { Button } from "bootstrap";
import React from "react";
import { Link } from "react-router-dom";
import Modal from "../utils/modals/modal";

function ContestCard(props) {

  const[open, setOpen] = React.useState(false);

  const handleActiveContest = (e, id) => {
    console.log(id);
    localStorage.setItem("activecontest", id);
    setOpen(true);
  };

  return (
    <div className="contest-card">
      <div className="contest-card-heading">
        <Link
          to={"/contests/" + props.contestname}
          onClick={(e) => handleActiveContest(e, props.id)}
        >
          {props.contestname}
        </Link>
      </div>

      <div className="contest-card-description">{props.smalldescription}</div>
      <div className="contest-card-timer">
        <span className="contest-card-timer-prefix">Starts at </span>
        {props.startdate}{" "}
        <span className="contes-card-time">{props.starttime}PM</span>
      </div>
      <div className="contest-card-timer">
        <span className="contest-card-timer-prefix">Ends at </span>
        {props.enddate}{" "}
        <span className="contes-card-time">{props.endtime}</span>
      </div>

      <div className="contest-card-register-button">
        <Link
          to={"/contests/" + props.contestname}
          onClick={(e) => handleActiveContest(e, props.id)}
        >
          Register Now
        </Link>
      </div>
      <Modal show={open} />
    </div>
  );
}

export default ContestCard;
