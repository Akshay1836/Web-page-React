import React from 'react'
import './Trip.css'
import TripData from './TripData'

function Trip() {
  return (
    <div className='cards'>
        <div className='title'>
        <h1>Recenet Trips</h1>
        <p>You can discover new world here</p>
        </div>
        
        <div className='tripcards'>
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

export default Trip