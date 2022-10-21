import { useState } from 'react';
import './App.css';
import Counter from './components/Counter';
import Form from './components/Form';
import Header from './components/Header';
import User from './components/User';


function App() {

  const [isVisible, setVisible] = useState(true);

  return (
    <div className="App">
      {isVisible && <Counter /> }
      <button onClick={() => setVisible(!isVisible)}>Göster-Gizle</button>

      {/* <Form /> */}
      {/* <Header />
      <User name={'hazal'} surname={'yılmaz'} age={24} /> */}
      


      {/* Short If */}
      {/* {isLoggedIn ? (
        <div>Hoşgeldin {fullName}</div>
      ) : (
        "Lütfen Giriş yapın"
      )}

      {isLoggedIn && <div>Hoşgeldin{fullName}</div>}
      {!isLoggedIn && <div>Giriş yapın</div>} */}
    
    </div>
  );
}

export default App;
