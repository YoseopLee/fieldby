import {
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import OAuth2RedirectHandler from "./Components/Login/KaKao/OAuth2RedirectHandler";

import Home from "./Pages/Home/Home";
import Item from "./Pages/Item/Item";
import Login from "./Pages/Login/Login";
import PostEach from "./Pages/Post/PostEach";
import PostNew from "./Pages/Post/PostNew";
import PostPop from "./Pages/Post/PostPop";
import Store from "./Pages/Store/Store";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/style" element={<PostPop/>}/>
        <Route path="/style-new" element={<PostNew />} />
        <Route path="/post/:id" element={<PostEach/>} />
        <Route path="/store" element={<Store/>} />
        <Route path="/item/:id" element={<Item/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/Api/Member/Oauth2ClientCallback/kakao/" element={<OAuth2RedirectHandler />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
