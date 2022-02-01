var initialState = {
    filtrados: [],
   
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FILTRAR':
            return {
                ...state,
                filtrados: action.payload
            }
        default:
            return state
    }
}
export default reducer;