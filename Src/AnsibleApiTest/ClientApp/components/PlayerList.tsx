import * as React from "react";
import { RouteComponentProps } from "react-router";
import "isomorphic-fetch";

interface IPlayerListState {
    players: IPlayer[];
    loading: boolean;
}

export class PlayerList extends React.Component<RouteComponentProps<{}>, IPlayerListState> {
    constructor() {
        super();
        this.state = { players: [], loading: true };

        fetch("api/Players")
            .then(response => response.json() as Promise<IPlayer[]>)
            .then(data => {
                this.setState({ players: data, loading: false });
            });
    }

    public render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : PlayerList.renderPlayersTable(this.state.players);

        return <div>
            <h1>Players</h1>
            <p>This component demonstrates fetching data from the server.</p>
            {contents}
        </div>;
    }

    private static renderPlayersTable(players: IPlayer[]) {
        return <table className='table'>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Position</th>
                </tr>
            </thead>
            <tbody>
                {players.map(player =>
                    <tr key={player.id}>
                        <td>{player.id}</td>
                        <td>{player.name}</td>
                        <td>{player.position}</td>
                    </tr>
                )}

            </tbody>

        </table>;
    }
}

interface IPlayer {
    id: number;
    name: string;
    position: string;
}
