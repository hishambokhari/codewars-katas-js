class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }

  getSummary() {
    return `This is ${this.title} written by ${this.author} in ${this.year}`
  }
}

// instantiate an objcet

// const book1 = new Book('Book One', 'Hisham', 1929)


// console.log(book1.getSummary())

class Magazine extends Book {
  constructor(title, author, year, month) {
    super(title, author, year, month);
    this.month = month;
  }
}

const mag1 = new Magazine('Mag one', 'John Doe', '2018', 'Jan')

console.log(mag1)