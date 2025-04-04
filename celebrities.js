import celebrites from './data.js';

document.addEventListener('DOMContentLoaded', function() {
    console.log('celebrities.js chargé');

    if (window.location.pathname.endsWith('celebrities.html')) {
        const celebritiesList = document.getElementById('celebrities-list');
        const rechercheCelebrite = document.getElementById('recherche-celebrite');
        const infosPage = document.getElementById('infos-page');
        const infosTexte = document.getElementById('infos-texte');
        const infosComplementaires = document.getElementById('infos-complementaires');

        if (celebritiesList) {
            // Tri des célébrités par nom
            celebrites.sort((a, b) => a.nom.localeCompare(b.nom));

            function creerCelebrityDiv(celebrity) {
                const celebrityDiv = document.createElement('div');
                celebrityDiv.classList.add('celebrity');
                celebrityDiv.innerHTML = `
                    <img src="${celebrity.photo}" alt="${celebrity.nom}" class="celebrity-photo">
                    <h3>${celebrity.nom}</h3>
                `;
                const celebrityPhoto = celebrityDiv.querySelector('.celebrity-photo');
                celebrityPhoto.addEventListener('mouseover', (event) => {
                    afficherInfosCelebrite(celebrity, event);
                });
                celebrityPhoto.addEventListener('mouseout', masquerInfosCelebrite);
                return celebrityDiv;
            }

            function afficherCelebrities(celebrities) {
                celebritiesList.innerHTML = '';
                celebrities.forEach(celebrity => {
                    const celebrityDiv = creerCelebrityDiv(celebrity);
                    celebritiesList.appendChild(celebrityDiv);
                });
            }

            function filtrerCelebrities(texteRecherche) {
                const celebritiesFiltrees = celebrites.filter(celebrity =>
                    celebrity.nom.toLowerCase().includes(texteRecherche.toLowerCase())
                );

                celebritiesList.innerHTML = '';
                celebritiesFiltrees.forEach(celebrity => {
                    const celebrityDiv = creerCelebrityDiv(celebrity);
                    celebritiesList.appendChild(celebrityDiv);
                });

                // Optionnel: réordonner les éléments après le filtrage (si nécessaire)
                const celebrityDivs = celebritiesList.querySelectorAll('.celebrity');
                celebrityDivs.forEach((div, index) => {
                    div.style.order = index;
                });
            }

            rechercheCelebrite.addEventListener('input', () => {
                filtrerCelebrities(rechercheCelebrite.value);
            });

            // Appel initial pour afficher toutes les célébrités
            afficherCelebrities(celebrites);

            function afficherInfosCelebrite(celebrity, event) {
                infosTexte.textContent = celebrity.infosSupplementaires;
                infosComplementaires.innerHTML = "";

                infosPage.style.position = 'absolute';
                infosPage.style.left = event.pageX + 10 + 'px';
                infosPage.style.top = event.pageY + 10 + 'px';
                infosPage.style.display = 'block';
            }

            function masquerInfosCelebrite() {
                infosPage.style.display = 'none';
            }
        } else {
            console.error("L'élément celebrities-list n'a pas été trouvé.");
        }
    }
});
