function longestPalindrome(s: string): string {
    if (s.length <= 1) return s;
    
    let start = 0;
    let maxLength = 1;  // Length of the longest palindrome found

    // Helper function to expand around the center
    function expandAroundCenter(left: number, right: number): number {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            left--;
            right++;
        }
        return right - left - 1; // Length of the palindrome
    }

    for (let i = 0; i < s.length; i++) {
        // For odd length palindromes (single character center)
        let len1 = 1;
        for (let l = i, r = i; l >= 0 && r < s.length && s[l] === s[r]; l--, r++) {
            len1 = r - l + 1;
        }

        // For even length palindromes (two characters center)
        let len2 = 0;
        for (let l = i, r = i + 1; l >= 0 && r < s.length && s[l] === s[r]; l--, r++) {
            len2 = r - l + 1;
        }

        // Determine the maximum length palindrome around this center
        const len = Math.max(len1, len2);
        if (len > maxLength) {
            maxLength = len;
            start = i - Math.floor((len - 1) / 2);
        }
    }

    return s.substring(start, start + maxLength);
}

// Test cases
console.log(longestPalindrome("babad")); // Output: "bab" or "aba"
console.log(longestPalindrome("cbbd"));  // Output: "bb"
console.log(longestPalindrome("a"));     // Output: "a"
console.log(longestPalindrome("ac"));    // Output: "a" or "c"
