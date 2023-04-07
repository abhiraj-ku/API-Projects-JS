const apiKey = "624c149b352745519ee8f5fa19fe73e1";
let category = "business";

const btnBusiness = document.getElementById("btn-business");
const btnEntertainment = document.getElementById("btn-entertainment");
const btnHealth = document.getElementById("btn-health");
const btnScience = document.getElementById("btn-science");
const btnSports = document.getElementById("btn-sports");
const btnTechnology = document.getElementById("btn-technology");

const newsContainer = document.getElementById("news");

btnBusiness.addEventListener("click", function () {
  category = "business";
  btnBusiness.classList.add("btn-active");
  btnEntertainment.classList.remove("btn-active");
  btnHealth.classList.remove("btn-active");
  btnScience.classList.remove("btn-active");
  btnSports.classList.remove("btn-active");
  btnTechnology.classList.remove("btn-active");
  getNews();
});

btnEntertainment.addEventListener("click", function () {
  category = "entertainment";
  btnBusiness.classList.remove("btn-active");
  btnEntertainment.classList.add("btn-active");
  btnHealth.classList.remove("btn-active");
  btnScience.classList.remove("btn-active");
  btnSports.classList.remove("btn-active");
  btnTechnology.classList.remove("btn-active");
  getNews();
});

btnHealth.addEventListener("click", function () {
  category = "health";
  btnBusiness.classList.remove("btn-active");
  btnEntertainment.classList.remove("btn-active");
  btnHealth.classList.add("btn-active");
  btnScience.classList.remove("btn-active");
  btnSports.classList.remove("btn-active");
  btnTechnology.classList.remove("btn-active");
  getNews();
});

btnScience.addEventListener("click", function () {
  category = "science";
  btnBusiness.classList.remove("btn-active");
  btnEntertainment.classList.remove("btn-active");
  btnHealth.classList.remove("btn-active");
  btnScience.classList.add("btn-active");
  btnSports.classList.remove("btn-active");
  btnTechnology.classList.remove("btn-active");
  getNews();
});

btnSports.addEventListener("click", function () {
  category = "sports";
  btnBusiness.classList.remove("btn-active");
  btnEntertainment.classList.remove("btn-active");
  btnHealth.classList.remove("btn-active");
  btnScience.classList.remove("btn-active");
  btnSports.classList.add("btn-active");
  btnTechnology.classList.remove("btn-active");
  getNews();
});

btnTechnology.addEventListener("click", function () {
  category = "technology";
  btnBusiness.classList.remove("btn-active");
  btnEntertainment.classList.remove("btn-active");
  btnHealth.classList.remove("btn-active");
  btnScience.classList.remove("btn-active");
  btnSports.classList.remove("btn-active");
  btnTechnology.classList.add("btn-active");
  getNews();
});

function getNews() {
  const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${apiKey}`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      newsContainer.innerText = "Loading......";
      let output = "";
      //   console.log(data.articles);
      data.articles.forEach((article) => {
        let authors = article.author;
        if (authors == null) {
          authors = "No Author Found";
        }
        let descriptions = article.description;
        if (descriptions == null) {
          descriptions = "No content to display";
        }
        output += `
          <div class="news-item">
            <h2>${article.title}</h2>
            <a href=${article.urlToImage}><img src="${article.urlToImage}" alt=""></a>
            
            <p class="author">Author: ${authors}</p>
            <p>${descriptions}</p>
            <a href="${article.url}" target="_blank" class="read-more">Read More</a>
          </div>
        `;
      });
      newsContainer.innerHTML = output;
    })
    .catch((error) => console.log(error));
}

getNews();
