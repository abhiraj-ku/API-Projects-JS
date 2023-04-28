const prompt = document.getElementById("prompt");
const result = document.getElementById("result");

const pp = prompt.value;
console.log(pp);

//method 1 Using Rapid Chat Gpt API 

function callGptApi() {
  const pp = prompt.value;
  const options = {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "X-RapidAPI-Key": "API_KEY_HERE",
      "X-RapidAPI-Host": "openai80.p.rapidapi.com",
    },
    // body: '{"model":"gpt-3.5-turbo","messages":[{"role":"user","content":"${pp}"}]}',
    body: `{"model":"gpt-3.5-turbo","messages":[{"role":"user","content":"${pp}"}]}`,
  };

  fetch("https://openai80.p.rapidapi.com/chat/completions", options)
    .then((response) => response.json())
    .then((response) => {
      result.innerText = response.choices[0].message.content;
    })
    .catch((err) => console.error(err));
  if (result.innerText != "") {
    prompt.innerText = "hehe ";
  }
}

const API_KEY = "API_KEY_HERE";

const outputElem = document.getElementById("output");

async function getMessage() {
  console.log("clicked");
  const options = {
    method: "POST",
    headers: {
      Authorization: `Bearer ${API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: inputQuery.value }],
      max_token: 100,
    }),
  };
  try {
    const response = await fetch(
      "https://api.openai.com/v1/chat/completions",
      options
    );
    const data = await response.json();
    console.log(data);
    outputElem.textContent = data.choices[0].messages.content;
    if (data.choices[0].messages.content) {
      const pElem = document.createElement("p");
      pElem.textContent = inputQuery.value;
      historyDiv.append(pElem);
    }
  } catch (err) {
    console.log(err);
  }
}

submitButton.addEventListener("click", getMessage);

const sideBar = document.querySelector(".side-bar");
const hambur = document.querySelector(".hamburger");
const hamburTimes = document.querySelector(".hamburger-times");
const inputQuery = document.querySelector(".input");
const historyDiv = document.querySelector(".history");
const submitButton = document.getElementById("submit");
const buttonNew = document.querySelector("button");

hambur.addEventListener("click", () => {
  sideBar.classList.toggle("active");
  // console.log("hello");
});
hamburTimes.addEventListener("click", () => {
  sideBar.classList.remove("active");
  // console.log("hello");
});

submitButton.addEventListener("click", () => {
  if (inputQuery) {
    const pElem = document.createElement("p");
    pElem.textContent = inputQuery.value;
    historyDiv.append(pElem);
  }
});
buttonNew.addEventListener("click", () => {
  historyDiv.innerHTML = "";
  if (inputQuery) {
    inputQuery.value = "";
  }
});
