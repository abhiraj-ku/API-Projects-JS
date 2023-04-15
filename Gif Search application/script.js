const API_KEYS = "nWDizdnsZdqpLGaay40bDXH4Azp1f5UH";
const submission = document.getElementById("submit-btn");
let generateGif = () => {
  let loader = document.querySelector(".loader");
  loader.style.display = "block";

  document.querySelector(".wrapper").style.display = "none";

  let query = document.getElementById("search-box").value;
  let gifCount = 12;
  let finalUrl = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEYS}&q=${query}&limit=${gifCount}&offset=0&rating=g&lang=en`;
  document.querySelector(".wrapper").innerHTML = "";

  //call to api using fetch method

  fetch(finalUrl)
    .then((res) => res.json())
    .then((info) => {
      console.log(info.data);
      let gifData = info.data;
      gifData.forEach((gif) => {
        let container = document.createElement("div");
        container.classList.add("container");
        let iframe = document.createElement("img");
        console.log(gif);
        iframe.setAttribute("src", gif.images.downsized_medium.url);
        iframe.onload = () => {
          //if iframes has loaded correctly reduce the count when each gif loads
          gifCount--;
          if (gifCount == 0) {
            //If all gifs have loaded then hide loader and display gifs UI
            loader.style.display = "none";
            document.querySelector(".wrapper").style.display = "grid";
          }
        };
        container.append(iframe);
        document.querySelector(".wrapper").append(container);
      });
    });
};
//this function will set display none if search input is empty
function removeElement() {
  const input = document.getElementById("search-box");
  console.log(input.value);
  input.addEventListener("keyup", () => {
    if (input.value.trim() === "") {
      document.querySelector(".loader").style.display = "none";
      document.querySelector(".wrapper").style.display = "none";
    }
  });
}
removeElement();
submission.addEventListener("click", generateGif);
window.addEventListener("load", generateGif);
