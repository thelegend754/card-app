import React, { Component } from 'react';
import PageHeader from "./common/page-header";
import cards1 from "../imag/cards1.jpg";
class Home extends Component {
    state = {}
    render() {
        return (
            <div className="container">

                <PageHeader>Cards App</PageHeader>
                <div className="row">
                    <div className="col-12">

                        <p>Welcome to card app.
                            Where you can make your virtual business card.</p>
                    </div>
                    <img src={cards1} alt="Logo" width="auto" height="auto" />
                </div>
                <div className="row">

                </div>
            </div>
        );
    }
}

export default Home;
