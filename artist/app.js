const Artist = require('./artist')
const Painting = require('./painting')
const Customer = require('./customer')

// Artists
const gul = new Artist("Gul")
const malik = new Artist("Malik")
const ahraf = new Artist("Ashraf")


// Paintings
const abstract = new Painting("Abstract")
const historic = new Painting("Historic")
const random = new Painting("Random sketch")

// Customers
const johnson = new Customer("Johnson")
const david = new Customer("David")
const rock = new Customer("Rock")

johnson.purchasePainting(abstract)
david.purchasePainting(abstract)
rock.purchasePainting(historic)
rock.purchasePainting(random)

gul.made(abstract)
gul.made(random)
malik.made(historic)

// console.log(abstract)

// console.log(abstract)

// console.log(gul)

// console.log(gul.delete())

console.log(gul.findMyPainting())





