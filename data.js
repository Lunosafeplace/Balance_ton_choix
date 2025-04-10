const celebrites = [
    {
        nom: 'Abad, Damien',
        photo: 'Damien_Abad.jpg',
        reponse: 'affaire',
        infosSupplementaires: 'Accusations :\n- Viol (2010 et 2011) : Deux femmes accusent Damien Abad de viol, dont un sous soumission chimique. L\'une des femmes avait déjà porté plainte en 2012 et 2017, classées sans suite.\n- Tentative de viol (date indéterminée) : Une élue de droite l\'accuse de tentative de viol après un dîner officiel. D\'autres témoignages évoquent des comportements inappropriés de sa part.\n Viol sous soumission chimique (2013) : Une quatrième femme l\'accuse de viol après avoir été droguée.\n\nFaits reprochés : Violences sexuelles, utilisation de soumission chimique, abus de pouvoir et comportements inappropriés envers des femmes.\n\nSuites données :\nPlusieurs plaintes ont été déposées. Le parquet de Paris a ouvert une enquête pour tentative de viol. Damien Abad a nié les accusations et porté plainte pour dénonciation calomnieuse. Il a été écarté du gouvernement en juillet 2022. Son immunité parlementaire a été levée en mai 2023. Il a été placé en garde à vue en juin 2023. Mise en examen le 16 mai 2024 pour tentative de viol en 2010.'
    },
    {
        nom: 'Cyprien',
        photo: 'Cyprien.jpg',
        reponse: 'pas-affaire',
        infosSupplementaires: 'Aucune affaire connue à ce jour.'
    },    
    {
        nom: 'Tibo InShape',
        photo: 'Tibo_InShape.png',
        reponse: 'affaire',
        infosSupplementaires: 'Accusations :\n- Vidéo du 12 janvier 2024 avec Thérèse Hargot banalisant le viol conjugal en prônant des "rendez-vous sexe" forcés. Association avec une figure controversée.\n\nFaits reprochés : Banalisation du viol conjugal, promotion d\'idées non consensuelles.\n\nSuites Données :\n- Forte polémique sur les réseaux sociaux.'
    },    
    {
        nom: 'Barthès, Yann',
        photo: 'Yann_Barthès.jpg',
        reponse: 'pas-affaire',
        infosSupplementaires: 'Aucune affaire connue à ce jour.'
    },
    {
        nom: 'Lejeune, Geoffroy',
        photo: 'Geoffroy_Lejeune.jpg',
        reponse: 'affaire',
        infosSupplementaires: 'Accusations :\n- Lors de l\'émission "L\'heure des Pros" sur CNews le 19 décembre 2024, Geoffroy Lejeune a comparé l\'affaire Pelicot (viols de Gisèle Pelicot par plusieurs hommes) à l\'affaire des "ballets roses" de 1959 (scandale politique impliquant des soirées avec des filles mineures organisées par des célébrités). Il a minimisé les faits en affirmant que les jeunes filles impliquées dans les "ballets roses" étaient consentantes, contrairement aux victimes de l\'affaire Pelicot.\n\nFaits reprochés : Minimisation des viols et remise en question du consentement des victimes dans l\'affaire des "ballets roses", relativisation de la gravité des actes et ignorance de la loi sur le consentement des mineurs.\n\nSuites Données :\n- La polémique a suscité une vive réaction sur les réseaux sociaux et dans les médias. Geoffroy Lejeune a été critiqué pour ses propos et accusé de minimiser les viols et de ne pas respecter la loi. Il n\'a pas fait de déclaration publique pour répondre à ces critiques.'
    },
    {
        nom: 'Ardisson, Thierry',
        photo: 'Thierry_Ardisson.jpg',
        reponse: 'affaire',
        infosSupplementaires: 'Accusations :\n- Plaisanterie en 1995 avec Beigbeder et Matzneff imaginant des relations sexuelles avec des "gamines de douze ans et demi".\n\nFaits reprochés : Apologie de la pédophilie, indécence.\n\nSuites Données :\n- Vive polémique sur les réseaux sociaux en 2020, réactions indignées, absence de suites judiciaires directes (faits prescrits), résonance dans le contexte de l\'affaire Matzneff.'
    },
    {
        nom: 'Matzneff, Gabriel',
        photo: 'Gabriel_Matzneff.png',
        reponse: 'affaire',
        infosSupplementaires: 'Accusations (entre autres) :\n- Descriptions explicites de relations sexuelles avec des mineurs dans ses écrits autobiographiques, notamment dans "Les Moins de seize ans", publiées à une époque où cela était moins ouvertement condamné mais rétrospectivement considéré comme problématique et une forme de glorification de la pédophilie.\n- Témoignages de plusieurs femmes (notamment suite au livre "Le Consentement" de Vanessa Springora) relatant des faits de viols et d\'agressions sexuelles lorsqu\'elles étaient mineures, parfois dès l\'âge de 13 ans. Ces témoignages décrivent des relations d\'emprise et des actes non consentis.\n- Révélations en 2024 dans une enquête de Libération l\'impliquant potentiellement dans un réseau de pédocriminalité actif dans les années 1970 et 1980, basé sur des archives judiciaires et des témoignages.\n\nFaits reprochés : Pédophilie, viols sur mineur, agressions sexuelles sur mineur, appartenance à un réseau de pédocriminalité.\n\nSuites Données :\n- Importante polémique médiatique et publique à partir de 2020. Ouverture d\'enquêtes judiciaires suite aux témoignages de victimes pour des faits de viols sur mineur. Arrêt de la commercialisation de ses livres par plusieurs maisons d\'édition. Perquisitions chez son éditeur concernant ses écrits inédits. Retrait de son allocation pour écrivains. Multiplication des témoignages de victimes présumées. Nouvelle enquête judiciaire ouverte en 2024 concernant le réseau de pédocriminalité.\n- Il est crucial de noter que, malgré ces accusations et les enquêtes en cours, Gabriel Matzneff n\'a pas été condamné à ce jour pour les faits de viols et d\'agressions sexuelles, principalement en raison de la prescription des faits les plus anciens.'
    },
    {
        nom: 'Renaud',
        photo: 'Renaud.jpg',
        reponse: 'pas-affaire',
        infosSupplementaires: 'Aucune affaire connue à ce jour.'
    },
    {
        nom: 'Goldman, Jean-Jacques',
        photo: 'Jean-Jacques_Goldman.jpg',
        reponse: 'pas-affaire',
        infosSupplementaires: 'Aucune affaire connue à ce jour.'
    },
    {
        nom: 'Sardou, Michel',
        photo: 'Michel_Sardou.jpg',
        reponse: 'affaire',
        infosSupplementaires: 'Accusations :\n- Sexisme : Paroles de chansons (années 70-80, 2010) perçues comme patriarcales, réduisant la femme à la reproduction, faisant l\'apologie du viol (selon critiques), magnifiant l\'homme et rabaissant la femme.\n- Homophobie : Paroles de chansons ("Le Rire du sergent", "J\'accuse", "Chanteur de jazz") évoquant de manière stéréotypée ou insultante des personnes homosexuelles.\n- 2024 : Le 16 mars 2024, lors de son concert à la Défense Arena à Paris, avant d\'interpréter sa chanson "Je vais t\'aimer", Michel Sardou a fait une blague sur le consentement, visant le mouvement #MeToo.\n\nFaits reprochés : Sexisme, phallocratie, misogynie, entretien de la "culture du viol", banalisation et moquerie du mouvement #MeToo et des questions de consentement, homophobie\n\nSuites Données :\n- Sexisme : Critiques féministes récurrentes, indignation, défenses de Sardou sur l\'interprétation des paroles.\n- Homophobie : Accusations dissipées, absence d\'attaques de la communauté homosexuelle, chanson "Le Privilège" perçue comme tolérante, modification des paroles de "J\'accuse".\n- 2024 : Vives réactions et indignation d\'une partie du public (certains spectateurs, choqués par la blague, ont quitté la salle en signe de protestation). Polémique médiatique et sur les réseaux sociaux : L\'incident a été largement relayé et commenté, suscitant des critiques sur le caractère dépassé et inapproprié de l\'humour de Sardou sur un sujet aussi sensible.'
    },    
    {
        nom: 'Elmosnino, Eric',
        photo: 'Eric_Elmosnino.jpg',
        reponse: 'pas-affaire',
        infosSupplementaires: 'Aucune affaire connue à ce jour.'
    },    
    {
        nom: 'Barthélemy, Maurice',
        photo: 'Maurice_Barthélemy.jpg',
        reponse: 'pas-affaire',
        infosSupplementaires: 'Aucune affaire connue à ce jour.'
    },
    {
        nom: 'Martin-Laval, Pierre-François',
        photo: 'Pierre-François_Martin-Laval.jpg',
        reponse: 'pas-affaire',
        infosSupplementaires: 'Aucune affaire connue à ce jour.'
    },
    {
        nom: 'Farrugia, Dominique',
        photo: 'Dominique_Farrugia.jpg',
        reponse: 'pas-affaire',
        infosSupplementaires: 'Aucune affaire connue à ce jour.'
    },
    {
        nom: 'Chabat, Alain',
        photo: 'Alain_Chabat.jpg',
        reponse: 'pas-affaire',
        infosSupplementaires: 'Aucune affaire connue à ce jour.'
    },
    {
        nom: 'Elmaleh, Gad',
        photo: 'Gad_Elmaleh.jpg',
        reponse: 'pas-affaire',
        infosSupplementaires: 'Aucune affaire connue à ce jour.'
    },
    {
        nom: 'Attal, Yvan',
        photo: 'Yvan_Attal.jpg',
        reponse: 'pas-affaire',
        infosSupplementaires: 'Aucune affaire connue à ce jour.'
    },
    {
        nom: 'Debbouze, Jamel',
        photo: 'Jamel_Debbouze.jpg',
        reponse: 'affaire',
        infosSupplementaires: 'Accusations :\n- Dans un extrait d\'une émission de Burger Quiz datant d\'une dizaine d\'années, Jamel Debbouze a un comportement jugé inapproprié envers une candidate. Il l\'embrasse de force sur la joue, l\'appelle "la Chinoise" ou "la sœur de Pikachu", et fait des remarques sexistes.\n\nFaits reprochés : Racisme, misogynie, agression sexuelle.\n\nSuites Données :\n- La vidéo a été largement partagée sur les réseaux sociaux, suscitant l\'indignation et la condamnation de nombreux internautes. Jamel Debbouze n\'a pas répondu publiquement à ces accusations. Cette polémique a relancé le débat sur les comportements inacceptables dans les émissions de télévision et sur la nécessité de lutter contre le harcèlement et la discrimination.'
    },    
    {
        nom: 'Timsit, Patrick',
        photo: 'Patrick_Timsit.jpg',
        reponse: 'pas-affaire',
        infosSupplementaires: 'Aucune affaire connue à ce jour.'
    },    
    {
        nom: 'Baffie, Laurent',
        photo: 'Laurent_Baffie.jpg',
        reponse: 'affaire',
        infosSupplementaires: 'Accusations :\n- En 2017, Baffie remonte la jupe de Nolwenn Leroy sans consentement à la télé, plaisantant sur le "cul" pour l\'audience.\n\nFaits reprochés : Geste déplacé, non consenti, atteinte à l\'intimité, banalisation du corps féminin.\n\nSuites Données :\n- Le CSA a reçu plusieurs signalements de téléspectateurs. L\'incident a engendré une polémique médiatique. Thierry Ardisson, animateur de l\'émission, a pris la défense de Baffie. Nolwenn Leroy a minimisé l\'événement. Laurent Baffie a présenté ses excuses à la chanteuse la semaine suivante dans l\'émission.'
    },
    {
        nom: 'Berry, Richard',
        photo: 'Richard_Berry.jpg',
        reponse: 'affaire',
        infosSupplementaires: 'Accusations :\n- Par Coline Hiegel Berry (fille) : Inceste, viols, agressions sexuelles et corruption de mineure commis par Richard Berry et Jeane Manson entre ses 8 et 10 ans. Contrainte à des jeux sexuels en présence de Shirel (fille de Manson). Contexte de violences conjugales notoires.\n- Par Catherine Hiegel (mère) : Violences conjugales graves de Richard Berry (tête cognée contre lavabo, gifles, tympan explosé enceinte).\n\nFaits reprochés : Inceste, viols sur mineur, agressions sexuelles sur mineur, corruption de mineur, violences conjugales.\n\nSuites Données :\n- Plainte de Coline Berry (janvier 2021) : Enquête préliminaire ouverte. Démenti de Richard Berry : Nie les accusations de sa fille. Reconnaît des violences physiques sur ses ex-épouses. Plainte en diffamation de Jeane Manson contre Coline Berry : Coline Berry condamnée en première instance et en appel pour diffamation. Démenti de Shirel (fille de Manson) : Nie les abus et accuse Coline Berry de harcèlement pour obtenir un faux témoignage. Soutien à Coline Berry : De sa mère Catherine Hiegel, de sa cousine Marilou Berry et de sa tante Josiane Balasko. Classement sans suite de la procédure visant Richard Berry (septembre 2021) pour prescription. Annulation de la condamnation de Coline Berry en cassation (décembre 2023) : Renvoi devant la cour d\'appel de Lyon. Publication de l\'accusation de violences conjugales par Catherine Hiegel (mai 2024) : Démenti de Richard Berry (reconnaît une claque).'
    },
    {
        nom: 'Anconina, Richard',
        photo: 'Richard_Anconina.jpg',
        reponse: 'pas-affaire',
        infosSupplementaires: 'Aucune affaire connue à ce jour.'
    },
    {
        nom: 'Leconte, Patrice',
        photo: 'Patrice_Leconte.jpg',
        reponse: 'pas-affaire',
        infosSupplementaires: 'Aucune affaire connue à ce jour.'
    },
    {
        nom: 'Boublil, Max',
        photo: 'Max_Boublil.jpg',
        reponse: 'pas-affaire',
        infosSupplementaires: 'Aucune affaire connue à ce jour.'
    },
    {
        nom: 'Solo, Bruno',
        photo: 'Bruno_Solo.jpg',
        reponse: 'pas-affaire',
        infosSupplementaires: 'Aucune affaire connue à ce jour.'
    },
    {
        nom: 'Le Bolloc\'h, Yvan',
        photo: 'Yvan_le_Bolloch.jpg',
        reponse: 'pas-affaire',
        infosSupplementaires: 'Aucune affaire connue à ce jour.'
    },    
    {
        nom: 'Ducret, Arnaud',
        photo: 'Arnaud_Ducret.jpg',
        reponse: 'pas-affaire',
        infosSupplementaires: 'Aucune affaire connue à ce jour.'
    },    
    {
        nom: 'Darroussin, Jean-Pierre',
        photo: 'Jean-Pierre_Darroussin.jpg',
        reponse: 'pas-affaire',
        infosSupplementaires: 'Aucune affaire connue à ce jour.'
    },
    {
        nom: 'Mellia, Seb',
        photo: 'Personne.png',
        reponse: 'affaire',
        infosSupplementaires: 'Accusations :\n-2019 : Accusation de viol par une femme.\n- 2024 : Relais par Florence Mendez des témoignages d\'une trentaine de femmes dénonçant son comportement. Publication par Télérama de onze témoignages de femmes l\'accusant d\'agressions sexuelles et de viols. Plainte pour viols déposée par Tania Dutel.\n- Accusations d\'attouchement sexuel datant de 2019 (motif de son audition libre).\n\nFaits reprochés : Viol, agressions sexuelles, attouchement sexuel.\n\nSuites Données :\n- Rassemblement devant une de ses représentations à Bruxelles (janvier 2024). Publication de témoignages dans Télérama (mars 2024). Démenti des faits reprochés par Sébastien Mellia. Plainte pour viols déposée par Tania Dutel (avril 2024). Audition libre dans un commissariat parisien pour des accusations d\'attouchement (mai 2024). Ouverture d\'une deuxième enquête pour viol (mai 2024) suite à la plainte de Tania Dutel.'
    },
    {
        nom: 'Antoine, Eric',
        photo: 'Eric_Antoine.jpg',
        reponse: 'pas-affaire',
        infosSupplementaires: 'Aucune affaire connue à ce jour.'
    },
    {
        nom: 'Novembre, Tom',
        photo: 'Tom_Novembre.jpg',
        reponse: 'pas-affaire',
        infosSupplementaires: 'Aucune affaire connue à ce jour.'
    },
    {
        nom: 'Plaza, Stéphane',
        photo: 'Stéphane_Plaza.png',
        reponse: 'affaire',
        infosSupplementaires: 'Accusations :\nTrois anciennes compagnes accusent Stéphane Plaza de violences physiques, verbales, psychologiques et de menaces, dont une menace de mort. L\'une d\'elles décrit des blessures importantes à la main suite à une dispute.\n\nFaits reprochés : Violences physiques, violences verbales, violences psychologiques, menaces, harcèlement et cyberharcèlement, violences habituelles par concubin.\n\nSuites Données :\n- Mediapart révèle les accusations, entraînant une enquête interne chez M6 (qui maintient initialement Plaza à l\'antenne). Le parquet de Paris ouvre une enquête préliminaire suite aux courriers de deux ex-compagnes, qui déposent ensuite plainte. Des "proches" de Plaza déposent plainte pour harcèlement contre les accusatrices. Après une garde à vue, Plaza est renvoyé en procès. L\'audience est reportée pour une expertise psychiatrique. Au procès, Plaza nie les faits. Le parquet requiert 18 mois de prison avec sursis et une amende. La plainte de Plaza contre les femmes est classée sans suite. Finalement, Plaza est condamné à 12 mois de prison avec sursis pour violences habituelles par concubin et annonce son intention de faire appel. Suite à la condamnation, M6 déprogramme ses émissions.'
    },
    {
        nom: 'Demaison, François-Xavier',
        photo: 'François-Xavier_Demaison.jpg',
        reponse: 'pas-affaire',
        infosSupplementaires: 'Aucune affaire connue à ce jour.'
    },
    {
        nom: 'Dussollier, André',
        photo: 'André_Dussollier.jpg',
        reponse: 'pas-affaire',
        infosSupplementaires: 'Aucune affaire connue à ce jour.'
    },    
    {
        nom: 'Berléand, François',
        photo: 'François_Berléand.jpg',
        reponse: 'pas-affaire',
        infosSupplementaires: 'Aucune affaire connue à ce jour.'
    },    
    {
        nom: 'De Caunes, Antoine',
        photo: 'Antoine_de_Caune.jpg',
        reponse: 'pas-affaire',
        infosSupplementaires: 'Aucune affaire connue à ce jour.'
    },
    {
        nom: 'Garcia, José',
        photo: 'José_Garcia.jpg',
        reponse: 'pas-affaire',
        infosSupplementaires: 'Aucune affaire connue à ce jour.'
    },
    {
        nom: 'Magimel, Benoït',
        photo: 'Benoit_Magimel.jpg',
        reponse: 'pas-affaire',
        infosSupplementaires: 'Aucune affaire connue à ce jour.'
    },
    {
        nom: 'Dubosc, Franck',
        photo: 'Julien_Courbet.jpg',
        reponse: 'pas-affaire',
        infosSupplementaires: 'Aucune affaire connue à ce jour.'
    },
    {
        nom: 'Adams, Kev',
        photo: 'Kev-Adams.jpg',
        reponse: 'pas-affaire',
        infosSupplementaires: 'Aucune affaire connue à ce jour.'
    },
    {
        nom: 'Moix, Yann',
        photo: 'Yann_Moix.jpg',
        reponse: 'affaire',
        infosSupplementaires: 'Accusations :\n- Propos sur les femmes (2019) : Dans une interview à Marie Claire, Yann Moix déclare être "incapable d\'aimer une femme de 50 ans" car il trouve cela "trop vieux" et préfère les femmes jeunes.\n- Propos sur Michael Jackson (2019) : Dans l\'émission "Les Terriens du Samedi", Yann Moix prend la défense de Michael Jackson face aux accusations de pédophilie dans le documentaire Leaving Neverland, déclarant notamment qu'"un enfant, ça ne couche qu'avec les adultes qui forcent les enfants à coucher\".\n- Propos sur les femmes (2025) : Dans l'émission \"Pascale, Éric, Yann et les autres\" sur C8, des propos de Yann Moix ont choqué les internautes, notamment une phrase : \"Ce sont des femmes abîmées, donc faut cogner\". Des propos tenus dans un Complément d'enquête sur Gérard Depardieu ont également refait surface où il tenait des propos sexualisant des mineures.\n\nFaits reprochés : Sexisme, âgisme, propos blessants et humiliants envers les femmes d'un certain âge, minimisation des faits de pédophilie, propos jugés choquants et insensibles envers les victimes, incitation à la violence envers les femmes, propos dégradants et sexualisation de mineures.\n\nSuites données :\n- Sur les femmes (2019) : Tollé médiatique et réactions indignées de nombreuses personnalités et internautes. Des femmes ont ironiquement posté des photos d'elles pour lui répondre. Yann Moix a tenté de se justifier en expliquant qu'il parlait de son propre blocage psychologique et non d'une vérité générale.\n- Sur Michael Jackson : Réactions critiques sur les réseaux sociaux. Thierry Ardisson, l'animateur de l'émission, a pris la parole pour préciser que Yann Moix n'était pas un chroniqueur mais un écrivain libre de ses propos.\n- Sur les femmes (2025) : Indignation et critiques sur les réseaux sociaux. L'attitude désinvolte de Yann Moix face à la polémique lors de son retour à l'antenne a également choqué.'
    },
        {
        nom: 'Bénabar',
        photo: 'Bénabar.jpg',
        reponse: 'pas-affaire',
        infosSupplementaires: 'Aucune affaire connue à ce jour.'
    },    
    {
        nom: 'Lanvin, Gérard',
        photo: 'Gérard_Lanvin.jpg',
        reponse: 'pas-affaire',
        infosSupplementaires: 'Aucune affaire connue à ce jour.'
    },    
    {
        nom: 'Duléry, Antoine',
        photo: 'Antoine_Duléry.jpg',
        reponse: 'pas-affaire',
        infosSupplementaires: 'Aucune affaire connue à ce jour.'
    },
    {
        nom: 'Wilson, Lambert',
        photo: 'Lambert-Wilson.jpg',
        reponse: 'affaire',
        infosSupplementaires: 'Accusations :\n- Suite à la cérémonie controversée où Roman Polanski a été primé et Florence Foresti a quitté la présentation, Lambert Wilson a publiquement critiqué l\'attitude de l\'humoriste, la qualifiant notamment de "minable".\n\nFaits reprochés : Soutien implicite à Polanski, critique sévère envers Foresti, manque de solidarité victimes.\n\nSuites Données :\n- La polémique a été médiatisée et a suscité des réactions diverses. Plus tard, en 2024, il a été révélé que Lambert Wilson avait été "viré" de son rôle d\'ambassadeur auprès de Greenpeace, une organisation qu\'il soutenait depuis longtemps. Cette décision aurait été motivée par les propos de l\'acteur concernant la cérémonie des César et son attitude envers Florence Foresti, l\'ONG considérant cela incompatible avec ses valeurs de soutien aux victimes et de lutte contre les violences.'
    },
    {
        nom: 'Slimane',
        photo: 'Slimane.jpg',
        reponse: 'affaire',
        infosSupplementaires: 'Accusations :\n- Entrave un technicien, propose une relation sexuelle, et envoie des messages et vidéos pornographiques sans consentement (nuit du 17-18 décembre 2023).\n- Agression et tentative d\'agression sexuelle sur une autre personne (même nuit).\n- Envoi non consenti de photos pornographiques à deux autres hommes. Harcèlement sexuel aggravé (plainte du technicien).\n\nFaits reprochés : Harcèlement sexuel aggravé, agression sexuelle et tentative d’agression sexuelle, envoi non consenti de photos à caractère pornographique\n\nSuites données :\n- Ouverture d\'une enquête par le parquet de Saint-Étienne pour harcèlement sexuel aggravé. Tentatives d\'étouffer l\'affaire par l\'entourage de Slimane.\nAucune suite judiciaire précisée pour la seconde plainte ni les témoignages Mediapart dans le texte.'
    },
    {
        nom: 'Abittan, Ary',
        photo: 'Ary_Abittan.jpg',
        reponse: 'affaire',
        infosSupplementaires: 'Accusations :\n- Viol : Une jeune femme de 23 ans a porté plainte contre l\'acteur pour viol.\n\nFaits reprochés : Violences sexuelles.\n\nSuites données :\n- Octobre 2021, placement en garde à vue. Mise en examen et placement sous contrôle judiciaire. Statut de témoin assisté. Juillet 2023, clôture de l\'information judiciaire (accusations jugées non probantes). Avril 2024, décision de non-lieu, malgré les lésions constatées et le stress post-traumatique de la plaignante. Appel de la plaignante. Janvier 2025, confirmation du non lieu en appel.'
    },
    {
        nom: 'Darmanin, Gérald',
        photo: 'Gérald_Darmanin.jpg',
        reponse: 'affaire',
        infosSupplementaires: 'Accusations :\n- Affaire Sophie Patterson-Spatz (2017) : Rapport sexuel en 2009 suite à une demande d\'aide, sentiment d\'instrumentalisation et de rapport non consenti (surprise), lettre à la garde des Sceaux.\n- Abus de faiblesse : Relations sexuelles forcées en échange de logement et emploi en 2015.\n\nFais reprochés : Viol, harcèlement sexuel, abus de confiance, abus de faiblesse.\n\nSuites Données :\n- Affaire Sophie Patterson-Spatz : Plusieurs plaintes classées sans suite, information judiciaire avec non-lieu confirmé en appel et cassation.\n- Affaire d\'abus de faiblesse (2018) : Plainte classée sans suite, plainte pour dénonciation calomnieuse retirée, tentatives de relance classées sans suite.'
    },
    {
        nom: 'Squeezie',
        photo: 'Squeezie.png',
        reponse: 'pas-affaire',
        infosSupplementaires: 'Aucune affaire connue à ce jour.'
    },
    {
        nom: 'Reno, Jean',
        photo: 'Jean_Reno.jpg',
        reponse: 'pas-affaire',
        infosSupplementaires: 'Aucune affaire connue à ce jour.'
    },
    {
        nom: 'Amixem',
        photo: 'Amixem.png',
        reponse: 'pas-affaire',
        infosSupplementaires: 'Aucune affaire connue à ce jour.'
    },
    {
        nom: 'Youn, Michaël',
        photo: 'Michael_Youn.jpg',
        reponse: 'pas-affaire',
        infosSupplementaires: 'Aucune affaire connue à ce jour.'
    },
    {
        nom: 'Bern, Stéphane',
        photo: 'Stéphane_Bern.jpg',
        reponse: 'pas-affaire',
        infosSupplementaires: 'Aucune affaire connue à ce jour.'
    },
    {
        nom: 'Blanquer, Jean-Michel',
        photo: 'Jean-Michel_Blanquer.jpg',
        reponse: 'pas-affaire',
        infosSupplementaires: 'Aucune affaire connue à ce jour.'
    },
    {
        nom: 'Cornillac, Clovis',
        photo: 'Clovis_Cornillac.jpg',
        reponse: 'pas-affaire',
        infosSupplementaires: 'Aucune affaire connue à ce jour.'
    },
    {
        nom: 'Artus',
        photo: 'Artus.jpg',
        reponse: 'pas-affaire',
        infosSupplementaires: 'Aucune affaire connue à ce jour.'
    },
    {
        nom: 'Ruquier, Laurent',
        photo: 'Laurent_Ruquier.jpg',
        reponse: 'pas-affaire',
        infosSupplementaires: 'Aucune affaire connue à ce jour.'
    },
    {
        nom: 'Beigbeder, Frédéric',
        photo: 'Frédéric_Beigbeder.jpg',
        reponse: 'affaire',
        infosSupplementaires: 'Accusations :\n- Viol d\'une jeune femme de 17 ans dans une chambre d\'hôtel (faits contestés par Beigbeder).\n- Plaisanterie en 1995 avec Ardisson et Matzneff imaginant des relations sexuelles avec des "gamines de douze ans et demi".\n\nFaits Reprochés : Viol, apologie de la pédophilie, indécence.\n\nSuites Données :\n- Viol : Placement en garde à vue le 2 décembre 2023 au commissariat de Pau. L\'enquête a été classée sans suite en juillet 2024 en raison de l\'absence d’indices graves ou concordants et du fait que l’infraction apparaissait insuffisamment caractérisée.\n- 1995 : Vive polémique sur les réseaux sociaux en 2020, réactions indignées, absence de suites judiciaires directes (faits prescrits), résonance dans le contexte de l\'affaire Matzneff.'
    },
    {
        nom: 'Monsieur Poulpe',
        photo: 'Monsieur_Poulpe.jpg',
        reponse: 'affaire',
        infosSupplementaires: 'Accusations :\n\n- Propos sur l\'apparence de Rachida Dati jugés sexistes lors d\'une chronique à "C dans l\'air" (janvier 2024).\n\nFaits reprochés : Sexisme, manque de respect.\n- Suites Données :\n- Vives réactions en ligne, excuses de France Télévisions, suspension de Monsieur Poulpe de l\'émission, excuses de Monsieur Poulpe.'
    },
    {
        nom: 'Etienne, Samuel',
        photo: 'Samuel_Étienne.jpg',
        reponse: 'pas-affaire',
        infosSupplementaires: 'Aucune affaire connue à ce jour.'
    },
    {
        nom: 'Bayou, Julien',
        photo: 'Julien_Bayou.jpg',
        reponse: 'affaire',
        infosSupplementaires: 'Accusations :\n- Comportements de nature à briser la santé morale (témoignage d\'Anaïs Leleux).\n- Violences psychologiques, emprise sentimentale, mélange du professionnel et du privé dans les relations (témoignages anonymes).\n\nFaits Reprochés : Harcèlement moral, abus de faiblesse, violences psychologiques et emprise sentimentale.\n\nSuites Données :\n- Saisine de la cellule interne d\'EÉLV. Mise en retrait puis démission de Julien Bayou de ses fonctions au sein d\'EÉLV et du groupe écologiste. Enquête interne d\'EÉLV clôturée sans conclusions faute d\'audition de la plaignante. Commandite d\'une enquête externe par EÉLV. Classement sans suite de la procédure judiciaire pour « absence d’infraction ».'
    },
    {
        nom: 'Reichmann, Jean-Luc',
        photo: 'Jean-Luc_Reichmann.jpg',
        reponse: 'pas-affaire',
        infosSupplementaires: 'Aucune affaire connue à ce jour.'
    },
    {
        nom: 'Lagaf\', Vincent',
        photo: 'Vincen_Lagaf.jpg',
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
        infosSupplementaires: 'Accusations et faits reprochés :\n- Violences sexistes et sexuelles : Neuf femmes accusent Gérard Darmon de violences sexistes et sexuelles. Elles décrivent des propos et des gestes « déplacés » sur le tournage de six films. Elles rapportent des « humiliations » et des « insultes sexistes ». Une technicienne a indiqué avoir porté plainte contre la production du film sur lequel elle travaillait avec l\'acteur pour « absence de protection ». Les témoignages indiquent que plusieurs des femmes qui témoignent occupaient des postes précaires au moment des faits. Une des femmes témoignant est âgée de 18 ans. Dix autres femmes ont aussi livré leur récits à Politis avant de refuser d\'apparaître dans l’enquête et de se rétracter.\n\nSuites données :\n- Gérard Darmon nie les accusations. Il multiplie les insultes et menaces à l’égard du média Politis. Une technicienne a porté plainte contre la production du film sur lequel elle travaillait avec l\'acteur pour « absence de protection ».'
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
        infosSupplementaires: 'Accusations :\n- Agression sexuelle : Roméo Elvis a été accusé d\'agression sexuelle par une jeune femme en septembre 2020.\n\nFaits reprochés : Comportement inapproprié à caractère sexuel.\n\nSuites données :\n- Roméo Elvis a reconnu les faits et a présenté publiquement ses excuses.La victime a exprimé sa volonté d\'encourager d\'autres femmes à témoigner, dans un contexte où d\'autres affaires similaires étaient médiatisées.'
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
        infosSupplementaires: 'Accusations et faits reprochés :\n- Violences sexuelles, physiques et psychologiques (février 2025) : Six femmes, dont trois ont été ses compagnes, accusent Franck Gastambide de violences sexuelles, physiques et psychologiques.\n\nSuites données :n- Franck Gastambide nie les accusations. Il se déclare victime d’une campagne de calomnie orchestrée par l’une d’elles et l\'accuse de violences.'
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
        infosSupplementaires: 'Accusations :\n- Viols : Plusieurs femmes l\'accusent de viols, y compris des viols sur mineures.\n- Agressions sexuelles : De nombreux témoignages font état d\'agressions sexuelles.\n- Harcèlement : Des femmes décrivent des comportements relevant du harcèlement sexuel.\n\nFaits reprochés : Viols (y compris viols aggravés), agressions sexuelles, harcèlement sexuel, emprise psychologique et abus de pouvoir.\n\nSuites données :\n- 2005, une première enquête préliminaire pour viol est classée sans suite. Février 2021, dépôt de plainte de Florence Porcel pour viols et agressions sexuelles. Mars 2021, d\'autres femmes témoignent publiquement, et de nouvelles plaintes sont déposées. Juillet 2021, classement sans suite de l\'enquête pour viols, en raison de la prescription et de l\'insuffisance de preuves. Avril 2022, Patrick Poivre d\'Arvor porte plainte pour dénonciation calomnieuse. Septembre 2022, la cour d\'appel de Versailles annule les effets du classement sans suite de plusieurs plaintes, en argumentant que si la sérialité des faits était démontrée, cela annulerait la prescription et pourrait faire aboutir l\'enquête. Décembre 2023, Patrick Poivre d\'Arvor est mis en examen pour le viol de Florence Porcel. Juillet 2024, il est visé par cinq nouvelles informations judiciaires pour viols et viols aggravés. Octobre 2024, le journal Le Monde révèle une plainte pour viol contre lui datant de 2005, mais classée sans suite à l\'époque.'
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
        infosSupplementaires: 'Accusations et faits reprochés :\n- Harcèlement sexuel (2018) : Accusations de harcèlement sexuel dans le sillage du hashtag #BalanceTonYoutubeur.\n- Exploitation sexuelle sur mineur (2020) : Une internaute québécoise l\'accuse de lui avoir demandé des photographies à caractère sexuel alors qu\'elle était mineure.\n- Viols et corruption de mineurs (2022) : Six femmes portent plainte, dont cinq pour viol, et deux étaient mineures au moment des faits.\n\nSuites données :\n- 2020, dépôt de plainte au Canada. Janvier 2022, ouverture d\'une enquête préliminaire par le parquet de Paris. Décembre 2022, placement en garde à vue de Norman Thavaud, YouTube cesse de diffuser des publicités sur ses vidéos, nouvelle convocation par la justice et dépôt d\'une septième plainte pour viol. Octobre 2023, classement sans suite de l\'enquête préliminaire par le parquet de Paris, pour infractions insuffisamment caractérisées, puis dépôt d\'une plainte avec constitution de partie civile par les avocats des plaignantes. Août 2024, Norman publie une vidéo sur youtube, où il fait part de sa version des faits.'
    },
    {
        nom: 'Orelsan',
        photo: 'Orelsan.jpg',
        reponse: 'affaire',
        infosSupplementaires: 'Accusations :\n\n- Paroles de la chanson "Sale Pute" (2009) jugées menaçantes et incitant à la violence sexiste.\n- Paroles de "Saint Valentin" (ultérieurement) problématiques.\n\nFaits reprochés : Sexisme, provocation au crime/violence sexiste, injure et provocation à la violence envers les femmes.\n\nSuites Données :\n- Forte polémique médiatique et politique, demandes de déprogrammation/retrait, menaces financières contre festivals, relaxe en première instance (provocation au crime), condamnation en première instance (injure/provocation), relaxe en appel (prescription), nouvelle polémique en 2018.'
    },
    {
        nom: 'Gims',
        photo: 'Gims.jpg',
        reponse: 'pas-affaire',
        infosSupplementaires: 'Aucune affaire connue à ce jour.'
    },    
    {
        nom: 'Girac, Kendji',
        photo: 'Kendji_Girac.jpg',
        reponse: 'pas-affaire',
        infosSupplementaires: 'Aucune affaire connue à ce jour.'
    },    
    {
        nom: 'Cabrel, Francis',
        photo: 'Francis_Cabrel.jpg',
        reponse: 'pas-affaire',
        infosSupplementaires: 'Aucune affaire connue à ce jour.'
    },
    {
        nom: 'Bruel, Patrick',
        photo: 'Patrick_Bruel.jpg',
        reponse: 'affaire',
        infosSupplementaires: 'Accusations :\n\n- Accusations d\'exhibition et harcèlement sexuels par une employée d\hôtel lors d\'un massage en août 2019 (contestées par Bruel).\n\nFaits reprochés : Exhibition sexuelle présumée, harcèlement sexuel présumé.\n\nSuites Données : Enquête préliminaire ouverte, Bruel entendu et a nié, enquête classée sans suite pour absence d\'infraction.'
    },    
    {
        nom: 'Macron, Emmanuel',
        photo: 'Emmanuel_Macron.jpg',
        reponse: 'pas-affaire',
        infosSupplementaires: 'Aucune affaire connue à ce jour.'
    },
        {
        nom: 'Larcher, Gérard',
        photo: 'Gérard_Larcher.jpg',
        reponse: 'pas-affaire',
        infosSupplementaires: 'Aucune affaire connue à ce jour.'
    },
    {
        nom: 'Jugnot, Gérard',
        photo: 'Gérard_Jugnot.jpg',
        reponse: 'pas-affaire',
        infosSupplementaires: 'Aucune affaire connue à ce jour.'
    },    
    {
        nom: 'Semoun, Elie',
        photo: 'Elie_Semoun.jpg',
        reponse: 'pas-affaire',
        infosSupplementaires: 'Aucune affaire connue à ce jour.'
    },    
    {
        nom: 'Bourdon, Didier',
        photo: 'Didier_Bourdon.jpg',
        reponse: 'pas-affaire',
        infosSupplementaires: 'Aucune affaire connue à ce jour.'
    },
    {
        nom: 'Campan, Bernard',
        photo: 'Bernard_Campan.jpg',
        reponse: 'pas-affaire',
        infosSupplementaires: 'Aucune affaire connue à ce jour.'
    },    
    {
        nom: 'Légitimus, Pascal',
        photo: 'Pascal_Légitimus.jpg',
        reponse: 'affaire',
        infosSupplementaires: 'Accusations :\n- Comparaison de l\'homosexualité et de la pédophilie lors d\'une interview en octobre 2023.\n\nFaits reprochés : Homophobie, minimisation de la pédophilie.\n\nSuites Données :\n- Indignation et condamnations publiques, excuses de Légitimus, réactions d\'associations LGBTQ+, conséquences médiatiques (mais pas de suites judiciaires notables).'
    },    
    {
        nom: 'Soprano',
        photo: 'Soprano.jpg',
        reponse: 'pas-affaire',
        infosSupplementaires: 'Aucune affaire connue à ce jour.'
    },
    {
        nom: 'Gradur',
        photo: 'Gradur.jpg',
        reponse: 'pas-affaire',
        infosSupplementaires: 'Aucune affaire connue à ce jour.'
    },    
    {
        nom: 'Heuss l\'enfoiré',
        photo: 'Personne.png',
        reponse: 'affaire',
        infosSupplementaires: 'Accusations :\n- Dispute avec sa compagne le 1er janvier 2025, suite à la diffusion de photos de ses fesses sans consentement sur les réseaux sociaux. La compagne aurait déclaré avoir été victime de coups et de gifles. Le rappeur a reçu 2 jours d\'ITT après avoir été blessé au visage avec du charbon à chicha lancé par sa compagne.\n\nFaits reprochés : Violences conjugales (implicitement, bien que l\'avocat parle de violences réciproques).\n\nSuites Données :\n- Placement en garde à vue du rappeur. Libération à l\'issue de la garde à vue. Classement sans suite des faits reprochés au rappeur par le parquet le 4 janvier 2025, considéré comme une affaire de couple et de violences réciproques par son avocat.'
    },    
    {
        nom: 'Vald',
        photo: 'Vald.jpg',
        reponse: 'affaire',
        infosSupplementaires: 'Accusations :\n- Paroles de la chanson de Vald incluant des propos tels que : « Elle veut que j’lui fasse mal, que j’lui écrase la tête », « Elle aimerait bien s’faire violer, enfin pas vraiment violer. Elle aimerait que j’la violente, que j’la casse sans demander », « T’sais, m’faire violer mais j’sais que c’est toi, ça veut dire c’est pas vraiment gênant »\n\nFaits reprochés : Sexisme, incitation à la violence (implicite dans la dénonciation de propos violents).\n\nSuites Données :\n- Dénonciation publique des propos par l\'association Elu-e-s Contre les Violences faites aux Femmes (ECVF).'
    },
    {
        nom: 'Niney, Pierre',
        photo: 'Pierre_Niney.jpg',
        reponse: 'pas-affaire',
        infosSupplementaires: 'Aucune affaire connue à ce jour.'
    },    
    {
        nom: 'Civil, François',
        photo: 'François_Civil.jpg',
        reponse: 'pas-affaire',
        infosSupplementaires: 'Aucune affaire connue à ce jour.'
    },     
    {
        nom: 'Lellouche, Gilles',
        photo: 'Gilles_Lellouche.png',
        reponse: 'pas-affaire',
        infosSupplementaires: 'Aucune affaire connue à ce jour.'
    },
    {
        nom: 'Obispo, Pascal',
        photo: 'Pascal_Obispo.jpg',
        reponse: 'pas-affaire',
        infosSupplementaires: 'Aucune affaire connue à ce jour.'
    },    
    {
        nom: 'Lavoine, Marc',
        photo: 'Marc_Lavoine.jpg',
        reponse: 'affaire',
        infosSupplementaires: 'Accusations :\n- Baiser dans le cou à la candidate Léa par Marc Lavoine en direct à la Star Academy (novembre 2022).\n\nFaits reprochés : Geste déplacé/inapproprié, manque de consentement perçu.\n\nSuites Données :\n- Vives réactions sur réseaux sociaux, défense de Lavoine par Léa, absence de suites judiciaires ou de sanctions de la production.'
    },    
    {
        nom: 'Pagny, Florent',
        photo: 'Florent_Pagny.jpg',
        reponse: 'pas-affaire',
        infosSupplementaires: 'Aucune affaire connue à ce jour.'
    },
    {
        nom: 'Maé, Christophe',
        photo: 'Christophe_Maé.jpg',
        reponse: 'pas-affaire',
        infosSupplementaires: 'Aucune affaire connue à ce jour.'
    },    
    {
        nom: 'Moire, Emmanuel',
        photo: 'Emmanuel_Moire.jpg',
        reponse: 'pas-affaire',
        infosSupplementaires: 'Aucune affaire connue à ce jour.'
    },    
    {
        nom: 'Olympe',
        photo: 'Olympe.jpg',
        reponse: 'pas-affaire',
        infosSupplementaires: 'Aucune affaire connue à ce jour.'
    },
    {
        nom: 'Lamotte, Martin',
        photo: 'Martin_Lamotte.jpg',
        reponse: 'pas-affaire',
        infosSupplementaires: 'Aucune affaire connue à ce jour.'
    },    
    {
        nom: 'Souchon, Alain',
        photo: 'Alain_Souchon.jpg',
        reponse: 'pas-affaire',
        infosSupplementaires: 'Aucune affaire connue à ce jour.'
    },    
    {
        nom: 'Voulzy, Laurent',
        photo: 'Laurent_Voulzy.jpg',
        reponse: 'pas-affaire',
        infosSupplementaires: 'Aucune affaire connue à ce jour.'
    },
    {
        nom: 'Mitchell, Eddy',
        photo: 'Eddy_Mitchell.jpg',
        reponse: 'pas-affaire',
        infosSupplementaires: 'Aucune affaire connue à ce jour.'
    },    
    {
        nom: 'Sheller, William',
        photo: 'William_Sheller.png',
        reponse: 'pas-affaire',
        infosSupplementaires: 'Aucune affaire connue à ce jour.'
    },    
    {
        nom: 'Saez, Damien',
        photo: 'Damien_Saez.jpg',
        reponse: 'affaire',
        infosSupplementaires: 'Accusations : Paroles insultantes et dégradantes envers les influenceuses et les femmes dans la chanson "P\'tite Pute" (2018).\n\nFaits reprochés : Misogynie, sexisme.\n\nSuites Données :\n- Vive polémique médiatique et sur réseaux sociaux, critiques de la presse, défense de l\'artiste par certains, absence de suites judiciaires notables.'
    },
    {
        nom: 'Benzema, Karim',
        photo: 'Karim_Benzema.jpg',
        reponse: 'affaire',
        infosSupplementaires: 'Accusations :\n- Affaire Zahia (2010-2016): Sollicitation de prostituée mineure (Zahia Dehar) en 2010. Benzema a nié toute implication.\n- Affaire de la sextape (2015-2021):Implication dans une affaire de chantage à la sextape visant son coéquipier Mathieu Valbuena en 2015. Accusé d\'avoir fait pression sur Valbuena. Benzema a nié toute implication directe, son lien venant de son ami proche.\n\nFaits reprochés : Sollicitation de prostituée mineure, complicité de tentative de chantage et participation à une association de malfaiteurs.\n\nSuites Données:\n- Affaire Zahia : Mis en examen en juillet 2010. Non-lieu requis par le parquet (novembre 2011) mais renvoi devant le tribunal correctionnel ordonné (août 2012). Relaxé par le tribunal correctionnel de Paris (janvier 2014). Non-sélection en équipe de France pour l\'Euro 2016, suscitant une polémique sur le racisme.\n- Affaire de la sextape : Mis en examen en novembre 2015, placé sous contrôle judiciaire (interdiction de contacter Valbuena), suspension provisoire de l\'équipe de France (décembre 2015), non-participation à l\'Euro 2016 et à la Coupe du Monde 2018. Condamné en appel le 24 novembre 2021 pour complicité de tentative de chantage à un an de prison avec sursis et 75 000 € d\'amende, ainsi que 80 000 € de dommages et intérêts à Valbuena. Il s\'est désisté de son appel en juin 2022, rendant la condamnation définitive.'
    },    
    {
        nom: 'Ribéry, Franck',
        photo: 'Franck_Ribery.jpg',
        reponse: 'affaire',
        infosSupplementaires: 'Accusations :\n- Relations sexuelles tarifées avec Zahia Dehar en 2009, alors qu\'elle était mineure. Ribéry a reconnu les relations mais affirmé ignorer sa minorité.\n\nFaits reprochés : Sollicitation de prostituée mineure.\n\nSuites Données : Entendu par la police comme témoin (avril 2010), puis placé en garde à vue et mis en examen (juillet 2010). Relaxé en janvier 2014, la cour estimant qu\'il ignorait la minorité de Zahia Dehar. L\'affaire a eu un fort écho médiatique et a coïncidé avec l\'échec de la France au Mondial 2010.'
    },    
    {
        nom: 'Louvin, Gérard',
        photo: 'Personne.png',
        reponse: 'affaire',
        infosSupplementaires: 'Accusations :\n- Par Olivier A. (neveu) : Accusé de complicité et d\'avoir laissé faire des abus sexuels répétés entre 10 et 14 ans par Daniel Moyne.\n- Par quatre autres hommes : Agressions sexuelles et viols (période non spécifiée).\n- Témoignage d\'un couple : Tourisme sexuel à Rio de Janeiro par le couple Louvin-Moyne (faits contestés).\n\nFaits reprochés : Complicité de viols sur mineur de moins de 15 ans par ascendant, viol sur mineurs (suite aux plaintes des quatre autres hommes), tourisme sexuel (enquête distincte).\n\nSuites Données :\n- Olivier A. : Signalement de 2014 classé sans suite en 2016 pour prescription. Enquête ouverte suite à plainte de 2021. Classement sans suite (janvier 2022) pour prescription.\n- Quatre autres hommes : Enquête ouverte pour "viol sur mineurs" en 2021. Classement sans suite (janvier 2022) pour prescription.\n- Tourisme sexuel à Rio : Classée sans suite en janvier 2022 pour "infraction insuffisamment caractérisée". Plainte pour diffamation de Louvin et Moyne contre le couple témoin et Le Parisien (suite au témoignage sur le tourisme sexuel).'
    },
    {
        nom: 'Samitier, Thierry',
        photo: 'Personne.png',
        reponse: 'affaire',
        infosSupplementaires: 'Accusations :\n- Gestes déplacés et agressions sexuelles présumés sur plusieurs femmes. Ces faits auraient eu lieu dans le cadre de la pièce "Boeing Boeing" et du tournage de la série "Nos chers voisins". Deux actrices ont déposé une main courante. L\'acteur a démenti publiquement ces accusations.\n\nFaits reprochés : Harcèlement sexuel, agressions sexuelles.\n\nSuites Données :\n- Placement en garde à vue en mai 2023 dans le cadre de l\'enquête. Jugement prévu en 2025 pour harcèlement et agressions sexuelles. Réquisition de 15 mois de prison avec sursis. L\'acteur a écrit un livre inspiré de cette affaire, "Surprise !", relatant un acteur victime de diffamation.'
    },    
    {
        nom: 'Miller, Gérard',
        photo: 'Gérard_Miller.jpg',
        reponse: 'affaire',
        infosSupplementaires: 'Accusations :\n- De nombreuses femmes, dont certaines mineures au moment des faits, accusent Gérard Miller d\'agressions sexuelles et de viols qui se seraient déroulés principalement lors de séances d\'hypnose entre les années 1990 et 2020. Des témoignages font état de comportements déplacés et de tentatives d\'agression.\n\nFaits reprochés : Agressions sexuelles et viol.\n\nSuites Données :\n- Plusieurs enquêtes journalistiques ont recueilli les témoignages des victimes (Elle, Mediapart, Envoyé Spécial). Des femmes ont témoigné auprès de la justice et une plainte pour viol a été déposée. Le parquet de Paris a ouvert une enquête préliminaire. Un signalement avait été fait concernant son comportement à l\'université Paris 8. Un livre enquête a été publié sur cette affaire.'
    },    
    {
        nom: 'Bigflo',
        photo: 'Bigflo.jpg',
        reponse: 'pas-affaire',
        infosSupplementaires: 'Aucune affaire connue à ce jour.'
    },
    {
        nom: 'Oli',
        photo: 'Oli.jpg',
        reponse: 'pas-affaire',
        infosSupplementaires: 'Aucune affaire connue à ce jour.'
    },    
    {
        nom: 'Vodk',
        photo: 'Personne.png',
        reponse: 'affaire',
        infosSupplementaires: 'Accusations :\n- Accusations en 2020 d\'avoir manipulé et séduit de jeunes femmes, dont mineures, via sa notoriété. Approches insistantes.\n\nFaits reprochés : Abus d\'influence et manipulation à des fins de séduction (accusations publiques).\n\nSuites Données : Démenti public de VodK, plainte pour dénonciation calomnieuse et cyberharcèlement, retrait temporaire de la RedBox, impact négatif sur son image et sa carrière, difficultés financières ultérieures de ses sociétés. Pas de condamnation judiciaire à ce jour.'
    },    
    {
        nom: 'Bompard, Manuel',
        photo: 'Manuel_Bompard.jpg',
        reponse: 'pas-affaire',
        infosSupplementaires: 'Aucune affaire connue à ce jour.'
    },
    {
        nom: 'Quatennens, Adrien',
        photo: 'Adrien_Quatennens.jpg',
        reponse: 'affaire',
        infosSupplementaires: 'Accusations :\n- Gifle, saisie du poignet, prise de téléphone, envoi excessif de SMS à sa conjointe. Dénonciation de violences physiques et morales (contestée).\n\nFaits reprochés : Violences conjugales, violences sans incapacité par conjoint, envoi malveillant de messages.\n\nSuites Données :\n- Main courante et plainte de l\'épouse, enquête, mise en retrait de LFI, condamnation avec sursis et dommages-intérêts, maintien comme député'
    },    
    {
        nom: 'Coquerel, Eric',
        photo: 'Eric_Coquerel.jpg',
        reponse: 'affaire',
        infosSupplementaires: 'Accusations :\n- Gestes déplacés (mains baladeuses), "drague lourdingue", "regard salace et gluant", textos suggestifs lors d\'une soirée en 2014 (accusation de Sophie Tissier). Coquerel parle de "flirt" et dément.\n\nFaits reprochés : Harcèlement sexuel, gestes "pouvant s\'apparenter à une agression sexuelle", agressions sexuel.\n\nSuites Données : Saisine du comité contre les violences sexuelles de LFI par Tissier. Plainte déposée par Tissier (juillet 2022). Ouverture d\'une enquête par le parquet de Paris. Classement sans suite de l\'enquête pour infraction insuffisamment caractérisée (février 2023). Nouvelle plainte avec constitution de partie civile déposée par Tissier (juin 2024).'
    },    
    {
        nom: 'Courbet, Julien',
        photo: 'Julien_Courbet.jpg',
        reponse: 'pas-affaire',
        infosSupplementaires: 'Aucune affaire connue à ce jour.'
    },
    {
        nom: 'Cauet, Sébastien',
        photo: 'Sébastien_Cauet.jpg',
        reponse: 'affaire',
        infosSupplementaires: 'Accusations et faits reprochés:\n- Accusé d\'agressions sexuelles et viols (dont sur mineures) via tweets et plaintes de plusieurs femmes sur différentes périodes.\n\nSuites Données :\n- Retrait de NRJ, plaintes de Cauet pour diffamation/extorsion, débouté en justice pour retour antenne, mise en examen pour viols et agressions sur mineures (contrôle judiciaire allégé ensuite), débouté en appel contre NRJ.'
    },
    {
        nom: 'Vianney',
        photo: 'Vianney.jpg',
        reponse: 'pas-affaire',
        infosSupplementaires: 'Aucune affaire connue à ce jour.'
    },
];

export default celebrites;
