import {useState} from 'react'
import '../styles/personalDetails.css'


function PersonalDetails({personal, setPersonal}) {

    const handleNameChange = (event) => {
        setPersonal({
            ...personal, 
            name: event.target.value 
        });
    };
    
    return (
    <div className='Personal_details'>
        <h1 className='title'>Personal Details</h1>

        <input value={personal.name} type="text" placeholder='Name' onChange={handleNameChange}/>
    </div>
    )
}

export default PersonalDetails;