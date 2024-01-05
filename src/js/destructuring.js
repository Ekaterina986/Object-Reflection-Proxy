const character = {
    name: 'Лучник',
    type: 'Bowman',
    health: 50,
    level: 3,
    attack: 40,
    defence: 10,
    special: [
      {
        id: 8,
        name: 'Двойной выстрел',
        icon: 'http://...',
        description: 'Двойной выстрел наносит двойной урон'
      }, 
      {
        id: 9,
        name: 'Нокаутирующий удар',
        icon: 'http://...'
        // <- обратите внимание, описание "засекречено"
      }
    ]	
  }
  const {special, name, type} = character;
  // const special = character.special;
  // getAttack(character)
  export function getAttack({special}) {
  // {special} = character
  // export function getAttack(a) {
    // a = character
     return special.map((item) => {
        return {
            id: item.id,
            name: item.name,
            icon: item.icon,
            description: item.description === undefined ? 'Описание недоступно' : item.description
        }
     })
  }