function areSentencesSimilar(sentence1: string, sentence2: string): boolean {
    const words1 = sentence1.split(" ");
    const words2 = sentence2.split(" ");
    
    const len1 = words1.length;
    const len2 = words2.length;
    
    let i = 0; // Prefix pointer
    let j = 0; // Suffix pointer
    
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
console.log(areSentencesSimilar("My name is Haley", "My Haley"));  // true
console.log(areSentencesSimilar("of", "A lot of words"));          // false
console.log(areSentencesSimilar("Eating right now", "Eating"));    // true
console.log(areSentencesSimilar("Hello Jane", "Hello my name is Jane"));  // true
console.log(areSentencesSimilar("Frog cool", "Frogs are cool"));   // false
