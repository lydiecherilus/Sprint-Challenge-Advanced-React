import React from "react";

class PlayerCard extends React.Component {
    render(props) {
        return (
            <div className="player_card">
                <h2>{this.props.name}</h2>
                <h3>{this.props.country}</h3>
            </div>
        );
    }
}
export default PlayerCard;