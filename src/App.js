import React, { useState } from 'react'
import { Button } from '@material-ui/core'
import './App.css'

const monsters = [
  {
    type: 'monster',
    name: 'Werewolf',
    speed: 5,
    strength: 2
  },
  {
    type: 'monster',
    name: 'Vampire',
    luck: 3,
    guts: 3
  },
  {
    type: 'monster',
    name: `Frankenstein's Monster`,
    guts: 3,
    strength: 3
  },
  {
    type: 'monster',
    name: 'Mad Scientist',
    luck: 5
  },
  {
    type: 'monster',
    name: 'Cannibal',
    strength: 4
  },
  {
    type: 'monster',
    name: 'Ghost',
    speed: 5,
  },
  {
    type: 'monster',
    name: 'Posession Demon',
    effect: 'strongest thing on board'
  },
  {
    type: 'monster',
    name: 'Nightmare',
    luck: 3
  },
  {
    type: 'monster',
    name: 'Jeckyl and Hyde',
    strength: 3,
    luck: 3,
  },
  {
    type: 'monster',
    name: 'Mummy',
    strength: 5,
  },
  {
    type: 'monster',
    name: 'Little Billy Darkness',
    speed: 3,
    guts: 3
  },
  {
    type: 'monster',
    name: 'Zombie Horde',
    guts: 4
  },
  {
    type: 'monster',
    name: 'Slasher',
    strength: 5,
    luck: 2
  },
  {
    type: 'monster',
    name: 'The Dracula',
    guts: 5,
    speed: 2
  },
  {
    type: 'monster',
    name: 'Serial Killer',
    strength: 3
  },
  {
    type: 'monster',
    name: 'Mr.Chainsaw',
    strength: 3,
    speed: 3
  },
  {
    type: 'monster',
    name: 'Evil Clown',
    guts: 5
  },
  {
    type: 'monster',
    name: 'The One Who Laughs',
    luck: 4
  },
  {
    type: 'monster',
    name: 'Cultist Forerunner',
    guts: 3
  },
  {
    type: 'monster',
    name: 'Cultist Chief',
    luck: 5,
    guts: 2
  },
  {
    type: 'monster',
    name: 'Feral Children',
    speed: 4
  },
  {
    type: 'monster',
    name: 'Telekinetic Bullied Kid',
    speed: 3,
    guts: 3
  },
  {
    type: 'monster',
    name: `Don't Look`,
    speed: 3,
    luck: 3
  },
  {
    type: 'monster',
    name: 'Alien',
    speed: 3
  }
]

const victims = [
  {
    type: 'victim',
    name: 'Creepy Kid',
    luck: 2
  },
  {
    type: 'victim',
    name: 'Surfer',
    luck: 1,
    guts: 1
  },
  {
    type: 'victim',
    name: 'Ballerina / 10 Dollar Lottery Winner',
    luck: 1
  },
  {
    type: 'victim',
    name: 'Twins',
    luck: 1,
    speed: 1
  },
  {
    type: 'victim',
    name: 'Guy in Monster Costume',
    luck: 1,
    strength: 1
  },
  {
    type: 'victim',
    name: 'Horror Movie Nerd',
    guts: 1,
    speed: 1
  },
  {
    type: 'victim',
    name: 'Survivor Girl',
    luck: 1,
    speed: 3
  },
  {
    type: 'victim',
    name: 'Boyfriend',
    guts: 1
  },
  {
    type: 'victim',
    name: 'Best Friend',
    guts: 3
  },
  {
    type: 'victim',
    name: 'Rocker',
    speed: 1
  },
  {
    type: 'victim',
    name: 'Professor',
    luck: 3,
    guts: 1
  },
  {
    type: 'victim',
    name: 'Hacker',
    luck: 3
  },
  {
    type: 'victim',
    name: 'High School Football Star',
    strength: 3,
    speed: 1
  },
  {
    type: 'victim',
    name: 'Prom Queen',
    speed: 3
  },
  {
    type: 'victim',
    name: 'Monster Groupie',
    guts: 2
  },
  {
    type: 'victim',
    name: 'Goth',
    strength: 1,
    speed: 1
  },
  {
    type: 'victim',
    name: 'Pet Dog',
    strength: 1
  },
  {
    type: 'victim',
    name: 'Reporter',
    speed: 2
  },
  {
    type: 'victim',
    name: 'Creepy Kid',
    luck: 2
  },
  {
    type: 'victim',
    name: 'Politician',
    luck: 3
  },
  {
    type: 'victim',
    name: 'Police Officer',
    strength: 2
  },
  {
    type: 'victim',
    name: 'Old Veteran',
    guts: 3
  },
  {
    type: 'victim',
    name: 'Martial Artist',
    guts: 3,
    strength: 1
  },
  {
    type: 'victim',
    name: 'Funeral Home Worker',
    guts: 1,
    strength: 1
  },
  {
    type: 'victim',
    name: 'Soldier',
    strength: 3
  }
]

