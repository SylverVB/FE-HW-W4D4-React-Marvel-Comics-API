import { Routes, Route } from 'react-router-dom';
import CharacterList from './components/CharacterList/CharacterList';
import HomePage from './components/HomePage/HomePage';
import './App.css';

function App() {
  return (
    <div id="app-container">
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/characters' element={<CharacterList />} />
      </Routes>
    </div>
  );
}

export default App;
