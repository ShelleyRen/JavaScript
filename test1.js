function solution(str) {
  const unique = new Set();
  let count = 0;
  for (let char of str) {
    if (unique.has(char)) {
      count++;
      unique.clear();
    }
    unique.add(char);
  }
  return count + 1;
}
