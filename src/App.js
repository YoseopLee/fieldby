import {
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import PrivateRoute from "./Components/Common/PrivateRoute/PrivateRoute";
import OAuth2RedirectHandler from "./Components/Login/KaKao/OAuth2RedirectHandler";
import OAuth2RedirectHandlerNaver from "./Components/Login/Naver/OAuth2RedirectHandlerNaver";

import Home from "./Pages/Home/Home";
import Item from "./Pages/Item/Item";
import Login from "./Pages/Login/Login";
import Mypage from "./Pages/Mypage/Mypage";
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
        <Route path="/Api/Member/Oauth2ClientCallback/naver/" element={<OAuth2RedirectHandlerNaver />} />

        <Route path="/mypage" element={<Mypage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
