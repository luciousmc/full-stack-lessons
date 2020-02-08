/* eslint-disable no-console */
let currentCount = 3;

let countDown = setInterval(() => {
  if (currentCount > 0) {
    console.log(currentCount--);
  } else {
    console.log('Blast Off!');
    clearInterval(countDown);
  }
}, 1000);