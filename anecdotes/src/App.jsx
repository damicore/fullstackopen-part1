import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const randomAnecdote = () => Math.floor(Math.random() * anecdotes.length)

  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))

  const nextAnecdote = () => setSelected(randomAnecdote())

  return (
    <div>
      <h1>Anecdote of the day</h1>
      {anecdotes[selected]}
      <div>
        <Vote selected={selected} votes={votes} setVotes={setVotes}/>
        <NextAnecdote onSmash={nextAnecdote} />
      </div>
      <h1>Anecdote with most votes</h1>
      {anecdotes[(votes.indexOf(Math.max(...votes)))]}
      has {(Math.max(...votes))}
    </div>
  )
}

const NextAnecdote = ({onSmash}) => {
  return (
    <>
      <button onClick={onSmash}>Next Anecdote</button>
    </>
  )
}

const Vote = ({selected, votes, setVotes}) => {
  return (
    <>
      <p>has {votes[selected]} votes.</p>
      <button onClick={() => setVotes(votes.with(selected, votes[selected] + 1))}>Vote</button>
    </>
  )
}

export default App