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

let celebrites = [
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
        infosSupplementaires: '1 accusation \n\n=> Non lieu en appel (janvier 2025)'
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
        infosSupplementaires: '3 accusations\n\n=> Procédure classée sans suite (janvier 2025)'
    },
    {
        nom: 'Benjamin Mendy',
        photo: 'images/Benjamin_Mendy.jpg',
        reponse: 'pas-condamne',
        infosSupplementaires: '10 accusations \n\n=> Jugé non coupable pour 6 viols (janvier 2023)\n=> Jugé non coupable pour 1 viol et 1 tentative de viol (juillet 2023)\n\n(2 accusations non jugés)'
    },
    {
        nom: 'Dominique Strauss-Kahn',
        photo: 'images/Dominique_Strauss-Kahn.jpg',
        reponse: 'pas-condamne',
        infosSupplementaires: '3 accusations\n\n=> Affaire du Sofitel :\nProcédure abandonnée (décembre 2012)\nen contrepartie d\'un versement d\'1,5 millions de dollars envers la plaignante\n\n=> Affaire Tristane Banon :\nClassée sans suite (octobre 2011)\n\n(1 accusation non jugée)'
    },
    {
        nom: 'Norman Thavaud',
        photo: 'images/Norman_Thavaud.jpg',
        reponse: 'pas-condamne',
        infosSupplementaires: '7 accusations \n=> Classées sans suite (octobre 2023)'
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
    infosTexte.textContent = infos;
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
        afficherInfosSupplementaires(celebrites[indexCelebriteActuelle].infosSupplementaires);
    } else {
        resultatDiv.textContent = 'Incorrect !';
        resultatDiv.style.color = 'red';
        afficherInfosSupplementaires(celebrites[indexCelebriteActuelle].infosSupplementaires);
    }
}

choixBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        verifierChoix(btn.dataset.choix);
    });
});

questionSuivanteBtn.addEventListener('click', afficherQuestionSuivante);

demarrerQuizBtn.addEventListener('click', () => {
    explicationPage.style.display = 'none';
    questionPage.style.display = 'block';
    afficherCelebrite();
});