import './App.css';
import LandingPage from './LandingPage/LandingPage';
import PostView from './PostView/PostView';
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route exact path='/postview' element={<PostView />}></Route>
        <Route exact path='/' element={<LandingPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
