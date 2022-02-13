import React from "react";
import  "./Login.css";

export function Login (){
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
                <input type="text" name="" class="form-control" placeholder="Email or Phone" /> 
                <input type="text" name="" class="form-control" placeholder="Password" />
                     <button class="btn btn-dark btn-block">Login</button> 
                </div>
            </div>
        </div>
            <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                <div class="form px-4"> 
                <input type="text" name="" class="form-control" placeholder="Name"/>
                <input type="text" name="" class="form-control" placeholder="Email"/>
                <input type="text" name="" class="form-control" placeholder="Phone"/> 
                <input type="text" name="" class="form-control" placeholder="Password"/> 
                <button class="btn btn-dark btn-block">Signup</button> 
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