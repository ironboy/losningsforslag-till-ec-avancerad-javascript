/*
  Exercise 1: The traffic light (Trafikljuset)

  sleep() is the classic example of wrapping something callback-based
  (setTimeout) in a promise so it can be used with await.
*/

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

/*
  await pauses this function - not the whole program. The lines below therefore
  run in order, with real pauses in between, but the browser/Node stays free to
  do other work meanwhile.
*/
const trafficLight = async () => {
  console.log('🔴 Rött');
  await sleep(3000);
  console.log('🟡 Gult');
  await sleep(1000);
  console.log('🟢 Grönt');
};

/*
  Challenge: keep looping. `while (true)` inside an async function is not a
  freeze - every await hands control back until the timer fires.
  The cycles parameter is only here so the demo below terminates; swap the
  condition for `true` to run forever.
*/
const trafficLightLoop = async (cycles = 2) => {
  let round = 0;
  while (round < cycles) {
    console.log('🔴 Rött');
    await sleep(3000);
    console.log('🟡 Gult');
    await sleep(1000);
    console.log('🟢 Grönt');
    await sleep(3000);
    console.log('🟡 Gult');
    await sleep(1000);
    round++;
  }
};


/* ---------- Try it out ---------- */

await trafficLight();

console.log('--- and now on repeat ---');
await trafficLightLoop(2);
