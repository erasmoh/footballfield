import React from "react";

function PlayersList({ players, onDelete }) {

    return (
        <div className="col-12" data-testid="playersList">
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {players.map((player, index) => {
                        return (
                            <tr key={index}>
                                <th scope="row">{index + 1}</th>
                                <td>{player}</td>
                                <td>
                                    <button
                                        className="btn btn-danger btn-sm"
                                        onClick={(e) => onDelete(index)}
                                        data-testid="deleteButton"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default PlayersList;
