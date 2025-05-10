import { useState } from 'react'
import { StarRating } from './components/StarRating'

function App() {
  const [count, setCount] = useState(0)
  

  return (
    <>
      <h1 class="text-3xl font-bold underline text-center my-4">
        Rate my app
      </h1>
      <div className="p-4">
        <StarRating rating={count} onRatingChange={setCount} size={50} />
        <p className="mt-2">Current Rating: {count}</p>
        <p className={`text-2xl ${count <= 2?'text-red-600':count>2 && count<=4 ? 'text-yellow-600':'text-green-600'}`}>Rating is {count <= 2?'Low':count>2 && count<=4 ? 'Good':'Super!!'}</p>
      </div>
    </>
  )
}

export default App
