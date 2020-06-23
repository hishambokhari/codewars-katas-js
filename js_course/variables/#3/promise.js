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
});


Promise.all([willCleanTheRoom,removeGarbage,getReward]).then((messages)=>{
  console.log(messages);
}).catch(messages => {
  console.log(messages);
})
