import {useState} from 'react'
import '../styles/details.css'

/*{name: "", email: "", phone: "", address: ""} */
function PersonalDetails({personal, setPersonal}) {

    const handleNameChange = (event) => {
        setPersonal({
            ...personal, 
            name: event.target.value 
        });
    };
    const handleEmailChange = (event) => {
        setPersonal({
            ...personal, 
            email: event.target.value 
        });
    };
    const handlePhoneChange = (event) => {
        setPersonal({
            ...personal, 
            phone: event.target.value 
        });
    };
    const handleAddressChange = (event) => {
        setPersonal({
            ...personal, 
            address: event.target.value 
        });
    };
    
    return (
    <div className='Personal_details'>
        <h1 className='title'>Personal Details</h1>

        <label htmlFor="name">Name: </label>
        <input value={personal.name} id="name" type="text" placeholder='Name' onChange={handleNameChange}/>

        <label htmlFor="email">Email: </label>
        <input value={personal.email} id="email" type="text" placeholder='Email' onChange={handleEmailChange}/>

        <label htmlFor="phone">Phone: </label>
        <input value={personal.phone} id="phone" type="text" placeholder='Phone' onChange={handlePhoneChange}/>

        <label htmlFor="address">Address: </label>
        <input value={personal.address} id="address" type="text" placeholder='Address' onChange={handleAddressChange}/>
    </div>
    )
}

export default PersonalDetails;