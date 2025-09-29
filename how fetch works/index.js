// Fetch GitHub user data
fetch("https://api.github.com/users/octocat")
  .then((response) => {
    console.log(response,"response")
    return response.json();
  })
  .then((data) => {
    console.log("GitHub User Data:", data);
  })
  .catch((error) => {
    console.error("Fetch error:", error);
  });
