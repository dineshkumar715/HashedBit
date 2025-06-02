function correctfn(string, wrong, correct) {
  return string.replace(wrong, correct);
}

console.log(correctfn("This is a smaple sentence.", "smaple", "sample"));
