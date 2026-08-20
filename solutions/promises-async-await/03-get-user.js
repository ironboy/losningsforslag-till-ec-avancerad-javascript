/*
  Exercise 3: Fetch a user (Hämta en användare)

  Two things to remember about fetch:
  - it takes two awaits: one for the response, one for parsing the body
  - it only rejects on network errors. A 404 is a perfectly fine response as
    far as fetch is concerned, so we have to check response.ok ourselves.
*/

const getUser = async id => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  if (!response.ok) {
    throw new Error(`Could not fetch user ${id} (status ${response.status})`);
  }
  return await response.json();
};


/* ---------- Try it out ---------- */

try {
  const user = await getUser(3);
  console.log(user.name, '-', user.email);
} catch (error) {
  console.log('Error:', error.message);
}

// id 9999 does not exist - the server answers 404 and our check throws.
try {
  const missing = await getUser(9999);
  console.log(missing.name);
} catch (error) {
  console.log('Error:', error.message);
}
