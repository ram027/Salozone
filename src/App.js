import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import Landing from '../src/components/Dashboard/Landing'
import { BrowserRouter, Route } from 'react-router-dom'
function App() {
  return (
    <BrowserRouter>
        <Route  path='/' component={  Landing }  />
        
    </BrowserRouter>
  );
}

export default App;
