import React from "react";
import { Link } from "react-router-dom";

const Card = ({ card, deleteCard }) => {
  return (
    <div className="col-md-6 col-lg-4 mt-3">
      <div className="card">
        <img
          className="p-2"
          src={card.bizImage}
          width="100"
          alt={card.bizName}
        />
        <div className="card-body">
          <h5 className="card-title">{card.bizName}</h5>
          <p className="card-text">{card.bizDescription}</p>
          <p className="card-text border-top pt-2">
            <b>Tel: </b>
            {card.bizPhone}
            <br />
            {card.bizAddress}
          </p>
          <p>
            <Link to={`/my-cards/edit/${card._id}`}>
              <i className="fas fa-edit mr-1"></i>
              Edit Card
            </Link>
            <Link to="#" className="ml-3" onClick={ () => deleteCard(card._id) }>
            <i className="far fa-trash-alt mr-1"></i>
            Delete Card
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;