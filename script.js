console.log('script.js chargé');

const celebrites = [
    {
        nom: 'Abad, Damien',
        photo: 'Damien_Abad.jpg',
        reponse: 'affaire',
        infosSupplementaires: 'Accusations :\n- Viol (2010 et 2011) : Deux femmes accusent Damien Abad de viol, dont un sous soumission chimique. L\'une des femmes avait déjà porté plainte en 2012 et 2017, classées sans suite.\n- Tentative de viol (date indéterminée) : Une élue de droite l\'accuse de tentative de viol après un dîner officiel. D\'autres témoignages évoquent des comportements inappropriés de sa part.\n Viol sous soumission chimique (2013) : Une quatrième femme l\'accuse de viol après avoir été droguée.\n\nFaits reprochés : Violences sexuelles, utilisation de soumission chimique, abus de pouvoir et comportements inappropriés envers des femmes.\n\nSuites données :\nPlusieurs plaintes ont été déposées. Le parquet de Paris a ouvert une enquête pour tentative de viol. Damien Abad a nié les accusations et porté plainte pour dénonciation calomnieuse. Il a été écarté du gouvernement en juillet 2022. Son immunité parlementaire a été levée en mai 2023. Il a été placé en garde à vue en juin 2023. Mise en examen le 16 mai 2024 pour tentative de viol en 2010.'
    },
    {
        nom: 'Abittan, Ary',
        photo: 'Ary_Abittan.jpg',
        reponse: 'affaire',
        infosSupplementaires: 'Accusation :\n- Viol : Une jeune femme de 23 ans a porté plainte contre l\'acteur pour viol.\n\nFaits reprochés : Violences sexuelles.\n\nSuites données :\n- Octobre 2021, placement en garde à vue. Mise en examen et placement sous contrôle judiciaire. Statut de témoin assisté. Juillet 2023, clôture de l\'information judiciaire (accusations jugées non probantes). Avril 2024, décision de non-lieu, malgré les lésions constatées et le stress post-traumatique de la plaignante. Appel de la plaignante. Janvier 2025, confirmation du non lieu en appel.'
    },
    {
        nom: 'Amixem',
        photo: 'Amixem.png',
        reponse: 'pas-affaire',
        infosSupplementaires: 'Aucune affaire connue à ce jour.'
    },
    {
        nom: 'Bedos, Nicolas',
        photo: 'Nicolas_Bedos.jpg',
        reponse: 'affaire',
        infosSupplementaires: 'Accusations et faits reprochés :\n- Agressions sexuelles (2023) : Accusé d\'agression sexuelle sur une femme lors d\'une soirée à Paris en mai 2023.\n- Harcèlement ou agression sexuelle (2018 et 2023) : Accusé de harcèlement ou d\'agression sexuelle sur deux autres femmes lors de soirées en juin 2018 et juin 2023.\n- Viol et agression sexuelle (1999) : Accusé de viol au domicile de la famille Bedos à Neuilly-sur-Seine en 1999.\n\nSuites données :\n- Des enquêtes ont été ouvertes, mais en raison de la prescription, un classement sans suite a été décidé pour deux plaignantes. Septembre 2024, jugement pour « agression sexuelle » et « harcèlement ou agression sexuel ». Octobre 2024, relaxé pour les faits de harcèlement sexuel de 2018. Condamné pour l\'agression sexuelle de 2023 à une année d\'emprisonnement dont six mois avec sursis. Janvier 2025, renoncement à l\'appel de sa condamnation, qui devient définitive. Il écope ainsi de un an de prison, dont six mois sous bracelet électronique.'
    },
    {
        nom: 'Besnehard, Dominique',
        photo: 'Dominique_Besnehard.jpg',
        reponse: 'affaire',
        infosSupplementaires: 'Accusations et faits reprochés :\n- Agressions sexuelles (1994, début des années 2000 et 2017) : Farouk Benalleg accuse Dominique Besnehard d\'agression sexuelle en 1994, Pierre Bégué en 2017. Giovanni Savoia accuse Dominique Besnehard d\'avoir abusé de son pouvoir au début des années 2000 pour tenter d\'obtenir des faveurs sexuelles, un autre acteur fait les mêmes accusations liées aux années 1990.\n\nSuites données :\n- Dominique Besnehard nie toutes les accusations.'
    },
    {
        nom: 'Besson, Luc',
        photo: 'Luc_Besson.jpg',
        reponse: 'affaire',
        infosSupplementaires: 'Accusations :\n- Viol : L\'actrice Sand Van Roy a porté plainte pour viol en mai 2018, alléguant des faits survenus à l\'hôtel Bristol. Elle a également porté plainte pour des violences sexuelles répétées entre 2016 et 2018. Les rapports médicaux ont relevé des lésions compatibles avec ses accusations.\n - Comportements sexuels inappropriés : Plusieurs autres femmes, dont une ex-chargée de casting, ont accusé Luc Besson d\'abus sexuels. Mediapart a recueilli les témoignages de neuf femmes décrivant des comportements similaires et répétitifs.\n\nFaits reprochés : Viols, violences sexuelles, abus sexuels, comportements sexuels inappropriés et emprise psychologique.\n\nSuites données :\n- Plainte de Sand Van Roy : La plainte initiale a été classée sans suite en février 2019. Sand Van Roy s\'est constituée partie civile et a obtenu la reprise des investigations. Luc Besson a été placé sous le statut de témoin assisté en janvier 2021. Un non-lieu a été prononcé en décembre 2021 et confirmé en appel en mai 2022. En juin 2023, la Cour de cassation rejette le pourvoi de Sand Van Roy. Sand Van Roy a annoncé saisir la Cour européenne des droits de l\'homme, et porte plainte en belgique.\n- Autres accusations : Le parquet a ouvert des enquêtes préliminaires séparées pour les autres accusations.'
    },
    {
        nom: 'Clavier, Christian',
        photo: 'Christian_Clavier.jpg',
        reponse: 'pas-affaire',
        infosSupplementaires: 'Aucune affaire connue à ce jour.'
    },
    {
        nom: 'Darmon, Gérard',
        photo: 'Gérard_Darmon.jpg',
        reponse: 'affaire',
        infosSupplementaires: 'Accusations et faits reprochés :\n- Violences sexistes et sexuelles : Neuf femmes accusent Gérard Darmon de violences sexistes et sexuelles. Elles décrivent des propos et des gestes « déplacés » sur le tournage de six films. Elles rapportent des « humiliations » et des « insultes sexistes ». Une technicienne a indiqué avoir porté plainte contre la production du film sur lequel elle travaillait avec l\'acteur pour « absence de protection ». Les témoignages indiquent que plusieurs des femmes qui témoignent occupaient des postes précaires au moment des faits. Une des femmes témoignant est âgée de 18 ans. Dix autres femmes ont aussi livré leur récits à Politis avant de refuser d\'apparaître dans l’enquête et de se rétracter.\n\nSuites données :\n -Gérard Darmon nie les accusations. Il multiplie les insultes et menaces à l’égard du média Politis. Une technicienne a porté plainte contre la production du film sur lequel elle travaillait avec l\'acteur pour « absence de protection ».'
    },
    {
        nom: 'Depardieu, Gérard',
        photo: 'Gérard_Depardieu.jpg',
        reponse: 'affaire',
        infosSupplementaires: 'Accusations et faits reprochés :\n- Viol et agressions sexuelles (2018) : La comédienne Charlotte Arnould accuse Gérard Depardieu de viol et de harcèlement sexuel.\n- Violences sexuelles sur des tournages (2004-2022) : Treize femmes témoignent de violences sexuelles lors de tournages de films.\n- Agressions sexuelles (2021) : Deux plaintes sont déposées pour des faits d\'agression sexuelle lors du tournage du film « Les Volets verts ».\n\nSuites données :\n- Affaire Arnauld : Décembre 2020, Gérard Depardieu est mis en examen pour viol et agressions sexuelles. Août 2024, le parquet de Paris requiert un procès à son encontre pour viols.\n- Affaire « Les Volets verts » : Mars 2025, un procès est prévu devant le tribunal correctionnel de Paris pour les accusations d\'agressions sexuelles.'
    },
    {
        nom: 'Dujardin, Jean',
        photo: 'Jean_Dujardin.jpg',
        reponse: 'pas-affaire',
        infosSupplementaires: 'Aucune affaire connue à ce jour.'
    },
    {
        nom: 'Elvis, Roméo',
        photo: 'Roméo_Elvis.jpg',
        reponse: 'affaire',
        infosSupplementaires: 'Accusation :\n- Agression sexuelle : Roméo Elvis a été accusé d\'agression sexuelle par une jeune femme en septembre 2020.\n\nFaits reprochés : Comportement inapproprié à caractère sexuel.\n\nSuites données :\n- Roméo Elvis a reconnu les faits et a présenté publiquement ses excuses.La victime a exprimé sa volonté d\'encourager d\'autres femmes à témoigner, dans un contexte où d\'autres affaires similaires étaient médiatisées.'
    },
    {
        nom: 'Gasly, Pierre',
        photo: 'Pierre_Gasly.jpg',
        reponse: 'pas-affaire',
        infosSupplementaires: 'Aucune affaire connue à ce jour.'
    },
    {
        nom: 'Gastambide, Franck',
        photo: 'Franck_Gastambide.jpg',
        reponse: 'affaire',
        infosSupplementaires: 'Accusations et faits reprochés :\n- Violences sexuelles, physiques et psychologiques (février 2025) : Six femmes, dont trois ont été ses compagnes, accusent Franck Gastambide de violences sexuelles, physiques et psychologiques.\n\nSuites données : Franck Gastambide nie les accusations. Il se déclare victime d’une campagne de calomnie orchestrée par l’une d’elles et l\'accuse de violences.'
    },
    {
        nom: 'Hulot, Nicolas',
        photo: 'Nicolas_Hulot.jpg',
        reponse: 'affaire',
        infosSupplementaires: 'Accusations :\n- Viol (1997) : Pascale Mitterrand a porté plainte en 2008 pour un viol qui aurait eu lieu en 1997, alors qu\'elle était photographe pour Sipa Press.\n- Agressions sexuelles et viol (1989-2008) : Six autres femmes ont accusé Nicolas Hulot de viol et d\'agressions sexuelles dans un reportage d\'Envoyé spécial diffusé en 2021. L\'une d\'entre elles était mineure au moment des faits.\n- Comportements inappropriés : Des témoignages relatent des comportements inappropriés de Nicolas Hulot envers des femmes.\n\nFaits reprochés : Viols, agressions sexuelles et comportements inappropriés à caractère sexuel.\n\nSuites données :\n- Plainte de Pascale Mitterrand (2008) : La plainte a été classée sans suite en octobre 2008, les faits étant prescrits.\n- Reportage d\'Envoyé spécial (2021) : Nicolas Hulot a nié les accusations et a annoncé son retrait définitif de la vie publique. Une enquête préliminaire a été ouverte par le tribunal judiciaire de Paris. En septembre 2022, le Parquet de Paris annonce le classement sans suite de l\'enquête pour cause de prescription de l\'action publique.'
    },
    {
        nom: 'Jegou, Oscar',
        photo: 'Oscar_Jégou.jpg',
        reponse: 'affaire',
        infosSupplementaires: 'Accusations :\n- Viols à répétition : Il est accusé de viols à répétition sur une femme dans sa chambre d\'hôtel à Mendoza, en Argentine.\n\nFaits reprochés : Viol en réunion.\n\nSuites données :\n- Juillet 2024, arrestation et inculpation pour viols aggravés en Argentine. Août 2024, fin de la résidence surveillée, mais interdiction de quitter le pays. Septembre 2024, autorisation de quitter le pays et retour en France. Décembre 2024, abandon des poursuites pour viols aggravés en Argentine. La plaignante peut faire appel de cette décision.'
    },
    {
        nom: 'Lomepal',
        photo: 'Lomepal.jpg',
        reponse: 'affaire',
        infosSupplementaires: 'Accusations :\n- Agressions sexuelles (juillet 2023) : Plusieurs femmes de l\'industrie musicale l\'accusent d\'agressions sexuelles.\n- Viol (2017) : Une plainte déposée en 2020 concerne des faits de viol qui se seraient déroulés à l\'étranger en 2017.\n- Viol (2018) : Une seconde plainte pour viol est déposée en mars 2024, concernant des faits remontant à 2018.\n- Viol: Une troisième femme porte plainte en mai 2024.\n\nFaits reprochés : Agressions sexuelles et viols.\n\n Suites données :\n- Lomepal nie les accusations et se dit prêt à coopérer avec la justice. Des tentatives d\'annulation de concerts ont eu lieu, avec des résultats mitigés. Janvier 2025, la procédure concernant les trois plaintes est classée sans suite.'
    },
    {
        nom: 'Mendy, Benjamin',
        photo: 'Benjamin_Mendy.jpg',
        reponse: 'affaire',
        infosSupplementaires: 'Accusations :\n- Viols et agression sexuelle : Benjamin Mendy a été accusé de plusieurs viols et d\'une agression sexuelle, concernant des faits qui se seraient déroulés entre octobre 2020 et août 2021. Le nombre d\'accusations a augmenté au fil de l\'enquête, pour atteindre huit viols, une tentative de viol et une agression sexuelle.\n\n Faits reprochés : Viols, tentative de viol et agression sexuelle.\n\nSuites données :\n- Août 2021, suspension par Manchester City et placement en détention provisoire. Septembre 2021, confirmation de la détention provisoire. Décembre 2021, inculpation pour un septième viol. Janvier 2022, libération sous caution et placement sous contrôle judiciaire. Août 2022 à janvier 2023, premier procès, aboutissant à une déclaration de non-culpabilité pour six viols et à l\'absence de verdict pour un septième. Juin 2023 à Juillet 2023, second procès, aboutissant a l\'acquittement de Benjamin Mendy.'
    },
    {
        nom: 'Moha La Squale',
        photo: 'Personne.png',
        reponse: 'affaire',
        infosSupplementaires: 'Accusations :\n- Violences conjugales : Plusieurs femmes l\'accusent de violences physiques, verbales, sexuelles et psychologiques.\n- Séquestrations : Des plaintes font état de séquestrations.\n- Agression sexuelle : Il est accusé d\'agression sexuelle.\n- Viol : Il est mis en examen pour viol.\n- Menaces de mort : Il est accusé de menaces de mort.\n\nFaits reprochés : Violences conjugales (physiques, verbales, sexuelles, psychologiques), séquestrations, agression sexuelle, viol et menaces de mort.\n\nSuites données :\n- Septembre 2020, premières accusations publiques et plaintes déposées. Octobre 2020, réactions publiques de Moha La Squale niant les faits. Juin 2021, mise en examen pour violences, agression sexuelle, menaces de mort et séquestration. Juillet 2022, placement en détention provisoire pour violation de son contrôle judiciaire. Mars 2023, mise en examen pour viol. Février 2024, incarcération en France après son arrestation en Allemagne. Juillet 2024, condamnation à quatre ans de prison, dont trois ans ferme, pour violences conjugales, séquestrations et menaces de mort.'
    },
    {
        nom: 'Morandini, Jean-Marc',
        photo: 'Jean-Marc_Morandini.jpg',
        reponse: 'affaire',
        infosSupplementaires: 'Accusations :\n- Harcèlement sexuel : Accusations de harcèlement sexuel envers de jeunes acteurs lors de castings et de tournages.\n- Corruption de mineurs : Accusations de corruption de mineurs, notamment via des échanges de messages à caractère sexuel.\n\nFaits reprochés : Envois de demandes de photos et vidéos à caractère sexuel, comportements inappropriés lors de castings et relations inappropriées avec des mineurs.\nSuites données :\n- 2016, publication d\'enquêtes journalistiques révélant les accusations, ouverture d\'enquêtes préliminaires par le parquet de Paris et mise en examen pour « corruption de mineur ». 2017, classement sans suite de l\'enquête concernant les castings. 2022, condamnation en première instance pour corruption de mineurs. 2023, condamnation en première instance pour harcèlement sexuel. 2025, condamnation en appel pour corruption de mineurs et harcèlement sexuel.\n\nCondamnations :\n- Corruption de mineurs : Condamnation en appel à deux ans de prison avec sursis, 20 000 € d\'amende, une interdiction définitive d\'exercer une profession en contact avec des mineurs, et maintien de l\'inscription au Fijais.\n- Harcèlement sexuel : Condamnation en appel à dix-huit mois de prison avec sursis et une obligation de suivi psychologique.\n\nJean-Marc Morandini a fait appel de certaines de ces condamnations, des pourvois en cassation sont en cours.'
    },
    {
        nom: 'Poivre d\'Arvor, Patrick',
        photo: 'Patrick_Poivre-Darvor.jpg',
        reponse: 'affaire',
        infosSupplementaires: 'Accusations :\n- Viols : Plusieurs femmes l\'accusent de viols, y compris des viols sur mineures.\n- Agressions sexuelles : De nombreux témoignages font état d\'agressions sexuelles.\n- Harcèlement : Des femmes décrivent des comportements relevant du harcèlement sexuel.\n\nFaits reprochés : Viols (y compris viols aggravés), agressions sexuelles, harcèlement sexuel, emprise psychologique et abus de pouvoir.\n\nSuites données :\n-2005, une première enquête préliminaire pour viol est classée sans suite. Février 2021, dépôt de plainte de Florence Porcel pour viols et agressions sexuelles. Mars 2021, d\'autres femmes témoignent publiquement, et de nouvelles plaintes sont déposées. Juillet 2021, classement sans suite de l\'enquête pour viols, en raison de la prescription et de l\'insuffisance de preuves. Avril 2022, Patrick Poivre d\'Arvor porte plainte pour dénonciation calomnieuse. Septembre 2022, la cour d\'appel de Versailles annule les effets du classement sans suite de plusieurs plaintes, en argumentant que si la sérialité des faits était démontrée, cela annulerait la prescription et pourrait faire aboutir l\'enquête. Décembre 2023, Patrick Poivre d\'Arvor est mis en examen pour le viol de Florence Porcel. Juillet 2024, il est visé par cinq nouvelles informations judiciaires pour viols et viols aggravés. Octobre 2024, le journal Le Monde révèle une plainte pour viol contre lui datant de 2005, mais classée sans suite à l\'époque.'
    },
    {
        nom: 'Polanski, Roman',
        photo: 'Roman_Polanski.jpg',
        reponse: 'affaire',
        infosSupplementaires: 'Accusations et faits reprochés :\n- Relations sexuelles illégales avec une mineure (1977) : Roman Polanski est accusé et condamné pour avoir eu des relations sexuelles avec Samantha Geimer, alors âgée de 13 ans. Il plaide coupable de rapports sexuels illégaux avec une mineure.\n- Autres accusations de viols et d\'agressions sexuelles : D\'autres femmes ont accusé Roman Polanski de viols et d\'agressions sexuelles, notamment Charlotte Lewis (1983), « Robin M. » (1973), Renate Langer (1973), Marianne Barnard (1975) et Valentine Monnier (1975). Ces accusations sont contestées par Polanski.\n\n Suites données :\n - Affaire Samantha Geimer : Roman Polanski est condamné à 90 jours de prison, mais est libéré après 42 jours. Il quitte ensuite les États-Unis pour la France. Samantha Geimer a exprimé son souhait que l\'affaire soit close et a demandé l\'abandon des poursuites. La justice américaine continue de demander l\'extradition de Roman Polanski. Plusieurs tentatives d\'extradition par les USA ont étés tentées, mais aucune n\'a aboutie.\n- Autres accusations : Les autres accusations portées contre Roman Polanski n\'ont pas donné lieu à des poursuites judiciaires en raison de la prescription ou du manque de preuves. En 2024, il est relaxé de l\'accusation de diffamation, dans un procès intenté par Charlotte Lewis.'
    },
    {
        nom: 'Strauss-Kahn, Dominique',
        photo: 'Dominique_Strauss-Kahn.jpg',
        reponse: 'affaire',
        infosSupplementaires: 'Accusations :\n- Affaire du Sofitel de New York (2011) : accusé d\avoir agressé sexuellement Nafissatou Diallo, une femme de chambre, dans une suite de l\'hôtel Sofitel de Manhattan.\n- Affaire Tristane Banon (2011) : accusé d\avoir tenté de violer Tristane Banon en 2003.\n- Affaire du Carlton de Lille (2012-2015) : accusé d\'être impliqué dans un réseau de prostitution lié à l\'hôtel Carlton de Lille.\n- Myrta Merlino (2013) : Accusation de tentative d\'abus sexuel à la fin des années 1990.\n\nFaits reprochés : Agression sexuelle, tentative de viol, abus sexuel et séquestration, proxénétisme aggravé en bande organisée et proxénétisme aggravé en réunion.\n\nSuite données :\n- Affaire du Sofitel : Arrestation et inculpation. Libération sous caution puis sur parole. Abandon des poursuites pénales en raison de doutes sur la crédibilité de la plaignante. Accord à l\'amiable dans la procédure civile, avec versement de 1,5 million de dollars à Nafissatou Diallo.\n- Affaire Tristane Banon : Plainte classée sans suite en raison du délai de prescription pour agression sexuelle. Le parquet a estimé que les faits pouvaient être qualifiés d\'agression sexuelle.\n- Affaire du Carlton : Mise en examen. Relaxation par le tribunal correctionnel de Lille.'
    },
    {
        nom: 'Thavaud, Norman',
        photo: 'Norman_Thavaud.jpg',
        reponse: 'affaire',
        infosSupplementaires: 'Accusations et faits reprochés :\n- Harcèlement sexuel (2018) : Accusations de harcèlement sexuel dans le sillage du hashtag #BalanceTonYoutubeur.\n- Exploitation sexuelle sur mineur (2020) : Une internaute québécoise l\'accuse de lui avoir demandé des photographies à caractère sexuel alors qu\'elle était mineure.\n- Viols et corruption de mineurs (2022) : Six femmes portent plainte, dont cinq pour viol, et deux étaient mineures au moment des faits.\n\nSuites données : 2020, dépôt de plainte au Canada. Janvier 2022, ouverture d\'une enquête préliminaire par le parquet de Paris. Décembre 2022, placement en garde à vue de Norman Thavaud, YouTube cesse de diffuser des publicités sur ses vidéos, nouvelle convocation par la justice et dépôt d\'une septième plainte pour viol. Octobre 2023, classement sans suite de l\'enquête préliminaire par le parquet de Paris, pour infractions insuffisamment caractérisées, puis dépôt d\'une plainte avec constitution de partie civile par les avocats des plaignantes. Août 2024, Norman publie une vidéo sur youtube, où il fait part de sa version des faits.'
    },
    {
        nom: 'Vianney',
        photo: 'Vianney.jpg',
        reponse: 'pas-affaire',
        infosSupplementaires: 'Aucune affaire connue à ce jour.'
    },
];

