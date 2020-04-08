const axios = require('axios')

module.exports = async (url) => {
    try {
        const response = await axios.get(url)
        return response.data
    } catch (e) {
        return e.response.data
    }
}
