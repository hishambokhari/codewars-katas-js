
// // function declarations
// function greet(firstName= "Jon", lastName= "Doe"){
//     return 'Hello ' + firstName + ' ' + lastName;
// }

// console.log(greet());

// Function Expressions

// const square = function(x){
//     return x*x;
// };

// console.log(square(8));

// Immidiatley Invokable function expressions - IIFEs

// (function(){
//     console.log('IIFE Ran...');
// })();

// (function(name){
//     console.log('Hello ' + name );
// })('Brad'); // useful for design patterns ( module patterns)

// property methods

const todo = {
    add: function(){
        console.log('Add todo...');
    },
    edit: function(id){
        console.log(`Edit todo ${id}`);
    }
}

todo.delete = function(){
    console.log('Delete todo');
}

todo.add();
todo.edit(22);
todo.delete();