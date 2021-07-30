import React from "react";

function TeamList(props) {
    const teams = props.teams || [];
    // console.log(teams);
    return (
        <div className="col-6">
            {teams.map((team, index) => {
                return (
                    <table className="table" key={index}>
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Team {index + 1}</th>
                            </tr>
                        </thead>
                        <tbody>
                            {team.map((player, index) => {
                                return (
                                    <tr key={index}>
                                        <th scope="row">{index + 1}</th>
                                        <td>{player}</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                );
            })}
        </div>
    );
}

export default TeamList;
