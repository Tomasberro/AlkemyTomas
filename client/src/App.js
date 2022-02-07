import {React, useEffect}from 'react';
import { Route } from 'react-router-dom';
import { FormInput } from './components/FormInput';
import { Home } from './components/Home';
import { List } from './components/List';
import { NavBar } from './components/NavBar';
import { useDispatch} from 'react-redux';
import { getInputs } from './redux/actions';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
dispatch(getInputs());
  }, [dispatch]);

  
  return (
    <div >
      <Route path="/"  component={NavBar} />
     <Route exact path="/" component={Home} /> 
     <Route path= "/input" component={FormInput} />
     <Route path= "/list" render={() => {
        return <List  />
        }} />

    </div>
  );
}

export default App;
