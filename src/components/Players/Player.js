import React from 'react';
import {getAge} from "../../selectors/playersSelector";

const Player = ({player}) => {
    const age = getAge(player.dateOfBirth);
    return (
        <div className="player-row">
            <div>
                {player.name}
            </div>
            <div>
                {player.position}
            </div>
            <div>
                {player.nationality}
            </div>
            <div>
                {age}
            </div>


        </div>
    )
}
export default Player;
