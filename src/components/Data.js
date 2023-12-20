import React from 'react'
import "./Data.css"
import TripData from './TripData'

function Data(props) {
  return (
    <div className='Main-data'>
        <div className='data-top'>
            <h3>WHO WE ARE</h3>
            <p>scroll down and learn more about the team.</p>
        </div>

        <div className='Lower-data'>
             <TripData image="\Images\img-1.jpg" Head="Trip in indonesia" content="Indonesia, officially the Republic of Indonesia (Indonesian: Republik Indonesia), is a country in Southeast Asia and Oceania between the Indian and Pacific oceans. It consists of over 17,000 islands, including Sumatra, Java,
             Sulawesi, and parts of Borneo and New Guinea."/>
            <TripData image="\Images\img-2.jpg" Head="Trip in malaysia" content="Indonesia, officially the Republic of Indonesia (Indonesian: Republik Indonesia), is a country in Southeast Asia and Oceania between the Indian and Pacific oceans. It consists of over 17,000 islands, including Sumatra, Java, 
            Sulawesi, and parts of Borneo and New Guinea."/>
            <TripData image="\Images\img-3.jpg" Head="Trip in France" content="Indonesia, officially the Republic of Indonesia (Indonesian: Republik Indonesia), is a country in Southeast Asia and Oceania between the Indian and Pacific oceans. It consists of over 17,000 islands, including Sumatra, Java, 
            Sulawesi, and parts of Borneo and New Guinea."/>

        </div>

    </div>
  )
}

export default Data