import {useState} from 'react'
import '../styles/complementary.css'

function Experience ({experience, setExperience}) {
    const [show, setShow] = useState(false);

    const handleClick = () => {
        setShow(!show)
    };

    /*{company: "", position: "", start: "", end: "", location:"", description:""} */
    const handleCompanyChange = (event, index) => {
        const updatedExperience = experience.map((item, i) => {
            if (i === index) {
                return { ...item, company: event.target.value };
            }
            return item;
        });

        setExperience(updatedExperience);
    };

    const handlePositionChange = (event, index) => {
        const updatedExperience = experience.map((item, i) => {
            if (i === index) {
                return { ...item, position: event.target.value };
            }
            return item;
        });

        setExperience(updatedExperience);
    };

    const handleStartChange = (event, index) => {
        const updatedExperience = experience.map((item, i) => {
            if (i === index) {
                return { ...item, start: event.target.value };
            }
            return item;
        });

        setExperience(updatedExperience);
    };

    const handleEndChange = (event, index) => {
        const updatedExperience = experience.map((item, i) => {
            if (i === index) {
                return { ...item, end: event.target.value };
            }
            return item;
        });

        setExperience(updatedExperience);
    };

    const handleLocationChange = (event, index) => {
        const updatedExperience = experience.map((item, i) => {
            if (i === index) {
                return { ...item, location: event.target.value };
            }
            return item;
        });

        setExperience(updatedExperience);
    };

    const handleDescriptionChange = (event, index) => {
        const updatedExperience = experience.map((item, i) => {
            if (i === index) {
                return { ...item, description: event.target.value };
            }
            return item;
        });

        setExperience(updatedExperience);
    };

    const handleNewExperience = () => {
        setExperience([
            ...experience,
            {company: "", position: "", start: "", end: "", location:"", description:""}
        ])
    }

    const handleRemoveExperience = (event, index) => {
        const updatedExperience = experience.filter((item, i) => {
            if (i === index) {
                return;
            }
            return item;
        });

        setExperience(updatedExperience);
    };
    

    return (
        <div className='Experience'>
            <div className='title'>
                <h1>Work Experience</h1>
                <button onClick={handleClick}>{show ? <div>▼</div> : <div>➤</div>}</button>
            </div>
            
            {show && 
                <div>
                    {experience.map((single, index) => {
                        return <div className='single_exp' key={index}>
                            <div className='single_title'>
                                <h3>Company - {index}</h3> 
                                <button className='remove' onClick={(event) => handleRemoveExperience(event, index)}></button>
                            </div>

                            <label htmlFor="company">Company: </label>
                            <input value={single.company} id="company" type="text" placeholder='company' onChange={(event) => handleCompanyChange(event, index)}/>

                            <label htmlFor="position">Position: </label>
                            <input value={single.position} id="position" type="text" placeholder='position' onChange={(event) => handlePositionChange(event, index)}/>

                            <label htmlFor="start">Start: </label>
                            <input value={single.start} id="start" type="text" placeholder='start' onChange={(event) => handleStartChange(event, index)}/>

                            <label htmlFor="end">End: </label>
                            <input value={single.end} id="end" type="text" placeholder='end' onChange={(event) => handleEndChange(event, index)}/>

                            <label htmlFor="location">Location: </label>
                            <input value={single.location} id="location" type="text" placeholder='location' onChange={(event) => handleLocationChange(event, index)}/>

                            <label htmlFor="description">Description: </label>
                            <input value={single.description} id="description" type="text" placeholder='description' onChange={(event) => handleDescriptionChange(event, index)}/>
                        </div>
                    })}

                    <button className='add' onClick={ handleNewExperience }></button>
                </div>
            }
        </div>
    )
}

export default Experience;