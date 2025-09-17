// 1️⃣ Fetch user data from an API
const fetchUser = () => {
  return fetch("https://jsonplaceholder.typicode.com/users/1")
    .then((response) => response.json());
};

// 2️⃣ Fetch posts of that user
const fetchPosts = (user) => {
  return fetch(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`)
    .then((response) => response.json());
};

// 3️⃣ Fetch comments of the first post
const fetchComments = (posts) => {
  if (posts.length === 0) return Promise.resolve([]);
  return fetch(`https://jsonplaceholder.typicode.com/comments?postId=${posts[0].id}`)
    .then((response) => response.json());
};

// Promise chaining
fetchUser()
  .then((user) => {
    console.log("User:", user);
    return fetchPosts(user);
  })
  .then((posts) => {
    console.log("Posts:", posts);
    return fetchComments(posts);
  })
  .then((comments) => {
    console.log("Comments for first post:", comments);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
