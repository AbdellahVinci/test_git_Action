import { Main } from "../Src/gamerTagValidation.js";

describe("Gamer Tag Validation", function () {
    const result = new Main();

    afterEach(() => {
        console.log("Test finished.");
    });

    
    it("should invalidate a gamertag shorter than 8 characters", function () {
        const gamertag = "Short";
        const output = result.validateLength(gamertag); 
        expect(output).toBe(false);
    });

   
    it("should invalidate a gamertag without a special character", function () {
        const gamertag = "NoSpecial1";
        const output = result.validateSpecialCharacter(gamertag); 
        expect(output).toBe(false);
    });

    
    it("should invalidate a gamertag without a number", function () {
        const gamertag = "NoNumber!";
        const output = result.validateNumber(gamertag); 
        expect(output).toBe(false);
    });

    // Test 4: Gamertag sans majuscule
    it("should invalidate a gamertag without an uppercase letter", function () {
        const gamertag = "noupper1!";
        const output = result.validateUpperCase(gamertag); 
        expect(output).toBe(false);
    });

    
});
