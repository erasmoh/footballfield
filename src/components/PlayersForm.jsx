import React, { Component } from "react";
import PlayersList from "./PlayersList";

class PlayersForm extends Component {
    state = {
        players: [],
        newPlayer: "",
        teams: [],
    };
    handleChange = (e) => {
        this.setState({
            newPlayer: e.target.value,
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({
            players: [this.state.newPlayer, ...this.state.players],
        });
    };
    randomPlayers = (e) => {
        e.preventDefault();
        const listOfPlayers = [...this.state.players];
        console.log(listOfPlayers);
        const teams = listOfPlayers.sort(() => Math.random() - 0.5);
        console.log(teams);
        this.setState({ teams });
    };
    render() {
        return (
            <div className="row">
                <div className="col-6">
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-row">
                            <div className="form-group col-md-12">
                                <label for="inputEmail4">Player Name</label>
                                <input
                                    onChange={this.handleChange}
                                    type="text"
                                    className="form-control"
                                    id="player"
                                    placeholder="Player Name"
                                    name="newPlayer"
                                    value={this.state.newPlayer}
                                />
                            </div>
                            <button type="submit" className="btn btn-primary">
                                Add Player
                            </button>
                        </div>
                    </form>
                    <PlayersList players={this.state.players} />
                    <button
                        onClick={this.randomPlayers}
                        className="btn btn-primary"
                    >
                        Sortear
                    </button>
                </div>
                <div className="col-6">
                    <PlayersList players={this.state.teams} />
                </div>
            </div>
        );
    }
}

export default PlayersForm;