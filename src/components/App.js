import React from 'react';
import '../../src/App.css';
import Header from './Header';
import CafeControl from './CafeControl';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../src/App.css';


function App() {
  return (
    <React.Fragment>
      <div className="App">
        <Header />
        <CafeControl />
      </div>
    </React.Fragment>
  );
}

export default App;