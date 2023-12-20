import React from 'react'
import './Destination.css'
import Destinationdata from './Destinationdata'


function Destination() {
    return (
        <div className='destination'>
            <div className='des-title'>
                <h2>Popular Destinations</h2>
                <p>Tours gives you the opportunity to see a lot within a time frame</p>
            </div>
            
            <Destinationdata cName="first-des" title="Taal volcanos, Batangaas"
            text="Taal Volcano is a large caldera filled by Taal Lake in the Philippines.Located in the province of Batangas about 50 kilometers (31 mi) 
            south of Manila, the volcano is the second most active volcano in the country with 38 recorded historical eruptions,
             all of which were concentrated on Volcano Island, near the middle of Taal Lake. 
             The caldera was formed by prehistoric eruptions between 140,000 and 5,380 BP."
            image1="/Images/img-10.jpg" image2="/Images/img-11.jpg"/>

            <Destinationdata cName="first-des-reverse" title="Mt. Daguldul"
            text="A nice trek in southern Batangas is the coastal mountain of San Juan, Mt. Daguldul. 
            The name ‘Daguldul’ or ‘Daguldol’ has been used since olden days. It has an onomatopoeic feeling – that of suspense and grandness. Maybe it describes the grandeur of the range and the abrupt rolling of its slopes.
            Actually a small mountain range, Mt. Daguldul has several ‘gems’ to offer. "
            image1="/Images/img-12.webp" image2="\Images\6610872969_fa4c606659.jpg"/>
        </div>
    )
}

export default Destination