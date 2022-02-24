import axios from 'axios';
import { GET_INPUTS, GET_TYPES, POST_INPUT, PUT_INPUT
, DELETE_INPUT, FILTER_BY_TYPE, GET_INPUTS_BY_USER } from './actionsTypes';

export function getInputs (){
    return async function (dispatch){
    let response = await axios.get('/input');
    return dispatch ({
        type:  GET_INPUTS,  
        payload: response.data
    })
}
}
export function getInputsByUser (id){
  return async function (dispatch){
  let response = await axios.get('/inputByUser/'+id);
  return dispatch ({
      type:  GET_INPUTS_BY_USER,  
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

export function putInput (id, payload){
    return async function (dispatch){
   try{ 
       let response = await axios.put('/input/' + id, payload);
//    console.log(response)
    return dispatch ({
        type:  PUT_INPUT,  
        payload: response.data
    })
}catch(error){console.log(error)}
}
}
export function deleteInput (id){
    return async function (dispatch){
    let response = await axios.delete('/input/' + id);
    return dispatch ({
        type:  DELETE_INPUT,  
        payload: response.data
    })
}
}
export function filterType(payload) {
    return async (dispatch) => {
      try {
        return await dispatch({
          type: FILTER_BY_TYPE,
          payload,
        });
      } catch (error) {
        console.log(error);
      }
    };
  }

  export const userRegister = async (payload) => {
    try {
      console.log("estoy entrando", payload);
      let { data } = await axios.post("/userRegister", payload);
      return data;
    } catch (err) {
      console.log("rompo en la action de user", err);
    }
  };
  export function userLoginAction (payload){
  return async function (){
    try {
      let { data } = await axios.post("/userLogin", payload);
      if (data.token) {
        let token = data.token;
        localStorage.setItem("token", token);
      }
  
      return data;
    } catch (error) {
      console.log("rompo en el login action", error);
    }
  }
}

export const getToken = () => {
  let data = {};
  let token = localStorage.getItem("token");
  if (!token) {
    let error = {};
    error.msg = "No se ha encontrado ningun token";
    return error;
  }
  return (data.tokenInfo = token);
};