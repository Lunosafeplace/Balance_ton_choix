import celebrites from './data.js';

document.addEventListener('DOMContentLoaded', function() {
    console.log('script.js chargé');
    console.log('pathname:', window.location.pathname);


    if (window.location.pathname === '/Balance_ton_choix/' || window.location.pathname === '/Balance_ton_choix/index.html') {
        afficherPourcentageCondamnes();
    } else {
        console.log('Pas sur la page d\'accueil, le pourcentage ne sera pas affiché.');
    }

    function afficherPourcentageCondamnes() {
        if (typeof celebrites === 'undefined') {
            console.error('La variable "celebrites" n\'a pas été importée correctement.');
            return;
        }

        const totalCelebrites = celebrites.length;
        const celebritesCondamnees = celebrites.filter(personne => personne.reponse === 'condamne').length;

        if (totalCelebrites > 0) {
            const pourcentageCondamnes = (celebritesCondamnees / totalCelebrites) * 100;
            console.log(`Pourcentage de célébrités condamnées : ${pourcentageCondamnes.toFixed(2)}%`);

            const pourcentageDiv = document.createElement('div');
            pourcentageDiv.style.position = 'absolute';
            pourcentageDiv.style.top = '10px';
            pourcentageDiv.style.right = '10px';
            pourcentageDiv.style.backgroundColor = 'red';
            pourcentageDiv.style.color = 'white';
            pourcentageDiv.style.padding = '10px';
            pourcentageDiv.style.borderRadius = '20px';
            pourcentageDiv.style.fontWeight = 'bold';
            pourcentageDiv.style.zIndex = '1000';
            pourcentageDiv.textContent = `${pourcentageCondamnes.toFixed(0)}%`;

            document.body.appendChild(pourcentageDiv);
        } else {
            console.warn('Aucune célébrité trouvée dans data.js');
        }
    }

    const celebritiesBtn = document.getElementById('a-z-button');
    if (celebritiesBtn) {
        celebritiesBtn.addEventListener('click', () => {
            window.location.href = 'celebrities.html';
        });
    } else {
        console.error("L'élément a-z-button n'a pas été trouvé.");
    }

    const demarrerJeuBtn = document.getElementById('demarrer-jeu');
    if (demarrerJeuBtn) {
        demarrerJeuBtn.addEventListener('click', () => {
            window.location.href = 'quiz.html';
        });
    } else {
        console.error("L'élément demarrer-jeu n'a pas été trouvé.");
    }

    const temoignagesBtn = document.getElementById('temoignages-button');
    if (temoignagesBtn) {
        temoignagesBtn.addEventListener('click', () => {
            window.location.href = 'temoignages.html';
        });
    } else {
        console.error("L'élément temoignages-button n'a pas été trouvé.");
    }

    const definitionsBtn = document.getElementById('definitions-button');
    if (definitionsBtn) {
        definitionsBtn.addEventListener('click', () => {
            window.location.href = 'definitions.html';
        });
    } else {
        console.error("L'élément definitions-button n'a pas été trouvé.");
    }
});
