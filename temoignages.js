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

        const recipientEmail = 'balancetonchoix@yahoo.com';
        const subject = 'Dépôt de témoignage';
        let body = '';

        const formData = new FormData(temoignageForm);
        formData.forEach((value, key) => {
            body += `${key}: ${value}\n`;
        });

        const mailtoUrl = `mailto:${recipientEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

        window.open(mailtoUrl);

        alert('Votre témoignage va être envoyé par e-mail dans une nouvelle fenêtre.');
        slidingFormContainer.classList.remove('open');
        temoignageForm.reset();

        if (confirmationMessage) {
            confirmationMessage.style.display = 'block';
            setTimeout(() => {
                confirmationMessage.style.display = 'none';
            }, 3000);
        }
    });
});
