import axios from "axios";
import { useEffect, useState } from "react"

export function getCollection(){
    const [collections, setCollections] = useState([]);

    useEffect(() => {
        const getCollections = async() => {
            try {
                const collectionJson = await axios.get(`https://fair.way.golf/api/v1/collections/?page=`);
                setCollections(collectionJson.data.collections);
            } catch (error) {
                console.log(error);
            }
        };
        getCollections();
    }, []); // dependencies empty

    return (
        <div>
            {collections.map((collection) => (
                <div>
                    
                </div>
            ))}
        </div>
    );
}

