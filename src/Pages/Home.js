import DataForm from '../Components/DataForm'
import "../Pages/Home.css"

function Home({setFirstName, setZipCode, firstName, zipCode}) {
    return (
      <div className="Home">
        <h2>Welcome to Inspirational Weather App!</h2>
        <DataForm setFirstName={setFirstName} setZipCode={setZipCode} firstName={firstName} zipCode={zipCode}/>
      </div>
    );
  }
  
  export default Home;
  