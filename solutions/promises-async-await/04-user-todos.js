/*
  Exercise 4: The user's todos (Användarens todos)

  These two calls are dependent: we need the user before we can talk about the
  user's todos. Sequential awaits are the right thing here - Promise.all would
  be wrong, since the second call builds on the first.
  (In this particular API we already know the userId, but the pattern is what
  matters: request 2 waits for request 1.)
*/

const getUser = async id => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  if (!response.ok) {
    throw new Error(`Could not fetch user ${id} (status ${response.status})`);
  }
  return await response.json();
};

const getUserTodos = async userId => {
  const user = await getUser(userId);

  const response = await fetch(`https://jsonplaceholder.typicode.com/todos?userId=${user.id}`);
  if (!response.ok) {
    throw new Error(`Could not fetch todos (status ${response.status})`);
  }
  const todos = await response.json();

  return { name: user.name, todos };
};


/* ---------- Try it out ---------- */

try {
  const { name, todos } = await getUserTodos(2);
  const completed = todos.filter(todo => todo.completed);

  console.log(`${name} has ${todos.length} todos, ${completed.length} of them completed.`);
  console.log('Completed:', completed.map(todo => todo.title));
} catch (error) {
  console.log('Error:', error.message);
}
