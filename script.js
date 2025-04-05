document.addEventListener('DOMContentLoaded', function() {
    console.log('script.js chargé');

    // Gestionnaire d'événements pour le bouton "De A à Z" (renommé en "Célébrités" selon le href)
    const celebritiesBtn = document.getElementById('a-z-button');
    if (celebritiesBtn) {
        celebritiesBtn.addEventListener('click', () => {
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

    // Gestionnaire d'événements pour le bouton "Témoignages" (ajouté selon votre demande initiale)
    const temoignagesBtn = document.getElementById('temoignages-button');
    if (temoignagesBtn) {
        temoignagesBtn.addEventListener('click', () => {
            window.location.href = 'temoignages.html';
        });
    } else {
        console.error("L'élément temoignages-button n'a pas été trouvé.");
    }

    // Gestionnaire d'événements pour le bouton "Définitions" (ajouté selon votre dernière demande)
    const definitionsBtn = document.getElementById('definitions-button');
    if (definitionsBtn) {
        definitionsBtn.addEventListener('click', () => {
            window.location.href = 'definitions.html';
        });
    } else {
        console.error("L'élément definitions-button n'a pas été trouvé.");
    }
});
