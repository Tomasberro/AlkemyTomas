import { GET_INPUTS, GET_TYPES, POST_INPUT } from "./actionsTypes"

var initialState = {
    inputs: [],
    ingresos: [],
   listado: [],
   types: [],
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_INPUTS:
            let ingresoFilter= action.payload.filter(item => item.TypeId === 1);
            let ingresoAmount= ingresoFilter.reduce((total, item) => total + item.amount, 0);
            let gastosFilter= action.payload.filter(item => item.TypeId === 2);
            let gastosAmount= gastosFilter.reduce((total, item) => total + item.amount, 0);
            let listado10= action.payload.slice(-10).reverse();
            return {
                ...state,
                inputs: action.payload,
                ingresos: ingresoAmount,
                egresos: gastosAmount,
                listado: listado10
            }
        case  GET_TYPES:
            return {
                ...state,
                types: action.payload
            }
        case POST_INPUT:
                return {
                    ...state
                }       

        default:
            return state
    }
}
export default reducer;