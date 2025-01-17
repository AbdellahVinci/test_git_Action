const validateGamerTag = require('../Src/gamerTagValidation'); 

describe('Gamer Tag Validation', () => {
    it('should invalidate a gamertag shorter than 8 characters', () => {
        const result = validateGamerTag('short');
        expect(result).toBe('Invalid - gamertag length must be at least 8 characters');
    });

    it('should invalidate a gamertag without a special character', () => {
        const result = validateGamerTag('NoSpecial1');
        expect(result).toBe('Invalid - gamertag must contain at least a special character');
    });

    it('should invalidate a gamertag without a number', () => {
        const result = validateGamerTag('NoNumber!');
        expect(result).toBe('Invalid - gamertag must contain at least a number');
    });

    it('should invalidate a gamertag without an uppercase letter', () => {
        const result = validateGamerTag('lowercase1!');
        expect(result).toBe('Invalid - gamertag must contain at least one uppercase letter');
    });

    it('should validate a correct gamertag', () => {
        const result = validateGamerTag('Valid123!');
        expect(result).toBe('Valid - gamertag is acceptable');
    });
});
