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
  const [monstersDeck, setMonstersDeck] = useState(shuffle(monsters));
  const [itemsDeck, setItemsDeck] = useState(shuffle(items));
  const [locationsDeck, setLocationsDeck] = useState(shuffle(locations));
  const [eventsDeck, setEventsDeck] = useState(shuffle(events));
  const [mutationsDeck, setMutationsDeck] = useState(shuffle(mutations));
  const [victimsDeck, setVictimsDeck] = useState(shuffle(victims));

  const [selectedMonsters, setSelectedMonsters] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);
  const [selectedEvents, setSelectedEvents] = useState([]);
  const [selectedMutations, setSelectedMutations] = useState([]);
  const [selectedVictims, setSelectedVictims] = useState([]);
  const [selectedLocations, setSelectedLocations] = useState([]);

  // const [discardedMonsters, setDiscardedMonsters] = useState([]);
  // const [discardedItems, setDiscardedItems] = useState([]);
  // const [discardedEvents, setDiscardedEvents] = useState([]);
  // const [discardedMutations, setDiscardedMutations] = useState([]);
  // const [discardedVictims, setDiscardedVictims] = useState([]);
  const [discardedLocations, setDiscardedLocations] = useState([]);

  const [originalDecks, setOriginalDecks] = useState(false);
  const [selectedExpandedLocations, setSelectedExpandedLocations] = useState([]);

  const [characters, setCharacters] = useState([]);

  const [Alaric, setAlaric] = useState({ hand: [] });
  const [Brianne, setBrianne] = useState({ hand: [] });
  const [Claudias, setClaudias] = useState({ hand: [] });
  const [Demeter, setDemeter] = useState({ hand: [] });

  const [drawPhase, setDrawPhase] = useState(true);
  const [locationFixed, setLocationFixed] = useState(false);
  const [draft, setDraft] = useState([]);
  const [lostVictims, setLostVictims] = useState([]);
  const [activeMonsters, setActiveMonsters] = useState([]);

  const distributeCharacters = (yourC) => {
    setAlaric({ ...Alaric, character: yourC });
    const shuffledCharacters = shuffle(
      characters.filter((char) => char.name !== yourC.name),
    );
    // eslint-disable-next-line prefer-destructuring
    setBrianne({ ...Brianne, character: shuffledCharacters[0] });
    // eslint-disable-next-line prefer-destructuring
    setClaudias({ ...Claudias, character: shuffledCharacters[1] });
    // eslint-disable-next-line prefer-destructuring
    setDemeter({ ...Demeter, character: shuffledCharacters[2] });
  };

  const characterStats = (theC) => (
    <div>
      <div>{theC.character.name}</div>
      {theC.character.strength && (
      <div>
        Strength:
          {' '}
        {theC.character.strength}
      </div>
      )}
      {theC.character.guts && (
      <div>
        Guts:
          {' '}
        {theC.character.guts}
      </div>
      )}
      {theC.character.luck && (
      <div>
        Luck:
          {' '}
        {theC.character.luck}
      </div>
      )}
      {theC.character.speed && (
      <div>
        Speed:
          {' '}
        {theC.character.speed}
      </div>
      )}
    </div>
  );

  const drafting = (char, setChar, draftee) => {
    if (draftee.type === 'mutation') {
      const tempMutations = { ...char.mutations, draftee };
      console.log('char: ', char.character, draftee);
      const tempStrength = (char.character.strength || 0)
       + (draftee.strength || 0);
      const tempSpeed = (char.character.speed || 0)
      + (draftee.speed || 0);
      const tempGuts = (char.character.guts || 0) + (draftee.guts || 0);
      const tempLuck = (char.character.luck || 0) + (draftee.luck || 0);
      const tempCharacter = {
        ...char.character,
        strength: tempStrength,
        speed: tempSpeed,
        guts: tempGuts,
        luck: tempLuck,
      };
      setChar({ ...char, mutations: tempMutations, character: tempCharacter });
    } else {
      const tempHand = [...char.hand, draftee];
      setChar({ ...char, hand: tempHand });
    }
  };

  return (
    <div className="App">
      {!Alaric.character ? (
        <>
          {!characters.length ? (
            <Button
              variant="contained"
              onClick={() => {
                setCharacters(victimsDeck.slice(0, 4));
                setVictimsDeck(victimsDeck.slice(4));
              }}
            >
              Draw 4 Characters
            </Button>
          ) : <div>Click to Select a Character</div>}
          {characters.map((character) => (
            <Button onClick={() => distributeCharacters(character)}>
              {character.name}
            </Button>
          ))}
        </>
      ) : null}
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <div>
          <div>Alaric (You)</div>
          <div>
            {Alaric.character && characterStats(Alaric)}
          </div>
        </div>
        <div>
          <div>Brianne</div>
          <div>{Brianne.character && characterStats(Brianne)}</div>
        </div>
        <div>
          <div>Claudias</div>
          <div>{Claudias.character && characterStats(Claudias)}</div>
        </div>
        <div>
          <div>Demeter</div>
          <div>{Demeter.character && characterStats(Demeter)}</div>
        </div>
      </div>
      <br />
      {Alaric.character ? (
        <>
          {' '}
          <Button
            disabled={!drawPhase}
            variant="contained"
            onClick={() => {
              setSelectedLocations(locationsDeck.slice(0, 3));
              setLocationsDeck(locationsDeck.slice(3));
              setDrawPhase(false);
            }}
          >
            Draw Locations!
          </Button>
          {selectedLocations.length
            ? selectedLocations.map((selected) => (
              <Button
                onClick={() => {
                  // selecting location!
                  setDiscardedLocations(selectedLocations.filter(
                    (sel) => sel.name !== selected.name,
                  ));
                  setSelectedLocations([selected]);

                  setDraft([...itemsDeck.slice(0, selected.items),
                    ...mutationsDeck.slice(0, selected.mutations),
                    ...eventsDeck.slice(0, selected.events)]);
                  setLostVictims([...lostVictims, ...victimsDeck.slice(0, selected.victims)]);
                  setActiveMonsters([
                    ...activeMonsters,
                    ...monstersDeck.slice(0, selected.monsters),
                  ]);

                  setItemsDeck(itemsDeck.slice(selected.items));
                  setMonstersDeck(monstersDeck.slice(selected.monsters));
                  setVictimsDeck(victimsDeck.slice(selected.victims));
                  setEventsDeck(eventsDeck.slice(selected.events));
                  setMutationsDeck(mutationsDeck.slice(selected.mutations));
                  setLocationFixed(true);
                }}
                disabled={locationFixed}
              >
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
                  <li>
                    Mutations:
                    {' '}
                    {selected.mutations}
                  </li>
                </list>
              </Button>
            ))
            : <div>No cards</div>}
        </>
      ) : null}
      {draft.length ? (
        <>
          <div style={{ fontWeight: 'bold' }}>Draft</div>
          {draft.map((draftee) => (
            <>
              <Button onClick={() => {
                drafting(Alaric, setAlaric, draftee);
                setDraft(draft.filter((filtered) => filtered.name !== draftee.name));
              }}
              >
                {draftee.name}
                {' '}
                (
                {draftee.type}
                )
              </Button>
            </>
          ))}
        </>
      ) : null}
      {lostVictims.length ? (
        <>
          <div style={{ fontWeight: 'bold' }}>Lost Victims</div>
          {lostVictims.map((draftee) => <><div>{draftee.name}</div></>)}
        </>
      ) : null}
      {activeMonsters.length ? (
        <>
          <div style={{ fontWeight: 'bold' }}>Active Monsters</div>
          {activeMonsters.map((draftee) => <><div>{draftee.name}</div></>)}
        </>
      ) : null}
      <br />
      <div>
        <div>Discarded Locations: </div>
        <div>{discardedLocations.map((dis) => <div>{dis.name}</div>)}</div>
      </div>
      <div>***</div>
      <Button
        variant="contained"
        onClick={() => setOriginalDecks(!originalDecks)}
      >
        {originalDecks ? 'Hide' : 'Show'}
        {' '}
        version 0.1

      </Button>
      <br />
      {originalDecks ? (
        <>
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
          {selectedMutations.length
            ? selectedMutations.map((selected) => <div>{selected.name}</div>)
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
          {selectedLocations.length
            ? selectedLocations.map((selected) => <div>{selected.name}</div>)
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
        </>
      ) : null}
    </div>
  );
}

export default App;
