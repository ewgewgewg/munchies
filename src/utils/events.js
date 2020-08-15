const events = [
  {
    type: 'event',
    name: 'Jump Scare',
    effect: 'you have perfect control over one monster attack this turn',
  },
  {
    type: 'event',
    name: 'That Wasn\'t There Before',
    effect: 'stop monster attacks until end of turn, draw a new monster and put it in play',
  },
  {
    type: 'event',
    name: 'Dumped By Significant Other',
    effect: 'target is vulnerable at half their weakest stat (round down)',
  },
  {
    type: 'event',
    name: 'Catharsis',
    effect: 'any monster you kill this turn goes into your victory pile',
  },
  {
    type: 'event',
    name: 'Ominous Newspaper Story',
    effect: 'monsters attack weakest in their best stat this turn',

  },
  {
    type: 'event',
    name: 'Research the Killer',
    effect: 'no monster attacks this turn, draw top item and give it to a monster',
  },
  {
    type: 'event',
    name: 'My Brother is Who?',
    effect: 'target player chooses how monsters attack this turn',
  },
  {
    type: 'event',
    name: 'Close Call',
    effect: 'if anything would be injured, discard this and prevent damage',
  },
  {
    type: 'event',
    name: 'Wounded',
    effect: 'deal 3 extra damage to something in combat',
  },
  {
    type: 'event',
    name: 'We Have to Hide!',
    effect: '2 targets (including you) cannot be hit this turn',
  },
  {
    type: 'event',
    name: 'We Have to Fight!',
    effect: 'you can band with up to two victims this turn (any declared monster attacks happen against same target)',
  },
  {
    type: 'event',
    name: 'Unmask It',
    effect: 'discard target monster; top deceased victim replaces monster (cannot be attacked this turn)',
  },
  {
    type: 'event',
    name: 'Betrayal',
    effect: '2 monsters go after target opponents this turn (you still get to keep any survivors)',
  },
  {
    type: 'event',
    name: 'Revenge',
    effect: 'if victim died this turn, target player/victim has double whatever stat they are attacked in, until end of turn',
  },
  {
    type: 'event',
    name: 'It\'s Personal',
    effect: 'you can attack target player; monsters do not attack this turn',
  },
  {
    type: 'event',
    name: 'No Phone Service',
    effect: 'you cannot be attacked by monsters this turn',
  },
  {
    type: 'event',
    name: 'Useless Police',
    effect: 'drop an item (if you hold one); drop an item someone else has, as well',
  },
  {
    type: 'event',
    name: 'Helpful Ghost',
    effect: 'target player shows hand, you take one of their cards',
  },
  {
    type: 'event',
    name: 'Fire!',
    effect: 'deal 3 damage total to victims on board; this is the only move that happens this turn',
  },
  {
    type: 'event',
    name: 'Lost',
    effect: 'all draws for rest of turn happen off top of relevant discard, if discard is empty nothing happens',
  },
  {
    type: 'event',
    name: 'Time to Pray',
    effect: 'best monster attacks at double strength this turn',
  },
  {
    type: 'event',
    name: 'Atmosphere of Fear',
    effect: 'put any 2 victims from the discard back in play',
  },
  {
    type: 'event',
    name: 'Fog',
    effect: 'all victims band and must attack any monster you choose this turn; no other attacks occur',
  },
  {
    type: 'event',
    name: 'Screaming',
    effect: 'swap one monster\'s stat attributes to anything you want this turn (type, not number)',
  },
];

export default events;
