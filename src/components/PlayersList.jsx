import React, { Component } from "react";

function PlayersList(props) {
    const players = props.players || [];

    return (
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                </tr>
            </thead>
            <tbody>
                {players.map((player, index) => {
                    return (
                        <tr>
                            <th scope="row">{index +1}</th>
                            <td>{player}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
}

export default PlayersList;
