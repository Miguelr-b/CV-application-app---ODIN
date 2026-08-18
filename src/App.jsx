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
  const [dark, setDark] = useState(false);

  const handleLoadExample = () => {
    setPersonal({
      name: "John Doe",
      email: "johndoe@devmail.com",
      phone: "+55 11 91234-5678",
      address: "São Paulo, SP"
    });

    setEducation([{
      school: "Universidade de São Paulo (USP)",
      degree: "Software Engineering",
      start: "2024",
      end: "2028",
      location: "São Paulo, SP"
    }]);

    setExperience([
      {
        company: "Independent Developer",
        position: "Software Engineer",
        start: "Jan 2026",
        end: "Present",
        location: "Remote",
        description: "Architected and developed a 'Local-First' productivity and note-taking application. Implemented back-end services utilizing C#."
      },
      {
        company: "Indie Game Studio",
        position: "Game Developer",
        start: "Mar 2025",
        end: "Dec 2025",
        location: "Remote",
        description: "Designed and balanced gameplay mechanics for tabletop RPG systems, focusing on character archetypes and class abilities."
      }
    ]);
  };

  const handleClearResume = () => {
    setPersonal({name: "", email: "", phone: "", address: ""});
    setEducation([{school: "", degree: "", start: "", end: "", location:""}]);
    setExperience([{company: "", position: "", start: "", end: "", location:"", description:""}]);
  };

  const handleToggleDarkMode = () => {
    document.body.classList.toggle('dark');
    setDark(!dark);
  };

  return (
    <div className='container'>
      <div className='sides'>
        <div className='left_side'>
          <button onClick={handleLoadExample}>Load example</button>
          <button className='clear' onClick={handleClearResume}>Clear resume</button>
          {dark === true ?<button onClick={handleToggleDarkMode}>White mode</button> : <button onClick={handleToggleDarkMode}>Dark mode</button>}
        </div>
        <div className='details'>
          <PersonalDetails personal={personal} setPersonal={setPersonal}/>
          <Education education={education} setEducation={setEducation}/>
          <Experience experience={experience} setExperience={setExperience}/>
        </div>
      </div>
      
      <div>
        <Cv personal={personal} education={education} experience={experience}/>
      </div>
      
      
    </div>
  )
}

export default App