import { useEffect, useState } from "react";
import styled from "styled-components";
import MainBar from "../../Components/Common/Mainbar/MainBar";
import Collection from "../../Components/Home/Collection";
import Footer from "../../Components/Home/Footer";
import HomeBanner from "../../Components/Home/HomeBanner";
import Spinner from "../../Components/Common/Spinner/Spinner";
import { http } from "../../Components/Common/Api/CacheAPI";


//axios.defaults.xsrfCookieName="csrftoken";
//axios.defaults.xsrfHeaderName="X-CSRFToken";


const Home = () => {
    const [collections, setCollections] = useState([]);
    const [loading, setLoading] = useState(true);
    

    useEffect(() => {
        const getCollections = async() => {
            try {
                const json = await http.get(
                    `/collections`,
                    {
                        cache : true,
                    }
                );
                console.log(json.data);
                console.log(json.data.results);
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
        <HomeContainerCSS>
        <HomeBanner />
        {loading ? (
            <div className="loading">
                <Spinner />
            </div>
        ) : (   
                <div>
                    {collections.map((collection) => (
                        <Collection 
                            key={collection.id}
                            id={collection.id}
                            type={collection.collection_type}
                            title={collection.title}
                            contents={collection.contents}
                        />
                    ))}
                </div>
        )}
        
        </HomeContainerCSS>
        <Footer />
        </>
    );
}

const HomeContainerCSS = styled.div`
    margin-top : 60px;
    ::-webkit-scrollbar{
        display : none;
    }
`

export default Home;