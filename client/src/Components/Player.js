import React from 'react';
import Axios from 'axios';
import Player1 from './Player1';

class Player extends React.Component {
    constructor() {
        super();
        this.state = {
            players: [],
            rapinoe:[]
        };
    }

    componentDidMount() {
        Axios.get(' http://localhost:5000/api/players').then((res) => {
            console.log(res.data);
        }).catch(err => console.log(err))
    }

    render() {
        return (
            <section className='players'>
                <p data-testid='rapinoe'>I like: {this.state.rapinoe}</p>
                <Player1 data={this.state.players} />
            </section>

        )
    };
}


export default Player; 