let estSurCelebrities = window.location.pathname.endsWith('celebrities.html');

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

function choisirQuestionAleatoire(celebrites, questionsPosees) {
    let indexAleatoire;
    do {
        indexAleatoire = Math.floor(Math.random() * celebrites.length);
    } while (questionsPosees.includes(indexAleatoire));

    return indexAleatoire;
}

function afficherCelebrite(elements, celebrites, variables) {
    const indexAleatoire = choisirQuestionAleatoire(celebrites, variables.questionsPosees);
    variables.questionsPosees.push(indexAleatoire);
    variables.indexCelebriteActuelle = indexAleatoire;

    elements.celebritePhoto.src = celebrites[indexAleatoire].photo;
    elements.celebriteNom.textContent = celebrites[indexAleatoire].nom;
}

function afficherInfosSupplementaires(elements, celebrites, variables, estCorrect) {
    elements.infosTexte.textContent = celebrites[variables.indexCelebriteActuelle].infosSupplementaires;
    elements.infosComplementaires.innerHTML = "";
    const resultatMessage = estCorrect ? "<span style='color: darkgreen;'>Correct !</span>" : "<span style='color: darkred;'>Faux !</span>";
    elements.infosComplementaires.innerHTML += `<p>Résultat : ${resultatMessage}</p>`;
    elements.questionPage.style.display = 'none';
    elements.infosPage.style.display = 'block';
}

