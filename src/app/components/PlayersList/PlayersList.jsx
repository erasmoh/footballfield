const PlayersList = ({ players, onDelete, handleToggleSpecial }) => {
    return (
        <div className="col-12" data-testid="playersList">
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Special</th>
                        <th scope="col">Name</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {players.map((player, index) => {
                        return (
                            <tr key={index}>
                                <th scope="row">{index + 1 }</th>
                                <th><input onChange={(e) => handleToggleSpecial(player)} type="checkbox" id={player} name={player} value={player} /></th>
                                <td style={{ textAlign: 'left' }}>{player}</td>
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
        </div >
    );
}

export default PlayersList;
