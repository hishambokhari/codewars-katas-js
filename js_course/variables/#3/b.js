// Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.

// If you want to know more http://en.wikipedia.org/wiki/DNA

// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". You have function with one side of the DNA (string, except for Haskell); you need to get the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

// More similar exercise are found here http://rosalind.info/problems/list-view/ (source)

// DNAStrand ("ATTGC") // return "TAACG"

// DNAStrand ("GTAT") // return "CATA" 

function DNAStrand(dna){
  //place to store the string
  let compliment = "";

  //iterate over dna
    for(let i = 0;i < dna.length;i++){
      const currentLetter = dna[i];
  // if current letter is an A, append a T
      if (currentLetter == "A"){
        compliment += "T";
      }
    // else if the current letter is a T, append an A
    else if (currentLetter == "T"){
      compliment += "A"
    }
    //else if the current letter is a C, append a G
    else if (currentLetter == "C"){
      compliment += "G"
    }
    // else if the current letter is a G, append a C
    else if (currentLetter =="G"){
      compliment += "C"
    }
  }
  // return compliment string
  return compliment;
}
console.log(DNAStrand("ATTGC"))
// Test.assertEquals(DNAStrand("AAAA"),"TTTT","String AAAA is");
// Test.assertEquals(DNAStrand("ATTGC"),"TAACG","String ATTGC is");
// Test.assertEquals(DNAStrand("GTAT"),"CATA","String GTAT is");