function areSentencesSimilar(sentence1, sentence2) {
    var words1 = sentence1.split(" ");
    var words2 = sentence2.split(" ");
    var len1 = words1.length;
    var len2 = words2.length;
    var i = 0; // Prefix pointer
    var j = 0; // Suffix pointer
    // Compare the prefix using a for loop
    for (i = 0; i < Math.min(len1, len2); i++) {
        if (words1[i] !== words2[i]) {
            break;
        }
    }
    // Compare the suffix using a for loop
    for (j = 0; j < Math.min(len1, len2) - i; j++) {
        if (words1[len1 - 1 - j] !== words2[len2 - 1 - j]) {
            break;
        }
    }
    // Check if the sum of matched prefix and suffix equals the length of the shorter sentence
    return i + j === Math.min(len1, len2);
}
// Test cases
console.log(areSentencesSimilar("My name is Haley", "My Haley")); // true
console.log(areSentencesSimilar("of", "A lot of words")); // false
console.log(areSentencesSimilar("Eating right now", "Eating")); // true
console.log(areSentencesSimilar("Hello Jane", "Hello my name is Jane")); // true
console.log(areSentencesSimilar("Frog cool", "Frogs are cool")); // false
