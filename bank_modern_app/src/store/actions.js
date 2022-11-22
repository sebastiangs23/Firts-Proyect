import axios from "axios";

export function getAllCryptos() {
    return async function (dispatch) {
        var cryptos = await axios.get("https://deployback-production.up.railway.app/")
        return dispatch({
            type: "GET_CRYPTOS",
            payload: cryptos.data
        })
    }
}