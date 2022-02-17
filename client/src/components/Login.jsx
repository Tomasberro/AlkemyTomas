import React from "react";
import  "./Login.css";
import {useDispatch, useSelector} from "react-redux";
import { useState, useEffect } from "react";
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
    const [user, setUser] = useState({
        validate: "",
        noValidate: "",
      });
      const [succes, setSucces] = useState(false);
      const [logeado, setLogeado] = useState({
        msg: "",
        state: false,
      });
      const [userLogin, setUserLogin] = useState();
      const [mail, setMail] = useState({ mail: "" });
      const [forgot, setForgot] = useState({
        msg: "",
        auth: false,
      });
      const [acc, setAcc] = useState(0);
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
        console.log("post tomi register")
      }catch(err){
        console.log(err);
      }
    }
// console.log(input)
console.log(inputLogin)
async function handleLogin(e){
    e.preventDefault();
  const x = await dispatch(userLoginAction(inputLogin));
     console.log("post tomi login", x)
    setUserLogin(x.id);
    setMail({ mail: inputLogin.mail });
    if (x.msg) {
      setLogeado({
        state: false,
        msg: x.msg,
      });
    setAcc(acc + 1);
}
console.log(acc);
if (acc >= 3) {
  return setLogeado({
    state: false,
    msg: "a ver probando",
  });
}
if (x.auth === true) {
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

//    {

//             <div class="form-signin">
           
    
      
//             <h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>
//             <label for="inputEmail" class="sr-only">Email address</label>
//             <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required="" autofocus=""/>
//             <label for="inputPassword" class="sr-only">Password</label>
//             <input type="password" id="inputPassword" class="form-control" placeholder="Password" required=""/>
//             <div class="checkbox mb-3">
//               <label>
//                 <input type="checkbox" value="remember-me" /> Remember me
//               </label>
//             </div>
//             <button class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
//             <p class="mt-5 mb-3 text-muted">© 2017-2018</p>
         
      
      
//               </div>