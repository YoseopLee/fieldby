import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Home from "./Pages/Home/Home";
import Item from "./Pages/Item/Item";
import Post from "./Pages/Post/Post";
import PostEach from "./Pages/Post/PostEach";
import Store from "./Pages/Store/Store";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/style" element={<Post/>} />
        <Route path="/post/:id" element={<PostEach/>} />
        <Route path="/store" element={<Store/>} />
        <Route path="/item/:id" element={<Item/>} />
      </Routes>
    </Router>
  );
}

export default App;
