import axios from "axios";
import { useEffect, useState } from "react";
import PostEach from "../../Components/Post/Post";

const Post = () => {
    const [loading, setLoading] = useState(true);
    const [posts, setPosts] = useState([]); 
    
    useEffect(() => {
        const getPosts = async() => {
            const json = await axios.get(`http://localhost:8000/api/v1/posts/`);
            console.log(json.data);
            console.log(json.data.results);
            setPosts(json.data.results);
            setLoading(false);
        };
        getPosts();
    }, []) // dependencies empty

    return (
        <div>
            { loading ? (<h1>Loading...</h1>
            ) : (
                <div>
                    {posts.map((post, id)=>(
                        <PostEach
                        key={id}
                        text={post.text}
                        created={post.created}
                        image={post.image}
                        image2={post.image2}
                        image3={post.image3}
                        />
                    ))}                    
                </div>
            )}
        </div>
    );
}

export default Post;