/*** Random Quote, Advice, & Dad Jokes ***/

/*
    Some practice on using fetch - utilizing three different public APIs (linked below)
*/

// Event listener for page load
window.addEventListener('load', function () {
  
  // Create object for result section
  let result = document.getElementById('result');

  // Click events using document-level event listener (event delegation)
  document.addEventListener('click', function (event) {

    // TODO: if the random quote button is clicked, put the quote in the result section
    // RANDOM QUOTE courtesy of https://github.com/lukePeavey/quotable
    if (event.target.id === 'quote') {
      fetch('https://api.quotable.io/random').then(function (response) {
        response.json().then(function(data) {
          console.log(data); // to see full JSON object
          result.innerHTML = `
              <p class="text-left">&quot;${data.content}&quot;</p> 
              <p class="text-right">—${data.author}</p>
            `;
        });
      });
    }

    // TODO: If the random advice button is clicked, put the advice in the result section
    // Challenge! Use arrow functions
    // RANDOM ADVICE courtesy of https://api.adviceslip.com/
    if (event.target.id === 'advice') {
      fetch('https://api.adviceslip.com/advice')
        .then(function (response) { response.json() })
        .then(function (data) {
          // API returns data as a slip object
          console.log(data); // to see full JSON object
          result.innerHTML = `
            <p>${data.slip.advice}</p>
          `;
        });
    }

    // TODO: If dad joke button is clicked, put dad joke in result section
    // Challenge! Use async/await syntax for this one.
    // RANDOM DAD JOKE courtesy of https://icanhazdadjoke.com/api
    if (event.target.id === 'dad-joke') {
      // Define async function
      async function getDadJoke() {
        let response = await fetch('https://icanhazdadjoke.com/', {
          // The API author requires this header
          headers: {
            Accept: 'application/json',
          },
        });
        let data = await response.json();

        console.log(data); // to see full JSON object
        result.innerHTML = `
          <p>${data.joke}</p>
        `;
      }
      // Call function
      getDadJoke();
    }
  });
});
