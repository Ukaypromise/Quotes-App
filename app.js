const quote = document.getElementById("quote");
const author = document.getElementById("author");
const searchBtn = document.getElementById("searchbtn");
const inputSearch = document.getElementById("inputsearch");
const prevBtn = document.getElementById("previous");
const randomBtn = document.getElementById("random");
const nextBtn = document.getElementById("next");

const url = "https://type.fit/api/quotes";

const fetchQuotes = async () => {
  let response = await fetch(url);
  let data = await response.json();
  console.log(data);

  function showQuotes() {
    quote.textContent = data[currentItem].text;
    author.textContent = data[currentItem].author;
    console.log(data[currentItem].author);
  }

  nextBtn.addEventListener("click", function () {
    currentItem++;
    if (currentItem > data.length - 1) {
      currentItem = 0;
    }
    showQuotes(currentItem);
  });
  prevBtn.addEventListener("click", function () {
    currentItem--;
    if (currentItem < 0) {
      currentItem = data.length - 1;
    }
    showQuotes(currentItem);
  });

  randomBtn.addEventListener("click", function () {
    currentItem = Math.floor(Math.random() * data.length);
    showQuotes(currentItem);
  });

  searchBtn.addEventListener("click", function () {
    currentItem = inputSearch.value;
    data.find((index) => index == currentItem);
    showQuotes(currentItem);
  });
};

fetchQuotes();

// datas.forEach((data, index) => {
//   quote.textContent = `${data.text}`;
//   author.textContent = ` ${data.author}`;

//   console.log(` ${index} ${data.author} and ${data.text}`);
// });

// async function fetchQuotes() {
//   await fetch(url)
//     .then((res) => res.json())
//     .then((data) => {
//       let currentItem = 0;
//       function showQuotes() {
//         quote.textContent = data[currentItem].text;
//         author.textContent = data[currentItem].author;
//         console.log(data[currentItem].author);
//       }
//       randomBtn.addEventListener("click", function () {
//         currentItem = Math.floor(Math.random() * data.length);
//         showQuotes(currentItem);
//       });
//     });
// }
// fetchQuotes();
