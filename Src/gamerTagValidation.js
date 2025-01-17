const e = require("express");

function validateLength(gamerTag) {
    if (gamerTag.length < 8) {
        console.log('Failed length check');
        return 'Invalid - gamertag length must be at least 8 characters';
    }
    return null;
}

function validateSpecialCharacter(gamerTag) {
    const specialCharacters = ['&', '$', '!', 'è', '§', 'à', '_'];
    if (!specialCharacters.some(char => gamerTag.includes(char))) {
        console.log('Failed special character check');
        return 'Invalid - gamertag must contain at least a special character';
    }
    return null;
}

function validateNumber(gamerTag) {
    if (!/\d/.test(gamerTag)) {
        console.log('Failed number check');
        return 'Invalid - gamertag must contain at least a number';
    }
    return null;
}

function validateUpperCase(gamerTag) {
    if (!/[A-Z]/.test(gamerTag)) {
        console.log('Failed upper case check');
        return 'Invalid - gamertag must contain at least one uppercase letter';
    }
    return null;
}

function validateGamerTag(gamerTag) {
    console.log('GamerTag:', gamerTag);

    let result = validateLength(gamerTag);
    if (result) return result;

    result = validateSpecialCharacter(gamerTag);
    if (result) return result;

    result = validateNumber(gamerTag);
    if (result) return result;

    result = validateUpperCase(gamerTag);  // Ajout de la validation pour la majuscule
    if (result) return result;

    console.log('Passed all checks');
    return 'Valid - gamertag is acceptable';
}

module.exports = validateGamerTag;
