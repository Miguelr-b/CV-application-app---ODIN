import {useState} from 'react'
import '../styles/cv.css'
import Experience from './experience'

function Cv ({personal, education, experience}) {
    
    return (
    <div className='cv'>
        <h1 className='name'>{personal.name}</h1>

        <div className='personal_details'>
            <div><img></img><p>{personal.email}</p></div>
            <div><img></img><p>{personal.phone}</p></div>
            <div><img></img><p>{personal.address}</p></div>
        </div>

        <h2 className='education_title'>Education</h2>

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
        

        <h2 className='experience_title'>Experience</h2>

        {experience.some((item) => item.company !== "") && experience.map((single, index) => {
            return (
                <div className='experience'>
                    <div className='not_description'>
                        <div className='experience_info'>
                            <strong>{single.company}</strong>
                            <p>{single.position}</p>
                        </div>
                        <div className='experience_status'>
                            <p>{single.start} - {single.end}</p>
                            <p>{single.location}</p>
                        </div>
                    </div>
                    <p className='description'>{single.description}</p>
                    
                    
                </div>
            )
        })}
        
    </div>
    )
}

export default Cv;