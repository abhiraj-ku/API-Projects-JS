const prompt = document.getElementById("prompt");
const result = document.getElementById("result");

// const pp = prompt.value;
// console.log(pp);

function callGptApi() {
  const pp = prompt.value;
  const options = {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "X-RapidAPI-Key": "16be04b17cmshd33d24d6d60cbf5p1f775ajsn9518885a434f",
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
