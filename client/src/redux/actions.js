import axios from 'axios';
import { GET_INPUTS } from './actionsTypes';

export function getInputs (){
    return async function (dispatch){
    let response = await axios.get('/input');
    return dispatch ({
        type:  GET_INPUTS,  
        payload: response.data
    })
}
}