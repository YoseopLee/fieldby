import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import MainBar from "./Components/Common/Mainbar/MainBar";
import Home from "./Pages/Home/Home";
import Post from "./Pages/Post/Post";


function App() {
  return (
    <Router>
      <MainBar />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/style" element={<Post/>} />
      </Routes>
    </Router>
  );
}

export default App;
