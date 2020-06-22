function testit(s){
 
  const wordArray = ["w","o","r","d"];

  let wordArrayIndex = 0;

  words = 0;

  for(let i = 0;i < s.length;i++){
    if(s.charAt(i).toLowerCase() === wordArray[wordArrayIndex]){
      if(wordArray<3){
        wordArray++;
      } else {
        wordArrayIndex=0;
        words++;
     } 
    }
  }
  return words;

}
console.log(testit("word"));

//How many "word" in these sentence? Use your fingers and toes to count
// Test.assertSimilar(testit("word"), 1, "");
// Test.assertSimilar(testit("hello world"), 1, "");
// Test.assertSimilar(testit("I love codewars."), 0, "");
// Test.assertSimilar(testit("My cat waiting for a dog."), 1, "");
// Test.assertSimilar(testit("We often read book, a word hidden in the book."), 2, "");
// Test.assertSimilar(testit("When you in order to do something by a wrong way, your heart will missed somewhere."), 2, "");
// Test.assertSimilar(testit("This sentence have one word."), 1, "");
// Test.assertSimilar(testit("This sentence have two word, not one word."), 2, "");
// Test.assertSimilar(testit("One word + one word = three word ;-)"), 3, "");
// Test.assertSimilar(testit("Can you find more word for me?"), 1, "");