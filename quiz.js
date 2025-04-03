// quiz.js
import celebrites from './data.js';

document.addEventListener('DOMContentLoaded', function() {
    console.log('quiz.js chargé');

    function initialiserElements() {
        return {
            celebritePhoto: document.getElementById('photo-celebrite'),
            celebriteNom: document.getElementById('nom-celebrite'),
            choixBtns: document.querySelectorAll('.choix-btn'),
            resultatDiv: document.getElementById('resultat'),
            questionPage: document.getElementById('question-page'),
            infosPage: document.getElementById('infos-page'),
            infosTexte: document.getElementById('infos-texte'),
            infosComplementaires: document.getElementById('infos-complementaires'),
            explicationPage: document.getElementById('explication-page'),
            accueilPage: document.getElementById('accueil-page'),
            quizPage: document.getElementById('quiz-page'),
            questionSuivanteBtn: document.getElementById('question-suivante'),
            questionSuivanteInfosBtn: document.getElementById('question-suivante-infos'),
            demarrerQuizBtn: document.getElementById('demarrer-quiz'),
            demarrerJeuBtn: document.getElementById('demarrer-jeu'),
        };
    }

    function initialiserVariables() {
        return {
            questionsPosees: [],
            indexCelebriteActuelle: null,
            reponsesCorrectesConsecutives: 0,
        };
    }

    function choisirQuestionAleatoire(questionsPosees) {
        let indexAleatoire;
        do {
            indexAleatoire = Math.floor(Math.random() * celebrites.length);
        } while (questionsPosees.includes(indexAleatoire));

        return indexAleatoire;
    }

    function afficherCelebrite(elements, variables) {
        if (elements && elements.celebritePhoto && elements.celebriteNom && celebrites && celebrites[variables.indexCelebriteActuelle]) {
            elements.celebritePhoto.src = celebrites[variables.indexCelebriteActuelle].photo;
            elements.celebriteNom.textContent = celebrites[variables.indexCelebriteActuelle].nom;
        } else {
            console.error("Erreur : éléments ou données manquantes dans afficherCelebrite.");
        }
    }

    function afficherInfosSupplementaires(elements, variables, estCorrect) {
        if (elements && elements.infosTexte && elements.infosComplementaires && celebrites && celebrites[variables.indexCelebriteActuelle]) {
            elements.infosTexte.textContent = celebrites[variables.indexCelebriteActuelle].infosSupplementaires;
            elements.infosComplementaires.innerHTML = "";
            const resultatMessage = estCorrect ? "<span style='color: darkgreen;'>Correct !</span>" : "<span style='color: darkred;'>Faux !</span>";
            elements.infosComplementaires.innerHTML += `<p>Résultat : ${resultatMessage}</p>`;
            elements.questionPage.style.display = 'none';
            elements.infosPage.style.display = 'block';
        } else {
            console.error("Erreur : éléments ou données manquantes dans afficherInfosSupplementaires.");
        }
    }

    function afficherQuestionSuivante(elements, variables) {
        if (elements && elements.questionPage && elements.infosPage) {
            elements.questionPage.style.display = 'block';
            elements.infosPage.style.display = 'none';

            if (variables.questionsPosees.length < celebrites.length) {
                afficherCelebrite(elements, variables);
            } else {
                elements.questionPage.innerHTML = 'Oups, tu as vu toutes les célébrités enregistrées à ce jour...';
            }
        } else {
            console.error("Erreur : éléments manquants dans afficherQuestionSuivante.");
        }
    }

    function verifierChoix(elements, variables, choix) {
        if (celebrites && celebrites[variables.indexCelebriteActuelle]) {
            const estCorrect = choix === celebrites[variables.indexCelebriteActuelle].reponse;
            variables.reponsesCorrectesConsecutives = estCorrect ? variables.reponsesCorrectesConsecutives + 1 : 0;

            afficherInfosSupplementaires(elements, variables, estCorrect);
            afficherReponsesConsecutives(elements, variables);
        } else {
            console.error("Erreur : données manquantes dans verifierChoix.");
        }
    }

    function afficherReponsesConsecutives(elements, variables) {
        if (elements && elements.infosPage) {
            const compteurConsecutives = document.getElementById('compteur-consecutives');
            if (compteurConsecutives) {
                compteurConsecutives.textContent = `Série : ${variables.reponsesCorrectesConsecutives}`;
            } else {
                const nouveauCompteur = document.createElement('p');
                nouveauCompteur.id = 'compteur-consecutives';
                nouveauCompteur.textContent = `Série : ${variables.reponsesCorrectesConsecutives}`;
                elements.infosPage.appendChild(nouveauCompteur);
            }
        } else {
            console.error("Erreur : éléments manquants dans afficherReponsesConsecutives.");
        }
    }

    function ajouterEcouteursEvenements(elements, variables) {
        if (elements.questionSuivanteBtn) {
            elements.questionSuivanteBtn.addEventListener('click', () => afficherQuestionSuivante(elements, variables));
        }

        if (elements.questionSuivanteInfosBtn) {
            elements.questionSuivanteInfosBtn.addEventListener('click', () => afficherQuestionSuivante(elements, variables));
        }

        if (elements.choixBtns) {
            elements.choixBtns.forEach(btn => {
                btn.addEventListener('click', () => verifierChoix(elements, variables, btn.dataset.choix));
            });
        }

        if (elements.demarrerQuizBtn) {
            elements.demarrerQuizBtn.addEventListener('click', () => {
                elements.explicationPage.style.display = 'none';
                elements.questionPage.style.display = 'block';
                afficherCelebrite(elements, variables);
            });
        }

        if (elements.demarrerJeuBtn) {
            elements.demarrerJeuBtn.addEventListener('click', () => {
                window.location.href = 'quiz.html';
            });
        }
    }

    // Code principal pour quiz.html
    const elements = initialiserElements();
    const variables = initialiserVariables();
    variables.indexCelebriteActuelle = choisirQuestionAleatoire(variables.questionsPosees);
    variables.questionsPosees.push(variables.indexCelebriteActuelle);
    ajouterEcouteursEvenements(elements, variables);
    afficherCelebrite(elements, variables);
});