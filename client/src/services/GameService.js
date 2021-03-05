const baseURL = 'http://localhost:3000/api/code_cards'

export default{
    getCards() {
        return fetch(baseURL)
        .then(res => res.json())
    }
}
