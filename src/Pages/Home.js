import DataForm from '../Components/DataForm'

function Home({setFirstName, setZipCode, firstName, zipCode}) {
    return (
      <div className="Home">
        <h2>Welcome to Inspirational Weather App!</h2>
        <DataForm setFirstName={setFirstName} setZipCode={setZipCode} firstName={firstName} zipCode={zipCode}/>
      </div>
    );
  }
  
  export default Home;
  