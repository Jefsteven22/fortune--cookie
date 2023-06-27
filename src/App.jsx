import { useState } from 'react'
import './App.css'
import Container from './components/Container'
import TextPhrases from './components/TextPhrases'
import phrases from './data/phrases.json'


function App() {

  const [ index, setIndex] = useState(0)
  const [ text, setText] = useState(0)
  
  const change = () => {
        
    setText(Math.floor(Math.random() * ((phrases.length -1) + 1)))
    setIndex(Math.floor(Math.random() * 4))
    
  }
  
  return (
    <>
      <Container 
        index= { index }
      />
      <TextPhrases 
        phrases = { phrases[ text ] }
      />
      <button onClick={ change } type='button' className='button'>Probar Suerte</button>
    </>
  )
}

export default App
