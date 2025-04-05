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
        fetchTemoignages(); // Charger les témoignages quand l'onglet s'ouvre
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

        const googleAppsScriptUrl = 'VOTRE_URL_APPS_SCRIPT_ICI'; // Remplacez par l'URL que vous avez copiée

        fetch(googleAppsScriptUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(temoignageData),
        })
        .then(response => response.json())
        .then(data => {
            console.log('Succès:', data);
            confirmationMessage.style.display = 'block';
            setTimeout(() => {
                slidingFormContainer.classList.remove('open');
                temoignageForm.reset();
                temoignageForm.style.display = 'block';
                confirmationMessage.style.display = 'none';
                fetchTemoignages(); // Recharger la liste après la soumission
            }, 3000);
        })
        .catch((error) => {
            console.error('Erreur:', error);
            alert('Une erreur est survenue lors de la soumission.');
        });
    });

    function fetchTemoignages() {
        const googleAppsScriptUrl = 'https://script.google.com/macros/s/AKfycbxLYvMD5_FP_aJBCxd-cw2rKwS1qsgWKKD1df_81p3hCEbgAidyZiLn26MGDPaWvu-G/exec'; // Remplacez par l'URL que vous avez copiée

        fetch(googleAppsScriptUrl)
            .then(response => response.json())
            .then(temoignages => {
                testimonialsList.innerHTML = ''; // Effacer la liste actuelle
                temoignages.forEach(temoignage => {
                    const temoignageDiv = document.createElement('div');
                    temoignageDiv.classList.add('temoignage');
                    let temoignageHTML = `<p>`;
                    if (temoignage.prenomOuPseudo) {
                        temoignageHTML += `<strong>${temoignage.prenomOuPseudo}</strong> a vécu :<br>`;
                    } else {
                        temoignageHTML += `Une personne a vécu :<br>`;
                    }
                    temoignageHTML += `"${temoignage.ceQueJaiVecu}"</p>`;
                    if (temoignage.ageAuMomentDesFaits) {
                        temoignageHTML += `<p>Âge au moment des faits : ${temoignage.ageAuMomentDesFaits} ans</p>`;
                    }
                    if (temoignage.plainteDeposee) {
                        const plainteText = temoignage.plainteDeposee === 'oui' ? 'Oui' : 'Non';
                        temoignageHTML += `<p>Plainte déposée : ${plainteText}</p>`;
                        if (temoignage.plainteDeposee === 'oui' && temoignage.plainteAboutie) {
                            temoignageHTML += `<p>Plainte aboutie : ${temoignage.plainteAboutie}</p>`;
                        }
                    }
                    temoignageHTML += `<p class="date-soumission">Soumis le : ${new Date(temoignage.timestamp).toLocaleDateString()}</p><hr>`;
                    temoignageDiv.innerHTML = temoignageHTML;
                    testimonialsList.prepend(temoignageDiv);
                });
            });
    }

    // Charger les témoignages au chargement initial de la page (si l'onglet est visible)
    fetchTemoignages();
});
