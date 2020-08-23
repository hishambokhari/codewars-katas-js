function Book(title, author, year){
  
  this.title = title;
  this.author = author;
  this.year = year;
  
}

//get age

Book.prototype.getAge = function(){
  const years = new Date().getFullYear() - this.year;
  return `${this.title} is ${years} years old`
}


//get summary
Book.prototype.getSummary = function(){
  return `${this.title} was written by ${this.author} in ${this.year}`;
}

const book1 = new Book('Book One', 'John Doe', '2013');
const book2 = new Book('Book two', 'tom', '2016');

console.log(book2.getAge());