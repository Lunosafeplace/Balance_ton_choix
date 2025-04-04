document.addEventListener('DOMContentLoaded', function() {
    const openFormButton = document.querySelector('.open-form-button');
    const slidingFormContainer = document.querySelector('.sliding-form-container');
    const closeButton = document.querySelector('.close-button');
    const temoignageForm = document.getElementById('temoignageForm');
    const plainteDeposeeSelect = document.getElementById('plainteDeposee');
    const aboutieSection = document.getElementById('aboutieSection');
    const confirmationMessage = document.getElementById('confirmationMessage');
    const testimonialsList = document.getElementById('testimonials-list');

    openFormButton.addEventListener('click', function() {
        slidingFormContainer.classList.add('open');
    });

    closeButton.addEventListener('click', function() {
        slidingFormContainer.classList.remove('open');
    });

    plainteDeposeeSelect.addEventListener('change', function() {
        aboutieSection.style.display = this.value === 'oui' ? 'block' : 'none';
    });

    temoignageForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const formData = new FormData(temoignageForm);
        const temoignageData = {};
        formData.forEach((value, key) => {
            temoignageData[key] = value;
        });

        console.log("Données du témoignage:", temoignageData);

        // Créer l'élément HTML pour afficher le témoignage
        const temoignageDiv = document.createElement('div');
        temoignageDiv.classList.add('temoignage');
        let temoignageHTML = `<p>`;
        if (temoignageData.prenomOuPseudo) {
            temoignageHTML += `<strong>${temoignageData.prenomOuPseudo}</strong> a vécu :<br>`;
        } else {
            temoignageHTML += `Une personne a vécu :<br>`;
        }
        temoignageHTML += `"${temoignageData.ceQueJaiVecu}"</p>`;
        if (temoignageData.ageAuMomentDesFaits) {
            temoignageHTML += `<p>Âge au moment des faits : ${temoignageData.ageAuMomentDesFaits} ans</p>`;
        }
        if (temoignageData.plainteDeposee) {
            const plainteText = temoignageData.plainteDeposee === 'oui' ? 'Oui' : 'Non';
            temoignageHTML += `<p>Plainte déposée : ${plainteText}</p>`;
            if (temoignageData.plainteDeposee === 'oui' && temoignageData.plainteAboutie) {
                let aboutieText = '';
                if (temoignageData.plainteAboutie === 'oui') {
                    aboutieText = 'Oui';
                } else if (temoignageData.plainteAboutie === 'non') {
                    aboutieText = 'Non';
                } else if (temoignageData.plainteAboutie === 'enCours') {
                    aboutieText = 'En cours';
                }
                temoignageHTML += `<p>Plainte aboutie : ${aboutieText}</p>`;
            }
        }
        temoignageHTML += `<hr>`;
        temoignageDiv.innerHTML = temoignageHTML;

        // Ajouter le témoignage au début de la liste
        testimonialsList.prepend(temoignageDiv);

        // Afficher le message de confirmation et réinitialiser le formulaire
        temoignageForm.style.display = 'none';
        confirmationMessage.style.display = 'block';

        setTimeout(() => {
            slidingFormContainer.classList.remove('open');
            temoignageForm.reset();
            temoignageForm.style.display = 'block';
            confirmationMessage.style.display = 'none';
        }, 3000);
    });
});
