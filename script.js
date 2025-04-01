const celebritePhoto = document.getElementById('photo-celebrite');
const celebriteNom = document.getElementById('nom-celebrite');
const choixBtns = document.querySelectorAll('.choix-btn');
const resultatDiv = document.getElementById('resultat');
const questionPage = document.getElementById('question-page');
const infosPage = document.getElementById('infos-page');
const infosTexte = document.getElementById('infos-texte');
const questionSuivanteBtn = document.getElementById('question-suivante');
const explicationPage = document.getElementById('explication-page');
const demarrerQuizBtn = document.getElementById('demarrer-quiz');

const celebrites = [
    {
        nom: 'Amixem',
        photo: 'images/Amixem.png',
        reponse: 'aucune-affaire',
        infosSupplementaires: 'Aucune affaire connue à ce jour.'
    },
    {
        nom: 'Ary Abittan',
        photo: 'images/Ary_Abittan.jpg',
        reponse: 'pas-condamne',
        infosSupplementaires: ''
    },
    {
        nom: 'Christian Clavier',
        photo: 'images/Christian_Clavier.jpg',
        reponse: 'aucune-affaire',
        infosSupplementaires: 'Aucune affaire connue à ce jour.'
    },
    {
        nom: 'Jean Dujardin',
        photo: 'images/Jean_Dujardin.jpg',
        reponse: 'aucune-affaire',
        infosSupplementaires: 'Aucune affaire connue à ce jour.'
    },
    {
        nom: 'Pierre Gasly',
        photo: 'images/Pierre_Gasly.jpg',
        reponse: 'aucune-affaire',
        infosSupplementaires: 'Aucune affaire connue à ce jour.'
    },
    {
        nom: 'Lomepal',
        photo: 'images/Lomepal.jpg',
        reponse: 'pas-condamne',
        infosSupplementaires: ''
    },
    {
        nom: 'Benjamin Mendy',
        photo: 'images/Benjamin_Mendy.jpg',
        reponse: 'pas-condamne',
        infosSupplementaires: ''
    },
    {
        nom: 'Dominique Strauss-Kahn',
        photo: 'images/Dominique_Strauss-Kahn.jpg',
        reponse: 'pas-condamne',
        infosSupplementaires: ''
    },
    {
        nom: 'Norman Thavaud',
        photo: 'images/Norman_Thavaud.jpg',
        reponse: 'pas-condamne',
        infosSupplementaires: ''
    },
    {
        nom: 'Vianney',
        photo: 'images/Vianney.jpg',
        reponse: 'aucune-affaire',
        infosSupplementaires: 'Aucune affaire connue à ce jour.'
    },
];

let questionsPosees = [];
let indexCelebriteActuelle;
let reponsesCorrectesConsecutives = 0;

function choisirQuestionAleatoire() {
    let indexAleatoire;
    do {
        indexAleatoire = Math.floor(Math.random() * celebrites.length);
    } while (questionsPosees.includes(indexAleatoire));

    questionsPosees.push(indexAleatoire);
    indexCelebriteActuelle = indexAleatoire;
}

function afficherCelebrite() {
    choisirQuestionAleatoire();
    celebritePhoto.src = celebrites[indexCelebriteActuelle].photo;
    celebriteNom.textContent = celebrites[indexCelebriteActuelle].nom;
}

