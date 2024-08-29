import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Home from './pages/home/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Info from './pages/info/Info';
import State from './pages/state/State';



function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/Info' element={<Info />} />
                    <Route path='/State' element={<State />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </div>
    );
}


export default App;