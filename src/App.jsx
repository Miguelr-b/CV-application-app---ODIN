import { useState } from 'react'
import './styles/App.css'
import PersonalDetails from './components/personalDetails'
import Cv from './components/cv'

function App() {
  const [personal, setPersonal] = useState({name: "", email: "", phone: "", address: ""});

  return (
    <div>
      <div className='details'>
        <PersonalDetails personal={personal} setPersonal={setPersonal}/>
      </div>
      <div>
        <Cv personal={personal}/>
      </div>
      
    </div>
  )
}

export default App