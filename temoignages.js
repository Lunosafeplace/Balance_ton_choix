document.addEventListener('DOMContentLoaded', function() {
    const openFormButton = document.querySelector('.open-form-button');
    const slidingFormContainer = document.querySelector('.sliding-form-container');
    const closeButton = document.querySelector('.close-button');
    const temoignageForm = document.getElementById('temoignageForm');
    const plainteDeposeeSelect = document.getElementById('plainteDeposee');
    const aboutieSection = document.getElementById('aboutieSection');

    openFormButton.addEventListener('click', function() {
        slidingFormContainer.classList.add('open');
        // fetchTemoignages(); // Ne plus charger les témoignages depuis Apps Script
    });

    closeButton.addEventListener('click', function() {
        slidingFormContainer.classList.remove('open');
    });

    plainteDeposeeSelect.addEventListener('change', function() {
        aboutieSection.style.display = this.value === 'oui' ? 'block' : 'none';
    });

    temoignageForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const recipientEmail = 'balancetonchoix@yahoo.com';
        const subject = 'Dépôt de témoignage';
        let body = '';

        const formData = new FormData(temoignageForm);
        formData.forEach((value, key) => {
            body += `${key}: ${value}\n`;
        });

        const mailtoUrl = `mailto:${recipientEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

        window.location.href = mailtoUrl;

        alert('Votre témoignage va être envoyé par e-mail.');
        slidingFormContainer.classList.remove('open');
        temoignageForm.reset();
    });

    // Ne plus appeler fetchTemoignages au chargement initial
    // fetchTemoignages();
});
