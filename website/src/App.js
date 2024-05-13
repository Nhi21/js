import './App.css';
import { Body } from './components/Body/Body'
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { BrowserRouter } from 'react-router-dom';
import RouterCustom from './router';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Body />
        <Footer />
        <RouterCustom />
      </div>
    </BrowserRouter>

  );
}

export default App;
