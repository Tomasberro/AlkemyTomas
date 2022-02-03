import { GET_INPUTS } from "./actionsTypes"

var initialState = {
    inputs: [],
    ingresos: [],
   listado: [],
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

        default:
            return state
    }
}
export default reducer;