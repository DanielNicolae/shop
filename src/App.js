import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import ShoppingCart from './components/ShoppingCart';

function App() {
  return (
    <div className="App">
      <header className="App-header">

      </header>
      <main>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shopping-cart" element={<ShoppingCart />} />
          </Routes>
        </BrowserRouter>
      </main>
    </div>
  );
}

export default App;
