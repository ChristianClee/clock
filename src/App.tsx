import React from 'react';
import Header from './components/header/Header';
import Clocks from './pages/clocks/Clocks';



const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <main>
        <Clocks/>
      </main>
    </div>
  );
}
export default App;
