import {useState} from 'react'
import '../styles/complementary.css'

function Education ({education, setEducation}) {
    const [show, setShow] = useState(false);

    const handleClick = () => {
        setShow(!show)
    };


    const handleSchoolChange = (event, index) => {
        const updatedEducation = education.map((item, i) => {
            if (i === index) {
                return { ...item, school: event.target.value };
            }
            return item;
        });

        setEducation(updatedEducation);
    };

    const handleDegreeChange = (event, index) => {
        const updatedEducation = education.map((item, i) => {
            if (i === index) {
                return { ...item, degree: event.target.value };
            }
            return item;
        });

        setEducation(updatedEducation);
    };

    const handleStartChange = (event, index) => {
        const updatedEducation = education.map((item, i) => {
            if (i === index) {
                return { ...item, start: event.target.value };
            }
            return item;
        });

        setEducation(updatedEducation);
    };

    const handleEndChange = (event, index) => {
        const updatedEducation = education.map((item, i) => {
            if (i === index) {
                return { ...item, end: event.target.value };
            }
            return item;
        });

        setEducation(updatedEducation);
    };

    const handleLocationChange = (event, index) => {
        const updatedEducation = education.map((item, i) => {
            if (i === index) {
                return { ...item, location: event.target.value };
            }
            return item;
        });

        setEducation(updatedEducation);
    };

    const handleNewEducation = () => {
        setEducation([
            ...education,
            {school: "", degree: "", start: "", end: "", location:""}
        ])
    }

    const handleRemoveEducation = (event, index) => {
        const updatedEducation = education.filter((item, i) => {
            if (i === index) {
                return;
            }
            return item;
        });

        setEducation(updatedEducation);
    };
    

    return (
        <div className='Education'>
            <div className='title'>
                <h1>Education</h1>
                <button onClick={handleClick}>{show ? <div>▼</div> : <div>➤</div>}</button>
            </div>
            
            {show && 
                <div>
                    {education.map((single, index) => {
                        return <div className='single_edu' key={index}>
                            <div className='single_title'>
                                <h3>School - {index}</h3> 
                                <button className='remove' onClick={(event) => handleRemoveEducation(event, index)}></button>
                            </div>

                            <label htmlFor="school">school: </label>
                            <input value={single.school} id="school" type="text" placeholder='school' onChange={(event) => handleSchoolChange(event, index)}/>

                            <label htmlFor="degree">degree: </label>
                            <input value={single.degree} id="degree" type="text" placeholder='degree' onChange={(event) => handleDegreeChange(event, index)}/>

                            <label htmlFor="start">start: </label>
                            <input value={single.start} id="start" type="text" placeholder='start' onChange={(event) => handleStartChange(event, index)}/>

                            <label htmlFor="end">end: </label>
                            <input value={single.end} id="end" type="text" placeholder='end' onChange={(event) => handleEndChange(event, index)}/>

                            <label htmlFor="location">location: </label>
                            <input value={single.location} id="location" type="text" placeholder='location' onChange={(event) => handleLocationChange(event, index)}/>
                        </div>
                    })}

                    <button className='add' onClick={ handleNewEducation }></button>
                </div>
            }
        </div>
    )
}

export default Education;