/*
  Exercise 2: The unreliable server (Den opålitliga servern)

  A promise ends in exactly one of two ways: resolve (success) or reject
  (failure). Here we pick at random after one second.
*/

const unreliableRequest = () => new Promise((resolve, reject) => {
  setTimeout(() => {
    if (Math.random() < 0.5) {
      resolve('Här är din data!');
    } else {
      reject(new Error('Servern svarar inte.'));
    }
  }, 1000);
});

/*
  A rejected promise makes await throw, so try/catch handles both outcomes -
  the same way you would handle a normal exception.
*/
const tryOnce = async () => {
  try {
    const data = await unreliableRequest();
    console.log('Success:', data);
  } catch (error) {
    console.log('Failed:', error.message);
  }
};

/*
  Challenge: retry until it works. Note that the successful case returns from
  inside the try block, which is what ends the loop.
*/
const stubbornRequest = async () => {
  let attempts = 0;
  while (true) {
    attempts++;
    try {
      const data = await unreliableRequest();
      console.log(`Success after ${attempts} attempt(s):`, data);
      return data;
    } catch (error) {
      console.log(`Attempt ${attempts} failed, trying again...`);
    }
  }
};


/* ---------- Try it out ---------- */

await tryOnce();
await stubbornRequest();
