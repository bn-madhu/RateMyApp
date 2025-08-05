import { useState } from 'react'
import { StarRating } from './components/StarRating'
import MapServices from './components/MapServices'

function App() {
  const [count, setCount] = useState(0)
  
  const locations=[
    { lat: 12.9716, lng: 77.5946, name: "Bangalore" },
    { lat: 12.9616, lng: 77.5846, name: "Koramangala" },
    { lat: 12.9718, lng: 77.5949, name: "MG Road"},
    { lat: 12.9352, lng: 77.6245, name: "Indiranagar" },
    { lat: 12.9719, lng: 77.5947, name: "Brigade Road" },
    { lat: 12.9715, lng: 77.5943, name: "Church Street" },
  ];

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

      <div className="p-4 flex items-center">
        <MapServices 
          className="w-full h-96"
          locations={locations}
        />
      </div>
    </>
  )
}

export default App