function afficherQuestionSuivante(elements, celebrites, variables) {
    elements.questionPage.style.display = 'block';
    elements.infosPage.style.display = 'none';

    if (variables.questionsPosees.length < celebrites.length) {
        afficherCelebrite(elements, celebrites, variables);
    } else {
        elements.questionPage.innerHTML = 'Oups, tu as vu toutes les célébrités enregistrées à ce jour...';
    }
}

function verifierChoix(elements, celebrites, variables, choix) {
    const estCorrect = choix === celebrites[variables.indexCelebriteActuelle].reponse;
    variables.reponsesCorrectesConsecutives = estCorrect ? variables.reponsesCorrectesConsecutives + 1 : 0;

    afficherInfosSupplementaires(elements, celebrites, variables, estCorrect);
    afficherReponsesConsecutives(elements, variables);
}

function afficherReponsesConsecutives(elements, variables) {
    const compteurConsecutives = document.getElementById('compteur-consecutives');
    if (compteurConsecutives) {
        compteurConsecutives.textContent = `Série : ${variables.reponsesCorrectesConsecutives}`;
    } else {
        const nouveauCompteur = document.createElement('p');
        nouveauCompteur.id = 'compteur-consecutives';
        nouveauCompteur.textContent = `Série : ${variables.reponsesCorrectesConsecutives}`;
        elements.infosPage.appendChild(nouveauCompteur);
    }
}

