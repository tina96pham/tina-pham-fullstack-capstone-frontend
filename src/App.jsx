import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.scss';
import Headers from './components/Headers/Headers';
import HomePage from './pages/HomePage/HomePage';
import TrackerPage from './pages/TrackerPage/TrackerPage';
import Footer from './components/Footer/Footer';
import MyProgressPage from "./pages/MyProgressPage/MyProgressPage"

function App() {
  return (
    <BrowserRouter className="App">
      <Headers/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/progress" element={<MyProgressPage/>}/>
        <Route path="/tracker" element={<TrackerPage/>}/>
      </Routes>
      <Footer/>
     
    </BrowserRouter>
  );
}

export default App;
