function dividePlayers(skill: number[]): number {
    // Step 1: Sort the skill array in ascending order
    skill.sort((a, b) => a - b);
    
    let n = skill.length;
    let totalSkill = skill[0] + skill[n - 1]; // Sum of the first and last skill as reference
    let totalChemistry = 0;
    
    // Step 2: Iterate through the sorted skills and create teams
    for (let i = 0; i < n / 2; i++) {
        let teamSkill = skill[i] + skill[n - 1 - i];
        
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
const testInputs = [
    [3, 2, 5, 1, 3, 4],  // Expected Output: 22
    [3, 4],              // Expected Output: 12
    [1, 1, 2, 3],        // Expected Output: -1
];

// Loop through test inputs and log the output of dividePlayers function
testInputs.forEach(input => {
    console.log(`Input: ${input}, Output: ${dividePlayers(input)}`);
});
