document.addEventListener('DOMContentLoaded', function() {
    const openFormButton = document.querySelector('.open-form-button');
    const slidingFormContainer = document.querySelector('.sliding-form-container');
    const closeButton = document.querySelector('.close-button');
    const temoignageForm = document.getElementById('temoignageForm');
    const plainteDeposeeSelect = document.getElementById('plainteDeposee');
    const aboutieSection = document.getElementById('aboutieSection');
    const confirmationMessage = document.getElementById('confirmationMessage');

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

        temoignageForm.style.display = 'none';
        confirmationMessage.style.display = 'block';

        // Optionnel: Fermer l'onglet après la soumission
        // setTimeout(() => {
        //     slidingFormContainer.classList.remove('open');
        //     temoignageForm.reset(); // Réinitialiser le formulaire
        //     temoignageForm.style.display = 'block';
        //     confirmationMessage.style.display = 'none';
        // }, 3000);
    });
});
