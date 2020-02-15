const options = {
  url: '/api/grades',
  method: 'GET',
  headers: {
    'Content-Type': 'application/json'
  },
  success: (obj) => {
    console.log('Sucess! the response is');
  },
  error: (obj, status, err) => {
    console.error('Sorry, something went wrong. ')
  } 
}
$.ajax(options);
