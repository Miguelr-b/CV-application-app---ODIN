import {useState} from 'react'
import '../styles/cv.css'

function Cv ({personal}) {

    return (
    <div className='Personal_details'>
        <h1 className='title'>Personal Details</h1>

        <p>{personal.name}</p>
    </div>
    )
}

export default Cv;