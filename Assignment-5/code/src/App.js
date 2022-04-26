import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Homepage from './components/Homepage';
import Postview from './components/Postview';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage />}></Route>
        <Route path="/post" element={<Postview />}></Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
