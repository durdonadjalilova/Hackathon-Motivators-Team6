import React from "react";

const Affirmation = ({ affirmations, keyword }) => {
  const fetchAffirmation = () => {
    if (keyword.toLowerCase() !== "clear") {
      return affirmations.bad[
        Math.floor(Math.random() * affirmations.bad.length)
      ]?.phrase;
    } else {
      return affirmations.sun[
        Math.floor(Math.random() * affirmations.sun.length)
      ]?.phrase;
    }
  };

  return <div> {fetchAffirmation()?.toUpperCase()}</div>;
};

export default Affirmation;
