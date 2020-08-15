import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import './App.css';
import {
  monsters, locations, events, items, mutations, victims,
} from './utils';

// Fisher-Yates
const shuffle = (list) => {
  // eslint-disable-next-line no-plusplus
  for (let i = list.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * i);
    const temp = list[i];
    // eslint-disable-next-line no-param-reassign
    list[i] = list[j];
    // eslint-disable-next-line no-param-reassign
    list[j] = temp;
  }
  return list;
};

function App() {
  const [selectedMonsters, setSelectedMonsters] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);
  const [selectedEvents, setSelectedEvents] = useState([]);
  const [selectedMutations, setSelectedMutations] = useState([]);
  const [selectedVictims, setSelectedVictims] = useState([]);

  const [selectedLocations, setSelectedLocations] = useState([]);
  const [selectedExpandedLocations, setSelectedExpandedLocations] = useState([]);

  // eslint-disable-next-line
  const [monstersDeck, setMonstersDeck] = useState(shuffle(monsters));
  const [itemsDeck, setItemsDeck] = useState(shuffle(items));
  const [locationsDeck, setLocationsDeck] = useState(shuffle(locations));
  const [eventsDeck, setEventsDeck] = useState(shuffle(events));
  const [mutationsDeck, setMutationsDeck] = useState(shuffle(mutations));
  const [victimsDeck, setVictimsDeck] = useState(shuffle(victims));

  return (
    <div className="App">
      <Button variant="contained" onClick={() => setMonstersDeck(shuffle(monsters))}>Get New Monsters Deck</Button>
      <br />
      <Button
        variant="contained"
        onClick={() => {
          setSelectedMonsters(monstersDeck.slice(0, 5));
          setMonstersDeck(monstersDeck.slice(5));
        }}
      >
        Draw Monsters!
      </Button>
      {selectedMonsters.length ? selectedMonsters.map((selected) => <div>{selected.name}</div>)
        : <div>No cards</div>}
      <Button variant="contained" onClick={() => setItemsDeck(shuffle(items))}>Get New Items Deck</Button>
      <br />
      <Button
        variant="contained"
        onClick={() => {
          setSelectedItems(itemsDeck.slice(0, 5));
          setItemsDeck(itemsDeck.slice(5));
        }}
      >
        Draw Items!
      </Button>
      {selectedItems.length ? selectedItems.map((selected) => <div>{selected.name}</div>)
        : <div>No cards</div>}
      <Button variant="contained" onClick={() => setEventsDeck(shuffle(events))}>Get New Events Deck</Button>
      <br />
      <Button
        variant="contained"
        onClick={() => {
          setSelectedEvents(eventsDeck.slice(0, 5));
          setEventsDeck(eventsDeck.slice(5));
        }}
      >
        Draw Events!
      </Button>
      {selectedEvents.length ? selectedEvents.map((selected) => <div>{selected.name}</div>)
        : <div>No cards</div>}
      <Button variant="contained" onClick={() => setMutationsDeck(shuffle(mutations))}>Get New Mutations Deck</Button>
      <br />
      <Button
        variant="contained"
        onClick={() => {
          setSelectedMutations(mutationsDeck.slice(0, 5));
          setMonstersDeck(mutationsDeck.slice(5));
        }}
      >
        Draw Mutations!
      </Button>
      {selectedMutations.length ? selectedMutations.map((selected) => <div>{selected.name}</div>)
        : <div>No cards</div>}
      <Button variant="contained" onClick={() => setVictimsDeck(shuffle(victims))}>Get New Victims Deck</Button>
      <br />
      <Button
        variant="contained"
        onClick={() => {
          setSelectedVictims(victimsDeck.slice(0, 5));
          setVictimsDeck(victimsDeck.slice(5));
        }}
      >
        Draw Victims!
      </Button>
      {selectedVictims.length ? selectedVictims.map((selected) => <div>{selected.name}</div>)
        : <div>No cards</div>}
      <Button variant="contained" onClick={() => setLocationsDeck(shuffle(locations))}>Get New Locations Deck</Button>
      <br />
      <Button
        variant="contained"
        onClick={() => {
          setSelectedLocations(locationsDeck.slice(0, 5));
          setLocationsDeck(locationsDeck.slice(5));
        }}
      >
        Draw Locations!
      </Button>
      {selectedLocations.length ? selectedLocations.map((selected) => <div>{selected.name}</div>)
        : <div>No cards</div>}
      <Button variant="contained" onClick={() => setSelectedExpandedLocations(shuffle(locations).slice(0, 5))}>Get Random Expanded Locations!</Button>
      {selectedExpandedLocations.map((selected) => (
        <div>
          <div style={{ fontWeight: 'bold' }}>{selected.name}</div>
          <list>
            <li>
              Items:
              {' '}
              {selected.items}
            </li>
            <li>
              Events:
              {' '}
              {selected.events}
            </li>
            <li>
              Monsters:
              {' '}
              {selected.monsters}
            </li>
            <li>
              Victims:
              {' '}
              {selected.victims}
            </li>
          </list>
        </div>
      ))}
    </div>
  );
}

export default App;
