/*** Random Quote, Advice, & Dad Jokes ***/

/*
    Some practice on using fetch - utilizing three different public APIs (linked below)
*/

window.addEventListener('load', function () {
  const result = document.getElementById('result');

  document.addEventListener('click', function (event) {

    // TODO: if the random quote button is clicked, put the quote in the result section
    // RANDOM QUOTE courtesy of https://github.com/lukePeavey/quotable
    // Use the API documentation to look up the correct endpoint for a random quote
    if (event.target.id === 'quote') {
      fetch('https://api.quotable.io/random').then(function (response) {
        response.json().then(function (data) {
          console.log(data);
          result.innerHTML = `
            <p class="text-left">&quot;${data.content}&quot;</p> 
            <p class="text-right">—${data.author}</p>
          `;
        })
      });
    }

    // TODO: If the random advice button is clicked, put the advice in the result section
    // RANDOM ADVICE courtesy of https://api.adviceslip.com/
    // Use the API documentation to look up the correct endpoint for a random slip
    if (event.target.id === 'advice') {
      fetch('https://api.adviceslip.com/advice').then(function (response) {
        response.json().then(function (data) {
          console.log(data);
          result.innerHTML = `
            <p>${data.slip.advice}</p>
          `;
        })
      });
    }

    // TODO: If dad joke button is clicked, put dad joke in result section
    // Challenge! Use async/await syntax for this one.
    // RANDOM DAD JOKE courtesy of https://icanhazdadjoke.com/api
    // Use the API documentation to look up the correct endpoint for a random joke
    // Note: a header will be required!
    if (event.target.id === 'dad-joke') {

      async function getDadJoke() {
        let response = await fetch('https://icanhazdadjoke.com', {
          headers: {
            Accept: 'application/json',
          }
        });
        let data = await response.json();

        console.log(data);

        result.innerHTML = `
          <p>${data.joke}</p>
        `;
      }

      // Call your async function to execute the fetch
      getDadJoke();
    }
  });
});
