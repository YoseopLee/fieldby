import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import MainBar from "./Components/Common/Mainbar/MainBar";
import Navbar from "./Components/Common/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import Item from "./Pages/Item/Item";
import Post from "./Pages/Post/Post";
import Store from "./Pages/Store/Store";


function App() {
  return (
    <Router>
      <MainBar />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/style" element={<Post/>} />
        <Route path="/store" element={<Store/>} />
        <Route path="/item/:id" element={<Item/>} />
      </Routes>
    </Router>
  );
}

export default App;