const mutations = [
  {
    type: 'mutation',
    name: 'Hairy Hand',
    guts: 1
  },
  {
    type: 'mutation',
    name: 'Fangs',
    speed: 1,
    guts: 1
  },
  {
    type: 'mutation',
    name: 'Sharp Nails',
    strength: 1
  },
  {
    type: 'mutation',
    name: 'Noting to Loose',
    strength: 1,
    luck: 1
  },
  {
    type: 'mutation',
    name: 'Less to Lose',
    luck: 1
  },
  {
    type: 'mutation',
    name: 'Can Run',
    speed: 2
  },
  {
    type: 'mutation',
    name: 'Quiver Draw',
    speed: 1
  },
  {
    type: 'mutation',
    name: 'Portent Dreams',
    luck: 2
  },
  {
    type: 'mutation',
    name: 'Scratched!',
    strength: 2
  },
  {
    type: 'mutation',
    name: 'Knows Too Much',
    guts: 2
  },
  {
    type: 'mutation',
    name: 'Grows a Tail',
    guts: 1,
    strength: 1
  },
  {
    type: 'mutation',
    name: 'Booming Voice',
    guts: 2
  },
  {
    type: 'mutation',
    name: 'Scales',
    strength: 1,
    speed: 1
  },
  {
    type: 'mutation',
    name: 'Strong',
    strength: 2
  },
  {
    type: 'mutation',
    name: 'Where is Reality?',
    effect: `may swap this with another player's mutation once on your turn`
  },
  {
    type: 'mutation',
    name: 'Friend to Monsters',
    effect: 'when you play this, target monster becomes treated like victim (stops attack, etc.)'
  },
  {
    type: 'mutation',
    name: 'What Did I Just Drink?',
    speed: 1,
    luck: 1
  },
  {
    type: 'mutation',
    name: 'Mindreader',
    guts: 2
  },
  {
    type: 'mutation',
    name: 'Not Dead Yet',
    luck: 2
  },
  {
    type: 'mutation',
    name: 'Hungry',
    speed: 2
  },
  {
    type: 'mutation',
    name: 'Betrayal/Revenge',
    luck: 2
  },
  {
    type: 'mutation',
    name: 'Way Too Happy',
    guts: 1,
    luck: 1
  },
  {
    type: 'mutation',
    name: `Actually, I'm A...`,
    strength: 2
  },
  {
    type: 'mutation',
    name: 'Mind Moves Objects',
    speed: 2
  }
]

