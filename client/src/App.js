import React from 'react';
import { Route } from 'react-router-dom';
import { FormInput } from './components/FormInput';
import { Home } from './components/Home';

function App() {
  return (
    <div >
     <Route exact path="/" component={Home} /> 
     <Route path= "/input" component={FormInput} />
    </div>
  );
}

export default App;
