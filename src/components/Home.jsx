import React, { Component } from "react";
import PlayersForm from "./PlayersForm";
import Footer from "./Footer";


class FootballField extends Component {
    render() {
        return (
            <div className="container">
                <PlayersForm />
                <Footer />
            </div>
        );
    }
}

export default FootballField;
