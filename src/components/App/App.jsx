import { Route, Routes } from 'react-router-dom';
import css from './App.module.css';
import { Header } from '../Header/Header';
import { Home } from '../../Pages/Home/Home';
import { About } from '../../Pages/About/About';
import { NotFound } from '../../Pages/NotFound/NotFound';
import { Users } from '../../Pages/Users/Users';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/users" element={<Users />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
