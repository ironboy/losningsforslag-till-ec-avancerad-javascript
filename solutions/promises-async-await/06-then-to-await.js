/*
  Exercise 6: From then to await (Från then till await)

  The original chain used one .then per step, where each callback had to return
  the next promise to keep the chain going. With async/await the same steps read
  top to bottom, and one try/catch covers them all - just like ordinary code.

  Note that the two calls are dependent: we cannot fetch the author until we
  know the post's userId. Sequential awaits are correct here.
*/

const showPostAndAuthor = async postId => {
  try {
    const postResponse = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
    const post = await postResponse.json();
    console.log(post.title);

    const userResponse = await fetch(`https://jsonplaceholder.typicode.com/users/${post.userId}`);
    const user = await userResponse.json();
    console.log('Skriven av: ' + user.name);
  } catch (error) {
    console.log('Något gick fel', error);
  }
};


/* ---------- Try it out ---------- */

await showPostAndAuthor(1);
