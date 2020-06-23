// promises


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
})

willCleanTheRoom.then(resolveStatus => {
  console.log(resolveStatus)
  return removeGarbage;
}).then(resolveStatus => {
  console.log(resolveStatus);
  return getReward;
}).then(resolveStatus => {
  console.log(resolveStatus);
  console.log('all done');
}).catch(rejectStatus => {
  console.log(rejectStatus)
})
