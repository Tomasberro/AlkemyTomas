import axios from 'axios';
import { GET_INPUTS, GET_TYPES, POST_INPUT } from './actionsTypes';

export function getInputs (){
    return async function (dispatch){
    let response = await axios.get('/input');
    return dispatch ({
        type:  GET_INPUTS,  
        payload: response.data
    })
}
}

export function getTypes (){
    return async function (dispatch){
  try{  let response = await axios.get('/type', {});
    return dispatch ({
        type:  GET_TYPES,  
        payload: response.data
    })
}catch(error){console.log(error)}
}
}

export function postInputs (payload){
    return async function (dispatch){
    let response = await axios.post('/input',payload);
    // return response
    dispatch ({
        type:  POST_INPUT,  
        payload: response.data
    })
}
}