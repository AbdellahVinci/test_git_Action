export class Main {
   
    validateLength(gamertag) {
        if (gamertag.length >= 8) {
            return true;  
        } else {
            return false; 
        }
    }

    
    validateSpecialCharacter(gamertag) {
        const specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', ',', '.', '?', ':', '"', '{', '}', '|', '<', '>', '/'];
        for (let i = 0; i < gamertag.length; i++) {
            if (specialCharacters.includes(gamertag[i])) {
                return true; 
            }
        }
        return false;  
    }

   
    validateNumber(gamertag) {
        for (let i = 0; i < gamertag.length; i++) {
            if (gamertag[i] >= '0' && gamertag[i] <= '9') {
                return true;  
            }
        }
        return false;
    }

    // Vérifie si le gamertag contient une lettre majuscule
    validateUpperCase(gamertag) {
        for (let i = 0; i < gamertag.length; i++) {
            if (gamertag[i] === gamertag[i].toUpperCase() && gamertag[i] !== gamertag[i].toLowerCase()) {
                return true;  // Lettre majuscule trouvée
            }
        }
        return false;  // Aucune lettre majuscule trouvée
    }
}
