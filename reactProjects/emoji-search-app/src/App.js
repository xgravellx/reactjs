import './App.css';
import Header from './components/Header';
import SearchArea from './components/SearchArea/SearchArea';
import Main from './components/Main/Main';
import TableHeader from './components/TableHeader/TableHeader';

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