function ajouterEcouteursEvenements(elements, celebrites, variables) {
    if (elements.questionSuivanteBtn) {
        elements.questionSuivanteBtn.addEventListener('click', () => afficherQuestionSuivante(elements, celebrites, variables));
    }

    if (elements.questionSuivanteInfosBtn) {
        elements.questionSuivanteInfosBtn.addEventListener('click', () => afficherQuestionSuivante(elements, celebrites, variables));
    }

    elements.choixBtns.forEach(btn => {
        btn.addEventListener('click', () => verifierChoix(elements, celebrites, variables, btn.dataset.choix));
    });

    if (elements.demarrerQuizBtn) {
        elements.demarrerQuizBtn.addEventListener('click', () => {
            elements.explicationPage.style.display = 'none';
            elements.questionPage.style.display = 'block';
            afficherCelebrite(elements, celebrites, variables);
        });
    }

    if (elements.demarrerJeuBtn) {
        elements.demarrerJeuBtn.addEventListener('click', () => {
            elements.accueilPage.style.display = 'none';
            elements.quizPage.style.display = 'block';
            elements.explicationPage.style.display = 'block';
            window.location.href = 'quiz-page';
        });
    }
}

// Code principal
if (window.location.pathname.endsWith('index.html')) {
    const elements = initialiserElements();
    const variables = initialiserVariables();
    ajouterEcouteursEvenements(elements, celebrites, variables);
    afficherCelebrite(elements, celebrites, variables);
}

