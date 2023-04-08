import { useEffect, useState } from 'react';
import { getAllCitizens } from './http/citizenAPI';

function App() {
  const [citizens, setCitizens] = useState([]);

  const getCitizens = async() => {
    const citizens = await getAllCitizens();
    return citizens;
  };

  useEffect(() => {
    getCitizens().then((citizens) => setCitizens(citizens));
  }, []);
  console.log(citizens);
  return (
    <div className="App">
      Hello
    </div>
  );
}

export default App;
