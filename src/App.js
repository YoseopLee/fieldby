import {
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";

import Home from "./Pages/Home/Home";
import Item from "./Pages/Item/Item";
import Login from "./Pages/Login/Login";
import Post from "./Pages/Post/Post";
import PostEach from "./Pages/Post/PostEach";
import Store from "./Pages/Store/Store";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/style/*" element={<Post/>}/>
        <Route path="/post/:id" element={<PostEach/>} />
        <Route path="/store" element={<Store/>} />
        <Route path="/item/:id" element={<Item/>} />
        <Route path="login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
