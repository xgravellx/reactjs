import './App.css';
import Header from './components/Header';
import SearchArea from './components/SearchArea/SearchArea';
import Main from './components/Main/Main';

function App() {

  return (
    <div className="App">
      <Header />
      <SearchArea/>
      <Main />

    </div>
  );
}

export default App;
