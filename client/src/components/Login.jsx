import React from "react";
import  "./Login.css";
import {useDispatch} from "react-redux";
import { useState} from "react";
import { userRegister } from "../redux/actions";
import { useHistory } from "react-router-dom";
import { userLoginAction } from "../redux/actions";

export function Login (){
    const dispatch = useDispatch();
    const [input, setInput] = useState({
        name: "",
        mail: "",
        password: ""
    });
    const [inputLogin, setInputLogin] = useState({
        mail: "",
        password: ""
    });
   
    
      const history = useHistory();
    
      function inputChange(e){
        e.preventDefault();
        setInput({
            ...input,
            [e.target.name]: e.target.value
        });
    }
    function inputChangeLogin(e){
        e.preventDefault();
        setInputLogin({
            ...inputLogin,
            [e.target.name]: e.target.value
        });
    }
   async function handleRegister(e){
        e.preventDefault();
      try{  await dispatch(userRegister(input));
        alert("Registro exitoso","success");
      }catch(err){
        console.log(err);
      }
    }

console.log(inputLogin)
async function handleLogin(e){
    e.preventDefault();
  const x = await dispatch(userLoginAction(inputLogin));
     console.log("post tomi login", x)

if (x.auth === true) {
  alert ("Login exitoso");
  history.push("/home");
}
}
    return (
        <div className="login">
        <div class="d-flex justify-content-center align-items-center mt-5">
                <div class="card">
        <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
            <li class="nav-item text-center">
                <a class="nav-link active btl" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">Login</a> 
                </li>
            <li class="nav-item text-center"> 
                <a class="nav-link btr" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">Signup</a>
                 </li>
        </ul>
            </div>
                </div>
        <div class="tab-content" id="pills-tabContent">
            <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                <div class="form px-4 pt-5"> 
                <input type="text" name="mail" class="form-control" placeholder="Email" 
                  onChange={inputChangeLogin} value={inputLogin.mail}/>
                <input type="text" name="password" class="form-control" placeholder="Password"
                 onChange={inputChangeLogin} value={inputLogin.password} />
                     <button class="btn btn-dark btn-block" onClick={handleLogin}
                      >Login</button> 
                </div>
            </div>
        </div>
            <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                <div class="form px-4"> 
                <input type="text" name="name" class="form-control" placeholder="Name"
                 onChange={inputChange} value={input.name}/>
                <input type="text" name="mail" class="form-control" placeholder="Email"
                 onChange={inputChange} value={input.mail}/>
                <input type="text" name="password" class="form-control" placeholder="Password"
                 onChange={inputChange} value={input.password}/>
                <button class="btn btn-dark btn-block" onClick={handleRegister}>Signup</button> 
                </div>
            </div> 
     
        </div>
        
           
    )
}

