// Rest API, GET, POST, PUT

const apiCall = async () => {
  try {
  const response = await fetch('https://api.github.com/users/techsithgit');
  return response.json();
  } catch(error){
    return error;
  }

};

apiCall().then(profile => console.log(profile));