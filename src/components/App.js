import React from 'react';
import '../../src/App.css';
import Header from './Header';
import CafeControl from './CafeControl';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <React.Fragment>
      <Header />
      <CafeControl />
    </React.Fragment>
  );
}

export default App;