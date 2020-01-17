import React from "react";
import PlayerCard from "./PlayerCard";

class PlayersList extends React.Component {
    render(props) {
        return (
            <div className="player_list">
                {this.props.data.map(player => {
                    return (
                        <PlayerCard
                            key={player.name}
                            name={player.name}
                            country={player.country}
                        />
                    );
                })}
            </div>
        );
    }
}
export default PlayersList;