import {useState} from 'react'
import '../styles/cv.css'
import Experience from './experience'

function Cv ({personal, education, experience}) {
    
    return (
    <div className='cv'>
        <h1 className='name'>{personal.name}</h1>

        <div className='personal_details'>
            <a href={personal.email}>{personal.email}</a>
            <a href={personal.phone}>{personal.phone}</a>
            <a href={personal.address}>{personal.address}</a>
        </div>

        <h2 className='education_title'>Education</h2>

        {education.some((item) => item.school !== "") && education.map((single, index) => {
            return (
                <div className='education' key={index}>
                    <div className='education_info'>
                        <strong>{single.school}</strong>
                        <p>{single.degree}</p>
                    </div>
                    <div className='education_status'>
                        <p className='date'>{single.start} - {single.end}</p>
                        <p>{single.location}</p>
                    </div>
                </div>
            )
        })}
        

        <h2 className='experience_title'>Work Experience</h2>

        {experience.some((item) => item.company !== "") && experience.map((single, index) => {
            return (
                <div className='experience' key={index}>
                    <div className='not_description'>
                        <div className='experience_info'>
                            <strong>{single.company}</strong>
                            <p>{single.position}</p>
                        </div>
                        <div className='experience_status'>
                            <p className='date'>{single.start} - {single.end}</p>
                            <p>{single.location}</p>
                        </div>
                    </div>
                    <ul>
                        <li className='description'>{single.description}</li>
                    </ul>
                    
                    
                </div>
            )
        })}
        
    </div>
    )
}

export default Cv;