import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.scss';
import HomePage from './pages/HomePage/HomePage';
import TrackerPage from './pages/TrackerPage/TrackerPage';

function App() {
  return (
    <BrowserRouter className="App">
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/tracker" element={<TrackerPage/>}/>
      </Routes>
     
    </BrowserRouter>
  );
}

export default App;
