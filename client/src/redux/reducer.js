import { FILTER_BY_TYPE, GET_INPUTS, GET_INPUTS_BY_USER, GET_TYPES, POST_INPUT, 
    PUT_INPUT } from "./actionsTypes"

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
            case GET_INPUTS_BY_USER:
                let ingresoUsFilter= action.payload.filter(item => item.TypeId === 1);
                let ingresoUsAmount= ingresoUsFilter.reduce((total, item) => total + item.amount, 0);
                let gastosUsFilter= action.payload.filter(item => item.TypeId === 2);
                let gastosUsAmount= gastosUsFilter.reduce((total, item) => total + item.amount, 0);
                let listadoUs10= action.payload.slice(-10).reverse();
                return {
                    ...state,
                    inputs: action.payload,
                    ingresos: ingresoUsAmount,
                    egresos: gastosUsAmount,
                    listado: listadoUs10
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
        case FILTER_BY_TYPE:
            let inputByType = state.inputs;

            let filterType = action.payload === "All"? inputByType : 
            inputByType.filter(item => item.TypeId == action.payload);
            
            return {
                ...state,
                inputs: filterType
            }

        default:
            return state
    }
}
export default reducer;