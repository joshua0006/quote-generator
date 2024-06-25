const showQuote = document.querySelector('.quotation');
const quoteButton = document.querySelector('button');
let randomNum = 1
fetch('https://type.fit/api/quotes')
  .then(response => {
    if (!response.ok) {
      throw new Error("Failed to fetch quotes");
    }
    return response.json();
  })
  .then(data => {
    quoteButton.addEventListener('click',() =>{
      randomNum = Math.floor(Math.random()*16)+1;
      quote(data, randomNum);
    })
      quote(data, randomNum);
  })
  .catch(error => {
    console.error('Error fetching quotes:', error);
  });


  function quote(data, randomNum){
    showQuote.innerHTML = `
    <p class="quote">"${data[randomNum].text}"</p>
    <p class="author">${data[randomNum].author}</p>`
  }