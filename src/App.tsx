import React from 'react';
import './App.css';
import { SignForm } from './features/signForm/SignForm';

import { auth } from './firebase';

function App() {
  console.log(auth);


  return (
    <div className="App">
      <SignForm/>
    </div>
  );
}

export default App;
