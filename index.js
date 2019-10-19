fetch('https://api.imgflip.com/get_memes').then(response =>
  response.status === 200
    ? console.log('Successful request!')
    : console.err(`"Oops, we get an error ${response.satus}"`)
);
