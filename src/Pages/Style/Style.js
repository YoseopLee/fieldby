import axios from "axios";
import { useEffect, useState } from "react";
import StyleCompo from "../../Components/Style/StyleCompo";

function Style(){
    const [loading, setLoading] = useState(true);
    const [styles, setStyles] = useState([]); 
    
    useEffect(() => {
        const getStyles = async() => {
            const json = await axios.get(`http://localhost:8000/api/v1/posts/`);
            console.log(json.data);
            console.log(json.data.results);
            setStyles(json.data.results);
            setLoading(false);
        };
        getStyles();
    }, []) // dependencies empty

    return (
        <div>
            { loading ? (<h1>Loading...</h1>
            ) : (
                <div>
                    {styles.map((style, id)=>(
                        <StyleCompo
                        key={id}
                        text={style.text}
                        created={style.created}
                        image={style.image}
                        image2={style.image2}
                        image3={style.image3}
                        />
                    ))}                    
                </div>
            )}
        </div>
    );
}

export default Style;