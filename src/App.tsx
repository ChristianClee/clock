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
      <footer>

        <div className='container'>
          <div className='footer__container-contacts'>
            <p>8-977-439-34-18</p>
            <p>ilya.mishkov@gmail.com</p>
          </div>
        </div>
        
      </footer>
    </div>
  );
}
export default App;
