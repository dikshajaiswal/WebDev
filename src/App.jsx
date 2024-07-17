import { CORE_CONCEPTS } from './data.js';
// import componentsImg from './assets/components.png';
import Header from './components/Header/Header.jsx';
import CoreConcepts from './components/CoreConcepts.jsx';
import Examples from './components/Examples.jsx';
import { useState} from 'react';


function App() {
  return (
    <div>
      <Header/>
      <main>
        <CoreConcepts />
        <Examples />
        {/* <h2>Time to get started!</h2> */}
      </main>
     </div>
  );
}

export default App;
