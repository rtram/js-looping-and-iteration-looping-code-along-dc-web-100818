function printBadges(arr) {
  for (i = 0; i < arr.length; i++) {
    console.log(`Welcome ${arr[i]}! You are employee #${i + 1}.`)
  }
  return arr;
}

function maybeTrue() {
  return Math.random() >= 0.5;
}

function tailsNeverFails() {
  let i = 0
<<<<<<< HEAD
  while (maybeTrue()) {
=======
  while (maybeTrue) {
>>>>>>> 2eac3ad3522c0992843e621778027e4ad474631b
    i++
  }
  return `You got ${i} tails in a row!`
}
