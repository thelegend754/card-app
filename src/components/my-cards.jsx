import React, { Component } from 'react';
import PageHeader from "./common/page-header";
import Card from "./card";
import cardService from "../services/cardService";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';
import { toast } from "react-toastify";


class MyCards extends Component {

  state = {
    cards: []
  }

  async componentDidMount() {
    const { data } = await cardService.getMyCards();
    if (data.length > 0) this.setState({ cards: data });
  }

  deleteCard = (cardId) => {
    Swal.fire({
      title: 'Are you sure you want to delete this card?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#ff0000',
      cancelButtonColor: 'gray',
      confirmButtonText: 'Delete'
    }).then(async (result) => {
      if (result.isConfirmed) {
        let cards = [...this.state.cards];
        cards = cards.filter(card => card._id !== cardId);
        this.setState({ cards });
        toast('the card has been deleted!');
        await cardService.deleteCard(cardId);
      }
    });
  };

  render() {

    const { cards } = this.state;

    return (
      <div className="container">
        <PageHeader>My cards Page</PageHeader>
        <div className="row">
          <div className="col-12">
            <p className="my-2">
              <Link className="btn btn-primary" to="/create-card">+ Add Card</Link>
            </p>
            {cards.length > 0 && <p>Your cards in the list below</p>}
          </div>
        </div>
        <div className="row">
          {cards.length > 0 &&
            cards.map(card => <Card card={card} key={card._id} deleteCard={this.deleteCard} />)
          }
        </div>
      </div>
    );
  }
}

export default MyCards;