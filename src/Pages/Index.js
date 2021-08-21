import React from 'react'

import Main from '../Components/Main'

import Greeting from '../Components/Greeting'
// import Affirmations from '../Components/Affirmations'
import Weather from '../Components/Weather/Weather'
// import Quotes from '../Components/Quotes'


const Index = () => {

 
    

    return(
        <div>
           <Main />

           <Greeting /> 
            <Weather />
        {/* <Affirmations />
            <Quotes /> */}

        </div>
    )
}

export default Index