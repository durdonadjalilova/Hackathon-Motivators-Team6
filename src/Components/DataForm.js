import React from 'react';
import { useHistory } from 'react-router';

const DataForm = ({setFirstName, setZipCode, firstName, zipCode}) => {

    const history = useHistory()

    const handleName = (e) => {
        setFirstName(e.target.value);
      };

      const handleChange = (e)=>{
          setZipCode(e.target.value)
      }

    const handleSubmit = (e) => {
        e.preventDefault()
        history.push("/motivators")
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" value= {firstName} onChange={handleName} />
                <input type="text" value={zipCode} onChange={handleChange} />
                <button>Submit</button>
            </form>
        </div>
    )
}

export default DataForm