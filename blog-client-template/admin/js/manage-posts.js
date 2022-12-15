const tbody = document.getElementById("tbody");

fetchAllPosts();
async function fetchAllPosts() {
  try {
    const response = await fetch(
      "https://blog-api-assignment.up.railway.app/posts"
    );


    let posts = await response.json();

    let trContent = "";

    for (let post of post) {
      let postDate = new Date(post.date);

      fetchAllPosts();

      async function fetchAllPosts() {
        try {
          const response = await fetch(
            "https://blog-api-assignment.up.railway.app/posts"
          );
          let posts = await response.json();
      
          let trContent = "";
      
          for (let post of posts) {
            let postDate = new Date(post.date);
      
            trContent += `<tr>
                      <th>${post.title} </th>
                      <th>${post.author}</th>
                      <th>${post.tags}</th>
                      <th>${postDate.getFullYear()}-
                      ${postDate.getMonth()}-${postDate.getDate()}</th> `;
          }
        }
      }
    }
  }
}

    