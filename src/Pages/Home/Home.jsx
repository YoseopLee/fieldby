import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import MainBar from "../../Components/Common/Mainbar/MainBar";
import Navbar from "../../Components/Common/Navbar/Navbar";
import Collection from "../../Components/Home/Collection";
import HomeBanner from "../../Components/Home/HomeBanner";


//axios.defaults.xsrfCookieName="csrftoken";
//axios.defaults.xsrfHeaderName="X-CSRFToken";


const Home = () => {
    const [collections, setCollections] = useState([]);
    

    useEffect(() => {
        const getCollections = async() => {
            try {
                const json = await axios.get(`https://fair.way.golf/api/v1/collections/`);
                console.log(json.data);
                console.log(json.data.results);
                setCollections(json.data.results);
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
        <HomeBanner />
                <div>
                    {collections.map((collection) => (
                        <Collection 
                            key={collection.id}
                            id={collection.id}
                            title={collection.title}
                            contents={collection.contents}
                        />
                    ))}
                </div>
        </HomeContainerCSS>
        </>
    );
}

const HomeContainerCSS = styled.div`
    margin-top : 60px;
`

export default Home;