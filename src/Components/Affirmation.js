import React, { useState, useEffect } from "react";

const Affirmation = ({ affirmations }) => {
  const [affirmation, setAffirmation] = useState("");

  let weatherType = "rain";

  useEffect(() => {
    const fetchAffirmation = () => {
      let badWeather = [];
      let allWeather = [];

      affirmations.map((oneAffirmation) => {
        if (
          oneAffirmation.phrase.includes("beyond") ||
          oneAffirmation.phrase.includes("change") ||
          oneAffirmation.phrase.includes("food") ||
          oneAffirmation.phrase.includes("living") ||
          oneAffirmation.phrase.includes("manifest") ||
          oneAffirmation.phrase.includes("partner") ||
          oneAffirmation.phrase.includes("relationships")
        ) {
          return;
        }
        if (weatherType.toLowerCase() !== "clear") {
          if (
            oneAffirmation.phrase.includes("allow") ||
            oneAffirmation.phrase.includes("annoy") ||
            oneAffirmation.phrase.includes("care") ||
            oneAffirmation.phrase.includes("courage") ||
            oneAffirmation.phrase.includes("health") ||
            oneAffirmation.phrase.includes("joy") ||
            oneAffirmation.phrase.includes("life") ||
            oneAffirmation.phrase.includes("need") ||
            oneAffirmation.phrase.includes("negative") ||
            oneAffirmation.phrase.includes("past") ||
            oneAffirmation.phrase.includes("peace") ||
            oneAffirmation.phrase.includes("power") ||
            oneAffirmation.phrase.includes("prosper") ||
            oneAffirmation.phrase.includes("relax") ||
            oneAffirmation.phrase.includes("release") ||
            oneAffirmation.phrase.includes("safe") ||
            oneAffirmation.phrase.includes("significant") ||
            oneAffirmation.phrase.includes("soul") ||
            oneAffirmation.phrase.includes("steps") ||
            oneAffirmation.phrase.includes("success") ||
            oneAffirmation.phrase.includes("thought") ||
            oneAffirmation.phrase.includes("want") ||
            oneAffirmation.phrase.includes("infinite") ||
            oneAffirmation.phrase.includes("always") ||
            oneAffirmation.phrase.includes("am") ||
            oneAffirmation.phrase.includes("anything") ||
            oneAffirmation.phrase.includes("beauty") ||
            oneAffirmation.phrase.includes("best") ||
            oneAffirmation.phrase.includes("calm") ||
            oneAffirmation.phrase.includes("compassion") ||
            oneAffirmation.phrase.includes("energy") ||
            oneAffirmation.phrase.includes("every") ||
            oneAffirmation.phrase.includes("family") ||
            oneAffirmation.phrase.includes("goals") ||
            oneAffirmation.phrase.includes("good") ||
            oneAffirmation.phrase.includes("gratitude") ||
            oneAffirmation.phrase.includes("happy") ||
            oneAffirmation.phrase.includes("heal") ||
            oneAffirmation.phrase.includes("i'm") ||
            oneAffirmation.phrase.includes("income") ||
            oneAffirmation.phrase.includes("learn") ||
            oneAffirmation.phrase.includes("love") ||
            oneAffirmation.phrase.includes("myself") ||
            oneAffirmation.phrase.includes("paradise") ||
            oneAffirmation.phrase.includes("people") ||
            oneAffirmation.phrase.includes("perfect") ||
            oneAffirmation.phrase.includes("positive") ||
            oneAffirmation.phrase.includes("spirit") ||
            oneAffirmation.phrase.includes("succeed") ||
            oneAffirmation.phrase.includes("treat") ||
            oneAffirmation.phrase.includes("trust") ||
            oneAffirmation.phrase.includes("valuable") ||
            oneAffirmation.phrase.includes("well") 
          ) {
            badWeather.push(oneAffirmation);
            return setAffirmation(
              badWeather[Math.floor(Math.random() * badWeather.length)].phrase
            );
          }
        } else {
          allWeather.push(oneAffirmation);
          return setAffirmation(
            allWeather[Math.floor(Math.random() * allWeather.length)].phrase
          );
        }
      });
    };

    fetchAffirmation();
  });

  return <div>{affirmation.toUpperCase()}</div>;
};

export default Affirmation;
