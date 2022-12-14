const tbody = document.getElementById("tbody");
fetchAllPosts();

async function fetchAllPosts() {
  try {
    const response = await fetch(
      "https://blog-api-assignment.up.railway.app/posts"
    );
    }

// let posts = await response.json();
}