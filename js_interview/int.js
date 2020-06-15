// Question 1 

// What is the diff between keyword let and var?

// 1- let has a blovk scope which means a variable defined with let will
// end at the end of the block defined
// 1 - var has function scope - doesnt respect all other blocks 
// it will die at the end of the function not the block
// 2 - var gets hoisted at the top of its function
// var defined with let does not get hoisted

let x = function(){
    
    if (true){
     
        var v = 2;
        let l = 1;
    }


    console.log(v);  // returns 2 - exists outside the block
    console.log(l);   // error - does not exist outside the block
   
}
x();