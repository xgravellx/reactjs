import './styles.css'
import './App.css';
import { ThemeContextProvider } from './contexts/ThemeContext';
import { LangContextProvider } from './contexts/LangContext';
import Container from './components/Container';


function App() {
  return (
    <div className="App">
      <LangContextProvider>
        <ThemeContextProvider>
          <Container />
        </ThemeContextProvider>
      </LangContextProvider>

    </div>
  );
}

export default App;
