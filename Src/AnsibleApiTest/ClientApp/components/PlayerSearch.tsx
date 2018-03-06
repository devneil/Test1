import * as React from "react";
import { RouteComponentProps } from "react-router";

interface IPlayerSearchState {
    player: IPlayer;
}

export class PlayerSearch extends React.Component<RouteComponentProps<{}>, IPlayerSearchState> {
    constructor() {
        super();
        this.state = { player: {id: 1, name: "", position: ""} };
    }

    public render() {
        return <div>
            <h1>Search By Id</h1>

            <p>Enter the Id of a player to search for</p>

            <input type="number" onChange={this.handleChangeFor('id')} value={this.state.player.id} />

            <button onClick={() => { this.search() }}>Search</button>

            <p><strong>{this.state.player.name} {this.state.player.position}</strong></p>
            
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

    search() {
        fetch(`api/Players/${this.state.player.id}`)
            .then(response => response.json() as Promise<IPlayer>)
            .then(data => {
                this.setState({ player: data });
            });
    }
}

interface IPlayer {
    id: number;
    name: string;
    position: string;
}
