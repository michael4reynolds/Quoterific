const quoteButton = document.getElementById('quote-button');
const quoteBox = document.getElementById('quote-box');

quoteButton.onclick = event => {
  event.preventDefault();
  axios.get('http://quotesondesign.com/wp-json/posts', {
    params: {filter: {orderby: "rand", posts_per_page: 1}}
  })
    .then(function (response) {
      quoteBox.innerHTML = response.data.map(quote => (
          `<p class="has-text-left">${quote.content}</p>
           <p class="has-text-right">
             <small id="quote-source">${quote.title}</small>
           </p>`
        )
      ).join('');
    })
    .catch(function (error) {
      quoteBox.innerHTML =
        `<p class="notification is-danger">
          <button class="delete"></button>
        ${error}</p>`;
    });
};