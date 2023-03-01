import React from "react";

function TeamList({ teams }) {
    let boxWidth;
    switch (teams.length) {
        case 1:
            boxWidth = 12;
            break;
        case 2:
            boxWidth = 6;
            break;
        case 3:
            boxWidth = 4;
            break;
        default:
            boxWidth = 3;
    }
    return (
        <React.Fragment>
            {teams.map((team, index) => {
                return (
                    <div className={`col-${boxWidth}`} key={index} data-testid="teamList">
                        <table className="table">
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
                    </div>
                );
            })}
        </React.Fragment>
    );
}

export default TeamList;
