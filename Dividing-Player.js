function dividePlayers(skill) {
    // Step 1: Sort the skill array in ascending order
    skill.sort(function (a, b) { return a - b; });
    var n = skill.length;
    var totalSkill = skill[0] + skill[n - 1]; // Sum of the first and last skill as reference
    var totalChemistry = 0;
    // Step 2: Iterate through the sorted skills and create teams
    for (var i = 0; i < n / 2; i++) {
        var teamSkill = skill[i] + skill[n - 1 - i];
        // Step 3: If the team skill isn't equal to the reference, return -1
        if (teamSkill !== totalSkill) {
            return -1;
        }
        // Step 4: Calculate the chemistry of the current team and add to the total
        totalChemistry += skill[i] * skill[n - 1 - i];
    }
    // Step 5: Return the total chemistry
    return totalChemistry;
}
// Test the function with various inputs
var testInputs = [
    [3, 2, 5, 1, 3, 4], // Expected Output: 22
    [3, 4], // Expected Output: 12
    [1, 1, 2, 3], // Expected Output: -1
];
// Loop through test inputs and log the output of dividePlayers function
testInputs.forEach(function (input) {
    console.log("Input: ".concat(input, ", Output: ").concat(dividePlayers(input)));
});
