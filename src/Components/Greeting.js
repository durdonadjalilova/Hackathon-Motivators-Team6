import { useState, useEffect } from "react";

function Greeting({firstName, setFirstName}) {
  const [hour, setHour] = useState(0);

  let activeFirstName = firstName || window.localStorage.getItem("nameValue")

  const getTime = () => {
    let time = new Date().getHours();
    setHour(time);
  };

  useEffect(() => {
    getTime();
    setFirstName(localStorage.getItem("nameValue"));
  }, []);

  return (
    <h2>
      {hour < 12
        ? `Good morning ${activeFirstName}!`
        : hour < 18
        ? `Good afternoon ${activeFirstName}!`
        : hour <= 23
        ? `Good evening ${activeFirstName}!`
        : "hello"}{" "}
    </h2>
  );
}

export default Greeting;
