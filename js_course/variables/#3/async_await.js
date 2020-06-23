
const doChores = async () => {



const willCleanTheRoom = new Promise((resolve, reject) =>{

  let cleanRoom = true;
  if (cleanRoom){
    resolve('room is clean')
  } else {
    reject('Room is still dirty')
  }  
});

const removeGarbage = new Promise((resolve, reject)=> {
let removeGarbage = true;
if(removeGarbage){
  resolve('garbage removed');
} else {
  reject('garbage is not removed');
}
});

const getReward = new Promise((resolve, reject)=> {
let getReward = true;
if(getReward){
  resolve('recieved reward');
} else {
  reject(':( no rewards')
}
});

try{
  let isRoomClean = await willCleanTheRoom;
  console.log(isRoomClean);
} catch(err){
  console.log(err);
  return;
}

try{
  let isGarbageRemoved = await removeGarbage;
  console.log(isGarbageRemoved);
} catch(err){
  console.log(err);
  return;
}

try{
  let haveGottenReward = await getReward;
  console.log(haveGottenReward);
} catch(err){
  console.log(err);
  return;
}

};
doChores();
