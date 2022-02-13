import {React, useEffect}from 'react';
import { Route } from 'react-router-dom';
import { FormInput } from './components/FormInput';
import { Home } from './components/Home';
import { List } from './components/List';
import { NavBar } from './components/NavBar';
import { useDispatch} from 'react-redux';
import { getInputs } from './redux/actions';
import { Login } from './components/Login';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
dispatch(getInputs());
  }, [dispatch]);

  
  return (
    <div >
      <Route path="/"  component={Login} />
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
