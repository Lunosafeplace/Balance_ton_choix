document.addEventListener('DOMContentLoaded', function() {
    console.log('script.js chargé');

    // Inclure le fichier data.js
    const scriptData = document.createElement('script');
    scriptData.src = 'data.js';
    document.head.appendChild(scriptData);

    scriptData.onload = function() {
        console.log('data.js chargé');
        // Vérifier si nous sommes sur la page d'accueil (index.html)
        if (window.location.pathname === '/' || window.location.pathname === '/index.html') {
            afficherPourcentageCondamnes();
        } else {
            console.log('Pas sur la page d\'accueil, le pourcentage ne sera pas affiché.');
        }
    };

    scriptData.onerror = function() {
        console.error('Erreur lors du chargement de data.js');
    };

    function afficherPourcentageCondamnes() {
        if (typeof celebrites === 'undefined') {
            console.error('La variable "celebrites" n\'est pas définie dans data.js');
            return;
        }

        const totalCelebrites = celebrites.length;
        const celebritesCondamnees = celebrites.filter(personne => personne.statut === 'condamne').length;

        if (totalCelebrites > 0) {
            const pourcentageCondamnes = (celebritesCondamnees / totalCelebrites) * 100;
            console.log(`Pourcentage de célébrités condamnées : ${pourcentageCondamnes.toFixed(2)}%`);

            // Créer le nuage rouge avec le pourcentage
            const pourcentageDiv = document.createElement('div');
            pourcentageDiv.style.position = 'absolute';
            pourcentageDiv.style.top = '10px';
            pourcentageDiv.style.right = '10px';
            pourcentageDiv.style.backgroundColor = 'red';
            pourcentageDiv.style.color = 'white';
            pourcentageDiv.style.padding = '10px';
            pourcentageDiv.style.borderRadius = '20px'; // Pour l'effet de nuage
            pourcentageDiv.style.fontWeight = 'bold';
            pourcentageDiv.style.zIndex = '1000'; // Pour s'assurer qu'il est au-dessus des autres éléments
            pourcentageDiv.textContent = `${pourcentageCondamnes.toFixed(0)}%`;

            document.body.appendChild(pourcentageDiv);
        } else {
            console.warn('Aucune célébrité trouvée dans data.js');
        }
    }

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

    // Gestionnaire d'événements pour le bouton "Témoignages"
    const temoignagesBtn = document.getElementById('temoignages-button');
    if (temoignagesBtn) {
        temoignagesBtn.addEventListener('click', () => {
            window.location.href = 'temoignages.html';
        });
    } else {
        console.error("L'élément temoignages-button n'a pas été trouvé.");
    }

    // Gestionnaire d'événements pour le bouton "Définitions"
    const definitionsBtn = document.getElementById('definitions-button');
    if (definitionsBtn) {
        definitionsBtn.addEventListener('click', () => {
            window.location.href = 'definitions.html';
        });
    } else {
        console.error("L'élément definitions-button n'a pas été trouvé.");
    }
});
