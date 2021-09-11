import React, { useState } from "react";
import PlayersList from "./PlayersList";
import TeamList from "./TeamList";

function PlayersForm() {
    const [players, setPlayers] = useState([]);
    const [newPlayer, setNewPlayer] = useState("");
    const [teams, setTeams] = useState([]);
    const [nop, setNop] = useState(1);

    const handleChange = ({ target }) => {
        setNewPlayer(target.value);
    };
    const handlePlayers = ({ target }) => {
        setNop(target.value);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        setPlayers((prev) => {
            return [...prev, newPlayer];
        });
        // clears new player field
        setNewPlayer("");
    };
    const randomPlayers = (e) => {
        e.preventDefault();
        const listOfPlayers = [...players];
        const virtualTeams = [];

        const randomTeams = [...listOfPlayers].sort(() => Math.random() - 0.5);
        while (randomTeams.length >= nop) {
            const newTeam = randomTeams.splice(0, nop);
            virtualTeams.push(newTeam);
        }
        setTeams((teams) => virtualTeams);
    };
    const resetPlayers = (e) => {
        setPlayers([]);
        setTeams([]);
        setNewPlayer("");
        setNop(1);
    };
    const handleDelete = (player) => {
        const temp = [...players];
        temp.splice(player, 1);
        setPlayers(temp);
    };

    return (
        <div className="row">
            <div className="col-6">
                <form onSubmit={handleSubmit}>
                    <div className="form-row">
                        <div className="form-group col-md-12">
                            <label htmlFor="nOfPlayers">
                                Number of Players
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                value={nop}
                                onChange={handlePlayers}
                            />
                            <label htmlFor="playerName">Player Name</label>
                            <input
                                onChange={handleChange}
                                type="text"
                                className="form-control"
                                id="player"
                                placeholder="Player Name"
                                name="newPlayer"
                                value={newPlayer}
                            />
                        </div>
                        <button
                            disabled={newPlayer === ""}
                            type="submit"
                            className="btn btn-primary btn-sm my-2"
                        >
                            Add Player
                        </button>
                    </div>
                </form>
            </div>
            <div className="col-6">
                {players.length > 0 ? (
                    <React.Fragment>
                        <PlayersList
                            players={players}
                            onDelete={handleDelete}
                        />
                        <button
                            disabled={players.length === 0}
                            onClick={randomPlayers}
                            className="btn btn-primary btn-sm mx-2"
                        >
                            Create teams
                        </button>
                        <button
                            onClick={resetPlayers}
                            className="btn btn-warning btn-sm"
                        >
                            Reset
                        </button>
                    </React.Fragment>
                ) : 'Add some players'}
            </div>
            {teams.length > 0 ? <TeamList teams={teams} /> : "No teams yet"}
        </div>
    );
}

export default PlayersForm;
