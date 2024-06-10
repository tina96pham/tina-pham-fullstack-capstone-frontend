import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.scss';
import Headers from './components/Headers/Headers';
import HomePage from './pages/HomePage/HomePage';
import ActionPage from './pages/ActionPage/ActionPage';
import MyProgressPage from './pages/MyProgressPage/MyProgressPage';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <BrowserRouter className="App">
      <Headers/>
      <div className="content-wrapper">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/progress" element={<MyProgressPage />} />
          <Route path="/goal" element={<ActionPage />} />
        </Routes>
      </div>
      <Footer className="footer"/>
     
    </BrowserRouter>
  );
}

export default App;
