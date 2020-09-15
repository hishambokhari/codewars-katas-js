const Artist = require('./artist')
const Painting = require('./painting')

const gul = new Artist("Gul")
const malik = new Artist("Malik")
const ahraf = new Artist("Ashraf")

const abstract = new Painting("Abstract")
const historic = new Painting("Historic")
const random = new Painting("Random sketch")

gul.made(abstract)
gul.made(random)
malik.made(historic)

console.log(gul.delete())


// console.log(abstract.findMyArtist())
// console.log(historic.findMyArtist())





// console.log(random)
// console.log(historic)
// console.log(abstract)



