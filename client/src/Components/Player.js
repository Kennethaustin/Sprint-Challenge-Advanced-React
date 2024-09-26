import React from 'react';
import axios from 'axios';
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
        axios.get(' http://localhost:5000/api/players')
        .then((res) => {
            this.setState({players:res.data, 
                rapinoe: res.data[1].name});
        }).catch(err => console.log(err))
    }

    render() {
        return (
            <section className='player'>
                <p data-testid='rapinoe'>Go rapinoe: 
                {this.state.rapinoe}</p>
                <Player1 data={this.state.players} />
            </section>

        )
    };
}


export default Player; 