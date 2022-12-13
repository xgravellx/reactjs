import './App.css';
import { useState } from 'react';
import Header from './components/Header';
import SearchArea from './components/SearchArea/SearchArea';
import Loader from './components/Loader/Loader '

function App() {
  const [emoji, setEmoji] = useState([]);
  const [loading, setLoading] = useState(true);

 

  return (
    <div className="App">
      <Header />
      <SearchArea/>
        {loading && <Loader />}

    </div>
  );
}

export default App;
