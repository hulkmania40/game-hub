import axios from "axios"

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '3dfa159608b84882bf666aef3e468784'
    }
})