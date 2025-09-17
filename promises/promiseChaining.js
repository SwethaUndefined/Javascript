fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => response.json()) 
  .then((data) => {
    console.log("Todo Title:", data.title); 
    return data.userId; 
  })
  .then((userId) => {
    console.log("Fetching user with ID:", userId);
    return fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
  })
  .then((response) => response.json())
  .then((userData) => {
    console.log("User Name:", userData.name);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
