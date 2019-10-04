import React from 'react';
import useNewMode from '../Hooks/NewMode';

function Player1(props) {
    const [NewMode, setNewMode] = useNewMode();

    return ([
        <>
            {props.data && props.data.map(player => (
                <div key={player.id} className="player" data-testid='player-div'>
                    <button data-testid='fun-btn' onClick={setNewMode}>Have fun!</button>
                    <div>
                        <h3 data-testid='player-name'>{player.name}</h3>
                        <p>{player.country}</p>
                    </div>
                </div>
            ))}
        </>

    ])
}




export default Player1; 