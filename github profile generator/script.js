const searchInput = document.getElementById("search-input");
const searchBtn = document.getElementById("search-btn");
const outputDiv = document.getElementById("output");
const apiUrl = "https://api.github.com/users/";

searchBtn.addEventListener("click", () => {
  const userName = searchInput.value;
  const url = apiUrl + userName;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const outputHtml = `
        <h2>${data.name}</h2>
        <img src="${data.avatar_url}" alt="Profile picture">
        <ul>
          <li>Username: ${data.login}</li>
          <li>Location: ${data.location}</li>
          <li>Followers: ${data.followers}</li>
          <li>Following: ${data.following}</li>
          <li>Public Repos: ${data.public_repos}</li>
          <li>Profile URL: <a href="${data.html_url}">${data.html_url}</a></li>
        </ul>
      `;
      outputDiv.innerHTML = outputHtml;
    })
    .catch((error) => console.error(error));
});
