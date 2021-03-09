const baseCardsURL = 'http://localhost:3000/api/code_cards/cards';
const baseLeaderboardURL = 'http://localhost:3000/api/code_cards/leaderboard';

export default{
    getCards() {
        return fetch(baseCardsURL)
        .then(res => res.json())
    },

    getLeaderboard() {
        return fetch(baseLeaderboardURL)
        .then(res => res.json())
    },

    addPlayer(player) { // creates a new player in db
        return fetch(baseLeaderboardURL, {
        method: 'POST',
        body: JSON.stringify(player),
        headers: {
            'Content-Type': 'application/json'
        }
        })
        .then(res => res.json());
    },

    updatePlayerCounts(players) { // add 1 playCount to each player
        return fetch(baseLeaderboardURL, {
            method: 'PUT',
            body: JSON.stringify(players),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json());
    }
}
