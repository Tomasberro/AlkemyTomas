import {React, useEffect}from 'react';
import { Route } from 'react-router-dom';
import { FormInput } from './components/FormInput';
import { Home } from './components/Home';
import { List } from './components/List';
import { NavBar } from './components/NavBar';
import { useDispatch } from 'react-redux';
import { Login } from './components/Login';
import { getInputs, getInputsByUser, getToken } from './redux/actions';
import jwt_decode from 'jwt-decode';

function App() {
  const dispatch = useDispatch();
    let x;
      if (localStorage.getItem("token")) {
        x = getToken();
      }
      console.log(x);
      const decoded = x ? jwt_decode(x) : null;
      console.log(decoded);
      let userId = decoded ? decoded.user.id : null;
  
    useEffect(() => {
  dispatch(getInputsByUser(userId));
    }, [dispatch]);

  return (
    <div >
      <Route exact path="/"  component={Login} />
      <Route path="/home"  component={NavBar} />
     <Route exact path="/home" component={Home} /> 
     <Route path= "/home/input" component={FormInput} />
     <Route path= "/home/list" render={() => {
        return <List  />
        }} />

    </div>
  );
}

export default App;
