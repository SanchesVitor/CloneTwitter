import { FormEvent, useState } from "react"
import { Header } from "../components/Header"
import { Separator } from "../components/Separator"
import { Tweet } from "../components/Tweet"

import './Status.css'

export function Status() {
  const [ newAnswer, setNewAnswer ] = useState('')
  const [ answers, setAnswers ] = useState([
    'Concordo...',
    'Olha, faz sentido!',
    'Parabéns pelo progresso.'
  ])
  
  function createNewAnswer(event: FormEvent) {
    event.preventDefault()

    setAnswers([newAnswer, ...answers])
    setNewAnswer('')
  }
  
  return (
    <main className="status">
      <Header title='Tweet' />
    
      <Tweet content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus ducimus quas veritatis maiores repellat labore consequatur dolorum voluptatem suscipit, optio harum praesentium commodi ipsum quod quaerat ab accusantium porro aspernatur?"/>

      <Separator />

      <form onSubmit={createNewAnswer} className='answer-tweet-form'>
        <label htmlFor="tweet">
          <img src="https://avatars.githubusercontent.com/u/112482028?v=4" alt="Vitor Sanches" />
          <textarea
           id='tweet' 
           placeholder="Tweet your answer" 
           value={newAnswer}
           onChange={(event) => {
            setNewAnswer(event.target.value)
           }}
          />
        </label>

        <button type='submit'>Answer</button>
      </form>

              
      {answers.map(answer => {
        return <Tweet key={answer} content={answer} />
      })}
    </main>
  )
}