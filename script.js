// script.js
document.addEventListener('DOMContentLoaded', function() {
    console.log('script.js chargé');

    // Gestionnaire d'événements pour le bouton "De A à Z"
    const aZBtn = document.getElementById('a-z-button');
    if (aZBtn) {
        aZBtn.addEventListener('click', () => {
            window.location.href = 'celebrities.html';
        });
    } else {
        console.error("L'élément a-z-button n'a pas été trouvé.");
    }

    // Gestionnaire d'événements pour le bouton "Quiz"
    const demarrerJeuBtn = document.getElementById('demarrer-jeu');
    if (demarrerJeuBtn) {
        demarrerJeuBtn.addEventListener('click', () => {
            window.location.href = 'quiz.html';
        });
    } else {
        console.error("L'élément demarrer-jeu n'a pas été trouvé.");
    }
});