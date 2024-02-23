import "./PlayerList.css";
import defaultUserPic from "../svg/defautlUserPic.svg";

const PlayerList = ({ players }) => {
    return (
        <div className="players">
            {players.map((player, index) => {
                return (
                    <div key={`player-${index}`} className="player">
                        <div className="player-image">
                            <img src={player.image || defaultUserPic} alt="Player"/>
                        </div>
                        <div className="player-name">{player.name || "Join"}</div>
                    </div>
                );
            })}
        </div>
    );
}

export default PlayerList;