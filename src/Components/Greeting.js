import { useState, useEffect } from "react";

function Greeting({firstName}) {
  const [hour, setHour] = useState(0);

  const getTime = () => {
    let time = new Date().getHours();
    setHour(time);
  };

  useEffect(() => {
    getTime();
  }, []);

  return (
    <h2>
      {hour < 12
        ? `Good morning ${firstName}!`
        : hour < 18
        ? `Good afternoon ${firstName}!`
        : hour <= 23
        ? `Good evening ${firstName}!`
        : "hello"}{" "}
    </h2>
  );
}

export default Greeting;
