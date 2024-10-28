import { Route, Routes } from 'react-router-dom';
import css from './App.module.css';
import { Header } from '../Header/Header';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<h1>Home page</h1>} />
        <Route path="/about" element={<h1>About page</h1>} />
      </Routes>
    </div>
  );
}

export default App;
