import React from 'react';
import './App.css';

import Default from './layouts/Default';
import Home from './pages/Home';

function App() {
  return (
    <Default>
      <Home />
    </Default>
  );
}

export default App;