const events = [
  {
    type: 'event',
    name: 'Jump Scare',
    effect: 'you have perfect control over one monster attack this turn'
  },
  {
    type: 'event',
    name: `That Wasn't There Before`,
    effect: 'stop monster attacks until end of turn, draw a new monster and put it in play'
  },
  {
    type: 'event',
    name: 'Dumped By Significant Other',
    effect: 'target is vulnerable at half their weakest stat (round down)'
  },
  {
    type: 'event',
    name: 'Catharsis',
    effect: 'any monster you kill this turn goes into your victory pile'
  },
  {
    type: 'event',
    name: 'Ominous Newspaper Story',
    effect: 'monsters attack weakest in their best stat this turn'

  },
  {
    type: 'event',
    name: 'Research the Killer',
    effect: 'no monster attacks this turn, draw top item and give it to a monster'
  },
  {
    type: 'event',
    name: 'My Brother is Who?',
    effect: 'target player chooses how monsters attack this turn'
  },
  {
    type: 'event',
    name: 'Close Call',
    effect: 'if anything would be injured, discard this and prevent damage'
  },
  {
    type: 'event',
    name: 'Wounded',
    effect: 'deal 3 extra damage to something in combat'
  },
  {
    type: 'event',
    name: 'We Have to Hide!',
    effect: '2 targets (including you) cannot be hit this turn'
  },
  {
    type: 'event',
    name: 'We Have to Fight!',
    effect: 'you can band with up to two victims this turn (any declared monster attacks happen against same target)'
  },
  {
    type: 'event',
    name: 'Unmask It',
    effect: 'discard target monster; top deceased victim replaces monster (cannot be attacked this turn)'
  },
  {
    type: 'event',
    name: 'Betrayal',
    effect: '2 monsters go after target opponents this turn (you still get to keep any survivors)'
  },
  {
    type: 'event',
    name: 'Revenge',
    effect: 'if victim died this turn, target player/victim has double whatever stat they are attacked in, until end of turn'
  },
  {
    type: 'event',
    name: `It's Personal`,
    effect: 'you can attack target player; monsters do not attack this turn'
  },
  {
    type: 'event',
    name: 'No Phone Service',
    effect: 'you cannot be attacked by monsters this turn'
  },
  {
    type: 'event',
    name: 'Useless Police',
    effect: 'drop an item (if you hold one); drop an item someone else has, as well'
  },
  {
    type: 'event',
    name: 'Helpful Ghost',
    effect: 'target player shows hand, you take one of their cards'
  },
  {
    type: 'event',
    name: 'Fire!',
    effect: 'deal 3 damage total to victims on board; this is the only move that happens this turn'
  },
  {
    type: 'event',
    name: 'Lost',
    effect: 'all draws for rest of turn happen off top of relevant discard, if discard is empty nothing happens'
  },
  {
    type: 'event',
    name: 'Time to Pray',
    effect: 'best monster attacks at double strength this turn'
  },
  {
    type: 'event',
    name: 'Atmosphere of Fear',
    effect: 'put any 2 victims from the discard back in play'
  },
  {
    type: 'event',
    name: 'Fog',
    effect: 'all victims band and must attack any monster you choose this turn; no other attacks occur'
  },
  {
    type: 'event',
    name: 'Screaming',
    effect: `swap one monster's stat attributes to anything you want this turn (type, not number)`
  }
]

const locations = [
  {
    type: 'location',
    name: 'School',
    items: 2,
    events: 0,
    monsters: 0,
    victims: 2
  },
  {
    type: 'location',
    name: 'Beach',
    items: 1,
    events: 0,
    monsters: 1,
    victims: 1
  },
  {
    type: 'location',
    name: 'Forest',
    items: 1,
    events: 1,
    monsters: 2,
    victims: 1
  },
  {
    type: 'location',
    name: 'Mansion',
    items: 2,
    events: 0,
    monsters: 2,
    victims: 1
  },
  {
    type: 'location',
    name: 'Locked Room',
    items: 1,
    events: 0,
    monsters: 1,
    victims: 2
  },
  {
    type: 'location',
    name: 'Car',
    items: 2,
    events: 0,
    monsters: 1,
    victims: 0
  },
  {
    type: 'location',
    name: 'Police Station',
    items: 1,
    events: 0,
    monsters: 1,
    victims: 1
  },
  {
    type: 'location',
    name: 'Shack',
    items: 0,
    events: 0,
    monsters: 1,
    victims: 2
  },
  {
    type: 'location',
    name: 'Nightmare Dimension',
    items: 0,
    events: 0,
    monsters: 3,
    victims: 0
  },
  {
    type: 'location',
    name: 'No Idea Where I Am',
    items: 1,
    events: 0,
    monsters: 1,
    victims: 0
  },
  {
    type: 'location',
    name: 'Under the Bed',
    items: 2,
    events: 0,
    monsters: 1,
    victims: 0
  },
  {
    type: 'location',
    name: 'Plane',
    items: 1,
    events: 0,
    monsters: 1,
    victims: 1
  },
  {
    type: 'location',
    name: 'Boat',
    items: 1,
    events: 0,
    monsters: 1,
    victims: 1
  },
  {
    type: 'location',
    name: 'Warehouse',
    items: 1,
    events: 0,
    monsters: 1,
    victims: 1
  },
  {
    type: 'location',
    name: 'Meat Plant',
    items: 1,
    events: 0,
    monsters: 1,
    victims: 1
  },
  {
    type: 'location',
    name: 'Graveyard',
    items: 1,
    events: 0,
    monsters: 1,
    victims: 1
  },
  {
    type: 'location',
    name: 'Mysterious Town',
    items: 0,
    events: 0,
    monsters: 1,
    victims: 2
  },
  {
    type: 'location',
    name: 'Hideout',
    items: 0,
    events: 0,
    monsters: 0,
    victims: 1
  },
  {
    type: 'location',
    name: 'Apartment Building',
    items: 2,
    events: 0,
    monsters: 0,
    victims: 2
  },
  {
    type: 'location',
    name: 'School',
    items: 2,
    events: 0,
    monsters: 0,
    victims: 2
  },
  {
    type: 'location',
    name: 'Summoning Circle',
    items: 1,
    events: 0,
    monsters: 1,
    victims: 0
  },
  {
    type: 'location',
    name: 'Corn Field',
    items: 0,
    events: 0,
    monsters: 1,
    victims: 2
  },
  {
    type: 'location',
    name: 'Lab',
    items: 2,
    events: 0,
    monsters: 1,
    victims: 0
  },
  {
    type: 'location',
    name: 'Bathroom',
    items: 0,
    events: 0,
    monsters: 1,
    victims: 1
  },
  {
    type: 'location',
    name: 'Cave',
    items: 1,
    events: 0,
    monsters: 1,
    victims: 0
  }
]

