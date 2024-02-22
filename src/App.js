import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from './pages/HomePage';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <div id="page-body">
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
