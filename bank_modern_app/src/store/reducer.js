const initialState = { cryptos: [] }

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_CRYPTOS":
            return {
                ...state,
                cryptos: action.payload,
            }
        default:
            return {
                ...state,
            }
    }
}


export default reducer;