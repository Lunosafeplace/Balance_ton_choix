   const celebrites = [
    {
        nom: 'Abad, Damien',
        photo: 'Damien_Abad.jpg',
        reponse: 'pas-condamne',
        infosSupplementaires: 'Deux premières femmes l\'ont mis en cause en mai 2022. L\'une l\'accuse de viol sous soumission chimique en 2010, et l\'autre de viol en 2011. Cette dernière avait déposé plainte à deux reprises, classées sans suite.\n\nUne troisième femme (Laëtitia) l\'accuse de tentative de viol en 2010. Elle a porté plainte en juin 2022.\n\nUne quatrième femme l\'accuse de viol par soumission chimique en 2013.'
    },
    {
        nom: 'Tibo InShape',
        photo: 'Tibo_InShape.png',
        reponse: 'pas-condamne',
        infosSupplementaires: 'Tibo InShape n\'est pas accusé directement dans la polémique de sa vidéo avec Thérèse Hargot. C\'est Thérèse Hargot qui est accusée d\'avoir banalisé le viol conjugal avec ses propos sur les "rendez-vous sexe" obligatoires. Tibo InShape est critiqué pour avoir diffusé ces propos sur sa chaîne.'
    },    
    {
        nom: 'Lejeune, Geoffroy',
        photo: 'Geoffroy_Lejeune.jpg',
        reponse: 'pas-condamne',
        infosSupplementaires: 'Geoffroy Lejeune est accusé d\'avoir minimisé la pédocriminalité de l\'affaire des ballets roses en parlant de "parties fines" avec des mineures "consentantes", ignorant la loi française sur le consentement des mineurs.'
    },
    {
        nom: 'Ardisson, Thierry',
        photo: 'Thierry_Ardisson.jpg',
        reponse: 'pas-condamne',
        infosSupplementaires: 'Propos sur les mineures en 2020 : Une séquence de 1995 a refait surface où on l\'entend plaisanter avec Frédéric Beigbeder et Gabriel Matzneff sur des relations sexuelles imaginaires avec des "gamines de douze ans et demi". Ces propos ont été largement critiqués et jugés complaisants envers la pédophilie.\n\n#MeToo et #BalanceTonPorc : Bien qu\'il n\'ait pas été directement accusé, son émission "Les Terriens du Dimanche" a abordé le sujet, parfois de manière controversée, avec des invités tenant des propos qui ont suscité des réactions.'
    },
    {
        nom: 'Matzneff, Gabriel',
        photo: 'Gabriel_Matzneff.png',
        reponse: 'pas-condamne',
        infosSupplementaires: 'Apologie de la pédophilie et description de relations avec des mineurs dans ses écrits : Il a ouvertement décrit et banalisé ses relations sexuelles avec des mineurs dans ses livres, notamment "Les Moins de seize ans". Ces écrits sont aujourd\'hui considérés comme une apologie de la pédophilie.\n\nTémoignage de Vanessa Springora dans "Le Consentement" (2020) : Vanessa Springora a raconté sa relation d\'adolescente avec Matzneff, alors qu\'il était un homme de 50 ans. Son témoignage a révélé la nature prédatrice de cette relation et a conduit à une prise de conscience plus large.\nSuite à ces révélations et d\'autres témoignages, des enquêtes judiciaires ont été ouvertes pour des faits potentiels de viols et d\'agressions sexuelles sur mineurs. Cependant, de nombreux faits sont prescrits.\n\nAccusations de participation à un réseau de pédocriminalité (juin 2024) : Une enquête de Libération l\'accuse d\'avoir fait partie d\'un réseau de pédocriminalité dans les années 1970 et 1980. Ces faits font actuellement l\'objet d\'une enquête judiciaire.'
    },
    {
        nom: 'Sardou, Michel',
        photo: 'Michel_Sardou.jpg',
        reponse: 'pas-condamne',
        infosSupplementaires: 'Sexisme et misogynie dans certaines de ses chansons (Les Filles d\'aujourd\'hui", "Être une femme", "Je suis pour",...).\n\nHomophobie, bien qu\'il ait par la suite nuancé certains propos et interprétations.'
    },      
    {
        nom: 'Debbouze, Jamel',
        photo: 'Jamel_Debbouze.jpg',
        reponse: 'pas-condamne',
        infosSupplementaires: 'Dans un extrait d\'une émission de Burger Quiz datant d\'une dizaine d\'années, Jamel Debbouze a un comportement jugé inapproprié envers une candidate. Il l\'embrasse de force sur la joue, l\'appelle "la Chinoise" ou "la sœur de Pikachu", et fait des remarques sexistes.'
    },       
    {
        nom: 'Baffie, Laurent',
        photo: 'Laurent_Baffie.jpg',
        reponse: 'pas-condamne',
        infosSupplementaires: 'En 2017, Baffie remonte la jupe de Nolwenn Leroy sans consentement à la télé, plaisantant sur le "cul" pour l\'audience.'
    },
    {
        nom: 'Berry, Richard',
        photo: 'Richard_Berry.jpg',
        reponse: 'pas condamne',
        infosSupplementaires: 'Richard Berry a été accusé par sa fille aînée, Coline Hiegel Berry, en janvier 2021. Elle a déposé plainte pour inceste, viols, agressions sexuelles et corruption de mineur, qui auraient été commis lorsqu\'elle était mineure, entre ses 8 et 10 ans.\n\nEn mai 2024, Catherine Hiegel, la mère de Coline Berry-Rojtman et ancienne compagne de Richard Berry, a également déclaré avoir été victime de violences conjugales de la part de l\'acteur lorsqu\'elle était enceinte de leur fille.\n\nCependant, au 1er septembre 2023, la procédure visant Richard Berry concernant les accusations de sa fille a été classée sans suite pour prescription par le parquet de Paris.'
    },
    {
        nom: 'Mellia, Seb',
        photo: 'Personne.png',
        reponse: 'pas-condamne',
        infosSupplementaires: 'Seb Mellia a fait l\'objet de plusieurs accusations d\'agressions sexuelles et de violences sexuelles. Ces accusations ont été relayées publiquement à partir de janvier 2024, notamment par l\'humoriste Florence Mendez qui a affirmé avoir reçu de nombreux témoignages à son encontre.\n\nLes accusations comprennent des faits tels que : baisers forcés, tentatives d\'embrassades insistantes, comportement oppressant et insistant et des témoignages plus graves évoquent des rapports sexuels non consentis, y compris des sodomies avec retrait de préservatif sans consentement.'
    },
    {
        nom: 'Plaza, Stéphane',
        photo: 'Stéphane_Plaza.png',
        reponse: 'condamne',
        infosSupplementaires: 'Violences conjugales récurrentes : Il a été condamné en première instance à 12 mois de prison avec sursis pour des faits de violences conjugales envers l\'une de ses ex-compagnes, survenus entre 2018 et 2022. Il a également été condamné à une interdiction de contact avec cette victime pendant 3 ans. Il a fait appel de cette condamnation.\n\nViolence psychologique : Il avait également été accusé de violence psychologique par une autre ex-compagne, mais il a été relaxé de ces chefs d\'accusation en première instance.'
    },
    {
        nom: 'Moix, Yann',
        photo: 'Yann_Moix.jpg',
        reponse: 'pas-condamne',
        infosSupplementaires: 'Dans une interview à Marie Claire, Yann Moix déclare être \"incapable d\'aimer une femme de 50 ans\" car il trouve cela \"trop vieux\" et préfère les femmes jeunes.\n\nDans l\'émission \"Les Terriens du dimanche\", Yann Moix prend la défense de Michael Jackson face aux accusations de pédophilie dans le documentaire Leaving Neverland, déclarant notamment qu\'\"un enfant, ça ne couche qu\'avec les adultes qui forcent les enfants à coucher\".\n\nDans l\'émission \"Pascale, Éric, Yann et les autres\" sur C8, des propos de Yann Moix ont choqué les internautes, notamment une phrase : \"Ce sont des femmes abîmées, donc faut cogner\".\n\nDes propos tenus dans un Complément d\'enquête sur Gérard Depardieu ont également refait surface où il tenait des propos sexualisant des mineures.'
    },
    {
        nom: 'Wilson, Lambert',
        photo: 'Lambert-Wilson.jpg',
        reponse: 'pas-condamne',
        infosSupplementaires: 'Suite à la cérémonie controversée où Roman Polanski a été primé et Florence Foresti a quitté la présentation, Lambert Wilson a publiquement critiqué l\'attitude de l\'humoriste, la qualifiant notamment de "minable", suscitant un soutien implicite à Polanski et un manque de solidarité aux victimes.'
    },
    {
        nom: 'Slimane',
        photo: 'Slimane.jpg',
        reponse: 'pas-condamne',
        infosSupplementaires: 'Slimane a fait l\'objet d\'une plainte pour harcèlement sexuel par un technicien en octobre 2024 (baiser forcé, propos et messages à caractère sexuel).\n\nDeux autres hommes l\'ont accusé d\'envoi non consenti de photos pornographiques.\n\nIl n\'a pas été inculpé ni condamné à ce jour.'
    },
    {
        nom: 'Abittan, Ary',
        photo: 'Ary_Abittan.jpg',
        reponse: 'pas-condamne',
        infosSupplementaires: 'Ary Abittan a fait l\'objet d\'une accusation de viol en octobre 2021. Une femme de 23 ans a porté plainte, affirmant qu\'il lui avait imposé une sodomie lors d\'une soirée à son domicile. Suite à une instruction menée par des juges, le parquet de Paris a décidé de ne pas le renvoyer devant un tribunal, prononçant un non-lieu en avril 2024, faute d\'indices suffisants. La plaignante a fait appel de cette décision, mais la cour d\'appel a confirmé le non-lieu en janvier 2025.'
    },
    {
        nom: 'Darmanin, Gérald',
        photo: 'Gérald_Darmanin.jpg',
        reponse: 'pas-condamne',
        infosSupplementaires: 'Viol et harcèlement par Sophie Patterson-Spatz pour des faits remontant à 2009. Après plusieurs plaintes et enquêtes, la justice a finalement prononcé un non-lieu définitif en sa faveur en février 2024.\n\nAbus de faiblesse par une habitante de Tourcoing concernant des événements de 2015. Cette affaire a été classée sans suite par le parquet en mai 2018.'
    },
    {
        nom: 'Beigbeder, Frédéric',
        photo: 'Frédéric_Beigbeder.jpg',
        reponse: 'pas-condamne',
        infosSupplementaires: 'Frédéric Beigbeder a fait l\'objet d\'une plainte pour viol déposée en juillet 2023 par une femme de 30 ans. Les faits se seraient déroulés dans la nuit du 18 au 19 juillet 2023 dans une chambre d\'hôtel à Pau. Il a été placé en garde à vue en décembre 2023 dans le cadre de cette enquête préliminaire et avait contesté les faits. Cependant, en janvier 2024, le parquet a annoncé que l\'enquête avait été classée sans suite en raison de l\'absence d\'indices graves ou concordants permettant de caractériser l\'infraction.\n\nPropos sur les mineures en 2020 : Une séquence de 1995 a refait surface où on l\'entend plaisanter avec Thierry Ardisson et Gabriel Matzneff sur des relations sexuelles imaginaires avec des "gamines de douze ans et demi". Ces propos ont été largement critiqués et jugés complaisants envers la pédophilie.'
    },
    {
        nom: 'Monsieur Poulpe',
        photo: 'Monsieur_Poulpe.jpg',
        reponse: 'pas-condamne',
        infosSupplementaires: 'Propos sur l\'apparence de Rachida Dati jugés sexistes lors d\'une chronique à "C dans l\'air" (janvier 2024)'
    },
    {
        nom: 'Bayou, Julien',
        photo: 'Julien_Bayou.jpg',
        reponse: 'pas-condamne',
        infosSupplementaires: 'Harcèlement moral (accusation principale dans la plainte d\'Anaïs Leleux et évoquée par Sandrine Rousseau).\n\nAbus de faiblesse (également dans la plainte d\'Anaïs Leleux).\n\nDes témoignages anonymes ont également évoqué des violences psychologiques et une emprise sentimentale.'
    },
    {
        nom: 'Bedos, Nicolas',
        photo: 'Nicolas_Bedos.jpg',
        reponse: 'condamne',
        infosSupplementaires: 'En 2021, plusieurs femmes ont porté plainte contre Nicolas Bedos pour des faits d\'agression sexuelle et de harcèlement sexuel qui se seraient déroulés lors de soirées ou dans un cadre professionnel. Ces plaintes ont conduit à l\'ouverture d\'enquêtes par le parquet de Paris. Les investigations ont notamment porté sur les témoignages des plaignantes et d\'éventuels témoins.\n\nEn janvier 2023, le parquet de Paris a classé sans suite certaines des plaintes pour agression sexuelle, faute d\'infraction suffisamment caractérisée ou en raison de la prescription.\n\nEn octobre 2024, Nicolas Bedos a été condamné faits d\'agression sexuelle) à un an de prison, dont six mois avec sursis, assorti d\'une obligation de soins pour des problèmes d\'addiction et psychologiques.'
    },
    {
        nom: 'Besnehard, Dominique',
        photo: 'Dominique_Besnehard.jpg',
        reponse: 'pas-condamne',
        infosSupplementaires: 'Plusieurs témoignages, recueillis notamment dans une enquête de Télérama, ont fait état d\'un sentiment d\'abus de pouvoir de la part de Dominique Besnehard pour tenter d\'obtenir des faveurs sexuelles de jeunes comédiens et comédiennes.\n\nEn mai 2024, l\'acteur Giovanni Savoia et un autre acteur ont publiquement accusé Dominique Besnehard d\'avoir abusé de son pouvoir pour essayer d\'obtenir des faveurs sexuelles, respectivement au début des années 2000 et dans les années 1990. Dominique Besnehard a nié ces accusations.'
    },
    {
        nom: 'Besson, Luc',
        photo: 'Luc_Besson.jpg',
        reponse: 'pas-condamne',
        infosSupplementaires: 'L\'actrice Sand Van Roy a porté plainte pour viol en mai 2018, alléguant des faits survenus à l\'hôtel Bristol. Elle a également porté plainte pour des violences sexuelles répétées entre 2016 et 2018. Les rapports médicaux ont relevé des lésions compatibles avec ses accusations.\n\nPlusieurs autres femmes, dont une ex-chargée de casting, ont accusé Luc Besson d\'abus sexuels. Mediapart a recueilli les témoignages de neuf femmes décrivant des comportements similaires et répétitifs.'
    },
    {
        nom: 'Darmon, Gérard',
        photo: 'Gérard_Darmon.jpg',
        reponse: 'pas-condamne',
        infosSupplementaires: 'Neuf femmes accusent Gérard Darmon de violences sexistes et sexuelles. Elles décrivent des propos et des gestes « déplacés » sur le tournage de six films, rapportent des « humiliations » et des « insultes sexistes ». Les témoignages indiquent que plusieurs des femmes qui témoignent occupaient des postes précaires au moment des faits.\n\nUne technicienne a indiqué avoir porté plainte contre la production du film sur lequel elle travaillait avec l\'acteur pour « absence de protection ».\n\nDix autres femmes ont aussi livré leur récits à Politis avant de refuser d\'apparaître dans l’enquête et de se rétracter.'
    },
    {
        nom: 'Depardieu, Gérard',
        photo: 'Gérard_Depardieu.jpg',
        reponse: 'pas-condamne',
        infosSupplementaires: 'Plainte de Charlotte Arnould (2018) : L\'actrice a porté plainte pour viol et agressions sexuelles. Gérard Depardieu a été mis en examen en décembre 2020, et le parquet de Paris a requis un procès à son encontre pour ces faits.\n\nPlaintes sur le tournage des "Volets Verts" (2021) : Deux autres plaintes ont été déposées en janvier et février 2024 par des femmes travaillant sur ce tournage, pour des faits d\'agression sexuelle. Un procès concernant ces accusations s\'est ouvert en mars 2025.\n\nPlainte de Ruth Baza (1995) : La journaliste et écrivaine espagnole a porté plainte en décembre 2023 pour un viol qui aurait eu lieu en 1995 à Paris.\n\nTémoignage de Vahina Giocante (2023) : L\'actrice a accusé publiquement Gérard Depardieu d\'avoir agressé sexuellement une figurante et d\'avoir eu des comportements abusifs envers plusieurs femmes sur des tournages.\n\nPlusieurs autres femmes ont témoigné de comportements déplacés, d\'agressions sexuelles ou de harcèlement de la part de Gérard Depardieu, certains faits remontant à plusieurs années.'
    },
    {
        nom: 'Elvis, Roméo',
        photo: 'Roméo_Elvis.jpg',
        reponse: 'pas-condamne',
        infosSupplementaires: 'Roméo Elvis a été accusé d\'agression sexuelle par une jeune femme en septembre 2020.\n\nRoméo Elvis a reconnu les faits et a présenté publiquement ses excuses.'
    },
    {
        nom: 'Gastambide, Franck',
        photo: 'Franck_Gastambide.jpg',
        reponse: 'pas-condamne',
        infosSupplementaires: 'En février 2025, Mediapart publie les témoignages de 6 femmes (dont la comédienne Marion Séclin) accusant Franck Gastambide de violences physiques, sexuelles (dont agressions sur tournages) et psychologiques. Gastambide conteste, parle de calomnie.'
    },
    {
        nom: 'Hulot, Nicolas',
        photo: 'Nicolas_Hulot.jpg',
        reponse: 'pas-condamne',
        infosSupplementaires: 'Plusieurs femmes ont témoigné d\'agressions sexuelles et de comportements inappropriés de la part de Nicolas Hulot, pour des faits remontant parfois à plusieurs décennies. L\'une des femmes au moment des faits était mineure.\n\nUne plainte pour agression sexuelle datant de 2008 avait été classée sans suite à l\'époque. Nicolas Hulot avait reconnu une relation sexuelle mais nié toute contrainte.\n\nSuite à la diffusion du reportage, une des femmes ayant témoigné, mineure au moment des faits, a déposé une plainte pour viol.'
    },
    {
        nom: 'Jegou, Oscar',
        photo: 'Oscar_Jégou.jpg',
        reponse: 'pas-condamne',
        infosSupplementaires: 'En juillet 2024, Oscar Jegou, joueur de rugby du XV de France, a été mis en examen en Argentine pour viol aggravé, en même temps que son coéquipier Hugo Auradou. Les faits se seraient déroulés dans un hôtel à Mendoza après un match de l\'équipe de France. Les deux rugbymen ont toujours nié les accusations, affirmant qu\'il s\'agissait d\'une relation consentie.'
    },
    {
        nom: 'Lomepal',
        photo: 'Lomepal.jpg',
        reponse: 'pas-condamne',
        infosSupplementaires: 'En 2020, une journaliste du média en ligne Jef Klak a accusé Lomepal d\'agression sexuelle, relatant des faits qui se seraient déroulés en 2017 à New York. Cette accusation n\'a pas donné lieu à une plainte à l\'époque.\n\nEn juillet 2023, de nouvelles accusations ont émergé sur les réseaux sociaux, relayées par le média Loopsider. Plusieurs femmes ont témoigné de comportements déplacés, d\agressions sexuelles et de viols de la part du rappeur, pour des faits qui se seraient produits entre 2016 et 2020.\n\nEn décembre 2024, Lomepal a été mis en examen pour "viol". Il a contesté les faits qui lui sont reprochés.\n\nDe nouvelles informations ont fait état du témoignage d\'une ex-collaboratrice de Lomepal qui a corroboré certaines accusations et décrit un comportement "prédateur" du rappeur.'
    },
    {
        nom: 'Mendy, Benjamin',
        photo: 'Benjamin_Mendy.jpg',
        reponse: 'pas-condamne',
        infosSupplementaires: 'Benjamin Mendy a été accusé de plusieurs viols et d\'une agression sexuelle, concernant des faits qui se seraient déroulés entre octobre 2020 et août 2021. Le nombre d\'accusations a augmenté au fil de l\'enquête, pour atteindre huit viols, une tentative de viol et une agression sexuelle.\n\nÀ l\'issue de deux procès, Benjamin Mendy a été acquitté de toutes les charges de viol et d\'agression sexuelle. Le premier verdict, en janvier 2023, l\'avait déclaré non coupable de six chefs d\'accusation. Le second procès, dont le verdict est tombé ultérieurement, a confirmé son innocence pour les autres charges.'
    },
    {
        nom: 'Moha La Squale',
        photo: 'Personne.png',
        reponse: 'condamne',
        infosSupplementaires: 'Plusieurs femmes, d\'anciennes compagnes, ont accusé Moha La Squale de violences conjugales, d\'agressions sexuelles, de séquestrations et de menaces de mort. Les faits se seraient déroulés entre 2017 et 2021.\n\nIl a été condamné à quatre ans de prison, dont trois ans ferme, par le tribunal correctionnel de Paris pour des violences conjugales, séquestrations et menaces de mort envers six de ses ex-compagnes.\n\nIl a également été condamné à des obligations de soins psychologiques et en addictologie, ainsi qu\'à une interdiction d\'entrer en contact avec ses victimes.'
    },
    {
        nom: 'Morandini, Jean-Marc',
        photo: 'Jean-Marc_Morandini.jpg',
        reponse: 'condamne',
        infosSupplementaires: 'En 2016, il a été mis en examen pour corruption de mineur aggravée dans le cadre de castings pour une web-série ("Les Faucons"). Il a également été poursuivi pour harcèlement sexuel. Il a toujours nié les accusations, parlant de diffamation et de complot.\n\nEn août 2023, en première instance, il a été condamné à six mois de prison avec sursis.\n\nEn appel, le 27 janvier 2025, sa peine a été alourdie à 18 mois de prison avec sursis. Il a également été condamné à une obligation de suivi psychologique et à une amende de 10 000 euros pour harcèlement sexuel. Sa société de production a écopé d\'une amende de 50 000 euros pour "travail dissimulé" concernant de jeunes acteurs de la web-série.'
    },
    {
        nom: 'Poivre d\'Arvor, Patrick',
        photo: 'Patrick_Poivre-Darvor.jpg',
        reponse: 'pas-condamne',
        infosSupplementaires: 'L\'affaire a éclaté en 2021 avec la plainte de Florence Porcel pour des viols qui remonteraient à 2004 et 2009. D\'autres femmes ont ensuite témoigné, portant le nombre d\'accusatrices à plusieurs dizaines.\n\nUne enquête préliminaire ouverte suite aux premières plaintes avait été classée sans suite pour prescription ou insuffisance de preuves. Cependant, de nouvelles plaintes ont été déposées ultérieurement, certaines visant des faits non prescrits en raison de la potentielle sérialité des actes. En juillet 2024, il était visé par cinq nouvelles informations judiciaires pour viols et viols aggravés.\n\nPPDA a été mis en examen en décembre 2023 pour le viol de Florence Porcel en 2009. Il s\'agit de sa première mise en examen dans cette affaire.'
    },
    {
        nom: 'Polanski, Roman',
        photo: 'Roman_Polanski.jpg',
        reponse: 'condamne',
        infosSupplementaires: 'Il a été accusé d\'avoir eu des relations sexuelles illégales avec Samantha Geimer, alors âgée de 13 ans. Il a plaidé coupable d\'"attentat à la pudeur par usage de stupéfiants" et a passé 42 jours en prison. Craignant une peine plus lourde, il a fui les États-Unis avant le prononcé du jugement final et n\'y est jamais retourné. Il est toujours considéré comme un fugitif par la justice américaine et fait l\'objet d\'une notice rouge d\'Interpol. Samantha Geimer a exprimé des sentiments ambivalents au fil des ans, reconnaissant qu\'il s\'agissait d\'un viol au regard de son âge et du "non" exprimé, tout en soulignant l\'absence de violence physique et en exprimant parfois le souhait que l\'affaire soit close.\n\nAu fil des ans, d\'autres femmes ont accusé Roman Polanski d\'agressions sexuelles ou de viols, pour des faits remontant à différentes époques. Parmi elles Charlotte Lewis, Robin M. Renate Langer, Marianne Barnard...\n\nEn raison des poursuites américaines, Roman Polanski ne peut voyager librement que dans quelques pays (notamment la France, la Pologne et la Suisse) qui refusent son extradition. Plusieurs tentatives d\'extradition ont été rejetées par la Suisse et la Pologne.'
    },
    {
        nom: 'Strauss-Kahn, Dominique',
        photo: 'Dominique_Strauss-Kahn.jpg',
        reponse: 'pas-condamne',
        infosSupplementaires: 'Il a été accusé d\'agression sexuelle et de tentative de viol par Nafissatou Diallo, une femme de chambre de l\'hôtel Sofitel. Il a été arrêté, mais les charges pénales ont finalement été abandonnées par le procureur en août 2011 en raison de doutes sur la crédibilité du témoignage de la plaignante. Une procédure civile a également été engagée par Nafissatou Diallo, qui s\'est soldée par un accord financier à l\'amiable en décembre 2012.\n\nIl a été poursuivi pour proxénétisme aggravé en bande organisée dans le cadre d\'une affaire de réseau de prostitution lié à l\'hôtel Carlton de Lille. Après un procès très médiatisé en 2015, il a été acquitté de ces accusations. Le tribunal n\'a pas établi sa participation à un réseau de prostitution et a estimé qu\'il n\'était pas prouvé qu\'il avait conscience du caractère prostitutionnel des rencontres.'
    },
    {
        nom: 'Thavaud, Norman',
        photo: 'Norman_Thavaud.jpg',
        reponse: 'pas-condamne',
        infosSupplementaires: 'Le média en ligne Mediapart a publié une enquête recueillant les témoignages de plusieurs jeunes femmes accusant le youtubeur de viol, d\'agressions sexuelles et de corruption de mineures. Les faits dénoncés se seraient déroulés entre 2011 et 2018.\n\nNorman Thavaud a été mis en examen pour viol et corruption de mineures. Il a été placé sous contrôle judiciaire.\n\nD\'autres plaintes ont été déposées par la suite, portant le nombre d\'accusatrices à au moins huit. Les accusations concernent notamment des faits de viol, d\'agressions sexuelles, de harcèlement et de corruption de mineures.\n\nNorman Thavaud conteste les accusations portées contre lui.'
    },
    {
        nom: 'Orelsan',
        photo: 'Orelsan.jpg',
        reponse: 'pas-condamne',
        infosSupplementaires: 'Plusieurs associations féministes avaient porté plainte contre le rappeur pour des titres comme "Sale pute" et "Saint-Valentin".\n\nAprès plusieurs années de procédure, Orelsan a été définitivement acquitté par la Cour de cassation, qui a estimé que les paroles, bien que crues et violentes, s\'inscrivaient dans un contexte artistique et parodique et ne constituaient pas une incitation à la violence réelle ni une injure directe envers les femmes en général.'
    },
    {
        nom: 'Bruel, Patrick',
        photo: 'Patrick_Bruel.jpg',
        reponse: 'pas-condamne',
        infosSupplementaires: 'Une jeune esthéticienne a porté plainte pour des faits qui se seraient déroulés lors d\'un massage dans un hôtel en Corse. Elle a évoqué un "vrai malaise". Patrick Bruel a été entendu par la justice et a nié les faits, parlant d\'un "malentendu". L\'enquête a été classée sans suite en décembre 2020 par le procureur d\'Ajaccio, "en l\'absence d\'élément permettant de caractériser une infraction pénale".\n\nSuite à cette première affaire, d\'autres femmes ont évoqué des comportements déplacés de la part de Patrick Bruel, certains remontant à plusieurs années. Ces témoignages parlaient notamment de remarques ou d\'attitudes à connotation sexuelle.\n\nUne masseuse d\'un spa de Perpignan a également déposé plainte pour "agression sexuelle" concernant des faits qui se seraient déroulés lors d\'une séance de massage.'
    },    
    {
        nom: 'Légitimus, Pascal',
        photo: 'Pascal_Légitimus.jpg',
        reponse: 'pas-condamne',
        infosSupplementaires: 'Pascal Légitimus a créé une controverse en associant l\'homosexualité et la pédophilie dans une tentative maladroite de commenter l\'affaire Polanski, puis s\'est excusé en reconnaissant son erreur et en niant toute intention de faire un tel amalgame.'
    },      
    {
        nom: 'Heuss l\'enfoiré',
        photo: 'Personne.png',
        reponse: 'pas-condamne',
        infosSupplementaires: 'Dispute avec sa compagne le 1er janvier 2025, suite à la diffusion de photos de ses fesses sans consentement sur les réseaux sociaux. La compagne aurait déclaré avoir été victime de coups et de gifles. Le rappeur a reçu 2 jours d\'ITT après avoir été blessé au visage avec du charbon à chicha lancé par sa compagne.\n\nClassement sans suite des faits reprochés au rappeur par le parquet le 4 janvier 2025, considéré comme une affaire de couple et de violences réciproques par son avocat.'
    },    
    {
        nom: 'Vald',
        photo: 'Vald.jpg',
        reponse: 'pas-condamne',
        infosSupplementaires: 'Paroles polémiques de Vald incluant des propos tels que : « Elle veut que j’lui fasse mal, que j’lui écrase la tête », « Elle aimerait bien s’faire violer, enfin pas vraiment violer. Elle aimerait que j’la violente, que j’la casse sans demander », « T’sais, m’faire violer mais j’sais que c’est toi, ça veut dire c’est pas vraiment gênant », ...\n\nDénonciation publique des propos par l\'association Elu-e-s Contre les Violences faites aux Femmes (ECVF).'
    },
    {
        nom: 'Lavoine, Marc',
        photo: 'Marc_Lavoine.jpg',
        reponse: 'pas-condamne',
        infosSupplementaires: 'Marc Lavoine embrasse Léa (Star Academy) dans le cou avant un duo. Geste jugé déplacé par des internautes. Léa défend Lavoine, parle de bienveillance et d\'attitude paternelle. Pas d\'accusation formelle.'
    },    
    {
        nom: 'Saez, Damien',
        photo: 'Damien_Saez.jpg',
        reponse: 'pas-condamne',
        infosSupplementaires: 'Paroles insultantes et dégradantes envers les influenceuses et les femmes dans la chanson "P\'tite Pute" (2018)'
    },
    {
        nom: 'Benzema, Karim',
        photo: 'Karim_Benzema.jpg',
        reponse: 'condamne',
        infosSupplementaires: 'L\'affaire Zahia : L\'affaire éclate en avril 2010 lors d\'une enquête sur un réseau de prostitution. Les auditions de Zahia Dehar révèlent qu\'elle aurait eu des relations sexuelles tarifées avec plusieurs joueurs de l\'équipe de France, dont Karim Benzema et Franck Ribéry. Elle aurait été mineure (16 ans) au moment de ses rapports avec ces deux derniers. Karim Benzema et Franck Ribéry ont été renvoyés devant le tribunal correctionnel pour sollicitation de prostituée mineure. Ils étaient soupçonnés de ne pas avoir vérifié l\'âge de Zahia Dehar. En janvier 2014, Karim Benzema et Franck Ribéry ont été relaxés par le tribunal correctionnel de Paris. Le tribunal a estimé qu\'il n\'était pas prouvé qu\'ils avaient connaissance de la minorité de Zahia Dehar, qui avait menti sur son âge. Le procureur avait d\'ailleurs requis la relaxe.\n\nL\'affaire de la sextape de Mathieu Valbuena (2015-2022) : Karim Benzema a été accusé de complicité de tentative de chantage à l\'égard de son coéquipier de l\'équipe de France, Mathieu Valbuena, concernant une vidéo intime. En novembre 2021, il a été condamné en première instance à un an de prison avec sursis et 75 000 euros d\'amende. Il a fait appel de cette décision. En juin 2022, il a finalement renoncé à son appel, rendant sa condamnation définitive.'
    },    
    {
        nom: 'Ribéry, Franck',
        photo: 'Franck_Ribery.jpg',
        reponse: 'pas-condamne',
        infosSupplementaires: 'L\'affaire Zahia : L\'affaire éclate en avril 2010 lors d\'une enquête sur un réseau de prostitution. Les auditions de Zahia Dehar révèlent qu\'elle aurait eu des relations sexuelles tarifées avec plusieurs joueurs de l\'équipe de France, dont Karim Benzema et Franck Ribéry. Elle aurait été mineure (16 ans) au moment de ses rapports avec ces deux derniers. Karim Benzema et Franck Ribéry ont été renvoyés devant le tribunal correctionnel pour sollicitation de prostituée mineure. Ils étaient soupçonnés de ne pas avoir vérifié l\'âge de Zahia Dehar. En janvier 2014, Karim Benzema et Franck Ribéry ont été relaxés par le tribunal correctionnel de Paris. Le tribunal a estimé qu\'il n\'était pas prouvé qu\'ils avaient connaissance de la minorité de Zahia Dehar, qui avait menti sur son âge. Le procureur avait d\'ailleurs requis la relaxe.'
    },    
    {
        nom: 'Louvin, Gérard',
        photo: 'Personne.png',
        reponse: 'pas-condamne',
        infosSupplementaires: 'Plusieurs hommes ont porté plainte contre Gérard Louvin et son mari, Daniel Moyne, pour des faits de viols et d\'agressions sexuelles qu\'ils auraient subis lorsqu\'ils étaient mineurs.\n\nL\'un des plaignants, le neveu de Gérard Louvin, a accusé son oncle d\'avoir "favorisé" des viols incestueux commis sur lui par Daniel Moyne dans les années 80.\n\nEn septembre 2021, une nouvelle enquête préliminaire a été ouverte à Paris contre Gérard Louvin et son mari, Daniel Moyne, suite à un témoignage transmis à la justice. Selon le quotidien Le Parisien, ce témoignage accusait le couple d\'avoir organisé des "parties sexuelles payantes" avec des mineurs des favelas de Rio de Janeiro en 2004.'
    },
    {
        nom: 'Samitier, Thierry',
        photo: 'Personne.png',
        reponse: 'pas-condamne',
        infosSupplementaires: 'Gestes déplacés et agressions sexuelles présumés sur plusieurs femmes. Ces faits auraient eu lieu dans le cadre de la pièce "Boeing Boeing" et du tournage de la série "Nos chers voisins". Deux actrices ont déposé une main courante. L\'acteur a démenti publiquement ces accusations.\n\nPlacement en garde à vue en mai 2023 dans le cadre de l\'enquête. Jugement prévu en 2025 pour harcèlement et agressions sexuelles.\n\nL\'acteur a écrit un livre inspiré de cette affaire, "Surprise !", relatant un acteur victime de diffamation.'
    },    
    {
        nom: 'Miller, Gérard',
        photo: 'Gérard_Miller.jpg',
        reponse: 'pas-condamne',
        infosSupplementaires: 'Depuis début 2024, plus de quatre-vingt-dix femmes ont accusé Gérard Miller de comportements déplacés, d\'agressions sexuelles et de viols, dont certains sous hypnose, ce qu\'il conteste.\n\nEn octobre 2024, Chloé Vienne a publié un livre enquête intitulé "Serial Miller. Gérard Miller : enquête sur trente ans de silences" décrivant un système de prédation sexuelle. En avril 2025, Alice Augustin et Cécile Ollivier ont publié une enquête complète sur les agissements de Miller pendant des décennies, intitulée "Anatomie d\'une prédation".\n\nCes accusations font suite à la publication par le magazine Elle d\'une enquête où deux femmes témoignent d\'agressions sexuelles et une troisième de viol, survenus lors de séances d\'hypnose. Suite à cette publication, 41 autres femmes ont contacté le magazine, alléguant avoir également été victimes d\'agressions sexuelles de la part de Gérard Miller entre 1993 et 2020.\n\nUne enquête judiciaire est en cours concernant ces accusations, que Gérard Miller nie.'
    },    
    {
        nom: 'Vodk',
        photo: 'Personne.png',
        reponse: 'pas-condamne',
        infosSupplementaires: 'En juillet 2020, suite au mouvement #BalanceTonYoutubeur, des accusations ont émergé selon lesquelles Vodkprod aurait utilisé sa notoriété pour draguer des fans, parfois mineures, et aurait proposé des plans à trois à certaines d\'entre elles.'
    },    
    {
        nom: 'Quatennens, Adrien',
        photo: 'Adrien_Quatennens.jpg',
        reponse: 'condamne',
        infosSupplementaires: 'En septembre 2022, des informations ont été révélées par Le Canard enchaîné concernant des violences exercées par Adrien Quatennens envers son épouse. Face à ces révélations, Adrien Quatennens a reconnu publiquement les faits, évoquant des disputes et avoir donné une gifle à sa femme. Il a également mentionné l\'envoi de nombreux SMS.\n\nEn décembre 2022, Adrien Quatennens a été condamné par le tribunal correctionnel de Lille à quatre mois de prison avec sursis pour des faits de violences sur son épouse.'
    },    
    {
        nom: 'Coquerel, Eric',
        photo: 'Eric_Coquerel.jpg',
        reponse: 'pas-condamne',
        infosSupplementaires: 'En juillet 2022, Sophie Tissier, militante politique, a publiquement accusé Éric Coquerel de harcèlement et d\'agression sexuelle lors d\'événements militants entre 2014 et 2016. Elle a notamment décrit des gestes déplacés, des remarques insistantes et une tentative d\'embrassade forcée.\n\nÉric Coquerel a catégoriquement nié ces accusations, dénonçant des "allégations mensongères" et une "instrumentalisation politique".\n\nSophie Tissier a déposé plainte pour agression sexuelle et harcèlement. En avril 2023, le parquet de Paris a classé sans suite cette plainte pour prescription de l\'action publique concernant l\'agression sexuelle et pour infraction insuffisamment caractérisée concernant le harcèlement.'
    },    
    {
        nom: 'Cauet, Sébastien',
        photo: 'Sébastien_Cauet.jpg',
        reponse: 'pas-condamne',
        infosSupplementaires: 'Plusieurs femmes ont porté plainte contre Sébastien Cauet, l\'accusant d\'agressions sexuelles et de viols, dont certaines alors qu\'elles étaient mineures au moment des faits.\n\nSébastien Cauet a été mis en examen pour viols et agressions sexuelles sur mineures de moins de 15 ans et sur majeurs. Suite à sa mise en examen, il a été placé sous contrôle judiciaire.\n\nIl conteste l\'ensemble de ces accusations.'
    },
        {
        nom: 'Lassalle, Jean',
        photo: 'Jean_Lassalle.jpg',
        reponse: 'pas-condamne',
        infosSupplementaires: 'En 2017, lors d\'une émission sur RTL, Jean Lassalle a été interpellé sur des témoignages anonymes l\'accusant d\'avoir eu des gestes déplacés envers des femmes, notamment une main aux fesses. Jean Lassalle avait nié avoir eu des comportements de ce type avec une intention de nuire ou d\'agresser, tout en reconnaissant être quelqu\'un de "tactile" et ayant une "tendance à embrasser fortement".\n\nEn juillet 2023, une enquête préliminaire a été ouverte par le parquet de Bordeaux suite à la plainte d\'une femme de 45 ans l\'accusant de viol et d\'agression sexuelle lors d\'un rendez-vous en 2010. Jean Lassalle avait déclaré avoir été prévenu et attendre d\'en savoir plus, sans nier explicitement les faits à ce moment-là.\n\nL\'enquête préliminaire ouverte en juillet 2023 a été classée sans suite par le parquet de Bordeaux en mars 2024. Les raisons précises de ce classement n\'ont pas été détaillées publiquement dans tous les médias, mais il est indiqué que l\'enquête n\'a pas permis de confirmer les faits.'
    },
];

export default celebrites;