function afficherInfosSupplementaires(infos) {
    if (celebrites[indexCelebriteActuelle].nom === "Ary Abittan") {
        let resumeHTML = `
            <p>
                Ary Abittan a été accusé de viol en 2021. Bien que des lésions aient été constatées et que la victime ait présenté un stress post-traumatique, l'enquête a été classée sans suite en 2024, faute de preuves suffisantes. Cette décision a été confirmée en appel en 2025.
            </p>
        `;
        document.getElementById('infos-complementaires').innerHTML = resumeHTML;
        infosTexte.textContent = infos;
    } else if (celebrites[indexCelebriteActuelle].nom === "Lomepal") {
        let resumeHTML = `
            <p>
                Lomepal a été accusé d'agressions sexuelles et de viols par plusieurs femmes à partir de juillet 2023. Malgré les plaintes déposées et la médiatisation de l'affaire, les procédures ont été classées sans suite en janvier 2025. Le chanteur a nié les accusations.
            </p>
        `;
        document.getElementById('infos-complementaires').innerHTML = resumeHTML;
        infosTexte.textContent = infos;
    } else if (celebrites[indexCelebriteActuelle].nom === "Benjamin Mendy") {
        let resumeHTML = `
            <p>
                Benjamin Mendy, footballeur, a été accusé de plusieurs viols et agressions sexuelles en 2021. Il a été suspendu par son club, Manchester City, puis placé en détention provisoire. Son procès, qui a duré quatre mois, l'a vu accusé de huit viols, une tentative de viol et une agression sexuelle. Il a plaidé non coupable. En janvier 2023, il a été jugé non coupable de six viols. Lors d'un second procès en juillet 2023, il a été acquitté des accusations restantes.
            </p>
        `;
        document.getElementById('infos-complementaires').innerHTML = resumeHTML;
        infosTexte.textContent = infos;
    } else if (celebrites[indexCelebriteActuelle].nom === "Dominique Strauss-Kahn") {
        let resumeHTML = `
            <p>
                Affaire du Sofitel de New York (2011) : Accusé d'agression sexuelle par une femme de chambre, l'affaire s'est soldée par un     abandon des poursuites pénales, mais un accord financier a été conclu au civil.<br>
                Affaire Tristane Banon (2011) : La plainte pour tentative de viol a été classée sans suite en raison de la prescription.<br>
                Affaire du Carlton de Lille (2012-2015) : Accusé de proxénétisme aggravé, il a été relaxé.<br>
                Accusation de Myrta Merlino (2013) : La journaliste italienne l'a accusé de tentative d'abus sexuel lors du forum de Davos à la fin des années 1990.
            </p>
        `;
        document.getElementById('infos-complementaires').innerHTML = resumeHTML;
        infosTexte.textContent = infos;
    } else if (celebrites[indexCelebriteActuelle].nom === "Norman Thavaud") {
        let resumeHTML = `
            <p>
                Norman Thavaud est accusé de harcèlement et d'agressions sexuelles, y compris sur mineures. Une enquête a été classée sans suite en 2023, faute d'éléments suffisants, mais une plainte avec constitution de partie civile a été déposée. Il nie les accusations les plus graves, tout en admettant des comportements inappropriés.
            </p>
        `;
        document.getElementById('infos-complementaires').innerHTML = resumeHTML;
        infosTexte.textContent = infos;
    } else {
        infosTexte.textContent = infos;
        document.getElementById('infos-complementaires').innerHTML = ""; // Efface les infos complémentaires pour les autres célébrités
    }
    questionPage.style.display = 'none';
    infosPage.style.display = 'block';
}

function afficherQuestionSuivante() {
    questionPage.style.display = 'block';
    infosPage.style.display = 'none';
    if (questionsPosees.length < celebrites.length) {
        afficherCelebrite();
    } else {
        questionPage.innerHTML = 'Fin du jeu !';
    }
}

function verifierChoix(choix) {
    if (choix === celebrites[indexCelebriteActuelle].reponse) {
        resultatDiv.textContent = 'Correct !';
        resultatDiv.style.color = 'green';
        reponsesCorrectesConsecutives++; // Incrémente le compteur
        afficherInfosSupplementaires(celebrites[indexCelebriteActuelle].infosSupplementaires);
    } else {
        resultatDiv.textContent = 'Faux !';
        resultatDiv.style.color = 'red';
        reponsesCorrectesConsecutives = 0; // Réinitialise le compteur
        afficherInfosSupplementaires(celebrites[indexCelebriteActuelle].infosSupplementaires);
    }
    afficherReponsesConsecutives(); // Affiche le compteur
}


function afficherReponsesConsecutives() {
    const compteurConsecutives = document.getElementById('compteur-consecutives');
    if (compteurConsecutives) {
        compteurConsecutives.textContent = `${reponsesCorrectesConsecutives} réponse(s) consécutive(s)`;
    } else {
        const nouveauCompteur = document.createElement('p');
        nouveauCompteur.id = 'compteur-consecutives';
        nouveauCompteur.textContent = `${reponsesCorrectesConsecutives} réponse(s) consécutive(s)`;
        infosPage.appendChild(nouveauCompteur);
    }
}

questionSuivanteBtn.addEventListener('click', afficherQuestionSuivante);

choixBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        verifierChoix(btn.dataset.choix);
    });
});

demarrerQuizBtn.addEventListener('click', () => {
    explicationPage.style.display = 'none';
    questionPage.style.display = 'block';
    afficherCelebrite();
});
demarrerQuizBtn.addEventListener('click', () => {
    explicationPage.style.display = 'none';
    questionPage.style.display = 'block';
    afficherCelebrite();
});
