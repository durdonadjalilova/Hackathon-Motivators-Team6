// class Greeting extends React.Component {
//     state = {
//       hour: null,
//       username: 'Alyssa'
//     }

//     componentDidMount() {
//       this.getHour()
//     }

//     getHour = () => {
//      const date = new Date();
//      const hour = date.getHours()
//      this.setState({
//         hour
//      });
//     }

//     render(){
//       const {hour, username} = this.state;
//       return (
//         <div className='App'>
//           <h2>{hour < 12 ? `Good Morning ${username}` : `Good evening ${username}`}</h2>
//         </div>
//       );
//     }

//   }

import { useState, useEffect } from "react";

function Greeting() {
  const [hour, setHour] = useState(0);
  const [name, setName] = useState("");

  const getTime = () => {
    let time = new Date().getHours();
    setHour(time);
  };

  useEffect(() => {
    getTime();
  });

  return (
    <h2>
      {hour < 12
        ? `Good morning ${name}!`
        : hour < 18
        ? `Good afternoon ${name}!`
        : hour <= 23
        ? `Good evening ${name}!`
        : "hello"}{" "}
    </h2>
  );
}

export default Greeting;
