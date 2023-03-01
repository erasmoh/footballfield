import React, { useState, useEffect } from "react";
import PlayersList from "../PlayersList/PlayersList";
import TeamList from "../TeamList/TeamList";

function PlayersForm() {
  const [players, setPlayers] = useState([]);
  const [newPlayer, setNewPlayer] = useState("");
  const [teams, setTeams] = useState([]);
  const [nop, setNop] = useState(1);
  const [multiline, setMultiline] = useState(false);
  const [multilist, setMultilist] = useState("");

  const handleMultilistChange = ({ target }) => {
    const users = target.value;
    setMultilist(users);
  };

  const handleMultiline = () => {
    setMultiline(!multiline);
  };
  const handleChange = ({ target }) => {
    setNewPlayer(target.value);
  };
  const handlePlayers = ({ target }) => {
    setNop(target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const playerValues = multiline ? multilist.split("\n") : newPlayer;
    const newList = [];
    const finalList = newList.concat(players, playerValues);
    setPlayers(finalList);

    // clears new player field
    !multiline && setNewPlayer("");
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

  useEffect(() => {
    console.log("teams", teams);
  }, [teams]);

  return (
    <div className="row" data-testid="playersForm">
      <div className="col-6">
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group col-md-12">
              <div className="row">
                <div className="col-md-4 d-flex align-items-center justify-content-between">
                  <input
                    type="radio"
                    id="mode"
                    name="mode"
                    value="single"
                    onChange={handleMultiline}
                    checked={!multiline}
                  />
                  <label htmlFor="single">Single add</label>
                  <input
                    type="radio"
                    id="mode"
                    name="mode"
                    value="multi"
                    onChange={handleMultiline}
                    checked={multiline}
                  />
                  <label htmlFor="multi">Bulk add</label>
                </div>
                <div className="col-md-8">
                  <label htmlFor="nOfPlayers">Players per team</label>
                  <input
                    type="text"
                    className="form-control"
                    value={nop}
                    onChange={handlePlayers}
                  />
                </div>
              </div>
              {multiline ? (
                <>
                  <label htmlFor="playerName">Player Names</label>
                  <textarea
                    className="form-control"
                    value={multilist}
                    onChange={handleMultilistChange}
                    rows={nop}
                  ></textarea>
                </>
              ) : (
                <>
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
                </>
              )}
            </div>
            <button
              disabled={
                (!multiline && newPlayer === "") ||
                (multiline && multilist === "")
              }
              type="submit"
              className="btn btn-primary btn-sm my-2"
            >
              {multiline ? "Add Players" : "Add Player"}
            </button>
          </div>
        </form>
      </div>
      <div className="col-6">
        {players.length > 0 ? (
          <>
            <PlayersList players={players} onDelete={handleDelete} />
            <button
              disabled={players.length === 0}
              onClick={randomPlayers}
              className="btn btn-primary btn-sm mx-2"
            >
              Create teams
            </button>
            <button onClick={resetPlayers} className="btn btn-warning btn-sm">
              Reset
            </button>
          </>
        ) : (
          "Add some players"
        )}
      </div>
      {teams.length > 0 ? <TeamList teams={teams} /> : "No teams yet"}
    </div>
  );
}

export default PlayersForm;
