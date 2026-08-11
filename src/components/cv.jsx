import {useState} from 'react'
import '../styles/cv.css'
import Experience from './experience'

function Cv ({personal, education, experience}) {
    
    return (
    <div className='cv'>
        <h1 className='name'>{personal.name}</h1>

        <div className='personal_details'>
            <img></img><p>{personal.email}</p>
            <img></img><p>{personal.phone}</p>
            <img></img><p>{personal.address}</p>
        </div>

        <hr></hr>
        <h1 className='education_title'>Education</h1>
        <hr></hr>

        {education.some((item) => item.school !== "") && education.map((single, index) => {
            return (
                <div className='education'>
                    <div className='education_info'>
                        <strong>{single.school}</strong>
                        <p>{single.degree}</p>
                    </div>
                    <div className='education_status'>
                        <p>{single.start} - {single.end}</p>
                        <p>{single.location}</p>
                    </div>
                </div>
            )
        })}
        

        <h1 className='experience'>Experience</h1>
        <hr></hr>

        {experience.some((item) => item.company !== "") && experience.map((single, index) => {
            return (
                <div className='experience'>
                    <div className='experience_info'>
                        <strong>{single.company}</strong>
                        <p>{single.position}</p>
                        
                        <p>{single.description}</p>
                    </div>
                    <div className='experience_status'>
                        <p>{single.start} - {single.end}</p>
                        <p>{single.location}</p>
                    </div>
                    
                </div>
            )
        })}
        
    </div>
    )
}

export default Cv;