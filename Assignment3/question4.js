let str = "This is a sample string with more than twenty characters.";
// Initialize counts
let vowelsCount = 0;
let consonantsCount = 0;

// Convert string to lowercase for easier comparison
str = str.toLowerCase();

for (let char of str) {
    if (char >= 'a' && char <= 'z') {
        if ('aeiou'.includes(char)) {
            vowelsCount++;
        } else {
            consonantsCount++;
        }
    }
}

console.log(`Vowels: ${vowelsCount}`);
console.log(`Consonants: ${consonantsCount}`);