// Gestionnaire d'événements pour le bouton "De A à Z" (si applicable)
const aZBtn = document.getElementById('a-z-button');
if (aZBtn) {
    aZBtn.addEventListener('click', () => {
        window.location.href = 'celebrities.html';
    });
} else {
    console.error("L'élément a-z-button n'a pas été trouvé.");
}

// Code pour celebrities.html
if (estSurCelebrities) {
    const celebritiesList = document.getElementById('celebrities-list');
    const rechercheCelebrite = document.getElementById('recherche-celebrite');
    const infosPage = document.getElementById('infos-page');
    const infosTexte = document.getElementById('infos-texte');
    const infosComplementaires = document.getElementById('infos-complementaires');

    console.log(celebritiesList);
    celebrites.sort((a, b) => a.nom.localeCompare(b.nom));

    function afficherCelebrities(celebrities) {
        celebritiesList.innerHTML = '';
        celebrities.forEach(celebrity => {
            const celebrityDiv = document.createElement('div');
            celebrityDiv.classList.add('celebrity');
            celebrityDiv.innerHTML = `
                <img src="${celebrity.photo}" alt="${celebrity.nom}" class="celebrity-photo">
                <h3>${celebrity.nom}</h3>
            `;
            celebritiesList.appendChild(celebrityDiv);

            const celebrityPhoto = celebrityDiv.querySelector('.celebrity-photo');
            celebrityPhoto.addEventListener('mouseover', (event) => {
                afficherInfosCelebrite(celebrity, event);
            });
            celebrityPhoto.addEventListener('mouseout', masquerInfosCelebrite);
        });
    }

    function filtrerCelebrities(texteRecherche) {
        const celebritiesFiltrees = celebrites.filter(celebrity =>
            celebrity.nom.toLowerCase().includes(texteRecherche.toLowerCase())
        );

        // Effacer la liste existante
        celebritiesList.innerHTML = '';

        // Ajouter uniquement les éléments filtrés
        celebritiesFiltrees.forEach(celebrity => {
            const celebrityDiv = document.createElement('div');
            celebrityDiv.classList.add('celebrity');
            celebrityDiv.innerHTML = `
                <img src="${celebrity.photo}" alt="${celebrity.nom}" class="celebrity-photo">
                <h3>${celebrity.nom}</h3>
            `;
            celebritiesList.appendChild(celebrityDiv);
        });

        // Réorganiser les éléments pour garantir le regroupement en haut à gauche
        const celebrityDivs = celebritiesList.querySelectorAll('.celebrity');
        celebrityDivs.forEach((div, index) => {
            div.style.order = index; // Définir l'ordre pour forcer le regroupement
        });
    }

    rechercheCelebrite.addEventListener('input', () => {
        filtrerCelebrities(rechercheCelebrite.value);
    });

    afficherCelebrities(celebrites);

    function afficherInfosCelebrite(celebrity, event) {
        infosTexte.textContent = celebrity.infosSupplementaires;
        infosComplementaires.innerHTML = "";

        infosPage.style.position = 'absolute';
        infosPage.style.left = event.pageX + 10 + 'px';
        infosPage.style.top = event.pageY + 10 + 'px';
        infosPage.style.display = 'block';
    }

    function masquerInfosCelebrite() {
        infosPage.style.display = 'none';
    }
}
