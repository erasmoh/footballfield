import React, { Component } from "react";
import PlayersList from "./PlayersList";
import TeamList from "./TeamList";

class PlayersForm extends Component {
    state = {
        players: [],
        newPlayer: "",
        teams: [],
        nOfPlayers: 1,
    };
    handleChange = (e) => {
        this.setState({
            newPlayer: e.target.value,
        });
    };
    handlePlayers = (e) => {
        this.setState({
            nOfPlayers: e.target.value,
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
        const nOfPlayers = this.state.nOfPlayers;
        // console.log(listOfPlayers);
        const teams = [...listOfPlayers].sort(() => Math.random() - 0.5);
        // console.log(teams);
        this.setState({ teams });

        while (teams.length >= nOfPlayers) {
            const newTeam = teams.splice(0, nOfPlayers);
            teams.push(newTeam);
        }
        console.log({ listOfPlayers, teams });
    };
    render() {
        return (
            <div className="row">
                <div className="col-6">
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-row">
                            <div className="form-group col-md-12">
                                <label htmlFor="nOfPlayers">
                                    Number of Players
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={this.state.nOfPlayers}
                                    onChange={this.handlePlayers}
                                />
                                <label htmlFor="playerName">Player Name</label>
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
                {this.state.teams.map((team, index) => {
                    return <TeamList teams={team} key={index} />;
                })}
            </div>
        );
    }
}

export default PlayersForm;
