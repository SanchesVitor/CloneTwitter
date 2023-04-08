import { FormEvent, KeyboardEvent, useState } from "react"
import { Header } from "../components/Header"
import { Separator } from "../components/Separator"
import { Tweet } from "../components/Tweet"

import './Status.css'
import { PaperPlaneRight } from "phosphor-react"

export function Status() {
  const [ newAnswer, setNewAnswer ] = useState('')
  const [ answers, setAnswers ] = useState([
    'Coloca seu Tweet ae!!',
    'Avançando com os estudos',
    'Obrigado por interagir!.'
  ])
  
  function createNewAnswer(event: FormEvent) {
    event.preventDefault()

    setAnswers([newAnswer, ...answers])
    setNewAnswer('')
  }

  function handleHotkeySubmit(event: KeyboardEvent) {
    if (event.key === 'Enter' && (event.ctrlKey || event.metaKey)) {
      setAnswers([newAnswer, ...answers])
      setNewAnswer('')
    }
  }
  
  return (
    <main className="status">
      <Header title='Tweet' />
    
      <Tweet content="Fala ae galera, este é meu primeiro projeto com React.Js, estou desenvolendo esse pequeno projeto que na verdade é um clone do Twitter, com algumas interações, como exemplo, na caixa abaixo, digite um comentário para meu Tweet e clique em 'enviar' "/>

      <Separator />

      <form onSubmit={createNewAnswer} className='answer-tweet-form'>
        <label htmlFor="tweet">
          <img src="https://avatars.githubusercontent.com/u/112482028?v=4" alt="Vitor Sanches" />
          <textarea
           id='tweet' 
           placeholder="Tweet your answer" 
           value={newAnswer}
           onKeyDown={handleHotkeySubmit}
           onChange={(event) => {
            setNewAnswer(event.target.value)
           }}
          />
        </label>

        <button type='submit'>
          <PaperPlaneRight />
         <span>Answer</span> 
        </button>
      </form>

              
      {answers.map(answer => {
        return <Tweet key={answer} content={answer} />
      })}
    </main>
  )
}