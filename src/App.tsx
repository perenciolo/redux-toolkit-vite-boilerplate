
import { useState } from 'react';
import './App.css';
import { useAppDispatch, useAppSelector } from './app/hooks';
import { amountAdded } from './features/counter/counter-slice';
import { useFetchBreedsQuery } from './features/dogs/dogs-api-slice';

function App() {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  const [numDogs, setNumDogs] = useState(10)
  const { data = [], isFetching } = useFetchBreedsQuery(numDogs);

  function handleClick() {
    dispatch(amountAdded(3))
  }

  if (isFetching) return <div>loading...</div>

  return (
      <div>
        <div>
          <p>Dogs to fetch:</p>
          <select value={numDogs} onChange={(e) => setNumDogs(Number(e.target.value))}>
            <option value={5}>5</option>
            <option value={25}>25</option>
            <option value={50}>50</option>
            <option value={100}>100</option>
          </select>
        </div>
        <p>Number of dogs fetched: {data.length}</p>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Picture</th>
            </tr>
          </thead>
          <tbody>
            {data.map(breed => <tr key={breed.id}>
              <td>{breed.name}</td>
              <td><img height={250} src={breed.image.url} alt={breed.name} /></td>
            </tr>)}
          </tbody>
        </table>
        <button onClick={handleClick}>
          Count is: {count}
        </button>
      </div>
  )
    
}

export default App
