function getPromise(i) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(i), Math.random() * 5000);
  });
}

const arr = [];

for (let i = 1; i < 11; i++) {
  arr.push(getPromise(i));
}

async function printInOrder(arr) {
  let responses = [];
  let counter = 0;
  arr.forEach(async (promise, idx) => {
    responses[idx] = await promise;
    counter += 1;
    if (counter == arr.length) {
      console.log(...responses);
    }
  });
}

printInOrder(arr);
// 1 2 3 4 5 6 7 8 9 10
