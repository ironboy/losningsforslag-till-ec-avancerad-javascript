/*
  Exercise 5: All at once (Alla på en gång)

  These requests do not depend on each other, so there is no reason to wait for
  one before starting the next. Promise.all starts them all and waits for the
  whole batch - three requests take about as long as one.
*/

const getUser = async id => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  if (!response.ok) {
    throw new Error(`Could not fetch user ${id} (status ${response.status})`);
  }
  return await response.json();
};

/*
  map turns the ids into an array of promises. Calling getUser already starts
  the request - Promise.all just waits for them and hands back the results in
  the same order as the input.
*/
const getUsers = async ids => {
  const requests = ids.map(id => getUser(id));
  return await Promise.all(requests);
};

/*
  Promise.all rejects as soon as ONE promise rejects, and the successful ones
  are thrown away with it. allSettled instead waits for every promise and
  reports the outcome of each, so we can keep what worked.
*/
const getUsersAllowingFailures = async ids => {
  const results = await Promise.allSettled(ids.map(id => getUser(id)));

  const users = results
    .filter(result => result.status === 'fulfilled')
    .map(result => result.value);

  const failed = results
    .filter(result => result.status === 'rejected')
    .map(result => result.reason.message);

  return { users, failed };
};


/* ---------- Try it out ---------- */

const users = await getUsers([1, 2, 3, 4]);
console.log(users.map(user => user.name));

// One bad id ruins the whole batch...
try {
  await getUsers([1, 9999, 3]);
} catch (error) {
  console.log('Promise.all gave up:', error.message);
}

// ...unless we use allSettled.
const { users: someUsers, failed } = await getUsersAllowingFailures([1, 9999, 3]);
console.log('Succeeded:', someUsers.map(user => user.name));
console.log('Failed:', failed);
