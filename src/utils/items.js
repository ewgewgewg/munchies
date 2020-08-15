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

  export default items