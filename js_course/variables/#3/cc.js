// Escape the room
// You are creating an "Escape the room" game.
//  The first step is to create a hash table called rooms that contains all of the rooms of the game. 
//  There should be at least 3 rooms inside it, each being a hash table with at least three properties 
//  (e.g. name, description, completed).

var rooms = {
  firstRoom:  {
    "name":"Julies room",
    "description":"biggest room",
    "completed": true
  },
  secondRoom:  {
    "name":"toms room",
    "description":"medium room",
    "completed": false
  },
  thirdRoom:  {
    "name":"Rogans room",
    "description":"small room",
    "completed": true
  }

}

// describe('room creation', () => {
//   const keys = Object.keys(rooms)
//   it('should have at least three rooms', () => {
//     Test.assertEquals(keys.length >= 3, true)
//   })
//   it('each room should be an object', () => {
//      keys.forEach(name => {
//       Test.expect(typeof(rooms[name]) === 'object', `${name} should be an object`)
//     })
//   })
//   it('should contain at least three properties per room', () => {
//     keys.forEach(name => {
//       let numKeys = Object.keys(rooms[name]).length
//       Test.expect(numKeys >= 3, `not enough properties for room: ${name}`)
//     })
//   })
// })