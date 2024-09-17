import axios from 'axios';
import Header from '../Header/Header';
import { useEffect, useState } from 'react';
import { Player } from '../../models/Player';

const PlayerItem = (player: Player) => {
    return (
        <li>
            <div>
                <p>{player.id}. <img src={player.picture} alt="user image" /> {player.name} - {player.wins} Wins</p>
            </div>
        </li>
    )
}

const Leaderboard = () => {
    const [ players, setPlayers ] = useState<Player[] | undefined>();
    
    if(!players) {
        axios.post(process.env.REACT_APP_BE_BASE_URL + 'leaderboard')
        .then(response => {
        setPlayers(response.data.players);
        })
        .catch(error => {
        console.error(error);
        });
    }

    return (
        <>
            <Header />
            {
                (!players || players.length == 0) ? 
                    (<h1>No players found</h1>) : 
                    (<ul>{players.map(p =>  <PlayerItem id={p.id} name={p.name} picture={p.picture} wins={p.wins} />)}</ul>)
            }
        </>
    )
};

export default Leaderboard;