import React from 'react';
import {connect} from 'react-redux';
import Player from './Player';
import getPlayersFiltered from '../../selectors/playersSelector';
import './style.css';

const Players = ({players, ajaxStatus}) => {

    return (
        <div className="overall-container">
            {ajaxStatus === 0 ||
            <div className="modal">
                <span>Loading...</span>
            </div>
            }
            <div className={"player-container"}>
                <div className="player-row">
                    <div>
                        Name
                    </div>
                    <div>
                        Position
                    </div>
                    <div>
                        Nationality
                    </div>
                    <div>
                        Age
                    </div>
                </div>
                {players.map(p => <Player key={p.name} player={p}/>)}

                {players.length !== 0 || 'No results'}
            </div>
        </div>
    )
};

export const mapStateToProps = (state, ownProps) => {
    return {
        players: getPlayersFiltered(state),
        ajaxStatus: state.ajaxStatus,
        filters:state.filters,

    }
};

export default connect(mapStateToProps)(Players)
