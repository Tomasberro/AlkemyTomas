import React, { useEffect } from "react";
import  "./Login.css";
import {useDispatch, useSelector} from "react-redux";
import { useState} from "react";
import { getTokenAuth, userRegister } from "../redux/actions";
import { useHistory } from "react-router-dom";
import { userLoginAction } from "../redux/actions";
import Accept from "./Accept";

export function Login (){
    const dispatch = useDispatch();
    const tokenAuthCatch = useSelector(state => state.tokenAuth);
    const [input, setInput] = useState({
        name: "",
        mail: "",
        password: ""
    });
    const [inputLogin, setInputLogin] = useState({
        mail: "",
        password: ""
    });
//    useEffect(() => {
//      dispatch(getTokenAuth())
//     }, [dispatch])
   
    
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
      try{  
        // await dispatch(userRegister(input));
        let data = await dispatch(getTokenAuth())
        alert("Registro exitoso","success");
      }catch(err){
        console.log(err);
      }
    }

console.log(tokenAuthCatch, "tokenAuthCatch")
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
             < Accept formToken={'LNWwQUrmZJ1KbDJwLO4U4KP2bnSQgURE8AWLS1kS8zHrJ4G+fU4gexLRUPYLFJ80yxMDQaaw3/U5m48DnQMNbZ3pykXoxjSWPva0hC4YI/Y1RjAB/hfJlovoprCyfaqrWiTxvj6+mHqcyfmBAdLslb0N3JSvSxLhIm8kApcNoNqTQKV6p1UiMI59AUSWbvR2Kdw25Okavmkc85AwB8P5S0MBneNE1Ury3a5KxzWKqDD2nqANvY7aoik0nt7x82RKvco/fSwb3sDQQ+C60z+gxEzqb0fWyIwS7wE19i5I21gVAiPzEO4Yfj3l5VBgXVcAxNW+PVfooRqZEOm66mGyaLFJKeXDxaCLUOgYUx8F7PTqyL8ZIoiporSEE/lMQoNZyDRCSSfP8wDZ2Pjj5jgNEjK6/F2pfhhzotkuIfaX1nZQYrrb89pDuviQIdoszMtEzIz6zJjRBfpBX0jSzYqrkZWWU7vDjemoaO7G5OPqTWLIoYP0rakdhb3K6o+LF6a1fr2qwY0xPU2585BIXBq7xCgR97zxBC8tb5qL2ge0SSt4n9IV4N7bbBPLoT92UprA3NU5lUrazxAiOIRqlSz97bqkgF+eC8QpHzMzJk/4OWJm+dPPtddwxcvO9zAGtBs3AsgEIC9nrxM2yHaLkBp+GkBOjmOEj9QM0Efimd2lqycIySFs0Jumo9Gsb2L7ro5mpT7WEcOt4qIYa7rV1sNBEUiH+yez0nHnFqKgh/zDnUNzjBYmkXc5QD0Zu9hF8U4uYezQDw70oibvgOx4kYzdF9ILtZVbDWTrDpvm9b4zvGXgpMLNe3oBuCywZ64cWjyMQI1UQUps8Qcg5pKZmrKbWRm7yli3xvN0GmYcACNBcflpWGpLD33QF1SpRtXAKmYt.2qC7LM9MskZ'} />
        </div>
        
           
    )
}

