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

    //   <tr>
    //   <th>Title</th>
    //   <th>Author</th>
    //   <th>Tags</th>
    //   <th>Date</th>
    //   <th>Action</th>
    // </tr>

  }
}
}