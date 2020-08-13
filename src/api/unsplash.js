import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization:
            'Client-ID kaR-BTgEPJ7y7bbfZHNxl1RSpgwfrcxn2zE-ki9Riz0'

    }
})