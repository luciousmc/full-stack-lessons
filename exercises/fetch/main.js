/* eslint-disable no-console */

fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => {
    return response.json();
  })
  .then(json => {
    console.log('the response object is ', json);
  })
  .catch(error => {
    console.log(error);
  })