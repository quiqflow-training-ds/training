function shuffleArray(array) {
  let arr = array.slice(); // copy to avoid mutating the original
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1)); // random index
    [arr[i], arr[j]] = [arr[j], arr[i]]; // swap elements
  }
  return arr;
}

// Example usage:
const numbers = [1, 2, 3, 4, 5];
console.log("Original:", numbers);
console.log("Shuffled:", shuffleArray(numbers));
