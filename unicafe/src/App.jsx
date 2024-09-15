//up to exercise 1.10

import { useState } from 'react'

const Header = () => <h1>give feedback</h1>

const Button = ({text, onSmash}) => {
  return (
    <button onClick = {onSmash}>{text}</button>
  )
}

const StatisticsLine = ({text, value}) => {
  return (
    <><h5>{text} {value}</h5></>
  )
}

const Statistics = ({stats}) => {

  if (stats[0] === stats [1] && stats[0] == stats[2] && stats[0] === 0) {
    return (
      <div>
        <p>No feedback given</p>
      </div>
    )
  }

  const average = ([good,neutral,bad]) => {
    return (good-bad)/(good+neutral+bad)
  }
  
  const positive = ([good,neutral,bad]) => {
    return good/(good+neutral+bad) * 100 + '%'
  }

  return (    
    <div>
      <StatisticsLine text="good" value={stats[0]} />
      <StatisticsLine text="neutral" value={stats[1]} />
      <StatisticsLine text="bad" value={stats[2]} />
      <StatisticsLine text="average" value={average(stats)} />
      <StatisticsLine text="positive" value={positive(stats)} />
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  
  const onSmashGood = () => {    
    setGood(good + 1)   
  }
  
  const onSmashNeutral = () => {
    setNeutral(neutral + 1)
  }
  
  const onSmashBad = () => {
    setBad(bad + 1)
  }

  return (
    <div>
      <Header />
      <Button onSmash = {onSmashGood} text = 'good' />
      <Button onSmash = {onSmashNeutral} text = 'neutral' />
      <Button onSmash = {onSmashBad} text = 'bad' />
      <Statistics stats = {[good,neutral,bad]} />          
    </div>
  )
}

export default App