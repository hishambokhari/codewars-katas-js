let outer = 1; // globale scope

if(true){
  let local = 0; // local scope
}

if(true){
  console.log(outer);
  console.log(local); // not global so cannot access it - will throw error
}