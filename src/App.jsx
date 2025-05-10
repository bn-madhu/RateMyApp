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
      </div>
    </>
  )
}

export default App
