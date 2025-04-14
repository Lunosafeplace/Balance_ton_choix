import celebrites from './data.js';

document.addEventListener('DOMContentLoaded', function() {
    console.log('celebrities.js chargé');

    if (window.location.pathname.endsWith('celebrities.html')) {
        const celebritiesList = document.getElementById('celebrities-list');
        const rechercheCelebrite = document.getElementById('recherche-celebrite');
        const infosPageElement = document.getElementById('infos-page'); // Assurez-vous que cet élément existe dans celebrities.html
        const infosTexteElement = document.getElementById('infos-texte'); // Assurez-vous que cet élément existe dans celebrities.html
        const infosComplementairesElement = document.getElementById('infos-complementaires'); // Assurez-vous que cet élément existe dans celebrities.html

        if (celebritiesList) {
            // Tri des célébrités par nom
            celebrites.sort((a, b) => a.nom.localeCompare(b.nom));

            function afficherInfosCelebrite(infosPage, infosTexte, infosComplementaires, celebrity, event) {
                infosTexte.textContent = celebrity.infosSupplementaires;
                infosComplementaires.innerHTML = "";

                infosPage.style.position = 'absolute';
                infosPage.style.left = event.pageX + 10 + 'px';
                infosPage.style.top = event.pageY + 10 + 'px';
                infosPage.style.display = 'block';
            }

            function masquerInfosCelebrite(infosPage) {
                infosPage.style.display = 'none';
            }

            function creerCelebrityDiv(celebrity, infosPage, infosTexte, infosComplementaires) {
                const celebrityDiv = document.createElement('div');
                celebrityDiv.classList.add('celebrity');
                celebrityDiv.innerHTML = `
                    <img src="${celebrity.photo}" alt="${celebrity.nom}" class="celebrity-photo">
                    <h3>${celebrity.nom}</h3>
                `;
                const celebrityPhoto = celebrityDiv.querySelector('.celebrity-photo');
                celebrityPhoto.addEventListener('mouseover', (event) => {
                    afficherInfosCelebrite(infosPage, infosTexte, infosComplementaires, celebrity, event);
                });
                celebrityPhoto.addEventListener('mouseout', () => {
                    masquerInfosCelebrite(infosPage);
                });
                return celebrityDiv;
            }

            function afficherCelebrities(celebrities, infosPage, infosTexte, infosComplementaires) {
                celebritiesList.innerHTML = '';
                celebrities.forEach(celebrity => {
                    const celebrityDiv = creerCelebrityDiv(celebrity, infosPage, infosTexte, infosComplementaires);
                    celebritiesList.appendChild(celebrityDiv);
                });
            }

            function filtrerCelebrities(texteRecherche, infosPage, infosTexte, infosComplementaires) {
                const celebritiesFiltrees = celebrites.filter(celebrity =>
                    celebrity.nom.toLowerCase().includes(texteRecherche.toLowerCase())
                );

                celebritiesList.innerHTML = '';
                celebritiesFiltrees.forEach(celebrity => {
                    const celebrityDiv = creerCelebrityDiv(celebrity, infosPage, infosTexte, infosComplementaires);
                    celebritiesList.appendChild(celebrityDiv);
                });

                // Optionnel: réordonner les éléments après le filtrage (si nécessaire)
                const celebrityDivs = celebritiesList.querySelectorAll('.celebrity');
                celebrityDivs.forEach((div, index) => {
                    div.style.order = index;
                });
            }

            if (rechercheCelebrite) {
                rechercheCelebrite.addEventListener('input', () => {
                    filtrerCelebrities(rechercheCelebrite.value, infosPageElement, infosTexteElement, infosComplementairesElement);
                });
            } else {
                console.error("L'élément recherche-celebrite n'a pas été trouvé.");
            }

            // Appel initial pour afficher toutes les célébrités
            afficherCelebrities(celebrites, infosPageElement, infosTexteElement, infosComplementairesElement);

        } else {
            console.error("L'élément celebrities-list n'a pas été trouvé.");
        }
    }
});
