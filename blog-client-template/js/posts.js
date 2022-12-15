const postList = document.getElementById("list");

fetchAllPosts();

async function fetchAllPosts() {
  try {
    const response = await fetch(
      "https://blog-api-assignment.up.railway.app/posts"
    );
    let posts = await response.json();

    let postsList = "";
    const maxL = 100;
    for (let post of posts) {
      let postDate = new Date(post.date);

      postsList += `
      <div id="box">
                <h3> ${post.title} </h3>
                <p><i>${post.author}</i></p>
                <p><b>tags:</b>${post.tags}</p>

                <p>${post.content.substr(
                  0,
                  maxL
                )}<a class="read-more" href="post.html?id=${
        post._id
      }" data-id='${post._id}'> read more...</a></p><br>
                <p>${postDate.getFullYear()}-${
        postDate.getMonth() + 1
      }-${postDate.getDate()}</p>
      </div>
            `;
    }

    postList.innerHTML += postsList;
  } catch (error) {
    console.log(error);
  }
}
