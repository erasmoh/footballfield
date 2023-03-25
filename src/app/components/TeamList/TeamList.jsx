const TeamList = ({ teams, specialPlayers }) => {
    return (
        <>
            {teams.length > 1 && teams.map((team, index) => {
                return (
                    <div className={`col-6`} key={index} data-testid="teamList">
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
                                        <tr key={index} className={specialPlayers.includes(player) && 'special'}>
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
        </>
    );
}

export default TeamList;
