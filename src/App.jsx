import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import './App.css';
import {
  monsters, locations,
} from './utils';

// Fisher-Yates
const collect = (list) => {
  // eslint-disable-next-line no-plusplus
  for (let i = list.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * i);
    const temp = list[i];
    // eslint-disable-next-line no-param-reassign
    list[i] = list[j];
    // eslint-disable-next-line no-param-reassign
    list[j] = temp;
  }
  return list.slice(0, 5);
};

function App() {
  const [selectedMonsters, setSelectedMonsters] = useState([]);
  const [selectedLocations, setSelectedLocations] = useState([]);

  return (
    <div className="App">
      <Button variant="contained" onClick={() => setSelectedMonsters(collect(monsters))}>Get Monsters!</Button>
      {selectedMonsters.map((selected) => <div>{selected.name}</div>)}
      <Button variant="contained" onClick={() => setSelectedLocations(collect(locations))}>Get Locations!</Button>
      {selectedLocations.map((selected) => <div>{selected.name}</div>)}
    </div>
  );
}

export default App;
