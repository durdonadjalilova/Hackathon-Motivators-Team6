import React, { useState, useEffect } from "react";
// import { useParams, useHistory, Link } from "react-router-dom";
import Affirmation from "../Components/Affirmation"
import { affirmationHelper } from "./AffirmationHelper";
import axios from "axios";


const Affirmations = ({keyword}) => {
    const [affirmations, setAffirmations] = useState({bad: [], sun:[]});
  
    const fetchAllAffirmations = async () => {
      try {
        let res = await axios.get("https://dulce-affirmations-api.herokuapp.com/affirmation/index");
        let sortedAffirmations= affirmationHelper(res.data)
        setAffirmations(sortedAffirmations);
      
      } catch (error) {
        console.log(error);
      }
    };
  
    useEffect(() => {
      fetchAllAffirmations();
    }, [])



    return(
        <div>
            <Affirmation affirmations={affirmations} keyword={keyword} />
       </div>
    )
}

export default Affirmations