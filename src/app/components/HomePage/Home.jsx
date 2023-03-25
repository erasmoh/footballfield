"use client"

import React, { Component } from "react";
import PlayersForm from "../PlayersForm/PlayersForm";
import Footer from "../Footer/Footer";


class FootballField extends Component {
    render() {
        return (
            <div className="container" data-testid="footbalfield">
                <PlayersForm />
                <Footer />
            </div>
        );
    }
}

export default FootballField;
