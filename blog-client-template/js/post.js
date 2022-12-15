const divList = document.getElementById("div-list");

console.log(location.search);
let urlParams = new URLSearchParams(window.location.search);
console.log(urlParams.get("id"));

singlePost();

async function singlePost() {
  try {
    const response = await fetch(
      "https://blog-api-assignment.up.railway.app/posts/" + urlParams.get("id")
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const post = await response.json();
    console.log(post);
    let postString = "";
    let postDate = new Date(post.date);
    postString += `
          <div id="box">
                  <h2>${post.title}</h2>
                  <p><i>${post.author}</i></p>
                  <p><b>tags:</b>${post.tags}</p>
                      <p class="content">${
                        post.content
                      }<br> <p>${postDate.getFullYear()}-${
      postDate.getMonth() + 1
    }-${postDate.getDate()}</p>        
          <div>`;
    divList.innerHTML = postString;
  } catch {
    console.log("Something went wrong");
  }
}
