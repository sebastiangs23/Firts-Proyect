import axios from "axios";

export function getAllCryptos() {
    return async function (dispatch) {
        var cryptos = await axios.get("http://localhost:3005/home/market")
        return dispatch({
            type: "GET_CRYPTOS",
            payload: cryptos.data
        })
    }
}