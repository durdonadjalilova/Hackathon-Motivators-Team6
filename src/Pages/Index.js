import React from 'react'

import Main from '../Components/Main'

import Greeting from '../Components/Greeting'
// import Affirmations from '../Components/Affirmations'
import Weather from '../Components/Weather'
// import Quotes from '../Components/Quotes'
import useForecast from '../hooks/useForecast'

const Index = () => {

    const { fetchForecastData } = useForecast()

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