const axios = require("axios")
const APIGECKO = ("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1")

const getApi = async(req,res) => {
    try{
        const allData = await axios.get(APIGECKO)
        res.json(allData.data)
    }catch(error){
        console.log(error)
    }
}


module.exports = {
    getApi
}








