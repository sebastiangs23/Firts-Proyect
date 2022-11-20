const axios = require("axios")
const APIGECKO = ("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1")

const getApi = async(req,res) => {
    try{
        const allData = await axios.get(APIGECKO)
        const wrap = []

        allData.data.map((e) => {
            wrap.push({
                name: e.name,
                symbol: e.symbol,
                image: e.image,
                price: e.current_price,
                marketCap: e.market_cap,
                rank: e.market_cap_rank,
                volumen: e.total_volume,
                supply: e.total_supply
            })
        }  )

        res.json(wrap)
    }catch(error){
        console.log(error)
    }
}

const getApisend = async(req,res) => {
    try{
        const sendFront = await(getApi)
        res.send(sendFront)
    }catch(error){
        console.log(error)
    }
}


module.exports = {
    getApi
}








