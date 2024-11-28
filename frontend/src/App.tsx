import { Route, Routes } from 'react-router-dom';
import './App.css';
import WelcomePage from './pages/WelcomePage/WelcomePage';

function App() {
  return (
    <Routes>
      <Route path="/welcome/:userId" element={<WelcomePage />} />
    </Routes>
  );
}

export default App;
