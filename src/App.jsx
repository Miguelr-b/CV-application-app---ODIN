import { useState } from 'react'
import './styles/App.css'
import PersonalDetails from './components/personalDetails'
import Education from './components/education'
import Cv from './components/cv'
import Experience from './components/experience'

function App() {
  const [personal, setPersonal] = useState({name: "", email: "", phone: "", address: ""});
  const [education, setEducation] = useState([{school: "", degree: "", start: "", end: "", location:""}, ]);
  const [experience, setExperience] = useState([{company: "", position: "", start: "", end: "", location:"", description:""}, ]);

  return (
    <div className='container'>
      <div className='details'>
        <PersonalDetails personal={personal} setPersonal={setPersonal}/>
        <Education education={education} setEducation={setEducation}/>
        <Experience experience={experience} setExperience={setExperience}/>
      </div>
      <div>
        <Cv personal={personal} education={education} experience={experience}/>
      </div>
      
    </div>
  )
}

export default App