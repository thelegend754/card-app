import React, { Component } from 'react';
import PageHeader from "./common/page-header";
import ofi2 from "../imag/ofi2.png";



class About extends Component {
    state = {}
    render() {
        return (
            <div className="container">
                <PageHeader>About Our App</PageHeader>
                <div className="row">
                    <div className="col-12" >
                        <h1>The power of design, within everyone's reach</h1>

                        <br>
                        </br>


                        <p>We are the first business card website is an online design and publication tool whose mission is to put the power of knowing your business within everyone's reach, so that anyone around the world can know it and publish it wherever they want.</p>
                    </div>
                    <div>

                        <div>
                            <img src={ofi2} alt="oficina" />








                        </div>


                    </div>

                </div>
            </div>
        );
    }
}

export default About;