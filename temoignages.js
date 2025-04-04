document.addEventListener('DOMContentLoaded', function() {
    const temoignageForm = document.getElementById('temoignageForm');
    const plainteDeposeeSelect = document.getElementById('plainteDeposee');
    const aboutieSection = document.getElementById('aboutieSection');
    const confirmationMessage = document.getElementById('confirmationMessage');

    // Afficher/cacher la section "Si oui, a-t'elle abouti ?" en fonction de la réponse à "Une plainte a-t'elle déposée ?"
    plainteDeposeeSelect.addEventListener('change', function() {
        if (this.value === 'oui') {
            aboutieSection.style.display = 'block';
        } else {
            aboutieSection.style.display = 'none';
        }
    });

    // Gestion de la soumission du formulaire
    temoignageForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Empêche la soumission par défaut

        // Récupérer les données du formulaire
        const formData = new FormData(temoignageForm);
        const temoignageData = {};
        formData.forEach((value, key) => {
            temoignageData[key] = value;
        });

        // Ici, vous devriez envoyer les données du témoignage à votre serveur
        // pour les sauvegarder dans une base de données ou un autre système de stockage.
        // Pour cet exemple, nous allons simplement afficher un message de confirmation.

        console.log("Données du témoignage:", temoignageData);

        // Afficher le message de confirmation
        temoignageForm.style.display = 'none'; // Cacher le formulaire
        confirmationMessage.style.display = 'block';
    });
});
