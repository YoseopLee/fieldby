import axios from "axios";
import { useEffect, useState } from "react";
import Collection from "../../Components/Home/Collection";

//axios.defaults.xsrfCookieName="csrftoken";
//axios.defaults.xsrfHeaderName="X-CSRFToken";

function Home(){
    const [loading, setLoading] = useState(true);
    const [collections, setCollections] = useState([]);
    

    useEffect(() => {
        const getCollections = async() => {
            try {
                const json = await axios.get(`http://localhost:8000/api/v1/collections/`);
                setCollections(json.data.collections);
                setLoading(false);
            } catch (error) {
                console.log(error);
            }
           
        };
        getCollections();
    }, []); // dependencies empty

    return (
        <div>
            { loading ? ( <h1>Loading...</h1>
            ) : (
                <div>
                    {collections.map((collection) => (
                       <div>
                           <Collection 
                                key={collection.id}
                                id={collection.id} 
                                title={collection.title}
                                contents={collection.contents}
                                collection_type={collection.collection_type}/>
                       </div> 
                    ))}
                </div>
            )}
        </div>
    );
}

export default Home;