const items = [
  {
    type: 'item',
    name: 'Chainsaw',
    effect: 'monster takes this item in attack against entity, otherwise attack stops'
  },
  {
    type: 'item',
    name: 'Katana',
    effect: 'fights with this entity are 2 best atributes vs two best attributes'
  },
  {
    type: 'item',
    name: 'Sword',
    effect: 'plus 1 to all stats'
  },
  {
    type: 'item',
    name: 'Knife',
    strength: 1
  },
  {
    type: 'item',
    name: 'Mask',
    effect: 'you can swap any 2 items between players once on your turn'
  },
  {
    type: 'item',
    name: 'Hook',
    effect: 'you can swap any 2 items beween victims once between your turns'
  },
  {
    type: 'item',
    name: 'Stiff Drink',
    guts: 1
  },
  {
    type: 'item',
    name: 'Cell Phone',
    effect: 'you can swap any 2 items between yourself and victims once on each of your turns'
  },
  {
    type: 'item',
    name: 'Rock',
    effect: 'on your turn, you may pick target player and force them to immediately play or discard a card'
  },
  {
    type: 'item',
    name: 'Pen',
    luck: 1
  },
  {
    type: 'item',
    name: 'Taser',
    speed: 1
  },
  {
    type: 'item',
    name: `Wouldn't You Like to Know`,
    effect: 'if bearer would be slain (not you), shuffle them back into deck and attach this to new victim'
  },
  {
    type: 'item',
    name: 'Handgun',
    effect: 'on your turn, you may break target item'
  },
  {
    type: 'item',
    name: 'Rifle',
    effect: 'once between your turns, if +2 in any stat would swing a battle, you may stop the battle'
  },
  {
    type: 'item',
    name: 'Machine Gun',
    effect: 'player whose turn it is may stop target attack against owner; if so, all items drop at end of turn'
  },
  {
    type: 'item',
    name: 'Suit of Armor',
    effect: 'if wearer would be killed/damaged, anyone may discard a card to save them, if this is worn by a player it is discarded if the player is the one to discard the card'
  },
  {
    type: 'item',
    name: 'Kevlar',
    effect: 'if wearer would be killed/damaged this is instead dropped and may be picked up by anyone next turn'
  },
  {
    type: 'item',
    name: 'Explosives',
    effect: 'attach only to victim, if monster would attack victim, both victim and monster die'
  },
  {
    type: 'item',
    name: `Mechanic's Tools`,
    effect: 'as relevant, double the effects of an item also on this entity'
  },
  {
    type: 'item',
    name: 'Crowbar',
    effect: 'anyone who fights this entity drops an item when they do'
  },
  {
    type: 'item',
    name: 'Rope',
    effect: 'anyone who holds this cannot loose any other item'
  },
  {
    type: 'item',
    name: 'Stereo',
    effect: 'anyone who holds this is first priority target'
  },
  {
    type: 'item',
    name: 'Computer',
    effect: 'anyone who holds this is last priority target'
  },
  {
    type: 'item',
    name: 'Boxing Gloves',
    effect: 'anyone may discard cards to give holder +1 in any relevant stat per discard for one turn'
  },
  {
    type: 'item',
    name: 'Key',
    effect: 'victim holding this escapes attack (still holding key)'
  },
]

function App() {
  const [selectedMonsters, setSelectedMonsters] = useState([1,2])
  return (
    <div className="App">
      <Button variant="contained">Get Cards!</Button>
      {selectedMonsters.map(selected=><div>body</div>)}
    </div>
  );
}

export default App;
