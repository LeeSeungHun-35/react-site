import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Home from './pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Info from './pages/Info';       // Info.jsx의 경로
import State from './pages/State';    // State.jsx의 경로
import Symptom from './pages/Symptom'; // Symptom.jsx의 경로

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/Info' element={<Info />} />
                    <Route path='/State' element={<State />} />
                    <Route path='/Symptom' element={<Symptom />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </div>
    );
}

export default App;
