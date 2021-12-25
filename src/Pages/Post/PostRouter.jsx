import { BrowserRouter, Route, Routes } from "react-router-dom"
import Post from "./Post"

const PostRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="style/*" element={<Post />} />
            </Routes>
        </BrowserRouter>
    );
}

export default PostRouter;