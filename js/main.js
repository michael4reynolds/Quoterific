const quoteButton = document.getElementById('quote-button');
const quoteBox = document.getElementById('quote-box');
const twitterBtn = document.getElementById('twitter-share');

const loadQuote = event => {
  if (event) {
    event.preventDefault();
  }
  axios.post('https://andruxnet-random-famous-quotes.p.mashape.com', {}, {
    headers: {
      "X-Mashape-Key": "OivH71yd3tmshl9YKzFH7BTzBVRQp1RaKLajsnafgL2aPsfP9V",
      "Content-Type": "application/x-www-form-urlencoded",
      "Accept": "application/json"
    },
      params: {
        cat: 'movies'
      }
    })
    .then(function (response) {
      const {author, quote, category} = response.data;
      quoteBox.innerHTML = `<p class="has-text-left">${quote}</p>
           <p class="has-text-right">
             <small id="quote-source">${category}</small>
           </p>
           <p class="has-text-right">
             <small id="quote-source">${author}</small>
           </p>`
      twitterBtn.href = `https://twitter.com/intent/tweet?text=${quote} -- ${author}`
    })
    .catch(function (error) {
      quoteBox.innerHTML = `<p class="notification is-danger">
          <button class="delete"></button>
        ${error}</p>`;
    });
};

quoteBox.onload = loadQuote();
quoteButton.onclick = loadQuote;
