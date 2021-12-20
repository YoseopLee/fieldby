import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import MainBar from "../../Components/Common/Mainbar/MainBar";
import Navbar from "../../Components/Common/Navbar/Navbar";
import Collection from "../../Components/Home/Collection";


//axios.defaults.xsrfCookieName="csrftoken";
//axios.defaults.xsrfHeaderName="X-CSRFToken";


const Home = () => {
    const [loading, setLoading] = useState(true);
    const [collections, setCollections] = useState([]);
    

    useEffect(() => {
        const getCollections = async() => {
            try {
                const json = await axios.get(`http://localhost:8000/api/v1/collections/`);
                console.log(json.data);
                console.log(json.data.results);
                console.log(json.data.results.items)
                console.log(json.data.results.posts)
                setCollections(json.data.results);
                setLoading(false);
            } catch (error) {
                console.log(error);
            }
           
        };
        getCollections();
    }, []); // dependencies empty

    return (
        <>
        <MainBar />
        <Navbar />
        <HomeContainerCSS>
            { loading ? ( <h1>Loading...</h1>
            ) : (
                <div>
                    {collections.map((collection, id) => (
                       <div>
                           <Collection 
                                key={id}
                                title={collection.title}
                                contents={collection.contents}
                            />
                       </div> 
                    ))}
                </div>
            )}
        </HomeContainerCSS>
        </>
    );
}

const HomeContainerCSS = styled.div`
    margin-top : 60px;
`

export default Home;