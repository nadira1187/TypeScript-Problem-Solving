function isMatch(s, p) {
    var m = s.length;
    var n = p.length;
    // Create a DP table, initialized to false
    var dp = [];
    for (var i = 0; i <= m; i++) {
        dp[i] = [];
        for (var j = 0; j <= n; j++) {
            dp[i][j] = false;
        }
    }
    // Base case: empty string and empty pattern match
    dp[0][0] = true;
    // Base case for patterns with '*' (can match zero preceding characters)
    for (var j = 1; j <= n; j++) {
        if (p[j - 1] === '*') {
            dp[0][j] = dp[0][j - 2];
        }
    }
    // Fill the DP table
    for (var i = 1; i <= m; i++) {
        for (var j = 1; j <= n; j++) {
            if (p[j - 1] === '.' || p[j - 1] === s[i - 1]) {
                // Current characters match, take the value from the diagonal (i-1, j-1)
                dp[i][j] = dp[i - 1][j - 1];
            }
            else if (p[j - 1] === '*') {
                // '*' can match zero occurrence of the previous character
                dp[i][j] = dp[i][j - 2];
                // If the previous character matches the current character in s
                if (p[j - 2] === '.' || p[j - 2] === s[i - 1]) {
                    dp[i][j] = dp[i][j] || dp[i - 1][j];
                }
            }
        }
    }
    // The result is in dp[m][n], which checks if the entire string matches the entire pattern
    return dp[m][n];
}
// Test cases
console.log(isMatch("aa", "a")); // false
console.log(isMatch("aa", "a*")); // true
console.log(isMatch("ab", ".*")); // true
