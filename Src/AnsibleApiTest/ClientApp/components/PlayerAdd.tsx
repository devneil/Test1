import * as React from "react";
import { RouteComponentProps } from "react-router";

interface IPlayerAddState {
    player: IPlayer;
}

export class PlayerAdd extends React.Component<RouteComponentProps<{}>, IPlayerAddState> {
    constructor() {
        super();
        this.state = { player: {id: 1, name: "", position: ""} };
    }

    public render() {
        return <div>
            <h1>Add Player</h1>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Position</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><input type="number" onChange={this.handleChangeFor("id")} value={this.state.player.id} /></td>
                        <td><input type="text" onChange={this.handleChangeFor("name")} value={this.state.player.name} /></td>
                        <td><input type="text" onChange={this.handleChangeFor("position")} value={this.state.player.position} /></td>
                    </tr>
                </tbody>
            </table>

            <button onClick={() => { this.add() }}>Add</button>
           
        </div>;
    }

    private handleChangeFor = (propertyName: string) => (event: any) => {
        const { player } = this.state;
        const alteredPlayer = {
            ...player,
            [propertyName]: event.target.value
        };
        this.setState({ player: alteredPlayer });
    }

    add() {
        if (this.state.player.name !== "")
        fetch("api/Players",
            {
                method: "POST",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(
                    this.state.player
                )
            });
    }
}

interface IPlayer {
    id: number;
    name: string;
    position: string;
}
