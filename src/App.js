import React, { useState } from 'react'
import { Button } from '@material-ui/core'
import './App.css'
import {monsters, events, items, locations, mutations, victims } from './utils'

const collect=(list)=>{
  for(let i = list.length - 1; i > 0; i--){
    const j = Math.floor(Math.random() * i)
    const temp = list[i]
    list[i] = list[j]
    list[j] = temp
  }
  return list.slice(0,5)
}

function App() {

  const [selectedMonsters, setSelectedMonsters] = useState([])
  return (
    <div className="App">
      <Button variant="contained" onClick={()=>setSelectedMonsters(collect(monsters))}>Get Cards!</Button>
  {selectedMonsters.map(selected=><div>{selected.name}</div>)}
    </div>
  );
}

export default App;
