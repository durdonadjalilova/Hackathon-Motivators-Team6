import React, { useState, useEffect } from "react";
// import { useParams, useHistory, Link } from "react-router-dom";
import Affirmation from "../Components/Affirmation"
import axios from "axios";


const Affirmations = () => {
    const [affirmations, setAffirmations] = useState([]);
  
    const fetchAllAffirmations = async () => {
      try {
        let res = await axios.get("https://dulce-affirmations-api.herokuapp.com/affirmation/index");
        setAffirmations(res.data);
      
      } catch (error) {
        console.log(error);
      }
    };
  
    useEffect(() => {
      fetchAllAffirmations();
    }, [])



    return(
        <div>
            <Affirmation affirmations={affirmations}/>
            {/* <ul>
                {affirmations.map(affirmation => {
                    const {phrase} = affirmation
                    return (
                        <li key={phrase}>
                            <h1>{phrase}</h1>
                        </li>
                    )
                })}
            </ul> */}

        </div>
    )
}

export default Affirmations