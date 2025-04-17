   const celebrites = [
    {
        nom: 'Abad, Damien',
        photo: 'Damien_Abad.jpg',
        reponse: 'pas-condamne',
        infosSupplementaires: 'Homme politique\n\nDeux premières femmes l\'ont mis en cause en mai 2022. L\'une l\'accuse de viol sous soumission chimique en 2010, et l\'autre de viol en 2011. Cette dernière avait déposé plainte à deux reprises, classées sans suite.\n\nUne troisième femme (Laëtitia) l\'accuse de tentative de viol en 2010. Elle a porté plainte en juin 2022.\n\nUne quatrième femme l\'accuse de viol par soumission chimique en 2013.'
    },
    {
        nom: 'Arthur',
        photo: 'Arthur.jpg',
        reponse :'pas-condamne',
        infosSupplementaires: ' Animateur, producteur, homme d\'affaires, acteur, scénariste\n\nDes remarques sexistes, des baisers et des gestes non consentis envers les candidates de l\'émission. Ces accusations ont été soulevées par une vidéo de la journaliste luxembourgeoise Alice Welter.\n\nIl a qualifié cette période d\'« une autre époque » et, via sa société de production SAMARON, a demandé la censure de toutes les archives de l\'émission diffusées sur le web.'
    },
    {
        nom: 'Palmade, Pierre',
        photo: 'Pierre_Palmade.jpg',
        reponse: 'pas-condamne',
        infosSupplementaires: '	Humoriste, acteur, scénariste\n\nUn homme de 19 ans, avec qui Pierre Palmade avait passé la nuit, l\'a accusé de viol.\n\nAprès une enquête de flagrance et une garde à vue, l\'accusateur a reconnu avoir menti.'
    },
    {
        nom: 'Hanouna, Cyril',
        photo: 'Cyril_Hanouna.jpg',
        reponse: 'pas-condamne',
        infosSupplementaires: 'Animateur, producteur, homme d\'affaires, chroniqueur, acteur,humoriste\n\nLors de l\'émission TPMP du 7 décembre 2016, un "jeu" a conduit la chroniqueuse Capucine Anav à toucher l\'entrejambe de l\'animateur Cyril Hanouna. Le CSA a jugé cette séquence problématique et a infligé une sanction à la chaîne C8 (suspension de publicité pendant 15 jours).\n\nIl n\'y a pas eu de sanction judiciaire directe contre Cyril Hanouna en tant que personne.'
    },          
    {
        nom: 'Ménès, Pierre',
        photo: 'Pierre_Ménès.jpg',
        reponse: 'condamne',
        infosSupplementaires: 'Consultant sportif, chroniqueur, éditorialiste, polémiste, blogueur\n\nAccusations révélées par le documentaire "Je ne suis pas une salope, je suis une journaliste" en mars 2021, notamment de Marie Portolano pour une agression sexuelle en août 2016 sur le plateau du Canal Football Club (soulèvement de robe et empoignement des fesses) et Isabelle Moreau pour avoir été forcée à l\'embrasser longuement sur la bouche lors d\'un anniversaire d\'émission quelques années auparavant (Ménès avait évoqué une "blague").\n\nD\autres accusations ont suivi, telle qu\'une agression sexuelle présumée sur une hôtesse d\'accueil au Parc des Princes en novembre 2021 (toucher de poitrine).\n\nIl a tenté de s\'expliquer sur TPMP minimisant ses actes, puis s\'est excusé sur les réseaux sociaux.\n\nLa procureure requiert 8 mois de sursis, 10 000€ d\'amende, une inscription au Fijais et une inéligibilité de 2 ans pour les faits du Parc des Princes et dans un magasin Nike en 2018.\n\nIl a été déclaré coupable pour une seule agression sexuelle (contact avec une vendeuse de Nike) et condamné à deux mois de prison avec sursis et un an d\'inéligibilité, mais pas d\'inscription au Fijais.'
    },
    {
        nom: 'Maire, Jean-Michel',
        photo: 'Jean-Michel_Maire.png',
        reponse: 'pas-condamne',
        infosSupplementaires: 'Journaliste, animateur\n\nJean-Michel Maire a fait l\'objet de deux polémiques dans TPMP. En 2016, il a embrassé le décolleté d\'une figurante, ce qui a conduit à une plainte pour geste déplacé. En 2017, il s\'est accidentellement montré nu à l\'antenne lors d\'un défi, entraînant un signalement au CSA.'
    },    
    {
        nom: 'Bouvier, Yves',
        photo: 'Yves_Bouvier.jpg',
        reponse: 'pas-condamne',
        infosSupplementaires: 'Marchand d\'art, entrepreneur\n\nLe journal "Le Point" a affirmé qu\'Yves Bouvier avait été le proxénète de Zahia Dehar pendant plusieurs années.\n\nLe journal "Le Point" a été définitivement condamné en appel en 2018 pour cet article. La cour a noté qu\'il n\'avait jamais été prétendu qu\'Yves Bouvier ait eu de telles relations avec Zahia. Yves Bouvier et Zahia Dehar ont nié cette relation de proxénétisme.\n\nL\'avocat de l\'homme condamné pour proxénétisme dans l\'affaire Zahia Dehar a demandé la réouverture de l\'enquête, en fournissant le témoignage d\'une ancienne prostituée affirmant qu\'Yves Bouvier les prostituait, elle et Zahia Dehar.'
    },
    {
        nom: 'Govou, Sydney',
        photo: 'Sydney_Govou.jpg',
        reponse: 'pas-condamne',
        infosSupplementaires: 'Footballeur\n\nIl a été mis en cause pour sollicitation de prostituée mineure dans le cadre de l\'enquête sur les relations tarifées qu\'avait Zahia Dehar avec des joueurs de l\'équipe de France de football alors qu\'elle était mineure.\n\nÀ la fin de l\'année 2011, le parquet de Paris a demandé un non-lieu en sa faveur. Cependant, en août 2012, contrairement à la demande du parquet, il a été renvoyé devant le tribunal correctionnel pour être jugé pour cette accusation.'
    },
    {
        nom: 'Ben Arfa, Hatem',
        photo: 'Hatem_Ben_Arfa.jpg',
        reponse: 'pas-condamne',
        infosSupplementaires: 'Footballeur\n\nIl a été auditionné par la police dans le cadre de l\'enquête sur les relations tarifées de Zahia Dehar avec des footballeurs mineure. Cette audition a eu lieu en juillet 2010.\n\nSon avocat de l\'époque, Jean-Jacques Bertrand, a déclaré publiquement qu\'Hatem Ben Arfa avait reçu la confirmation qu\'il n\'était pas impliqué dans le dossier.'
    },
    {
        nom: 'Brunel, Jean-Luc',
        photo: 'Personne.png',
        reponse: 'pas-condamne',
        infosSupplementaires: 'Directeur, agent de mannequin\n\nDans les années 1980, des accusations d\'agressions sexuelles sur mineures ont été portées contre Jean-Luc Brunel, une figure influente du monde du mannequinat. Des mannequins ont témoigné avoir été droguées et violées par lui.\n\nSon nom a ensuite été fortement lié à l\'affaire Jeffrey Epstein, où il est accusé d\'avoir joué un rôle clé dans le recrutement et la fourniture de jeunes femmes pour le réseau d\'Epstein.\n\nArrêté en décembre 2020, Brunel a été mis en examen pour viols sur mineure et harcèlement sexuel, ainsi que pour sa participation présumée à l\'organisation du trafic de jeunes femmes pour Epstein. Bien que de nombreux témoignages aient émergé, une partie des faits reprochés est frappée par la prescription.'
    },          
    {
        nom: 'L\'Abbé Pierre',
        photo: 'L_abbé_Pierre.jpg',
        reponse: 'pas-condamne',
        infosSupplementaires: 'Prêtre catholique\n\nDes rapports de 2024-2025 ont révélé de multiples accusations d\'agressions sexuelles et de viols commis par l\'abbé Pierre entre les années 1950 et 2005, y compris sur mineurs. Au moins 57 victimes ont été identifiées.\n\nEmmaüs a retiré son nom de son logo, la Fondation Abbé-Pierre a changé de nom, et la justice française n\'ouvrira pas d\'enquête pour non-dénonciation en raison de la prescription.'
    },
    {
        nom: 'Placé, Jean-Vincent',
        photo: 'Jean-Vincent_Placé.jpg',
        reponse: 'condamne',
        infosSupplementaires: 'Homme politique, chef d\entreprise\n\nEn 2021, il est condamné à 5 000 euros d\'amende pour harcèlement sexuel commis sur une gendarme affectée à la sécurité de son logement de fonction.\n\nPlus tard, il est accusé d\'harcèlement et agressions sexuelles par une ancienne collaboratrice. Une plainte est déposée pour des faits remontant à 2012-2016. Il est placé en garde à vue en mars 2022, puis mis en examen pour « agressions sexuelles » et « harcèlement sexuel ».\n\nEn septembre 2024, il est mis en examen pour agression sexuelle sur une femme, pour des faits commis à l\'étranger en octobre 2017.'
    },    
    {
        nom: 'Guerriau, Joël',
        photo: 'Joël_Guerriau.jpg',
        reponse: 'pas-condamne',
        infosSupplementaires: 'Homme politique\n\nSandrine Josso porte plainte, l\'accusant de lui avoir administré à son insu de l\'ecstasy lors d\'une rencontre à son domicile. Des analyses révèlent la présence d\'ecstasy dans le sang de Sandrine Josso. De l\'ecstasy est retrouvée au domicile de Joël Guerriau lors d\'une perquisition. Il est accusé d\'avoir changé l\'intensité de la lumière, afin de renforcer les effets de la drogue, et d\'avoir insisté pour la faire boire.\n\nIl est placé en garde à vue, puis mis en examen pour « administration à une personne, à son insu, d’une substance de nature à altérer son discernement ou le contrôle de ses actes, dans le but de commettre un viol ou une agression sexuelle ». En avril 2025, le parquet de Paris requiert un procès contre Joël Guerriau.'
    },
    {
        nom: 'Sardou, Romain',
        photo: 'Romain_Sardou.jpg',
        reponse: 'pas-condamne',
        infosSupplementaires: 'Romancier, écrivain\n\nPlusieurs anciennes collaboratrices ont publiquement fait état de harcèlement moral qu\'elles auraient subi de la part de Romain Sardou. Le harcèlement moral se définit comme des agissements répétés ayant pour objet ou pour effet une dégradation des conditions de travail susceptible de porter atteinte aux droits et à la dignité du salarié, d\'altérer sa santé physique ou mentale ou de compromettre son avenir professionnel.'
    },
    {
        nom: 'Kassovitz, Mathieu',
        photo: 'Mathieu_Kassovitz.jpg',
        reponse: 'pas-condamne',
        infosSupplementaires: 'Acteur, réalisateur, producteur, scénariste, monteur\n\nDes témoignages ont fait surface concernant des comportements déplacés et des remarques sexistes sur des tournages impliquant Mathieu Kassovitz.'
    },          
    {
        nom: 'Robert, Denis',
        photo: 'Denis_Robert.jog',
        reponse: 'pas-condamne',
        infosSupplementaires: 'Journaliste, écrivain\n\nDenis Robert a été accusé de harcèlement moral par plusieurs anciennes collaboratrices.'
    },    
    {
        nom: 'JoeyStarr',
        photo: 'JoeyStarr.jpg',
        reponse: 'condamne',
        infosSupplementaires: 'Rapeur, auteur-intérprête, acteur\n\nEn 1998, JoeyStarr a été condamné pour des violences commises à l\'encontre d\'une hôtesse de l\'air. Il l\'avait giflée et lui avait craché au visage lors d\'un vol. Cette agression lui avait valu une condamnation judiciaire.\n\nEn 2009, JoeyStarr a été condamné par le tribunal correctionnel de Paris à trois mois de prison ferme pour des faits de violences conjugales commis à l\'encontre de son ancienne compagne, la mère de ses deux premiers enfants. Il a également été condamné à une amende de 2 000 euros pour coups et blessures.'
    },
    {
        nom: 'Taghmaoui, Saïd',
        photo: 'Saïd_Taghmaoui.jpg',
        reponse: 'pas-condamne',
        infosSupplementaires: 'Acteur\n\nL\'acteur a accordé une interview au magazine marocain "Femmes du Maroc" dans laquelle il a dénoncé la prostitution au Maroc. Cependant, la manière dont il a abordé le sujet a suscité de vives réactions, notamment de la part de féministes marocaines. Ses propos ont été jugés sexistes, objectifiants et moralisateurs envers les femmes marocaines.'
    },
    {
        nom: 'Gaccio, Bruno',
        photo: 'Bruno_Gaccio.jpg',
        reponse: 'pas-condamne',
        infosSupplementaires: 'Scénariste, producteur\n\nBruno Gaccio a été critiqué pour des propos et des sketchs jugés sexistes et misogynes au cours de sa carrière, notamment en tant qu\'ancien auteur des "Guignols de l\'info".\n\nAu-delà des "Guignols", certaines de ses interventions médiatiques ou prises de position ont également été jugées sexistes ou misogynes par des observateurs et des associations féministes.'
    },          
    {
        nom: 'Cassel, Vincent',
        photo: 'Vincent_Cassel.jpg',
        reponse: 'pas-condamne',
        infosSupplementaires: 'Acteur, réalisateur, scénariste, producteur\n\nDans une interview, il a déclaré : "Si les hommes deviennent trop féminins, il va y avoir un problème" et "C\'est presque honteux d\'être masculin aujourd\'hui."\n\nCes remarques ont suscité un débat et ont conduit à certaines accusations de misogynie. Cassel s\'est défendu en expliquant qu\'il était entouré de femmes (sa femme, ses filles, son ex-femme et sa mère) et que son intention était de critiquer une image déformée de la masculinité promue sur les réseaux sociaux, et non d\'être misogyne. Il a argumenté que les gens oubliaient l\'essence des choses et étaient poussés à se conformer à de fausses images de la façon dont les hommes et les femmes devraient être.'
    },
    {
        nom: 'Lévy, Bernard-Henri',
        photo: 'Bernard-Henri_Lévy.jpg',
        reponse: 'pas-condamne',
        infosSupplementaires: 'Ecrivain, éditeur, chroniqueur\n\nBernard-Henri Lévy a défendu publiquement Dominique Strauss-Kahn en mettant en avant la présomption d\'innocence et en critiquant le traitement médiatique de l\'affaire. Cela a provoqué des réactions négatives de la part de ceux qui estimaient qu\'il ne prenait pas suffisamment en compte la parole de la victime présumée.'
    },    
    {
        nom: 'Lalanne, Francis',
        photo: 'Francis_Lalanne.png',
        reponse: 'pas-condamne',
        infosSupplementaires: 'Acteur, homme politique, poète, chanteur, auteur-compositeur-interprète\n\nFrancis Lalanne a été placé en garde à vue le 2 mai 2023 suite à une plainte de son ex-compagne pour des faits de violences commises à son égard.\n\nIl a également été rapporté en février 2023 qu\'il avait eu un conflit avec son ex-compagne, ce qui avait initialement conduit à des poursuites pour « violences » et « harcèlement sur conjoint ».'
    },
    {
        nom: 'Bigard, Jean-Marie',
        photo: 'Jean-Marie_Bigard.jpg',
        reponse: 'pas-condamne',
        infosSupplementaires: 'Acteur, réalisateur, scénariste, humoriste\n\nCertains de ses sketchs et blagues ont été décrits comme vulgaires et sexistes, avec des groupes comme "Osez le féminisme !" critiquant spécifiquement son invitation en tant que vedette à un événement pour la Journée internationale des femmes (8 mars), qualifiant cela de "plus grosse arnaque sexiste".\n\nBigard a défendu son style, affirmant que ses spectacles sont souvent destinés à un public adulte (plus de 18 ans) et que la liberté de plaisanter sur tout devrait toujours exister sur scène. Il a également rejeté les critiques concernant sa vulgarité.\n\nAu-delà de ses sketchs, certaines de ses déclarations publiques ont également été perçues comme sexistes.'
    },      
    {
        nom: 'Balkany, Patrick',
        photo: 'Patrick_Balkany.jpg',
        reponse: 'pas-condamne',
        infosSupplementaires: 'Homme politique\n\nEn 2016, la championne olympique Marie-Claire Restoux a accusé Patrick Balkany de harcèlement sexuel. Il a également été rapporté qu\'une autre femme avait porté plainte pour des faits similaires, mais qu\'elle avait finalement retiré sa plainte.\n\nPatrick et Isabelle Balkany ont été accusés d\'avoir diffusé des images à caractère sexuel d\'un opposant politique. En 2023, ils ont été relaxés par le tribunal correctionnel de Nanterre, la preuve qu\'il y ait eu un photomontage n\'étant « pas suffisamment démontrée ».'
    },  
    {
        nom: 'Pivot, Bernard',
        photo: 'Bernard_Pivot.jpg',
        reponse: 'pas-condamne',
        infosSupplementaires: 'Journaliste, animateur\n\nEn décembre 2019, Bernard Pivot a été critiqué pour son attitude lors de l\'émission "Apostrophes" du 2 mars 1990. Durant l\'émission, il avait interviewé l\'écrivain Gabriel Matzneff sur un ton léger, allant jusqu\'à le qualifier, au milieu de rires généraux, de "professeur d\'éducation sexuelle" et de "collectionneur de jeunes filles (\'minettes\')". Cette séquence a refait surface en raison des révélations et accusations ultérieures concernant les relations de Matzneff avec des mineures.\n\nPivot a lui-même exprimé plus tard des regrets de ne pas avoir eu "les mots qu\'il fallait" à l\'époque.'
    },    
    {
        nom: 'Gainsbourg, Serge',
        photo: 'Serge_Gainsbourg.jpg',
        reponse: 'pas-condamne',
        infosSupplementaires: 'Chanteur, acteur, musicien, scénariste, compositeur, auteur-compositeur-interprète, poète, écrivain, réalisateur, peintre\n\nGainsbourg était connu pour ses provocations et ses remarques parfois choquantes à la télévision et dans les médias, y compris envers des femmes. Un incident notable est son échange tendu avec Whitney Houston en 1986.\n\nCertaines de ses chansons, comme "Les Sucettes" ou "Lemon Incest", ont suscité des polémiques en raison de leur double sens ou de leur thématique.\n\nEn 2020, la chanteuse Lio a déclaré sur ARTE Radio que Serge Gainsbourg était "un harceleur tout simplement, quelqu\'un de pas du tout cool avec les filles" et l\'a comparé à Harvey Weinstein. Cette déclaration est une opinion personnelle et une critique de son comportement passé.\n\nMalgré ces controverses et critiques, il n\'y pas eu de plaintes formelles déposées contre Serge Gainsbourg pour harcèlement ou agression sexuelle, ni de condamnations judiciaires à ce sujet de son vivant.'
    },    
    {
        nom: 'Vincent, Francky',
        photo: 'Franky_Vincent.jpg',
        reponse: 'pas-condamne',
        infosSupplementaires: 'Chanteur, auteur-compositeur-interprète, producteur\n\nLa majeure partie des critiques à l\'égard de Francky Vincent concerne le contenu de ses chansons, souvent perçues comme vulgaires, sexistes et réduisant les femmes à des objets sexuels.'
    },    
    {
        nom: 'Booba',
        photo: 'Booba.jpg',
        reponse: 'pas-condamne',
        infosSupplementaires: 'Rappeur, chanteur, producteur, entrepreneur, acteur\n\nEn 2023, son concert au Maroc a été annulé suite à une campagne de boycott l\'accusant de sexisme. Des paroles de chansons comme "petite Marocaine se tape Berlusconi" et "je vais à la Chicha qu\'pour les beurettes" ont été particulièrement pointées du doigt comme dégradantes et objectifiant les femmes.\n\nUne plainte pour diffamation et injures contre les femmes marocaines a été déposée par le Club des avocats au Maroc.'
    },
    {
        nom: 'Tibo InShape',
        photo: 'Tibo_InShape.png',
        reponse: 'pas-condamne',
        infosSupplementaires: 'Influenceur, entrepreneur\n\nTibo InShape n\'est pas accusé directement dans la polémique de sa vidéo avec Thérèse Hargot. C\'est Thérèse Hargot qui est accusée d\'avoir banalisé le viol conjugal avec ses propos sur les "rendez-vous sexe" obligatoires. Tibo InShape est critiqué pour avoir diffusé ces propos sur sa chaîne.'
    },
    {
        nom: 'Rosello, Luc',
        photo: 'Personne.png',
        reponse: 'pas-condamne',
        infosSupplementaires: 'Metteur en scène\n\nPlusieurs témoignages ont fait surface, notamment via les réseaux sociaux et des articles de presse, accusant Luc Rosello de violences sexuelles et de harcèlement. Ces témoignages décrivent des comportements inappropriés, des pressions et des agressions.\n\nUne partie des témoignages proviennent de personnes travaillant dans le milieu du doublage, où Luc Rosello est actif. Ces témoignages évoquent des abus de pouvoir et des comportements prédateurs.\n\nLuc Rosello a nié catégoriquement ces accusations et a annoncé avoir déposé plainte pour diffamation.'
    },
    {
        nom: 'InThePanda',
        photo: 'Inthepanda.jpg',
        reponse: 'pas-condamne',
        infosSupplementaires: 'Influenceur\n\nPlusieurs extraits de ses streams et d\'anciennes vidéos ont refait surface, montrant InThePanda tenir des propos jugés sexistes, dégradants envers les femmes, et parfois homophobes. Ces remarques ont suscité de vives critiques sur les réseaux sociaux.\n\nDes témoignages ont émergé concernant des comportements inappropriés lors de conventions et d\'événements, où il aurait tenu des propos ou eu des attitudes malaisantes envers des fans, parfois mineures. Ces accusations n\'ont pas fait l\'objet de plaintes judiciaires à ma connaissance.\n\nFace à la polémique grandissante, InThePanda a publié des messages d\'excuses sur les réseaux sociaux, reconnaissant la maladresse et l\'inappropriation de certains de ses propos passés. Il a affirmé avoir évolué et ne plus partager ces opinions.'
    },    
    {
        nom: 'Mitch D.',
        photo: 'Personne.png',
        reponse: 'condamne',
        infosSupplementaires: 'Educateur sportif\n\nIl est accusé d\'avoir agressé et harcelé sexuellement plusieurs jeunes footballeuses au club de la Salésiennes (17e arrondissement de Paris). Il aurait envoyé des SMS inappropriés à certaines joueuses, tenté de les alcooliser et serait entré dans les vestiaires pendant qu\'elles se changeaient.\n\nSuite à ces plaintes, la mairie de Paris a demandé un rapport qui a conduit à son éviction et lui a interdit d\'exercer auprès d\'enfants pendant trois ans.\n\nIl a écopé de trois ans de prison avec sursis.'
    },
    {
        nom: 'Moulévrier, Gérard',
        photo: 'Gérard_Moulèvrier.jpg',
        reponse: 'pas-condamne',
        infosSupplementaires: 'Directeur du casting, acteur, directeur artistique, metteur en scène, auteur\n\nPlainte pour agression sexuelle déposée à son encontre en février 2024 par l\'acteur Francis Renaud.\n\nCette plainte visait également le réalisateur André Téchiné pour harcèlement sexuel, pression grave, menace de mort réitérée et agression sexuelle, ainsi qu\'une personne non identifiée pour menaces de mort.\n\nette plainte a été classée sans suite pour cause de prescription en juin 2024 par le parquet de Paris.'
    },
    {
        nom: 'Barde, Bruno',
        photo: 'Personne.png',
        reponse: 'pas-condamne',
        infosSupplementaires: 'Directeur de festival, Attaché de presse, Acteur\n\nAccusations d\'agressions et de harcèlement sexuel de la part de sept ex-collaboratrices. Les faits se seraient déroulés entre 2014 et 2023.\n\nLes accusations portent sur des comportements inappropriés, des humiliations, des caresses, des propositions de massages ou de bains, et des remarques sexistes. Une des femmes a témoigné d\'une tentative d\'embrassade dans un bureau parisien.'
    },
    {
        nom: 'Lanzmann, Claude',
        photo: 'Claude_Lanzmann.jpg',
        reponse: 'pas-condamne',
        infosSupplementaires: '	Journaliste, producteur, scénariste, documentariste, réalisateur, écrivain\n\n2012 (Aéroport de Tel Aviv) : Une employée de sécurité de l\'aéroport a déclaré avoir été embrassée de force par Claude Lanzmann. Ce dernier a répondu à cet incident dans un article du Monde.\n\nOctobre 2017 (Mouvement MeToo) : La journaliste néerlandaise Joyce Roodnat a raconté qu\'en 1985, lors d\'une interview à son domicile concernant le film Shoah, Claude Lanzmann lui avait imposé des contacts physiques non consentis. Elle a réitéré ces accusations à la télévision néerlandaise, ajoutant que deux autres femmes journalistes lui avaient rapporté avoir subi des procédés similaires de la part de Lanzmann.\n\nAllemagne : La journaliste Natascha Freundel a raconté dans un article que Claude Lanzmann avait essayé de l\'embrasser de force après une interview, qualifiant ce geste de "répugnant".'
    },      
    {
        nom: 'Wass Freestyle',
        photo: 'Personne.png',
        reponse: 'pas-condamne',
        infosSupplementaires: 'Freestyleur, Influenceur\n\nPlusieurs filles mineures l\'ont accusé de les avoir draguées alors qu\'il connaissait leur âge et qu\'il avait près de 30 ans à l\'époque.'
    },
    {
        nom: 'Experimentboy',
        photo: 'Personne.png',
        reponse: 'pas-condamne',
        infosSupplementaires: 'Influenceur\n\nPlusieurs témoignages ont fait état de comportements inappropriés et de dragues insistantes envers des abonnées mineures. Ces témoignages décrivaient des messages privés à caractère sexuel, des tentatives de rencontres malgré le refus des jeunes filles, et un abus de sa notoriété pour établir des contacts inappropriés.\n\nÀ l\'époque, Experimentboy avait réagi en publiant des excuses publiques, reconnaissant des erreurs de jugement et un comportement inapproprié. Il avait affirmé avoir pris conscience de ses actes et vouloir changer.'
    },    
    {
        nom: 'TheKairi78',
        photo: 'Personne.png',
        reponse: 'pas-condamne',
        infosSupplementaires: 'Influenceur\n\nEn juillet 2020, un tweet a révélé que Jaouad (TheKairi78), alors âgé de 33 ans, entretenait une relation avec Julie Pospieszny, une jeune fille de 16 ans. Jaouad a confirmé cette relation sur Twitter, affirmant son amour pour elle et indiquant que les parents de la jeune fille approuvaient leur union, tout en rappelant que cette relation était légale en France.\n\nLe parquet de Paris a ouvert une enquête suite à une plainte déposée contre Jaouad Daouki en juillet 2023. Une femme l\'accusait de viol et d\'avoir été droguée. Les analyses médicales effectuées sur la plaignante ont révélé qu\'aucune substance n\'avait été détectée dans son organisme, contredisant ainsi ses premières déclarations concernant le fait d\'avoir été droguée. Il a été reconnu non coupable.'
    },
    {
        nom: 'Ramadan, Tariq',
        photo: 'Tariq_Ramadan.jpg',
        reponse: 'condamne',
        infosSupplementaires: 'Islamologue, théologien\n\nTariq Ramadan a fait l\'objet de multiples accusations de viol et de harcèlement sexuel dans plusieurs pays, notamment en France et en Suisse. Plusieurs femmes ont porté plainte contre lui pour des faits qui se seraient déroulés entre 2008 et 2016.\n\nEn septembre 2024, la justice genevoise l\'a condamné en appel à 3 ans de prison, dont un an ferme, pour viol et contrainte sexuelle sur une femme dans un hôtel en 2008. Il a été reconnu coupable d\'avoir imposé un acte sexuel et d\'autres actes d\'ordre sexuel de manière brutale et violente. Tariq Ramadan a annoncé son intention de recourir au Tribunal fédéral suisse.\n\nEn juin 2024, la cour d\'appel de Paris a renvoyé Tariq Ramadan devant la cour criminelle départementale pour des accusations de viols sur trois femmes, tout en écartant une quatrième plainte.\n\nEn première instance en Suisse, il avait été acquitté en mai 2023, le tribunal estimant qu\'il n\'y avait pas suffisamment d\'éléments matériels pour emporter sa conviction au-delà du doute. Cependant, cet acquittement a été annulé en appel.\n\nTariq Ramadan a toujours nié les accusations portées contre lui, affirmant que les relations étaient consenties et dénonçant des motivations politiques derrière les plaintes.'
    },
    {
        nom: 'Sarde, Alain',
        photo: 'Personne.png',
        reponse: 'pas-condamne',
        infosSupplementaires: 'Producteur, acteur\n\nNeuf femmes ont accusé publiquement le producteur de cinéma Alain Sarde d\'agressions sexuelles et de viols dans une enquête publiée par le magazine Elle en mai 2024. Les faits dénoncés se seraient déroulés majoritairement dans les années 1980 et 1990, et pour certaines victimes, à l\'époque où elles étaient mineures.\n\nLes témoignages décrivent un mode opératoire similaire : des invitations au domicile du producteur, des tentatives de séduction, des offres de cadeaux (comme des chocolats), suivies d\'agressions.\n\nAucune plainte judiciaire n\'a été déposée concernant ces faits. Alain Sarde a nié les accusations.\n\nAlain Sarde avait déjà été mis en examen pour viol et tentative de viol en 1997 et brièvement incarcéré avant de bénéficier d\'un non-lieu.'
    },
    {
        nom: 'Pernoo, Jérôme',
        photo: 'Jérôme_Pernoo.jpg',
        reponse: 'condamne',
        infosSupplementaires: 'Violoncelliste, professeur de musique\n\nDeux anciens élèves signalent des faits d\'agression et de harcèlement sexuels, entraînant une alerte au procureur de la République par la directrice du CNSMDP et une première suspension de Pernoo. Une enquête interne est menée, concluant à une exclusion temporaire d\'un an prononcée en septembre 2021. Cette enquête est fortement contestée par des soutiens de Pernoo pour manque d\'impartialité et détournement de propos.\n\nUne enquête préliminaire pour "agression sexuelle sur mineur" est ouverte en avril 2021 suite à des plaintes de deux victimes présumées, dont un mineur au moment des faits.\n\nAprès une seconde enquête interne, Pernoo est licencié par le CNSMDP en mai 2022 pour "manquements graves à ses obligations de dignité et d\'exemplarité". Son licenciement est confirmé par le tribunal administratif en novembre 2022.\n\nLors d\'une procédure en référé contre son licenciement, des témoignages de victimes sont lus, décrivant des "bisous dans le cou", des "câlins" inappropriés, des "humiliations" publiques, des contrepèteries ou surnoms à connotation sexuelle, et des intrusions dans la vie privée des élèves.\n\nJérôme Pernoo est renvoyé devant un tribunal correctionnel pour agression sexuelle sur mineur et harcèlement sexuel. Il est reconnu coupable d’agression sexuelle sur mineur de 14 ans et condamné à un an de prison avec sursis, à une inscription au Fichier des auteurs d\'infractions sexuelles et à une interdiction d\'enseigner à des mineurs pendant dix ans.'
    },          
    {
        nom: 'Roth, François-Xavier',
        photo: 'Francois-Xavier_Roth.jpg',
        reponse: 'pas-condamne',
        infosSupplementaires: '	Chef d\'orchestre\n\nEn mai 2024, le magazine d\'investigation français Le Canard Enchaîné a rapporté les accusations de sept femmes affirmant que Roth leur avait envoyé de nombreux messages à caractère sexuel. Ces messages ont été décrits comme non désirés et créant un malaise chez les destinataires. Sans admettre explicitement le harcèlement, Roth a reconnu avoir eu des "échanges intimes par téléphone" et s\'est excusé auprès de ceux qu\'il "aurait pu choquer".\n\nEn décembre 2024, des informations ont indiqué que l\'enquête pénale concernant François-Xavier Roth avait été classée sans suite par le parquet de Cologne, faute de suspicion suffisante.'
    },
    {
        nom: 'Letort, Bruno',
        photo: 'Bruno_Letort.jpg',
        reponse: 'pas-condamne',
        infosSupplementaires: 'Compositeur, producteur, essayiste\n\nSelon un rapport de l\'Institut pour l\'égalité des femmes et des hommes, sept femmes ont témoigné à l\'encontre de Bruno Letort pour « harcèlement, abus de pouvoir et violences sexistes et sexuelles ».\n\nSuite à ce rapport, Bruno Letort a été démis de ses fonctions de direction d\'Ars Musica en juin 2024 par le conseil d\'administration, à la demande de Bénédicte Linard, Ministre de la Culture, des Médias et des Droits des femmes, qui a qualifié cette décision d\'« indispensable en regard de la gravité des faits ».\n\nLes avocates de Bruno Letort ont dénoncé les qualificatifs utilisés par le cabinet de la Ministre, soulignant que le rapport de l\'Institut ne mentionne nulle part de "violences sexistes ou sexuelles". Elles ont également insisté sur le fait qu\'il n\'y a ni plainte au pénal, ni enquête menée par des autorités judiciaires pour établir la véracité des témoignages et leur qualification juridique.'
    },    
    {
        nom: 'Tubéry, Jean',
        photo: 'Personne.png',
        reponse: 'condamne',
        infosSupplementaires: 'Cornettiste, chef de chœur, flûtiste à bec, professeur de musique\n\nAccusations de violence et harcèlements sexistes et sexuels (juin 2022) : Suite à ces accusations, il a été sanctionné et mis à pied par le CNSM de Lyon, mais a ensuite été réintégré en octobre. De nouveaux témoignages ont émergé, entraînant une nouvelle enquête interne du conservatoire.\n\nÀ la suite de trois plaintes d\'étudiantes du CNSM de Lyon déposées en 2023, Jean Tubéry a été condamné à six mois de prison avec sursis pour des « propos à connotation sexuelle imposés de manière répétée » dans le cadre de sa position d\'autorité en tant qu\'enseignant.\n\nJean Tubéry a fait appel de sa condamnation, considérant qu\'il s\'agit d\'une erreur judiciaire.'
    },
    {
        nom: 'Cantat, Bertrand',
        photo: 'Bertrand_Cantat.jpg',
        reponse: 'condamne',
        infosSupplementaires: '	Guitariste, auteur-compositeur-interprète\n\nDurant un tournage de téléfilm à Vilnius, en Lituanie, en juillet 2003, une violente dispute éclate entre Bertrand Cantat et Marie Trintignant. Au cours de cette altercation, Bertrand Cantat porte plusieurs coups au visage de Marie Trintignant. Marie Trintignant décède le 1er août 2003 des suites des lésions cérébrales causées par les coups.\n\nBertrand Cantat est arrêté et jugé en Lituanie, où les faits se sont déroulés.\n\nEn janvier 2004, il est condamné à huit ans de prison pour homicide involontaire (et non pour meurtre, le tribunal lituanien n\'ayant pas retenu l\'intention de tuer).\n\nAprès avoir purgé une partie de sa peine en Lituanie puis en France, il est libéré conditionnellement en octobre 2007, après avoir effectué un peu plus de quatre ans de prison. Cette libération conditionnelle était assortie de conditions, notamment un suivi psychologique.\n\nSa libération conditionnelle a pris fin en 2011.'
    },
    {
        nom: 'Pistorius, Oscar',
        photo: 'Oscar_Pistorius.jpg',
        reponse: 'condamne',
        infosSupplementaires: 'Athlète\n\nLe 14 février 2013, Oscar Pistorius a tiré quatre coups de feu à travers la porte fermée des toilettes de sa résidence, tuant sa compagne, Reeva Steenkamp, qui s\'y était réfugiée. Il a affirmé avoir cru qu\'il s\'agissait d\'un cambrioleur et avoir tiré par erreur, sans savoir que c\'était Reeva derrière la porte.\n\nIl a été reconnu coupable d\'homicide involontaire et condamné à cinq ans de prison.\n\nLa Cour suprême d\'appel a infirmé le verdict d\'homicide involontaire et l\'a reconnu coupable de meurtre. Il a été condamné à six ans de prison pour meurtre.\n\nSuite à un nouvel appel du parquet, la Cour suprême d\'appel a alourdi sa peine à 13 ans et 5 mois de prison pour meurtre.\n\nAprès avoir purgé plus de la moitié de sa peine, Oscar Pistorius a été libéré conditionnellement le 5 janvier 2024. Sa libération est soumise à des conditions strictes, notamment une thérapie pour la gestion de la colère et des travaux d\'intérêt général. Il restera sous surveillance jusqu\'à l\'expiration de sa peine complète en décembre 2029.'
    },
    {
        nom: 'Retro X',
        photo: 'Retro_x.jpg',
        reponse: 'pas-condamne',
        infosSupplementaires: 'Rappeur, chanteur, auteur-compositeur-interprète\n\nHuit femmes accusent le rappeur Retro X de nombreuses agressions sexuelles, qui se seraient déroulées principalement entre 2016 et 2018 dans son appartement toulousain.'
    },          
    {
        nom: 'Jorrdee',
        photo: 'Personne.png',
        reponse: 'condamne',
        infosSupplementaires: 'Rappeur, producteur\n\nJorrdee, un rappeur français, a été impliqué dans des affaires de violences conjugales.\n\nEn février 2023, il a été condamné à six mois de prison avec sursis et à une amende de 500€ pour des violences commises à l\'encontre de Maria, une des femmes ayant témoigné contre lui.\n\nDes témoignages de quatre femmes ont été recueillis, décrivant des faits de violence, incluant des étranglements et des coups au visage ayant entraîné des ecchymoses. Ces femmes décrivent également une forte emprise psychologique et des violences récurrentes.\n\nJorrdee a été diagnostiqué schizophrène et a plaidé l\'amnésie et la maladie mentale concernant les faits qui lui sont reprochés. Il avait auparavant été interné pour schizophrénie.'
    },
    {
        nom: 'Escoffier, Kevin',
        photo: 'Kevin_Escoffier.jpg',
        reponse: 'pas-condamne',
        infosSupplementaires: 'Navigateur\n\nLa Fédération Française de Voile a signalé des faits « apparentés à une agression sexuelle » qui se seraient déroulés en mai 2023 aux États-Unis lors d\'une escale de The Ocean Race. Une enquête judiciaire a été ouverte par le parquet de Paris. Escoffier a quitté la course et son équipe suite à cet événement.\n\nLa FFVoile a annoncé avoir reçu de nouveaux signalements et a ouvert une nouvelle procédure disciplinaire pour « comportements inappropriés envers des femmes ».\n\nEscoffier a été placé en garde à vue en février 2025 à Lorient dans le cadre de trois plaintes pour agressions sexuelles. Dix femmes auraient été auditionnées. Il a contesté les accusations et a été libéré sans contrôle judiciaire.'
    },    
    {
        nom: 'Racle, Jean-Roland',
        photo: 'Personne.png',
        reponse: 'pas-condamne',
        infosSupplementaires: '	Patineur artistique, entraîneur de patinage artistique\n\nHélène Godard, une de ses anciennes élèves mineures, l\'a accusé de viol et d\'agressions sexuelles, affirmant avoir subi des "attouchements" sexuels lorsqu\'elle avait entre 15 et 16 ans et qu\'il l\'hébergeait avec son épouse.\n\nBien que ces accusations aient été rendues publiques, Jean-Roland Racle n\'a pas été poursuivi en justice, car les faits étaient prescrits.'
    },
    {
        nom: 'Samba, Giscard',
        photo: 'Personne.png',
        reponse: 'pas-condamne',
        infosSupplementaires: '	Entraîneur d\'athlétisme\n\nPlusieurs athlètes, dont Pascal Martinot-Lagarde et Cindy Billaud, ont témoigné de pratiques inacceptables de la part de Samba, évoquant des humiliations et des allusions sexuelles récurrentes. Cindy Billaud a déclaré avoir "vécu 14 ans d\'humiliation".\n\nUne enquête préliminaire a été ouverte par le parquet de Créteil suite à une plainte. Une jeune femme, alors âgée de 22 ans, avait décrit plusieurs relations sexuelles imposées en 2016 par son ancien entraîneur à l\'US Créteil.\n\nL\'enquête ouverte pour "viol, agression sexuelle et harcèlement sexuel" a été classée sans suite par le parquet de Créteil en février 2019.'
    },
    {
        nom: 'Prigent, Jean-Yves',
        photo: 'Personne.png',
        reponse: 'condamne',
        infosSupplementaires: 'Kayakiste\n\nEn mars 2024, une plainte a été déposée contre lui pour des faits d\'agression sexuelle sur un jeune kayakiste de 16 ans lors d\'une compétition à Châteauneuf-sur-Cher. Une seconde victime, également âgée de 16 ans, aurait subi une agression similaire la nuit suivante. Prigent a reconnu les faits et a été placé sous contrôle judiciaire. En juillet 2024, il a été condamné à quatre ans de prison, dont un an ferme avec bracelet électronique et trois ans avec sursis probatoire, pour ces deux agressions sexuelles sur mineurs.\n\nEn novembre 2024, une nouvelle procédure judiciaire a conduit à sa mise en examen et à son écroulement pour des accusations plus graves et concernant d\'autres victimes. Il est accusé de viols, agressions et harcèlement sexuel sur des mineurs. Les faits concernent un jeune homme pour des agressions sexuelles datant d\'une période comprise entre 2005 et 2008, une jeune femme pour des propos répétés à connotation sexuelle et l\'une des deux victimes de la première affaire pour des faits de viol survenus en 2023 et 2024.'
    },
    {
        nom: 'Gailhaguet, Didier',
        photo: 'Didier_Gailhaguet.jpg',
        reponse: 'pas-condamne',
        infosSupplementaires: 'Patineur artistique, entraîneur, dirigeant sportif\n\nSarah Abitbol l\'a accusé d\'avoir couvert les agissements de son ancien entraîneur et a demandé sa démission de la présidence de la Fédération Française des Sports de Glace (FFSG).\n\nUn collectif d\'anciens sportifs et professionnels a lancé une pétition demandant également sa démission pour "manquement à la sécurité des enfants depuis plus de 20 ans".'
    },          
    {
        nom: 'Auradou, Hugo',
        photo: 'Personne.png',
        reponse: 'pas-condamne',
        infosSupplementaires: 'Rugbyman\n\nEn juillet 2024, Hugo Auradou, joueur de rugby du XV de France, a été mis en examen en Argentine pour viol aggravé, en même temps que son coéquipier Oscar Jegou. Les faits se seraient déroulés dans un hôtel à Mendoza après un match de l\'équipe de France. Les deux rugbymen ont toujours nié les accusations, affirmant qu\'il s\'agissait d\'une relation consentie.'
    },
    {
        nom: 'Jammes, Loïck',
        photo: 'Loick_Jammes.jpg',
        reponse: 'condamne',
        infosSupplementaires: 'Rugbyman\n\nLoïck Jammes, ancien rugbyman du Football Club de Grenoble rugby, a été accusé, avec deux autres anciens joueurs, de viol collectif sur une étudiante de vingt ans en 2017.\n\nEn décembre 2024, Loïck Jammes a été jugé et condamné à quatorze ans de prison pour ce crime.'
    },    
    {
        nom: 'De Camaret, Régis',
        photo: 'Personne.png',
        reponse: 'condamne',
        infosSupplementaires: 'Entraîneur de tennis\n\nPlusieurs jeunes joueuses de tennis qu\'il entraînait ont porté plainte contre lui pour des agressions sexuelles qui se seraient déroulées dans les années 1980 et 1990.\n\nEn 2010, Régis de Camaret a été condamné à huit ans de prison pour viols et agressions sexuelles sur mineures. Sa condamnation a été confirmée en appel en 2012.'
    },
    {
        nom: 'Beyer, Gilles',
        photo: 'Personne.png',
        reponse: 'pas-condamne',
        infosSupplementaires: 'Patineur artistique, entraîneur français\n\nL\'ancienne championne de patinage artistique Sarah Abitbol l\'a accusé de viol dans son livre paru en 2020, des faits qui remonteraient au début des années 1990, lorsqu\'elle était mineure. D\'autres témoignages ont suivi, notamment ceux de Nadjma Mahamoud et de sa mère pour harcèlement sexuel et chantage, ainsi qu\'Agnès Gosselin pour des gestes déplacés.\n\nGilles Beyer a été mis en examen en 2021.\n\nSon décès est survenu avant la fin de l\'instruction judiciaire, mettant fin aux poursuites.'
    },
    {
        nom: 'Chabanne, Saïd',
        photo: 'Personne.png',
        reponse: 'condamne',
        infosSupplementaires: 'Homme d\affaire, ancien président du SCO d\'Angers\n\nSaïd Chabane a été condamné pour agression sexuelle aggravée à deux ans de prison, dont un an avec sursis.\n\nLes accusations provenaient de sept jeunes femmes, dont des employées du club, qui ont allégué des incidents survenus entre 2014 et 2019. Ceux-ci comprenaient des attouchements non consentis, des étreintes forcées et des tentatives de baisers.'
    },
    {
        nom: 'Didym, Michel',
        photo: 'Michel_Didym.jpg',
        reponse: 'pas-condamne',
        infosSupplementaires: 'Metteur en scène, comédien, directeur de théâtre\n\nUne plainte pour viol a été déposée contre lui à Nancy, entraînant l\'ouverture d\'une enquête. Le ministère de la Culture a également effectué un signalement à la justice.\n\nUne vingtaine d\'actuelles ou anciennes comédiennes ont témoigné dans Libération de gestes déplacés et de remarques sexistes de sa part. Ces accusations ont marqué le début du mouvement #MeTooThéâtre.'
    },          
    {
        nom: 'Notte, Pierre',
        photo: 'Personne.png',
        reponse: 'pas-condamne',
        infosSupplementaires: 'Journaliste, acteur, réalisateur, écrivain, dramaturge, compositeur\n\nEn mai 2024, il a été rapporté que Pierre Notte a été placé sous contrôle judiciaire dans le cadre d\'une enquête concernant cette accusation. Il est soupçonné d\'avoir abusé de l\'une de ses anciennes élèves.\n\nPierre Notte conteste ces allégations, affirmant avoir vécu une "véritable histoire d\'amour" avec l\'adolescente concernée.'
    },
    {
        nom: 'DirtyBiology',
        photo: 'Léo_Grasset.png',
        reponse: 'pas-condamne',
        infosSupplementaires: 'Influenceur, écrivain\n\nPlusieurs femmes témoignent de violences sexuelles ou psychologiques, de comportements misogynes, d\'un problème avec le consentement sexuel et d\'emprise dans ses relations. L\'une d\'elles, sous le pseudonyme Lisa, l\'accuse de viol en juillet 2016. Aucune plainte n\'est déposée à ce moment-là. La vidéaste Clothilde Chamussy dépose une plainte pour harcèlement sexuel. Une étudiante en journalisme, Léa, dépose de son côté une plainte pour viol.\n\nLe parquet de Paris ouvre une enquête préliminaire.\n\nMediapart publie le témoignage de Léa et de quatre autres femmes accusant Léo Grasset de comportements inappropriés.\n\nLéo Grasset est placé en garde à vue et entendu par la police suite aux trois premières plaintes pour viol. Il est relâché le même jour sans poursuites.'
    },    
    {
        nom: 'Duhamel, Olivier',
        photo: 'Olivier-Duhamel.jpg',
        reponse: 'pas-condamne',
        infosSupplementaires: 'Homme politique, avocat, animateur, politologue, scénariste\n\nSa belle-fille, Camille Kouchner, l\'accuse publiquement dans son livre La Familia grande d\'inceste, de viol et d\'agressions sexuelles répétées sur son frère jumeau ("Victor") durant leur adolescence, à partir des années 1988-1989.\n\nLe parquet de Paris ouvre une enquête pour "viols et agressions sexuelles par personne ayant autorité". Il est révélé que des soupçons et des tentatives d\'alerte existaient au sein de l\'entourage familial depuis 2008, notamment de la part de Marie-France Pisier.\n\n"Victor" Kouchner dépose plainte contre son beau-père. L\'enquête vise à vérifier la prescription des faits et à identifier d\'éventuelles autres victimes.\n\nEntendu par la brigade de protection des mineurs, Olivier Duhamel reconnaît "difficilement" les faits qui lui sont reprochés, notamment les abus sur son beau-fils dans les années 1980.\n\nL\'enquête est classée sans suite pour cause de prescription des faits.'
    },
    {
        nom: 'Cochard, Maxime',
        photo: 'Denis_Baupin.jpg',
        reponse: 'pas-condamne',
        infosSupplementaires: 'Homme politique, auteur, éditeur\n\nGuillaume T. T., un étudiant de 18 ans, a accusé Maxime Cochard et son compagnon Victor Laby de l\'avoir violé en octobre 2018 alors qu\'il se trouvait dans une situation de vulnérabilité. Il a décrit des rapports sexuels "sans violence, ni menace, ni contrainte, mais de la surprise", envisageant de porter plainte pour viol par surprise.\n\nMaxime Cochard a nié les faits, évoquant une relation consentie et annonçant une plainte en diffamation.\n\nGuillaume T. T. s\'est suicidé. Sa famille a porté plainte contre X, estimant que les personnes mises en cause avaient réagi médiatiquement pour le discréditer.\n\nL\'enquête visant Maxime Cochard a été classée sans suite, le parquet de Paris écartant sa responsabilité dans le suicide de Guillaume T. T. L\'enquête a conclu que Guillaume T. T. n\'avait pas explicitement refusé les rapports et qu\'ils étaient pleinement consentis dans les mois suivants.\n\nIl est révélé que Guillaume T. T. faisait lui-même l\'objet d\'une accusation d\'agression sexuelle. Il avait exprimé sa peur d\'être considéré comme un paria avant son suicide.'
    },
    {
        nom: 'Lévêque, Claude',
        photo: 'Claude_Lévêque.jpg',
        reponse: 'pas-condamne',
        infosSupplementaires: 'Artiste visuel\n\nUne enquête préliminaire est ouverte pour « viols et agression sexuelles sur mineur de moins de 15 ans » pour des faits prescrits survenus dans les années 1980. Lévêque reconnaît dans un courriel une "aventure forte" et une "souffrance souterraine" chez le plaignant.\n\nMediapart publie par la suite des témoignages anonymes de deux autres personnes évoquant une emprise de Lévêque dans les années 1980.\n\nClaude Lévêque est mis en examen pour « viols sur mineur de quinze ans », « viols sur mineur par personne ayant autorité de droit ou de fait sur la victime », et « agressions sexuelles sur mineur de quinze ans par personne ayant autorité ».\n\nDeux frères ont également porté plainte pour des faits non prescrits, l\'un pour des agressions sexuelles entre 1997 et 2000 (âgé de 13 à 16 ans), l\'autre pour plusieurs agressions, dont des viols, entre 1989 et 1997.'
    },
    {
        nom: 'Brisseau, Jean-Claude',
        photo: 'Personne.png',
        reponse: 'condamne',
        infosSupplementaires: 'Réalisateur, scénariste, producteur, enseignant\n\nL\'actrice Noémie Kocher a porté plainte en 2001 contre lui pour harcèlement sexuel.\n\nLe tribunal correctionnel de Paris l\'a condamné en 2005 à un an de prison avec sursis et 15 000 € d\'amende pour harcèlement sexuel sur deux actrices lors d\'auditions pour son film Choses secrètes.\n\nEn appel en 2006, il a été condamné pour agression sexuelle sur une troisième actrice, Julie Quéré.'
    },          
    {
        nom: 'Ruggia, Christophe',
        photo: 'Daniel_Cohn-Bendit.jpg',
        reponse: 'condamne',
        infosSupplementaires: 'Réalisateur, scénariste, producteur\n\nAdèle Haenel a accusé Christophe Ruggia d\'« attouchements » et de « harcèlement sexuel » alors qu\'elle était âgée de douze à quinze ans, lors du tournage du film Les Diables.\n\nUne enquête préliminaire a été ouverte pour « agressions sexuelles » sur mineure et « harcèlement sexuel », et Adèle Haenel a déposé plainte. Christophe Ruggia a été mis en examen pour « agressions sexuelles sur mineur de 15 ans par personne ayant autorité sur la victime ». Le parquet a requis un procès pour « agressions sexuelles aggravées sur mineur de 15 ans », retenant la minorité de l\'actrice et la position d\'autorité du réalisateur comme circonstances aggravantes.\n\nLe procès s\'est ouvert en décembre 2024, durant lequel Christophe Ruggia a nié les faits, évoquant un possible ressentiment de l\'actrice pour ne pas lui avoir proposé d\'autres rôles.\n\nChristophe Ruggia a été condamné à quatre ans de prison, dont deux ans ferme sous bracelet électronique. Il a annoncé son intention de faire appel.'
    },
    {
        nom: 'Moreau, David',
        photo: 'David-Moreau.jpg',
        reponse: 'pas-condamne',
        infosSupplementaires: 'Réalisateur, scénariste\n\nDavid Moreau, est accusé de viol qui se serait déroulé pendant le tournage du film King en 2020. Les faits allégués se seraient produits lors d\'une soirée privée organisée pour l\'équipe technique du film, en dehors des heures de travail, dans la nuit du 12 au 13 septembre 2020 à Sète.\n\nLa technicienne qui accuse le réalisateur a porté plainte et a quitté le tournage immédiatement après les faits.'
    },    
    {
        nom: 'Theis, Samuel',
        photo: 'Samuel_Theis.jpg',
        reponse: 'pas-condamne',
        infosSupplementaires: 'Acteur\n\nAccusé d\'agression sexuelle par un machiniste sur le tournage de Je le jure après un pot de tournage. Le technicien a porté plainte pour viol.\n\nAuditionné par la juge, Samuel Theis est placé sous le statut de témoin assisté (et non mis en examen). Il conteste l\'agression et évoque une relation consentie.'
    },
    {
        nom: 'Garrel, Philippe',
        photo: 'Philippe_Garrel.jpg',
        reponse: 'pas-condamne',
        infosSupplementaires: 'Réalisateur\n\nCinq comédiennes mettent en cause Philippe Garrel, l\'accusant d\'avoir eu des gestes déplacés, de tenter des baisers non consentis et de leur avoir demandé des faveurs sexuelles en échange d\'un rôle.'
    },
    {
        nom: 'Corneau, Alain',
        photo: 'Alain_Corneau.jpg',
        reponse: 'pas-condamne',
        infosSupplementaires: 'Réalisateur, acteur, scénariste, producteur\n\nL\'actrice Sarah Grappin a déclaré avoir subi des agressions sexuelles de la part d\'Alain Corneau dans les années 1990, alors qu\'elle avait 16 ans et lui 52 ans. Elle a précisé qu\'elle était sous l\'emprise du cinéaste à l\'époque.'
    },
    {
        nom: 'Kechiche, Abdellatif',
        photo: 'Abdellatif_Kechiche.jpg',
        reponse: 'pas-condamne',
        infosSupplementaires: 'Réalisateur, scénariste, acteur\n\nAbdellatif Kechiche a fait l\'objet d\'une accusation d\'agression sexuelle en 2018. Une jeune femme de 29 ans a porté plainte, affirmant avoir dîné avec le réalisateur dans la nuit du 23 au 24 juin 2018 à Paris et avoir été agressée sexuellement.\n\nL\'enquête ouverte suite à cette plainte a été classée sans suite par le parquet pour « infraction insuffisamment caractérisée ».'
    },          
    {
        nom: 'Téchiné, André',
        photo: 'André_Téchiné.jpg',
        reponse: 'pas-condamne',
        infosSupplementaires: 'Réalisateur, scénariste\n\nL\'acteur Francis Renaud a porté plainte contre André Téchiné et le directeur de casting Gérard Moulévrier pour des faits qui se seraient produits entre 1988 et 2004. Renaud accuse Téchiné de harcèlement sexuel et Moulévrier d\'agression sexuelle. Il aurait notamment évoqué dans son livre des avances et un comportement déplacé de la part de Téchiné lors d\'un déjeuner.\n\nLe procureur de la République d\'Évreux a confirmé le dépôt de plainte et l\'ouverture d\'une enquête, tout en soulignant la possible prescription des faits en raison de leur ancienneté et en appelant à la prudence quant à la qualification pénale à ce stade. Concernant Téchiné, le procureur a noté que les faits dénoncés par Renaud pourraient ne pas être suffisants pour caractériser un harcèlement sexuel.\n\nAndré Téchiné a contesté ces accusations.'
    },
    {
        nom: 'Tavernier, Nils',
        photo: 'Nils_Tavernier.jpg',
        reponse: 'pas-condamne',
        infosSupplementaires: 'Réalisateur, acteur, scénariste\n\nNils Tavernier est accusé de viol par deux femmes, Jennifer Covillault Miramont pour des faits qui se seraient produits en 1992, alors qu\'elle avait 13 ans et Laura Lardeux pour des faits datant de 2012, lors du tournage du film De toutes nos forces.\n\nNils Tavernier a réfuté ces accusations, affirmant n\'avoir rien à se reprocher.'
    },    
    {
        nom: 'Lioret, Philippe',
        photo: 'Philippe_Lioret.jpg',
        reponse: 'pas-condamne',
        infosSupplementaires: 'Réalisateur, scénariste, producteur\n\nPhilippe Lioret a été mis en cause en avril 2024 suite à une enquête de Radio France. Dix actrices ont témoigné de comportements inappropriés de sa part lors de castings au tournant des années 2010.\n\nAu moins deux comédiennes, Hélène Seuzaret et une autre sous pseudonyme, rapportent que Philippe Lioret a tenté de les embrasser lors d\'auditions pour le film "Toutes nos envies". Elles ont ressenti cela comme un abus de pouvoir de sa part en tant que potentiel employeur.\n\nPlusieurs actrices décrivent des situations où, pendant les essais, Philippe Lioret donnait la réplique et adoptait une "attitude charnelle", allant jusqu\'à vouloir des contacts physiques plus poussés pour rendre les scènes plus "vraies". Élodie Frenck a mis fin à son essai en raison de ce malaise.\n\nMarie Gillain, qui a obtenu le rôle principal dans "Toutes nos envies", a également évoqué une "sensation de malaise" due à l\'attitude du réalisateur pendant les essais, sans toutefois lui en avoir fait part à l\'époque en raison de son pouvoir.'
    },
    {
        nom: 'Lafosse, Joachim',
        photo: 'Joachim_Lafosse.jpg',
        reponse: 'pas-condamne',
        infosSupplementaires: 'Réalisateur, scénariste\n\nUne enquête de Mediapart a recueilli les témoignages de plusieurs techniciennes et comédiennes qui décrivent un climat de travail anxiogène, des remarques désobligeantes, des humiliations et un management brutal de la part de Joachim Lafosse sur différents tournages. Les témoignages parlent principalement de harcèlement moral, de propos humiliants et d\'une ambiance de travail délétère.\n\nSuite à ces révélations, le CNC a indiqué avoir été saisi de signalements concernant Joachim Lafosse et a lancé une enquête.'
    },
    {
        nom: 'Scimeca, Thomas',
        photo: 'Thomas_Scimeca.jpg',
        reponse: 'pas-condamne',
        infosSupplementaires: 'Compositeur, acteur, metteur en scène\n\nSept femmes accusent l’acteur Thomas Scimeca de violences sexuelles et psychologiques.\n\nDeux plaintes ont déjà été déposées, une pour tentative de viol par l’actrice Jeanne Faucher, qui décrit un comportement déplacé et un cunnilingus imposé en 2015, une autre pour violences psychologiques par l’actrice Solène Rigot, évoquant un emprisonnement mental, une emprise morale et du harcèlement après des ruptures.\n\nCinq autres femmes ont témoigné de « rapport sexuel consenti puis subi », violences psychologiques, « mise en danger d’autrui » en insistant pour ne pas utiliser de préservatif.\n\nThomas Scimeca a qualifié ces accusations de récit des faits « très éloigné de la réalité » et a déclaré qu’il s’expliquerait devant la justice s’il en avait l’opportunité.'
    },
    {
        nom: 'Duvauchelle, Nicolas',
        photo: 'Nicolas_Duvauchelle.jpg',
        reponse: 'pas-condamne',
        infosSupplementaires: 'Acteur\n\nNicolas Duvauchelle a fait l\'objet d\'une plainte pour une gifle sur un tournage par Sara Forestier, ainsi que de plusieurs plaintes et mains courantes pour violences ou menaces de la part d\'anciennes compagnes. Toutes les procédures antérieures à la plainte de Sara Forestier ont été classées sans suite par la justice.'
    },          
    {
        nom: 'Arestrup, Niels',
        photo: 'Niels_Arestrup.jpg',
        reponse: 'pas-condamne',
        infosSupplementaires: 'Réalisateur, acteur, scénariste\n\nLors d\'une représentation de "Mademoiselle Julie" au théâtre, Niels Arestrup lui aurait donné une vraie gifle avec une telle force qu\'elle en aurait eu le bras cassé. Isabelle Adjani a parlé de cet événement publiquement en 2024, exprimant sa honte de ne l\'avoir jamais fait auparavant.\n\nIl existe également d\'autres accusations de coups portés à l\'encontre de comédiennes, dont Myriam Boyer en 1996.'
    },
    {
        nom: 'Bozon, Serge',
        photo: 'Serge_Bozon.jpg',
        reponse: 'pas-condamne',
        infosSupplementaires: 'Réalisateur, critique de cinéma, acteur\n\nSerge Bozon a fait l\'objet de quatre plaintes pour viol. Trois ont été classées sans suite pour diverses raisons (manque de preuves, prescription, faits non clairement établis).\n\nUne quatrième plainte pour viol, basée sur une accusation de stealthing, a été déposée plus récemment.'
    },    
    {
        nom: 'Vidal, Olivier',
        photo: 'Personne.png',
        reponse: 'condamne',
        infosSupplementaires: 'Réalisateur, producteur\n\nCondamné en 2010 à 10 mois de prison avec sursis pour atteinte sexuelle sur mineur commise entre 2003 et 2004.\n\nJugé en 2025 pour des faits s\'étalant de 2001 à 2021, à savoir viols aggravés sur 3 jeunes garçons, agressions sexuelles sur 5 mineurs, corruption de 12 mineurs. Il a été condamné pour ces faits à 16 ans de réclusion criminelle, assortis de 7 ans de suivi sociojudiciaire et d\'une interdiction définitive d\'exercer toute activité en lien avec des mineurs. Une peine supplémentaire de 5 ans peut être appliquée en cas de manquement.'
    },
    {
        nom: 'Pelloux, Patrick',
        photo: 'Patrick_Pelloux.jpg',
        reponse: 'pas-condamne',
        infosSupplementaires: 'Médecin urgentiste, chroniqueur\n\nAccusations répétées de violences verbales et sexuelles (selon Libération). Qualifié de "prédateur sexuel" par Karine Lacombe.\n\nIl reconnaît que ses comportements passés seraient inappropriés aujourd\hui, mais les minimise.'
    },
    {
        nom: 'Anthox Colaboy',
        photo: 'Personne.png',
        reponse: 'pas-condamne',
        infosSupplementaires: 'Influenceur\n\nAnthox Colaboy a été accusé de harcèlement en ligne et d\'avoir tenu des propos inappropriés à l\'égard d\'une fan mineure en août 2018, dans le contexte du mouvement #BalanceTonYoutubeur. À l\'époque, des captures d\'écran de messages qui lui étaient attribués montraient des propos suggestifs et ambigus adressés à une jeune fille de quinze ans.\n\nAnthox Colaboy avait nié les faits et annoncé son intention de porter plainte pour dénonciation calomnieuse et cyberharcèlement.'
    },
    {
        nom: 'Jeremstar',
        photo: 'Jeremstar.jpg',
        reponse: 'pas-condamne',
        infosSupplementaires: 'Influenceur, humoriste, chroniqueur\n\nPascal Cardonna (alias Babybel), un ami de Jeremstar, a été accusé d\'avoir profité de sa relation amicale avec le blogueur pour proposer des rencontres sexuelles à des mineurs. Une plainte pour "viol sur mineur" a été déposée contre Jeremstar dans le cadre de cette affaire.\n\nCette plainte a été classée sans suite en 2021.'
    },          
    {
        nom: 'Babybel',
        photo: 'Personne.png',
        reponse: 'condamne',
        infosSupplementaires: 'Homme de radio, comparse de Jeremstar\n\nPascal Cardonna, alias "Babybel", a été condamné à Nîmes à 2 ans d’emprisonnement, dont 18 mois avec sursis, pour agression sexuelle sur mineur.\n\nLes accusations et la condamnation concernent la corruption de mineur, la provocation directe de mineur à la consommation excessive d\’alcool, le recours à la prostitution d\’un mineur.\n\nLe procureur adjoint de Nîmes a souligné que Pascal Cardonna s\’était servi de son amitié avec Jeremstar pour "prendre dans ses griffes des mineurs" qui venaient dans l\'espoir de rencontrer leur idole.\n\nLa peine inclut également le port d\'un bracelet électronique pendant les six mois de prison ferme et une interdiction d\'approcher des mineurs pendant les 18 mois de sursis probatoire. Il a également été inscrit au fichier des délinquants sexuels.'
    },
    {
        nom: 'François, Claude',
        photo: 'Claude_Francois.jpg',
        reponse: 'pas-condamne',
        infosSupplementaires: 'Chanteur, auteur-compositeur-interprète, danseur, acteur, producteur, photographe, compositeur\n\nEn 2018, pour le 40ème anniversaire de sa mort, les médias se sont focalisés sur son "attirance pour les jeunes filles". Cela a été notamment alimenté par un entretien avec sa fille, Julie Bocquet, dont la mère était mineure à sa naissance.\n\nDans une interview à la RTBF dans les années 1970, Claude François a explicitement exprimé sa préférence pour les jeunes femmes, déclarant aimer les filles "jusqu’à 17-18 ans" et se méfier des femmes entre 18 et 30 ans qu\'il considérait comme moins "naturelles" et plus "réfléchies". Il affirmait retrouver un équilibre chez les femmes après une trentaine d\'années. Cette déclaration a été largement commentée et critiquée rétrospectivement.'
    },    
    {
        nom: 'Lahaye, Jean-Luc',
        photo: 'Jean-Luc_Lahaye.jpg',
        reponse: 'condamne',
        infosSupplementaires: 'Chanteur, animateur\n\nEn 2007, il a été condamné à une amende de 10 000 euros pour atteinte sexuelle sur mineur de 15 ans.\n\nEn 2015, il a été condamné à un an de prison avec sursis pour corruption de mineur de 15 ans. Il a été relaxé des accusations de proposition sexuelle à mineur de quinze ans et de détention d\'images pédopornographiques de mineur de quinze ans.\n\nEn 2021, il est placé en garde à vue en pour soupçons de viol sur deux adolescentes (16 et 17 ans) et de détention d\'images pédopornographiques. Mis en examen pour viol et agression sexuelle et placé en détention provisoire, puis remis en liberté sous contrôle judiciaire en mai 2022 avec des interdictions d\'activités publiques et de contact avec des mineurs, sa mise en examen pour viols a été confirmée en appel en octobre 2024.'
    },
    {
        nom: 'Quesada, Christian',
        photo: 'Personne.png',
        reponse: 'condamne',
        infosSupplementaires: 'Joueur, écrivain\n\nCondamné à trois reprises entre 2001 et 2009 pour « corruption de mineur », « exhibition sexuelle », « détention et diffusion d\'images pédopornographiques ».\n\nCondamné en 2017 pour tentative de proxénétisme aggravée.\n\nMise en examen et détention provisoire en 2019 suite à la plainte pour tentative de corruption sur mineurs. Des milliers d’images et vidéos pédopornographiques sont découvertes sur ses disques durs, faits qu\'il reconnaît. Plusieurs internautes, dont certaines mineures au moment des faits, témoignent de propositions sexuelles de sa part comme Émeline (ancienne candidate) qui a reçu plusieurs photos de son sexe lors de conversations privées ou Audrey (internaute) qui a reçu une proposition d\'envoi de photo de son sexe.\n\nMélissa témoigne à la télévision avoir été violée par lui en 2017, alors qu\'elle était mineure. Dans un documentaire, elle évoque une tentative.\n\nCondamnation pour corruption de mineures, détention et diffusion d’images pédopornographiques. Condamné à trois ans de prison ferme, cinq ans de suivi socio-judiciaire et inscription au fichier des délinquants sexuels.\n\nLibération en 2021, nouvelle incarcération en septembre 2022 pour non-respect de son suivi socio-judiciaire, nouvelle remise en liberté en octobre 2022.'
    },
    {
        nom: 'Lejeune, Geoffroy',
        photo: 'Geoffroy_Lejeune.jpg',
        reponse: 'pas-condamne',
        infosSupplementaires: 'Journaliste\n\nGeoffroy Lejeune est accusé d\'avoir minimisé la pédocriminalité de l\'affaire des ballets roses en parlant de "parties fines" avec des mineures "consentantes", ignorant la loi française sur le consentement des mineurs.'
    },
    {
        nom: 'Ardisson, Thierry',
        photo: 'Thierry_Ardisson.jpg',
        reponse: 'pas-condamne',
        infosSupplementaires: 'Producteur, animateur\n\nPropos sur les mineures en 2020 : Une séquence de 1995 a refait surface où on l\'entend plaisanter avec Frédéric Beigbeder et Gabriel Matzneff sur des relations sexuelles imaginaires avec des "gamines de douze ans et demi". Ces propos ont été largement critiqués et jugés complaisants envers la pédophilie.\n\n#MeToo et #BalanceTonPorc : Bien qu\'il n\'ait pas été directement accusé, son émission "Les Terriens du Dimanche" a abordé le sujet, parfois de manière controversée, avec des invités tenant des propos qui ont suscité des réactions.'
    },
    {
        nom: 'Matzneff, Gabriel',
        photo: 'Gabriel_Matzneff.png',
        reponse: 'pas-condamne',
        infosSupplementaires: 'Ecrivain\n\nApologie de la pédophilie et description de relations avec des mineurs dans ses écrits : Il a ouvertement décrit et banalisé ses relations sexuelles avec des mineurs dans ses livres, notamment "Les Moins de seize ans". Ces écrits sont aujourd\'hui considérés comme une apologie de la pédophilie.\n\nTémoignage de Vanessa Springora dans "Le Consentement" (2020) : Vanessa Springora a raconté sa relation d\'adolescente avec Matzneff, alors qu\'il était un homme de 50 ans. Son témoignage a révélé la nature prédatrice de cette relation et a conduit à une prise de conscience plus large.\nSuite à ces révélations et d\'autres témoignages, des enquêtes judiciaires ont été ouvertes pour des faits potentiels de viols et d\'agressions sexuelles sur mineurs. Cependant, de nombreux faits sont prescrits.\n\nAccusations de participation à un réseau de pédocriminalité (juin 2024) : Une enquête de Libération l\'accuse d\'avoir fait partie d\'un réseau de pédocriminalité dans les années 1970 et 1980. Ces faits font actuellement l\'objet d\'une enquête judiciaire.'
    },
    {
        nom: 'Sardou, Michel',
        photo: 'Michel_Sardou.jpg',
        reponse: 'pas-condamne',
        infosSupplementaires: 'Chanteur, compositeur, acteur\n\nSexisme et misogynie dans certaines de ses chansons (Les Filles d\'aujourd\'hui", "Être une femme", "Je suis pour",...).\n\nHomophobie, bien qu\'il ait par la suite nuancé certains propos et interprétations.'
    },      
    {
        nom: 'Debbouze, Jamel',
        photo: 'Jamel_Debbouze.jpg',
        reponse: 'pas-condamne',
        infosSupplementaires: 'Humoriste, acteur, producteur\n\nDans un extrait d\'une émission de Burger Quiz datant d\'une dizaine d\'années, Jamel Debbouze a un comportement jugé inapproprié envers une candidate. Il l\'embrasse de force sur la joue, l\'appelle "la Chinoise" ou "la sœur de Pikachu", et fait des remarques sexistes.'
    },       
    {
        nom: 'Baffie, Laurent',
        photo: 'Laurent_Baffie.jpg',
        reponse: 'pas-condamne',
        infosSupplementaires: 'Humoriste, acteur, metteur en scène, animateur, réalisateur, scénariste\n\nEn 2017, Baffie remonte la jupe de Nolwenn Leroy sans consentement à la télé, plaisantant sur le "cul" pour l\'audience.'
    },
    {
        nom: 'Berry, Richard',
        photo: 'Richard_Berry.jpg',
        reponse: 'pas-condamne',
        infosSupplementaires: 'Réalisateur, acteur, producteur, scénariste, chanteur\n\nRichard Berry a été accusé par sa fille aînée, Coline Hiegel Berry, en janvier 2021. Elle a déposé plainte pour inceste, viols, agressions sexuelles et corruption de mineur, qui auraient été commis lorsqu\'elle était mineure, entre ses 8 et 10 ans.\n\nEn mai 2024, Catherine Hiegel, la mère de Coline Berry-Rojtman et ancienne compagne de Richard Berry, a également déclaré avoir été victime de violences conjugales de la part de l\'acteur lorsqu\'elle était enceinte de leur fille.\n\nCependant, au 1er septembre 2023, la procédure visant Richard Berry concernant les accusations de sa fille a été classée sans suite pour prescription par le parquet de Paris.'
    },
    {
        nom: 'Mellia, Seb',
        photo: 'Personne.png',
        reponse: 'pas-condamne',
        infosSupplementaires: 'Humoriste\n\nSeb Mellia a fait l\'objet de plusieurs accusations d\'agressions sexuelles et de violences sexuelles. Ces accusations ont été relayées publiquement à partir de janvier 2024, notamment par l\'humoriste Florence Mendez qui a affirmé avoir reçu de nombreux témoignages à son encontre.\n\nLes accusations comprennent des faits tels que : baisers forcés, tentatives d\'embrassades insistantes, comportement oppressant et insistant et des témoignages plus graves évoquent des rapports sexuels non consentis, y compris des sodomies avec retrait de préservatif sans consentement.'
    },
    {
        nom: 'Plaza, Stéphane',
        photo: 'Stéphane_Plaza.png',
        reponse: 'condamne',
        infosSupplementaires: 'Agent immobilier, animateur, acteur\n\nViolences conjugales récurrentes : Il a été condamné en première instance à 12 mois de prison avec sursis pour des faits de violences conjugales envers l\'une de ses ex-compagnes, survenus entre 2018 et 2022. Il a également été condamné à une interdiction de contact avec cette victime pendant 3 ans. Il a fait appel de cette condamnation.\n\nViolence psychologique : Il avait également été accusé de violence psychologique par une autre ex-compagne, mais il a été relaxé de ces chefs d\'accusation en première instance.'
    },
    {
        nom: 'Moix, Yann',
        photo: 'Yann_Moix.jpg',
        reponse: 'pas-condamne',
        infosSupplementaires: 'Ecrivain, réalisateur, chroniqueur\n\nDans une interview à Marie Claire, Yann Moix déclare être \"incapable d\'aimer une femme de 50 ans\" car il trouve cela \"trop vieux\" et préfère les femmes jeunes.\n\nDans l\'émission \"Les Terriens du dimanche\", Yann Moix prend la défense de Michael Jackson face aux accusations de pédophilie dans le documentaire Leaving Neverland, déclarant notamment qu\'\"un enfant, ça ne couche qu\'avec les adultes qui forcent les enfants à coucher\".\n\nDans l\'émission \"Pascale, Éric, Yann et les autres\" sur C8, des propos de Yann Moix ont choqué les internautes, notamment une phrase : \"Ce sont des femmes abîmées, donc faut cogner\".\n\nDes propos tenus dans un Complément d\'enquête sur Gérard Depardieu ont également refait surface où il tenait des propos sexualisant des mineures.'
    },
    {
        nom: 'Wilson, Lambert',
        photo: 'Lambert-Wilson.jpg',
        reponse: 'pas-condamne',
        infosSupplementaires: 'Acteur, réalisateur, chanteur\n\nSuite à la cérémonie controversée où Roman Polanski a été primé et Florence Foresti a quitté la présentation, Lambert Wilson a publiquement critiqué l\'attitude de l\'humoriste, la qualifiant notamment de "minable", suscitant un soutien implicite à Polanski et un manque de solidarité aux victimes.'
    },
    {
        nom: 'Slimane',
        photo: 'Slimane.jpg',
        reponse: 'pas-condamne',
        infosSupplementaires: 'Chanteur, acteur, auteur-compositeur-interprète\n\nSlimane a fait l\'objet d\'une plainte pour harcèlement sexuel par un technicien en octobre 2024 (baiser forcé, propos et messages à caractère sexuel).\n\nDeux autres hommes l\'ont accusé d\'envoi non consenti de photos pornographiques.\n\nIl n\'a pas été inculpé ni condamné à ce jour.'
    },
    {
        nom: 'Abittan, Ary',
        photo: 'Ary_Abittan.jpg',
        reponse: 'pas-condamne',
        infosSupplementaires: 'Acteur, humoriste, scénariste\n\nAry Abittan a fait l\'objet d\'une accusation de viol en octobre 2021. Une femme de 23 ans a porté plainte, affirmant qu\'il lui avait imposé une sodomie lors d\'une soirée à son domicile. Suite à une instruction menée par des juges, le parquet de Paris a décidé de ne pas le renvoyer devant un tribunal, prononçant un non-lieu en avril 2024, faute d\'indices suffisants. La plaignante a fait appel de cette décision, mais la cour d\'appel a confirmé le non-lieu en janvier 2025.'
    },
    {
        nom: 'Darmanin, Gérald',
        photo: 'Gérald_Darmanin.jpg',
        reponse: 'pas-condamne',
        infosSupplementaires: 'Homme politique\n\nViol et harcèlement par Sophie Patterson-Spatz pour des faits remontant à 2009. Après plusieurs plaintes et enquêtes, la justice a finalement prononcé un non-lieu définitif en sa faveur en février 2024.\n\nAbus de faiblesse par une habitante de Tourcoing concernant des événements de 2015. Cette affaire a été classée sans suite par le parquet en mai 2018.'
    },
    {
        nom: 'Beigbeder, Frédéric',
        photo: 'Frédéric_Beigbeder.jpg',
        reponse: 'pas-condamne',
        infosSupplementaires: 'Acteur, romancier, critique littéraire, éditeur, réalisateur, scénariste, nouvelliste\n\nFrédéric Beigbeder a fait l\'objet d\'une plainte pour viol déposée en juillet 2023 par une femme de 30 ans. Les faits se seraient déroulés dans la nuit du 18 au 19 juillet 2023 dans une chambre d\'hôtel à Pau. Il a été placé en garde à vue en décembre 2023 dans le cadre de cette enquête préliminaire et avait contesté les faits. Cependant, en janvier 2024, le parquet a annoncé que l\'enquête avait été classée sans suite en raison de l\'absence d\'indices graves ou concordants permettant de caractériser l\'infraction.\n\nPropos sur les mineures en 2020 : Une séquence de 1995 a refait surface où on l\'entend plaisanter avec Thierry Ardisson et Gabriel Matzneff sur des relations sexuelles imaginaires avec des "gamines de douze ans et demi". Ces propos ont été largement critiqués et jugés complaisants envers la pédophilie.'
    },
    {
        nom: 'Monsieur Poulpe',
        photo: 'Monsieur_Poulpe.jpg',
        reponse: 'pas-condamne',
        infosSupplementaires: 'Acteur, scénariste, humoriste, animateur, auteur\n\nPropos sur l\'apparence de Rachida Dati jugés sexistes lors d\'une chronique à "C dans l\'air" (janvier 2024)'
    },
    {
        nom: 'Bayou, Julien',
        photo: 'Julien_Bayou.jpg',
        reponse: 'pas-condamne',
        infosSupplementaires: 'Homme politique, avocat\n\nHarcèlement moral (accusation principale dans la plainte d\'Anaïs Leleux et évoquée par Sandrine Rousseau).\n\nAbus de faiblesse (également dans la plainte d\'Anaïs Leleux).\n\nDes témoignages anonymes ont également évoqué des violences psychologiques et une emprise sentimentale.'
    },
    {
        nom: 'Bedos, Nicolas',
        photo: 'Nicolas_Bedos.jpg',
        reponse: 'condamne',
        infosSupplementaires: 'Metteur en scène, scénariste, réalisateur, acteur, dramaturge, humoriste\n\nEn 2021, plusieurs femmes ont porté plainte contre Nicolas Bedos pour des faits d\'agression sexuelle et de harcèlement sexuel qui se seraient déroulés lors de soirées ou dans un cadre professionnel. Ces plaintes ont conduit à l\'ouverture d\'enquêtes par le parquet de Paris. Les investigations ont notamment porté sur les témoignages des plaignantes et d\'éventuels témoins.\n\nEn janvier 2023, le parquet de Paris a classé sans suite certaines des plaintes pour agression sexuelle, faute d\'infraction suffisamment caractérisée ou en raison de la prescription.\n\nEn octobre 2024, Nicolas Bedos a été condamné faits d\'agression sexuelle) à un an de prison, dont six mois avec sursis, assorti d\'une obligation de soins pour des problèmes d\'addiction et psychologiques.'
    },
    {
        nom: 'Besnehard, Dominique',
        photo: 'Dominique_Besnehard.jpg',
        reponse: 'pas-condamne',
        infosSupplementaires: 'Producteur, acteur, agent artistique\n\nPlusieurs témoignages, recueillis notamment dans une enquête de Télérama, ont fait état d\'un sentiment d\'abus de pouvoir de la part de Dominique Besnehard pour tenter d\'obtenir des faveurs sexuelles de jeunes comédiens et comédiennes.\n\nEn mai 2024, l\'acteur Giovanni Savoia et un autre acteur ont publiquement accusé Dominique Besnehard d\'avoir abusé de son pouvoir pour essayer d\'obtenir des faveurs sexuelles, respectivement au début des années 2000 et dans les années 1990. Dominique Besnehard a nié ces accusations.\n\nEn décembre 2023, il a signé une tribune controversée intitulée "N\'effacez pas Gérard Depardieu", visant à défendre la présomption d\'innocence de Gérard Depardieu, alors accusé de viol, agression sexuelle et harcèlement sexuel. Cette prise de position a été critiquée par certaines personnes qui y ont vu un soutien aux agresseurs présumés. Le 20 janvier, Dominique Besnehard revient sur son soutien à Depardieu : « C\'est une erreur de ma part ».'
    },
    {
        nom: 'Cohn-Bendit, Daniel',
        photo: 'Daniel_Cohn-Bendit.jpg',
        reponse: 'pas-condamne',
        infosSupplementaires: 'Homme politique, éducateur, journaliste\n\nDes accusations de pédophilie ou d\'apologie de la pédophilie reposant sur des propos tenus dans son livre "Le Grand Bazar" (1975), où il décrit des interactions avec des enfants à connotation sexuelle, suscitant des accusations d\'ambiguïté et d\'apologie, ainsi que son intervention à l\'émission "Apostrophes" en 1982, où il a tenu des propos sur la sexualité infantile qui ont été interprétés comme une banalisation de la pédophilie.\n\nCes éléments ont été réexhumés et ont pris de l\'ampleur en 2001, suite à la diffusion d\'extraits de son livre par des journaux européens, et à partir de 2009, notamment lors d\'une confrontation télévisée avec François Bayrou et la rediffusion de la vidéo d\'"Apostrophes".\n\nCohn-Bendit a toujours nié être pédophile et a condamné la pédophilie. Il a expliqué que ses écrits et propos devaient être replacés dans le contexte des années 1970 et de la "révolution sexuelle", et a exprimé des regrets quant à la formulation de certains passages, les qualifiant aujourd\'hui d\'"insoutenables". Malgré ses explications, ces accusations ont régulièrement refait surface et ont été utilisées par des responsables politiques pour le critiquer.\n\nLa justice ne l\'a jamais inquiété sur ces faits.'
    },
    {
        nom: 'Rozon, Gilbert',
        photo: 'Gilbert_Rozon.jpg',
        reponse: 'pas-condamne',
        infosSupplementaires: 'Producteur\n\nUn groupe de femmes s\'est constitué sous le nom "Les Courageuses" pour intenter une action collective contre Gilbert Rozon au nom des victimes. Bien que cette action collective ait été initialement autorisée, elle a ensuite été rejetée en appel, les juges estimant que des actions individuelles seraient plus appropriées. La Cour suprême du Canada a refusé d\'entendre l\'appel de cette décision.\n\nPlusieurs femmes ont intenté des poursuites civiles individuelles contre Gilbert Rozon pour des agressions sexuelles et du harcèlement qui se seraient produits sur plusieurs années. Ces femmes réclament des millions de dollars en dommages et intérêts compensatoires et punitifs.\n\nGilbert Rozon a été acquitté en décembre 2020 des accusations de viol et d\'attentat à la pudeur dans une affaire. La juge a déclaré qu\'il subsistait un doute raisonnable quant à sa culpabilité. Il est important de noter qu\'un acquittement au criminel ne signifie pas que les faits ne se sont pas produits, mais plutôt que la preuve hors de tout doute raisonnable n\'a pas été établie.\n\nUn nouveau procès civil regroupant les plaintes de neuf femmes a débuté en décembre 2024. Ces femmes réclament collectivement 14 millions de dollars à Gilbert Rozon pour des agressions sexuelles alléguées entre 1980 et 2004. Ce procès est en cours et a connu une pause en mars 2025 suite à un appel de Gilbert Rozon concernant la preuve de mythes et stéréotypes, mais il a été décidé qu\'il reprendrait.\n\nGilbert Rozon avait été condamné à une amende pour des voies de fait sur une femme en 1998, mais cette condamnation avait ensuite été annulée en appel avec une absolution inconditionnelle.'
    },    
    {
        nom: 'Weber, Jacques',
        photo: 'Jacques-Weber.jpg',
        reponse: 'pas-condamne',
        infosSupplementaires: 'Acteur, scénariste, réalisateur\n\nJacques Weber a été publiquement accusé d\'agression sexuelle par une de ses anciennes élèves.\n\nEn décembre 2023, il a signé une tribune controversée intitulée "N\'effacez pas Gérard Depardieu", visant à défendre la présomption d\'innocence de Gérard Depardieu, alors accusé de viol, agression sexuelle et harcèlement sexuel. Cette prise de position a été critiquée par certaines personnes qui y ont vu un soutien aux agresseurs présumés. Le 1er janvier, Jacques Weber déclare : « Je mesure chaque jour mon aveuglement. J\'ai par réflexe d\'amitié signé à la hâte, sans me renseigner, oui j\'ai signé en oubliant les victimes et le sort de milliers de femmes dans le monde qui souffrent d\'un état de fait trop longtemps admis […] Ma signature était un autre viol ».'
    },
    {
        nom: 'Baupin, Denis',
        photo: 'Denis_Baupin.jpg',
        reponse: 'pas-condamne',
        infosSupplementaires: 'Homme politique, ingénieur\n\nPlusieurs femmes, dont des élues écologistes, ont publiquement accusé Denis Baupin de harcèlement sexuel, d\'agressions sexuelles et d\'envoi de messages à caractère sexuel non sollicités. Les accusations ont été relayées par les médias, notamment Mediapart et France Inter.\n\nUne enquête a été ouverte, mais elle a été classée sans suite pour prescription. Denis Baupin a été condamné pour procédure abusive, en raison de sa plainte en dénonciation calomnieuse contre ses accusatrices.'
    },
    {
        nom: 'Tron, Georges',
        photo: 'Georges_Tron.jpg',
        reponse: 'condamne',
        infosSupplementaires: 'Homme politique, agent public\n\nLes plaignantes ont accusé Georges Tron de leur avoir imposé des attouchements et des pénétrations digitales, notamment en leur demandant des massages de pieds, qu\'elles considéraient comme des actes sexuels. Elles ont décrit un climat d\'emprise et de harcèlement au sein de la mairie.\n\nGeorges Tron a été mis en examen en 2011. Il a été acquitté en première instance en 2018.\n\nEn appel, en 2021, il a été condamné à cinq ans de prison, dont deux avec sursis, pour viols et agressions sexuelles en réunion. Georges Tron à été incarcéré suite à sa condamnation.'
    },
    {
        nom: 'Bourdin, Jean-Jacques',
        photo: 'Jean-Jacques_Bourdin.jpg',
        reponse: 'pas-condamne',
        infosSupplementaires: 'Journaliste, animateur\n\nFanny Agostini a déposé plainte pour tentative d\'agression sexuelle, relatant des faits qui se seraient déroulés en 2013 lors d\'un déplacement professionnel à Calvi, en Corse. Elle affirme que Jean-Jacques Bourdin aurait tenté de l\'embrasser de force à plusieurs reprises dans une piscine, en la saisissant par le cou, et aurait tenu des propos laissant entendre qu\'il obtenait toujours ce qu\'il voulait.\n\nUne enquête a été ouverte par le parquet de Paris suite à cette plainte. Jean-Jacques Bourdin a contesté les faits.'
    },      
    {
        nom: 'Boutonnat, Dominique',
        photo: 'Dominique_Boutonnat.jpg',
        reponse: 'condamne',
        infosSupplementaires: 'Producteur\n\nSon filleul l\'a accusé d\'agressions sexuelles qui se seraient produites lors de séjours familiaux entre 2010 et 2012, alors que la victime était mineure.\n\nEn mars 2023, le tribunal correctionnel de Nanterre l\'a condamné à huit mois de prison avec sursis pour agression sexuelle sur mineur de 15 ans par personne ayant autorité. Le tribunal avait estimé qu\'il y avait eu "atteinte sexuelle" mais pas "pénétration".Dominique Boutonnat a fait appel de cette décision.\n\nLe 28 juin 2024, la cour d\'appel de Versailles a alourdi sa peine, le condamnant à trois ans de prison, dont un an ferme et deux ans avec sursis. La cour a estimé qu\'il y avait bien eu agression sexuelle.'
    },       
    {
        nom: 'Crémer, Bruno',
        photo: 'Personne.png',
        reponse: 'pas-condamne',
        infosSupplementaires: 'Acteur\n\nEn février 2024, dans une chronique, Catherine Schwaab évoque des accusations faites par Judith Godrèche à l\'encontre de plusieurs réalisateurs, dont Benoît Jacquot et Jacques Doillon, et mentionne également Bruno Cremer dans ce contexte. Selon cette chronique, Judith Godrèche aurait laissé entendre que Bruno Cremer l\'aurait violée dans son bureau. L\'article souligne la sidération face à de telles accusations visant des personnalités perçues comme "fines et cultivées".\n\nIl est important de noter qu\'il s\'agit d\'accusations relayées dans un article de presse et que Bruno Cremer étant décédé, il ne peut ni répondre à ces allégations ni faire l\'objet de poursuites judiciaires.'
    },
    {
        nom: 'Mocky, Jean-Pierre',
        photo: 'Jean-Pierre_Mocky.jpg',
        reponse: 'pas-condamne',
        infosSupplementaires: 'Monteur, acteur, producteur, scénariste, réalisateur\n\nJean-Pierre Mocky, décédé en 2019, a été mentionné dans le contexte du mouvement #MeToo.\n\nDans un article datant d\août 2019, il est rapporté que Mocky n\'était pas très "#MeToo en apparence" et qu\'il se vantait d\'avoir 17 enfants. L\'article le décrit comme ayant profité de la liberté sexuelle des femmes.'
    },
    {
        nom: 'Marchand, Thierry',
        photo: 'Personne.png',
        reponse: 'condamne',
        infosSupplementaires: 'Officier, diplomate\n\nThierry Marchand était maire d\'une commune, il a été condamné par le tribunal correctionnel de Chartres (juin 2024) à une peine de cinq ans de prison ferme.\n\nLes faits concernaient des agressions sexuelles sur des mineurs de 15 ans.'
    },
    {
        nom: 'Zemmour, Eric',
        photo: 'Éric_Zemmour.jpg',
        reponse: 'pas-condamne',
        infosSupplementaires: 'Ecrivain, éditorialiste, journaliste, chroniqueur, polémiste, essayiste, personnalité politique\n\nDes témoignages de plusieurs femmes ont été recueillis, faisant état de comportements inappropriés, de propos à caractère sexuel non sollicités, et de tentatives d\'intimidation.\n\nCes accusations ont été relayées par des médias, notamment lors de sa campagne présidentielle de 2022.\n\nÉric Zemmour a contesté ces accusations.'
    },
    {
        nom: 'Jacquot, Benoît',
        photo: 'Benoit_Jacquot.jpg',
        reponse: 'pas-condamne',
        infosSupplementaires: 'Réalisateur, scénariste\n\nJudith Godrèche a porté plainte en février 2024 pour des faits survenus entre 1986 et 1992, concernant des infractions de viol sur mineur de 15 ans par personne ayant autorité, viol, violences par concubin, et agression sexuelle sur mineur de plus de 15 ans par personne ayant autorité. Elle décrit une relation où elle ne désirait pas son corps et se sentait dégoûtée. Elle souligne l\'attirance de Benoît Jacquot pour les jeunes actrices mineures, qu\'il évoquait lui-même.\n\nSuite au témoignage de Judith Godrèche, plusieurs autres actrices ayant travaillé avec Benoît Jacquot ont témoigné de harcèlement sexuel (Julia Roy, Vahina Giocante, Isild Le Besco), violence psychologique et physique (Julia Roy, Isild Le Besco), chantage au rôle (Vahina Giocante).\n\nJulia Roy a déposé plainte pour agression sexuelle dans un contexte de violences et de contrainte morale qui aurait duré plusieurs années.\n\nIsild Le Besco a porté plainte en mai 2024 pour viol sur mineur de plus de 15 ans et viol. Elle évoque une emprise destructrice et des violences physiques et morales lors du tournage de Sade.'
    },
    {
        nom: 'Moati, Serge',
        photo: 'Serge_Moati.jpg',
        reponse: 'pas-condamne',
        infosSupplementaires: 'Journaliste, acteur, écrivain, producteur, réalisateur, scénariste\n\nEn février 2024, plusieurs femmes, dont des actrices, des journalistes et d\'anciennes collaboratrices, ont accusé Serge Moati d\'agressions sexuelles. Ces accusations ont été rendues publiques dans le sillage de l\'affaire Judith Godrèche et du mouvement #MeToo en France. Les femmes ont décrit diverses formes de harcèlement et d\'agressions sexuelles, incluant des remarques inappropriées, des attouchements non consentis et des tentatives d\'intimidation.'
    },
    {
        nom: 'De Coubertin, Pierre',
        photo: 'Pierre_de_Coubertin.jpg',
        reponse: 'pas-condamne',
        infosSupplementaires: 'Historien, arbitre de rugby, homme politique, officiel du sport, écrivain, pédagogue, enseignant\n\nCoubertin avait une vision très traditionnelle et essentialiste des rôles de genre. Il considérait que les hommes étaient naturellement aptes à la compétition physique et à l\'effort, tandis que les femmes étaient destinées à des rôles plus "féminins" et moins exposés.\n\nIl exprimait des préoccupations esthétiques, estimant que la participation des femmes aux épreuves sportives nuirait à la beauté et à la dignité des Jeux. Il soulevait également des arguments moraux, craignant que la compétition ne "dévirilise" les femmes ou ne les détourne de leur rôle familial et maternel.\n\nSes écrits et ses discours sont truffés de déclarations sans équivoque sur ce sujet. Par exemple, il a déclaré que "le rôle des femmes doit être avant tout de couronner les lauréats". Il voyait leur présence comme une source de "distraction" et non comme des participantes légitimes.\n\nSon influence a directement contribué à la faible représentation, voire à l\'absence totale, de femmes lors des premières éditions des Jeux Olympiques modernes. La participation féminine a progressé lentement et avec difficulté, souvent contre ses convictions initiales.'
    },
    {
        nom: 'Doillon, Jacques',
        photo: 'Jacques_Doillon.jpg',
        reponse: 'pas-condamne',
        infosSupplementaires: 'Réalisateur, scénariste, producteur\n\nJudith Godrèche l\'a accusé d\'avoir mis ses doigts dans sa culotte lors d\'auditions pour le film "La fille de 15 ans" en 1989, alors qu\'elle avait 15 ans. Cependant, les faits allégués sont prescrits.\n\nHélène l\'a accusé de l\'avoir violée lorsqu\'elle avait 15 ans.\n\nJacques Doillon a été placé sous le statut de "témoin assisté" en décembre 2024, dans le cadre de l\'enquête déclenchée par la plainte de Judith Godrèche. Ce statut est plus favorable que celui de mis en examen.'
    },
    {
        nom: 'Toubiana, Serge',
        photo: 'Serge_Toubiana.jpg',
        reponse: 'pas-condamne',
        infosSupplementaires: 'Critique de cinéma, journaliste, scénariste, réalisateur\n\nJudith Godrèche affirme que Serge Toubiana, qui était un ami proche de Benoît Jacquot, savait ce qui se passait concernant sa relation avec le réalisateur lorsqu\'elle était mineure. Elle déclare qu\'elle dînait parfois avec eux chez Serge Toubiana et que "tout le monde savait, lui mieux que quiconque".\n\nJudith Godrèche a exprimé sa déception face au silence de Serge Toubiana et l\'a interpellé à ce sujet.\n\nElle l\'accuse également d\'avoir "menti sous serment" devant la commission d\'enquête parlementaire sur les violences sexuelles dans le cinéma en niant avoir eu connaissance de sa relation avec Benoît Jacquot.\n\nEn décembre 2023, il a signé une tribune controversée intitulée "N\'effacez pas Gérard Depardieu", visant à défendre la présomption d\'innocence de Gérard Depardieu, alors accusé de viol, agression sexuelle et harcèlement sexuel. Cette prise de position a été critiquée par certaines personnes qui y ont vu un soutien aux agresseurs présumés.'
    },
    {
        nom: 'Caubère, Philippe',
        photo: 'Philippe_Caubere.jpg',
        reponse: 'pas-condamne',
        infosSupplementaires: 'Acteur, auteur, metteur en scène\n\nDepuis février 2024, Philippe Caubère a été mis en examen pour agressions sexuelles, viols et corruption de mineur.\n\nDes témoignages de femmes ont été publiés, décrivant des actes effroyables. L\'une d\'elles accuse Caubère de l\'avoir "faite violer" par des hommes inconnus recrutés sur internet.\n\nUne plainte a été déposée en octobre 2022, après une longue hésitation. Il nie les faits et reste présumé innocent jusqu\'à un éventuel jugement définitif.\n\nEn décembre 2023, il a signé une tribune controversée intitulée "N\'effacez pas Gérard Depardieu", visant à défendre la présomption d\'innocence de Gérard Depardieu, alors accusé de viol, agression sexuelle et harcèlement sexuel. Cette prise de position a été critiquée par certaines personnes qui y ont vu un soutien aux agresseurs présumés.'
    },
    {
        nom: 'Poelvoorde, Benoît',
        photo: 'Benoit_Poelvoorde.jpg',
        reponse: 'pas-condamne',
        infosSupplementaires: '	Acteur, scénariste, réalisateur, humoriste\n\nEn décembre 2023, il a signé une tribune controversée intitulée "N\'effacez pas Gérard Depardieu", visant à défendre la présomption d\'innocence de Gérard Depardieu, alors accusé de viol, agression sexuelle et harcèlement sexuel. Cette prise de position a été critiquée par certaines personnes qui y ont vu un soutien aux agresseurs présumés.'
    },
    {
        nom: 'Richard, Pierre',
        photo: 'Pierre_Richard.jpg',
        reponse: 'pas-condamne',
        infosSupplementaires: 'Acteur, réalisateur, scénariste, producteur, chanteur\n\nEn décembre 2023, il a signé une tribune controversée intitulée "N\'effacez pas Gérard Depardieu", visant à défendre la présomption d\'innocence de Gérard Depardieu, alors accusé de viol, agression sexuelle et harcèlement sexuel. Cette prise de position a été critiquée par certaines personnes qui y ont vu un soutien aux agresseurs présumés.\n\nLe 31 décembre, Pierre Richard exprime ses regrets d\'avoir signé la tribune et présente ses excuses.'
    },
    {
        nom: 'Duléry, Antoine',
        photo: 'Antoine_Duléry.jpg',
        reponse: 'pas-condamne',
        infosSupplementaires: 'Acteur, scénariste, dialoguiste\n\nEn décembre 2023, il a signé une tribune controversée intitulée "N\'effacez pas Gérard Depardieu", visant à défendre la présomption d\'innocence de Gérard Depardieu, alors accusé de viol, agression sexuelle et harcèlement sexuel. Cette prise de position a été critiquée par certaines personnes qui y ont vu un soutien aux agresseurs présumés.'
    },
    {
        nom: 'Dutronc, Jacques',
        photo: 'Jacques_Dutronc.jpg',
        reponse: 'pas-condamne',
        infosSupplementaires: 'Acteur, guitariste, pianiste, batteur, auteur-compositeur-interprète, chanteur, compositeur, accordéoniste\n\nEn décembre 2023, il a signé une tribune controversée intitulée "N\'effacez pas Gérard Depardieu", visant à défendre la présomption d\'innocence de Gérard Depardieu, alors accusé de viol, agression sexuelle et harcèlement sexuel. Cette prise de position a été critiquée par certaines personnes qui y ont vu un soutien aux agresseurs présumés.'
    },
    {
        nom: 'Attal, Yvan',
        photo: 'Yvan_Attal.jpg',
        reponse: 'pas-condamne',
        infosSupplementaires: '	Acteur, réalisateur, scénariste, dialoguiste\n\nEn décembre 2023, il a signé une tribune controversée intitulée "N\'effacez pas Gérard Depardieu", visant à défendre la présomption d\'innocence de Gérard Depardieu, alors accusé de viol, agression sexuelle et harcèlement sexuel. Cette prise de position a été critiquée par certaines personnes qui y ont vu un soutien aux agresseurs présumés.\n\nYvan Attal admet, dans les jours suivants, sur BFM TV, « son malaise avec cette pétition qui ne lui va pas totalement » et précise qu\'il aurait demandé en vain la reformulation de certains passages de la tribune avant de la signer, mais affirme avoir signé « parce qu\'il y avait quelque chose de plus fort que ce qui me dérangeait dans cette pétition ».\n\nLe 20 janvier, dans l\'émission Quelle époque !, Yvan Attal revient une nouvelle fois sur la tribune et assume ne pas avoir retiré sa signature, mais il parle d\'« une erreur » et qualifie le texte d\'« abominable ».'
    },
    {
        nom: 'Blier, Bertrand',
        photo: 'Bertrand_Blier.jpg',
        reponse: 'pas-condamne',
        infosSupplementaires: 'Réalisateur, acteur, écrivain, scénariste\n\nEn décembre 2023, il a signé une tribune controversée intitulée "N\'effacez pas Gérard Depardieu", visant à défendre la présomption d\'innocence de Gérard Depardieu, alors accusé de viol, agression sexuelle et harcèlement sexuel. Cette prise de position a été critiquée par certaines personnes qui y ont vu un soutien aux agresseurs présumés.'
    },
    {
        nom: 'Alagna, Roberto',
        photo: 'Roberto_Alagna.jpg',
        reponse: 'pas-condamne',
        infosSupplementaires: 'Artiste lyrique\n\nEn décembre 2023, il a signé une tribune controversée intitulée "N\'effacez pas Gérard Depardieu", visant à défendre la présomption d\'innocence de Gérard Depardieu, alors accusé de viol, agression sexuelle et harcèlement sexuel. Cette prise de position a été critiquée par certaines personnes qui y ont vu un soutien aux agresseurs présumés.\n\nRoberto Alagna émet des regrets d\'avoir signé la tribune.'
    },
    {
        nom: 'Fau, Michel',
        photo: 'Michel_Fau.jpg',
        reponse: 'pas-condamne',
        infosSupplementaires: 'Acteur, metteur en scène\n\nEn décembre 2023, il a signé une tribune controversée intitulée "N\'effacez pas Gérard Depardieu", visant à défendre la présomption d\'innocence de Gérard Depardieu, alors accusé de viol, agression sexuelle et harcèlement sexuel. Cette prise de position a été critiquée par certaines personnes qui y ont vu un soutien aux agresseurs présumés.\n\nMichel Fau estime que l\'« artiste doit rester extravagant, scandaleux, obscène et ingérable ».'
    },
    {
        nom: 'Ricciotti, Rudy',
        photo: 'Rudy_Ricciotti.jpg',
        reponse: 'pas-condamne',
        infosSupplementaires: 'Architecte\n\nEn décembre 2023, il a signé une tribune controversée intitulée "N\'effacez pas Gérard Depardieu", visant à défendre la présomption d\'innocence de Gérard Depardieu, alors accusé de viol, agression sexuelle et harcèlement sexuel. Cette prise de position a été critiquée par certaines personnes qui y ont vu un soutien aux agresseurs présumés.'
    },
    {
        nom: 'Veber, Francis',
        photo: 'Francis_Veber.jpg',
        reponse: 'pas-condamne',
        infosSupplementaires: 'Scénariste, écrivain, acteur, dramaturge, journaliste, producteur, réalisateur\n\nEn décembre 2023, il a signé une tribune controversée intitulée "N\'effacez pas Gérard Depardieu", visant à défendre la présomption d\'innocence de Gérard Depardieu, alors accusé de viol, agression sexuelle et harcèlement sexuel. Cette prise de position a été critiquée par certaines personnes qui y ont vu un soutien aux agresseurs présumés.'
    },
    {
        nom: 'Leconte, Patrice',
        photo: 'Patrice_Leconte.jpg',
        reponse: 'pas-condamne',
        infosSupplementaires: '	Réalisateur, scénariste, metteur en scène\n\nEn décembre 2023, il a signé une tribune controversée intitulée "N\'effacez pas Gérard Depardieu", visant à défendre la présomption d\'innocence de Gérard Depardieu, alors accusé de viol, agression sexuelle et harcèlement sexuel. Cette prise de position a été critiquée par certaines personnes qui y ont vu un soutien aux agresseurs présumés.\n\nLe 2 janvier, Patrice Leconte déclare regretter de l\'avoir signée, notamment à cause du positionnement politique de Yannis Ezziadi. Il précise : « Quand on me dit qu\'il n\'est pas exemplaire, je veux bien le croire, je le crois parce que je le sais. Je ne cherche pas à le défendre, ni à l\'accabler. Mais cette mise à mort, ce lynchage m\'effraie un peu. Peut-être que c\'est mérité, je ne sais pas », et ajoute « Je pense que Gérard Depardieu ne fera plus de cinéma, hélas ».'
    },
    {
        nom: 'Sansal, Boualem',
        photo: 'Boualem_Sansal.jpg',
        reponse: 'pas-condamne',
        infosSupplementaires: 'Ecrivain, chef d\'entreprise, haut fonctionnaire, enseignant, ingénieur, essayiste\n\nEn décembre 2023, il a signé une tribune controversée intitulée "N\'effacez pas Gérard Depardieu", visant à défendre la présomption d\'innocence de Gérard Depardieu, alors accusé de viol, agression sexuelle et harcèlement sexuel. Cette prise de position a été critiquée par certaines personnes qui y ont vu un soutien aux agresseurs présumés.'
    },
    {
        nom: 'Berling, Charles',
        photo: 'Charles_Berling.jpg',
        reponse: 'pas-condamne',
        infosSupplementaires: '	Acteur, metteur en scène, directeur de théâtre, réalisateur, scénariste, producteur, chanteur\n\nEn décembre 2023, il a signé une tribune controversée intitulée "N\'effacez pas Gérard Depardieu", visant à défendre la présomption d\'innocence de Gérard Depardieu, alors accusé de viol, agression sexuelle et harcèlement sexuel. Cette prise de position a été critiquée par certaines personnes qui y ont vu un soutien aux agresseurs présumés.\n\nCharles Berling déclare : « Je combats au quotidien les idées d\'extrême droite portées par son auteur, je regrette le manque de nuance et les raccourcis de ce texte et j\'entends l\'indignation qu\'il suscite » et affirme l\'avoir signé « en tant que citoyen, artiste et responsable culturel, je défends la légitimité de la justice contre les effets de horde et de meute et c\'est cette haine collective, rendue possible par l\'usage massif des réseaux sociaux que j\'ai voulu dénoncer ».'
    },
    {
        nom: 'Ezziadi, Yannis',
        photo: 'Personne.png',
        reponse: 'pas-condamne',
        infosSupplementaires: 'Comédien, auteur, éditoralisate\n\nEn décembre 2023, il a rédigé et signé une tribune controversée intitulée "N\'effacez pas Gérard Depardieu", visant à défendre la présomption d\'innocence de Gérard Depardieu, alors accusé de viol, agression sexuelle et harcèlement sexuel. Cette prise de position a été critiquée par certaines personnes qui y ont vu un soutien aux agresseurs présumés.\n\nYannis Ezziadi assume et attaque les détracteurs en parlant de « revanche des minables ».'
    },
    {
        nom: 'Perez, Vincent',
        photo: 'Vincent_Perez.jpg',
        reponse: 'pas-condamne',
        infosSupplementaires: 'Acteur, réalisateur, scénariste\n\nEn décembre 2023, il a signé une tribune controversée intitulée "N\'effacez pas Gérard Depardieu", visant à défendre la présomption d\'innocence de Gérard Depardieu, alors accusé de viol, agression sexuelle et harcèlement sexuel. Cette prise de position a été critiquée par certaines personnes qui y ont vu un soutien aux agresseurs présumés.'
    },
    {
        nom: 'Branco, Paulo',
        photo: 'Paulo_Branco.jpg',
        reponse: 'pas-condamne',
        infosSupplementaires: 'Producteur\n\nEn décembre 2023, il a signé une tribune controversée intitulée "N\'effacez pas Gérard Depardieu", visant à défendre la présomption d\'innocence de Gérard Depardieu, alors accusé de viol, agression sexuelle et harcèlement sexuel. Cette prise de position a été critiquée par certaines personnes qui y ont vu un soutien aux agresseurs présumés.'
    },
    {
        nom: 'Rouart, Jean-Marie',
        photo: 'Jean-Marie_Rouart.jpg',
        reponse: 'pas-condamne',
        infosSupplementaires: 'Ecrivain, journaliste\n\nEn décembre 2023, il a signé une tribune controversée intitulée "N\'effacez pas Gérard Depardieu", visant à défendre la présomption d\'innocence de Gérard Depardieu, alors accusé de viol, agression sexuelle et harcèlement sexuel. Cette prise de position a été critiquée par certaines personnes qui y ont vu un soutien aux agresseurs présumés.\n\nJean-Marie Rouart invoque « l\'esprit gaulois de la France » et demande : « Est-ce que vous croyez que, chez Rabelais, il n\'y a pas de grossièretés ? ».'
    },
    {
        nom: 'Séria, Joël',
        photo: 'Personne.png',
        reponse: 'pas-condamne',
        infosSupplementaires: 'Scénariste, réalisateur, acteur\n\nEn décembre 2023, il a signé une tribune controversée intitulée "N\'effacez pas Gérard Depardieu", visant à défendre la présomption d\'innocence de Gérard Depardieu, alors accusé de viol, agression sexuelle et harcèlement sexuel. Cette prise de position a été critiquée par certaines personnes qui y ont vu un soutien aux agresseurs présumés.'
    },
    {
        nom: 'Murat, Bernard',
        photo: 'Personne.png',
        reponse: 'pas-condamne',
        infosSupplementaires: 'Acteur, scénariste, acteur de doublage, réalisateur\n\nEn décembre 2023, il a signé une tribune controversée intitulée "N\'effacez pas Gérard Depardieu", visant à défendre la présomption d\'innocence de Gérard Depardieu, alors accusé de viol, agression sexuelle et harcèlement sexuel. Cette prise de position a été critiquée par certaines personnes qui y ont vu un soutien aux agresseurs présumés.'
    },
    {
        nom: 'Henric, Jacques',
        photo: 'Personne.png',
        reponse: 'pas-condamne',
        infosSupplementaires: 'Critique littéraire, essayiste, romancier\n\nEn décembre 2023, il a signé une tribune controversée intitulée "N\'effacez pas Gérard Depardieu", visant à défendre la présomption d\'innocence de Gérard Depardieu, alors accusé de viol, agression sexuelle et harcèlement sexuel. Cette prise de position a été critiquée par certaines personnes qui y ont vu un soutien aux agresseurs présumés.'
    },
    {
        nom: 'Humair, Daniel',
        photo: 'Daniel_Humair.png',
        reponse: 'pas-condamne',
        infosSupplementaires: 'Compositeur, batteur de jazz, peintre\n\nEn décembre 2023, il a signé une tribune controversée intitulée "N\'effacez pas Gérard Depardieu", visant à défendre la présomption d\'innocence de Gérard Depardieu, alors accusé de viol, agression sexuelle et harcèlement sexuel. Cette prise de position a été critiquée par certaines personnes qui y ont vu un soutien aux agresseurs présumés.'
    },
    {
        nom: 'Belugou, David',
        photo: 'Personne.png',
        reponse: 'pas-condamne',
        infosSupplementaires: 'Costumier\n\nEn décembre 2023, il a signé une tribune controversée intitulée "N\'effacez pas Gérard Depardieu", visant à défendre la présomption d\'innocence de Gérard Depardieu, alors accusé de viol, agression sexuelle et harcèlement sexuel. Cette prise de position a été critiquée par certaines personnes qui y ont vu un soutien aux agresseurs présumés.'
    },
    {
        nom: 'Dreyfus, Jean-Claude',
        photo: 'Jean-Claude_Dreyfus.jpg',
        reponse: 'pas-condamne',
        infosSupplementaires: 'Acteur\n\nEn décembre 2023, il a signé une tribune controversée intitulée "N\'effacez pas Gérard Depardieu", visant à défendre la présomption d\'innocence de Gérard Depardieu, alors accusé de viol, agression sexuelle et harcèlement sexuel. Cette prise de position a été critiquée par certaines personnes qui y ont vu un soutien aux agresseurs présumés.\n\nLe 2 janvier, Jean-Claude Dreyfus annonce : « Comme beaucoup, je me retire de la Tribune à propos de Gérard Depardieu ».'
    },
    {
        nom: 'Besset, Jean-Marie',
        photo: 'Jean-Marie_Besset.jpg',
        reponse: 'pas-condamne',
        infosSupplementaires: 'Acteur, traducteur, dramaturge, scénariste, réalisateur\n\nEn décembre 2023, il a signé une tribune controversée intitulée "N\'effacez pas Gérard Depardieu", visant à défendre la présomption d\'innocence de Gérard Depardieu, alors accusé de viol, agression sexuelle et harcèlement sexuel. Cette prise de position a été critiquée par certaines personnes qui y ont vu un soutien aux agresseurs présumés.'
    },
    {
        nom: 'Druet, Stéphan',
        photo: 'Personne.png',
        reponse: 'pas-condamne',
        infosSupplementaires: 'Acteur, réalisateur, producteur\n\nEn décembre 2023, il a signé une tribune controversée intitulée "N\'effacez pas Gérard Depardieu", visant à défendre la présomption d\'innocence de Gérard Depardieu, alors accusé de viol, agression sexuelle et harcèlement sexuel. Cette prise de position a été critiquée par certaines personnes qui y ont vu un soutien aux agresseurs présumés.'
    },
    {
        nom: 'Euzéby, Lilian',
        photo: 'Personne.png',
        reponse: 'pas-condamne',
        infosSupplementaires: 'Peintre\n\nEn décembre 2023, il a signé une tribune controversée intitulée "N\'effacez pas Gérard Depardieu", visant à défendre la présomption d\'innocence de Gérard Depardieu, alors accusé de viol, agression sexuelle et harcèlement sexuel. Cette prise de position a été critiquée par certaines personnes qui y ont vu un soutien aux agresseurs présumés.'
    },
    {
        nom: 'Macron, Emmanuel',
        photo : 'Emmanuel_Macron.jpg',
        reponse: 'pas-condamne',
        infosSupplementaires: 'Haut fonctionnaire, banquier d\'affaires, homme d\'État\n\nEmmanuel Macron a publiquement défendu Gérard Depardieu, accusé de viols et d\'agressions sexuelles, en invoquant la présomption d\'innocence et en critiquant la "chasse à l\'homme". Ces propos ont suscité de vives réactions, notamment de la part d\'associations féministes et de victimes de violences sexuelles, qui ont dénoncé une banalisation des violences sexuelles. Il a aussi mis en doute le travail journalistique de certains reportages diffusés sur des chaines de télévisions.\n\nEmmanuel Macron a été critiqué pour sa gestion de certaines accusations visant des membres de son gouvernement, jugée parfois trop indulgente ou trop lente. Par exemple, la nomination de Gérald Darmanin au poste de ministre de l\'Intérieur, alors qu\'il faisait l\'objet d\'une enquête pour viol, a suscité des polémiques.\n\nIl a souvent rappelé l\'importance de la présomption d\'innocence.'
    },
    {
        nom: 'Besson, Luc',
        photo: 'Luc_Besson.jpg',
        reponse: 'pas-condamne',
        infosSupplementaires: 'Producteur, auteur, monteur, acteur, réalisateur, scénariste\n\nL\'actrice Sand Van Roy a porté plainte pour viol en mai 2018, alléguant des faits survenus à l\'hôtel Bristol. Elle a également porté plainte pour des violences sexuelles répétées entre 2016 et 2018. Les rapports médicaux ont relevé des lésions compatibles avec ses accusations.\n\nPlusieurs autres femmes, dont une ex-chargée de casting, ont accusé Luc Besson d\'abus sexuels. Mediapart a recueilli les témoignages de neuf femmes décrivant des comportements similaires et répétitifs.'
    },
    {
        nom: 'Darmon, Gérard',
        photo: 'Gérard_Darmon.jpg',
        reponse: 'pas-condamne',
        infosSupplementaires: 'Acteur, chanteur\n\nNeuf femmes accusent Gérard Darmon de violences sexistes et sexuelles. Elles décrivent des propos et des gestes « déplacés » sur le tournage de six films, rapportent des « humiliations » et des « insultes sexistes ». Les témoignages indiquent que plusieurs des femmes qui témoignent occupaient des postes précaires au moment des faits.\n\nUne technicienne a indiqué avoir porté plainte contre la production du film sur lequel elle travaillait avec l\'acteur pour « absence de protection ».\n\nDix autres femmes ont aussi livré leur récits à Politis avant de refuser d\'apparaître dans l’enquête et de se rétracter.\n\nEn décembre 2023, il a signé une tribune controversée intitulée "N\'effacez pas Gérard Depardieu", visant à défendre la présomption d\'innocence de Gérard Depardieu, alors accusé de viol, agression sexuelle et harcèlement sexuel. Cette prise de position a été critiquée par certaines personnes qui y ont vu un soutien aux agresseurs présumés. Gérard Darmon indique avoir signé, sans connaître Yannis Ezziadi, pour « défendre la présomption d\'innocence » et contester un procès médiatique'
    },
    {
        nom: 'Depardieu, Gérard',
        photo: 'Gérard_Depardieu.jpg',
        reponse: 'pas-condamne',
        infosSupplementaires: 'Acteur, homme d\'affaires, producteur, réalisateur, chanteur\n\nPlainte de Charlotte Arnould (2018) : L\'actrice a porté plainte pour viol et agressions sexuelles. Gérard Depardieu a été mis en examen en décembre 2020, et le parquet de Paris a requis un procès à son encontre pour ces faits.\n\nPlaintes sur le tournage des "Volets Verts" (2021) : Deux autres plaintes ont été déposées en janvier et février 2024 par des femmes travaillant sur ce tournage, pour des faits d\'agression sexuelle. Un procès concernant ces accusations s\'est ouvert en mars 2025.\n\nPlainte de Ruth Baza (1995) : La journaliste et écrivaine espagnole a porté plainte en décembre 2023 pour un viol qui aurait eu lieu en 1995 à Paris.\n\nTémoignage de Vahina Giocante (2023) : L\'actrice a accusé publiquement Gérard Depardieu d\'avoir agressé sexuellement une figurante et d\'avoir eu des comportements abusifs envers plusieurs femmes sur des tournages.\n\nPlusieurs autres femmes ont témoigné de comportements déplacés, d\'agressions sexuelles ou de harcèlement de la part de Gérard Depardieu, certains faits remontant à plusieurs années.'
    },
    {
        nom: 'Elvis, Roméo',
        photo: 'Roméo_Elvis.jpg',
        reponse: 'pas-condamne',
        infosSupplementaires: 'Rappeur, chanteur, acteur, réalisateur artistique\n\nRoméo Elvis a été accusé d\'agression sexuelle par une jeune femme en septembre 2020.\n\nRoméo Elvis a reconnu les faits et a présenté publiquement ses excuses.'
    },
    {
        nom: 'Gastambide, Franck',
        photo: 'Franck_Gastambide.jpg',
        reponse: 'pas-condamne',
        infosSupplementaires: 'Acteur, producteur, réalisateur, scénariste\n\nEn février 2025, Mediapart publie les témoignages de 6 femmes (dont la comédienne Marion Séclin) accusant Franck Gastambide de violences physiques, sexuelles (dont agressions sur tournages) et psychologiques. Gastambide conteste, parle de calomnie.'
    },
    {
        nom: 'Hulot, Nicolas',
        photo: 'Nicolas_Hulot.jpg',
        reponse: 'pas-condamne',
        infosSupplementaires: 'Journaliste, animateur, producteur, écrivain\n\nPlusieurs femmes ont témoigné d\'agressions sexuelles et de comportements inappropriés de la part de Nicolas Hulot, pour des faits remontant parfois à plusieurs décennies. L\'une des femmes au moment des faits était mineure.\n\nUne plainte pour agression sexuelle datant de 2008 avait été classée sans suite à l\'époque. Nicolas Hulot avait reconnu une relation sexuelle mais nié toute contrainte.\n\nSuite à la diffusion du reportage, une des femmes ayant témoigné, mineure au moment des faits, a déposé une plainte pour viol.'
    },
    {
        nom: 'Jegou, Oscar',
        photo: 'Oscar_Jégou.jpg',
        reponse: 'pas-condamne',
        infosSupplementaires: 'Rugbyman\n\nEn juillet 2024, Oscar Jegou, joueur de rugby du XV de France, a été mis en examen en Argentine pour viol aggravé, en même temps que son coéquipier Hugo Auradou. Les faits se seraient déroulés dans un hôtel à Mendoza après un match de l\'équipe de France. Les deux rugbymen ont toujours nié les accusations, affirmant qu\'il s\'agissait d\'une relation consentie.'
    },
    {
        nom: 'Lomepal',
        photo: 'Lomepal.jpg',
        reponse: 'pas-condamne',
        infosSupplementaires: 'Auteur-compositeur-interprète\n\nEn 2020, une journaliste du média en ligne Jef Klak a accusé Lomepal d\'agression sexuelle, relatant des faits qui se seraient déroulés en 2017 à New York. Cette accusation n\'a pas donné lieu à une plainte à l\'époque.\n\nEn juillet 2023, de nouvelles accusations ont émergé sur les réseaux sociaux, relayées par le média Loopsider. Plusieurs femmes ont témoigné de comportements déplacés, d\agressions sexuelles et de viols de la part du rappeur, pour des faits qui se seraient produits entre 2016 et 2020.\n\nEn décembre 2024, Lomepal a été mis en examen pour "viol". Il a contesté les faits qui lui sont reprochés.\n\nDe nouvelles informations ont fait état du témoignage d\'une ex-collaboratrice de Lomepal qui a corroboré certaines accusations et décrit un comportement "prédateur" du rappeur.'
    },
    {
        nom: 'Mendy, Benjamin',
        photo: 'Benjamin_Mendy.jpg',
        reponse: 'pas-condamne',
        infosSupplementaires: 'Footballeur\n\nBenjamin Mendy a été accusé de plusieurs viols et d\'une agression sexuelle, concernant des faits qui se seraient déroulés entre octobre 2020 et août 2021. Le nombre d\'accusations a augmenté au fil de l\'enquête, pour atteindre huit viols, une tentative de viol et une agression sexuelle.\n\nÀ l\'issue de deux procès, Benjamin Mendy a été acquitté de toutes les charges de viol et d\'agression sexuelle. Le premier verdict, en janvier 2023, l\'avait déclaré non coupable de six chefs d\'accusation. Le second procès, dont le verdict est tombé ultérieurement, a confirmé son innocence pour les autres charges.'
    },
    {
        nom: 'Moha La Squale',
        photo: 'Personne.png',
        reponse: 'condamne',
        infosSupplementaires: 'Rappeur, musicien\n\nPlusieurs femmes, d\'anciennes compagnes, ont accusé Moha La Squale de violences conjugales, d\'agressions sexuelles, de séquestrations et de menaces de mort. Les faits se seraient déroulés entre 2017 et 2021.\n\nIl a été condamné à quatre ans de prison, dont trois ans ferme, par le tribunal correctionnel de Paris pour des violences conjugales, séquestrations et menaces de mort envers six de ses ex-compagnes.\n\nIl a également été condamné à des obligations de soins psychologiques et en addictologie, ainsi qu\'à une interdiction d\'entrer en contact avec ses victimes.'
    },
    {
        nom: 'Morandini, Jean-Marc',
        photo: 'Jean-Marc_Morandini.jpg',
        reponse: 'condamne',
        infosSupplementaires: 'Journaliste, animateur, producteur\n\nEn 2016, il a été mis en examen pour corruption de mineur aggravée dans le cadre de castings pour une web-série ("Les Faucons"). Il a également été poursuivi pour harcèlement sexuel. Il a toujours nié les accusations, parlant de diffamation et de complot.\n\nEn août 2023, en première instance, il a été condamné à six mois de prison avec sursis.\n\nEn appel, le 27 janvier 2025, sa peine a été alourdie à 18 mois de prison avec sursis. Il a également été condamné à une obligation de suivi psychologique et à une amende de 10 000 euros pour harcèlement sexuel. Sa société de production a écopé d\'une amende de 50 000 euros pour "travail dissimulé" concernant de jeunes acteurs de la web-série.'
    },
    {
        nom: 'Poivre d\'Arvor, Patrick',
        photo: 'Patrick_Poivre-Darvor.jpg',
        reponse: 'pas-condamne',
        infosSupplementaires: 'Journaliste, animateur, réalisateur, écrivain, présentateur de journal, acteur\n\nL\'affaire a éclaté en 2021 avec la plainte de Florence Porcel pour des viols qui remonteraient à 2004 et 2009. D\'autres femmes ont ensuite témoigné, portant le nombre d\'accusatrices à plusieurs dizaines.\n\nUne enquête préliminaire ouverte suite aux premières plaintes avait été classée sans suite pour prescription ou insuffisance de preuves. Cependant, de nouvelles plaintes ont été déposées ultérieurement, certaines visant des faits non prescrits en raison de la potentielle sérialité des actes. En juillet 2024, il était visé par cinq nouvelles informations judiciaires pour viols et viols aggravés.\n\nPPDA a été mis en examen en décembre 2023 pour le viol de Florence Porcel en 2009. Il s\'agit de sa première mise en examen dans cette affaire.'
    },
    {
        nom: 'Polanski, Roman',
        photo: 'Roman_Polanski.jpg',
        reponse: 'condamne',
        infosSupplementaires: 'Réalisateur, acteur, metteur en scène, écrivain, producteur, scénariste\n\nIl a été accusé d\'avoir eu des relations sexuelles illégales avec Samantha Geimer, alors âgée de 13 ans. Il a plaidé coupable d\'"attentat à la pudeur par usage de stupéfiants" et a passé 42 jours en prison. Craignant une peine plus lourde, il a fui les États-Unis avant le prononcé du jugement final et n\'y est jamais retourné. Il est toujours considéré comme un fugitif par la justice américaine et fait l\'objet d\'une notice rouge d\'Interpol. Samantha Geimer a exprimé des sentiments ambivalents au fil des ans, reconnaissant qu\'il s\'agissait d\'un viol au regard de son âge et du "non" exprimé, tout en soulignant l\'absence de violence physique et en exprimant parfois le souhait que l\'affaire soit close.\n\nAu fil des ans, d\'autres femmes ont accusé Roman Polanski d\'agressions sexuelles ou de viols, pour des faits remontant à différentes époques. Parmi elles Charlotte Lewis, Robin M. Renate Langer, Marianne Barnard...\n\nEn raison des poursuites américaines, Roman Polanski ne peut voyager librement que dans quelques pays (notamment la France, la Pologne et la Suisse) qui refusent son extradition. Plusieurs tentatives d\'extradition ont été rejetées par la Suisse et la Pologne.'
    },
    {
        nom: 'Strauss-Kahn, Dominique',
        photo: 'Dominique_Strauss-Kahn.jpg',
        reponse: 'pas-condamne',
        infosSupplementaires: 'Economiste, homme politique, haut fonctionnaire international\n\nIl a été accusé d\'agression sexuelle et de tentative de viol par Nafissatou Diallo, une femme de chambre de l\'hôtel Sofitel. Il a été arrêté, mais les charges pénales ont finalement été abandonnées par le procureur en août 2011 en raison de doutes sur la crédibilité du témoignage de la plaignante. Une procédure civile a également été engagée par Nafissatou Diallo, qui s\'est soldée par un accord financier à l\'amiable en décembre 2012.\n\nIl a été poursuivi pour proxénétisme aggravé en bande organisée dans le cadre d\'une affaire de réseau de prostitution lié à l\'hôtel Carlton de Lille. Après un procès très médiatisé en 2015, il a été acquitté de ces accusations. Le tribunal n\'a pas établi sa participation à un réseau de prostitution et a estimé qu\'il n\'était pas prouvé qu\'il avait conscience du caractère prostitutionnel des rencontres.'
    },
    {
        nom: 'Thavaud, Norman',
        photo: 'Norman_Thavaud.jpg',
        reponse: 'pas-condamne',
        infosSupplementaires: 'Acteur, comédien de doublage, humoriste, influenceur\n\nLe média en ligne Mediapart a publié une enquête recueillant les témoignages de plusieurs jeunes femmes accusant le youtubeur de viol, d\'agressions sexuelles et de corruption de mineures. Les faits dénoncés se seraient déroulés entre 2011 et 2018.\n\nNorman Thavaud a été mis en examen pour viol et corruption de mineures. Il a été placé sous contrôle judiciaire.\n\nD\'autres plaintes ont été déposées par la suite, portant le nombre d\'accusatrices à au moins huit. Les accusations concernent notamment des faits de viol, d\'agressions sexuelles, de harcèlement et de corruption de mineures.\n\nNorman Thavaud conteste les accusations portées contre lui.'
    },
    {
        nom: 'Orelsan',
        photo: 'Orelsan.jpg',
        reponse: 'pas-condamne',
        infosSupplementaires: 'Rappeur, chanteur, compositeur, acteur, réalisateur, scénariste\n\nPlusieurs associations féministes avaient porté plainte contre le rappeur pour des titres comme "Sale pute" et "Saint-Valentin".\n\nAprès plusieurs années de procédure, Orelsan a été définitivement acquitté par la Cour de cassation, qui a estimé que les paroles, bien que crues et violentes, s\'inscrivaient dans un contexte artistique et parodique et ne constituaient pas une incitation à la violence réelle ni une injure directe envers les femmes en général.'
    },
    {
        nom: 'Bruel, Patrick',
        photo: 'Patrick_Bruel.jpg',
        reponse: 'pas-condamne',
        infosSupplementaires: 'Chanteur, acteur, joueur de poker, auteur-compositeur-interprète, entrepreneur\n\nUne jeune esthéticienne a porté plainte pour des faits qui se seraient déroulés lors d\'un massage dans un hôtel en Corse. Elle a évoqué un "vrai malaise". Patrick Bruel a été entendu par la justice et a nié les faits, parlant d\'un "malentendu". L\'enquête a été classée sans suite en décembre 2020 par le procureur d\'Ajaccio, "en l\'absence d\'élément permettant de caractériser une infraction pénale".\n\nSuite à cette première affaire, d\'autres femmes ont évoqué des comportements déplacés de la part de Patrick Bruel, certains remontant à plusieurs années. Ces témoignages parlaient notamment de remarques ou d\'attitudes à connotation sexuelle.\n\nUne masseuse d\'un spa de Perpignan a également déposé plainte pour "agression sexuelle" concernant des faits qui se seraient déroulés lors d\'une séance de massage.'
    },    
    {
        nom: 'Légitimus, Pascal',
        photo: 'Pascal_Légitimus.jpg',
        reponse: 'pas-condamne',
        infosSupplementaires: 'Acteur, humoriste, scénariste, réalisateur, producteur\n\nPascal Légitimus a créé une controverse en associant l\'homosexualité et la pédophilie dans une tentative maladroite de commenter l\'affaire Polanski, puis s\'est excusé en reconnaissant son erreur et en niant toute intention de faire un tel amalgame.'
    },      
    {
        nom: 'Heuss l\'enfoiré',
        photo: 'Personne.png',
        reponse: 'pas-condamne',
        infosSupplementaires: 'Rappeur, chanteur, musicien, acteur, dirigeant sportif\n\nDispute avec sa compagne le 1er janvier 2025, suite à la diffusion de photos de ses fesses sans consentement sur les réseaux sociaux. La compagne aurait déclaré avoir été victime de coups et de gifles. Le rappeur a reçu 2 jours d\'ITT après avoir été blessé au visage avec du charbon à chicha lancé par sa compagne.\n\nClassement sans suite des faits reprochés au rappeur par le parquet le 4 janvier 2025, considéré comme une affaire de couple et de violences réciproques par son avocat.'
    },    
    {
        nom: 'Vald',
        photo: 'Vald.jpg',
        reponse: 'pas-condamne',
        infosSupplementaires: 'Rappeur, parolier, ingénieur du son, producteur\n\nParoles polémiques de Vald incluant des propos tels que : « Elle veut que j’lui fasse mal, que j’lui écrase la tête », « Elle aimerait bien s’faire violer, enfin pas vraiment violer. Elle aimerait que j’la violente, que j’la casse sans demander », « T’sais, m’faire violer mais j’sais que c’est toi, ça veut dire c’est pas vraiment gênant », ...\n\nDénonciation publique des propos par l\'association Elu-e-s Contre les Violences faites aux Femmes (ECVF).'
    },
    {
        nom: 'Lavoine, Marc',
        photo: 'Marc_Lavoine.jpg',
        reponse: 'pas-condamne',
        infosSupplementaires: 'Acteur, chanteur, auteur-compositeur\n\nMarc Lavoine embrasse Léa (Star Academy) dans le cou avant un duo. Geste jugé déplacé par des internautes. Léa défend Lavoine, parle de bienveillance et d\'attitude paternelle. Pas d\'accusation formelle.'
    },    
    {
        nom: 'Saez, Damien',
        photo: 'Damien_Saez.jpg',
        reponse: 'pas-condamne',
        infosSupplementaires: 'Chanteur, auteur-compositeur-interprète\n\nParoles insultantes et dégradantes envers les influenceuses et les femmes dans la chanson "P\'tite Pute" (2018)'
    },
    {
        nom: 'Benzema, Karim',
        photo: 'Karim_Benzema.jpg',
        reponse: 'condamne',
        infosSupplementaires: 'Footballeur\n\nL\'affaire Zahia : L\'affaire éclate en avril 2010 lors d\'une enquête sur un réseau de prostitution. Les auditions de Zahia Dehar révèlent qu\'elle aurait eu des relations sexuelles tarifées avec plusieurs joueurs de l\'équipe de France, dont Karim Benzema et Franck Ribéry. Elle aurait été mineure (16 ans) au moment de ses rapports avec ces deux derniers. Karim Benzema et Franck Ribéry ont été renvoyés devant le tribunal correctionnel pour sollicitation de prostituée mineure. Ils étaient soupçonnés de ne pas avoir vérifié l\'âge de Zahia Dehar. En janvier 2014, Karim Benzema et Franck Ribéry ont été relaxés par le tribunal correctionnel de Paris. Le tribunal a estimé qu\'il n\'était pas prouvé qu\'ils avaient connaissance de la minorité de Zahia Dehar, qui avait menti sur son âge. Le procureur avait d\'ailleurs requis la relaxe.\n\nL\'affaire de la sextape de Mathieu Valbuena (2015-2022) : Karim Benzema a été accusé de complicité de tentative de chantage à l\'égard de son coéquipier de l\'équipe de France, Mathieu Valbuena, concernant une vidéo intime. En novembre 2021, il a été condamné en première instance à un an de prison avec sursis et 75 000 euros d\'amende. Il a fait appel de cette décision. En juin 2022, il a finalement renoncé à son appel, rendant sa condamnation définitive.'
    },    
    {
        nom: 'Ribéry, Franck',
        photo: 'Franck_Ribery.jpg',
        reponse: 'pas-condamne',
        infosSupplementaires: 'Footballeur\n\nL\'affaire Zahia : L\'affaire éclate en avril 2010 lors d\'une enquête sur un réseau de prostitution. Les auditions de Zahia Dehar révèlent qu\'elle aurait eu des relations sexuelles tarifées avec plusieurs joueurs de l\'équipe de France, dont Karim Benzema et Franck Ribéry. Elle aurait été mineure (16 ans) au moment de ses rapports avec ces deux derniers. Karim Benzema et Franck Ribéry ont été renvoyés devant le tribunal correctionnel pour sollicitation de prostituée mineure. Ils étaient soupçonnés de ne pas avoir vérifié l\'âge de Zahia Dehar. En janvier 2014, Karim Benzema et Franck Ribéry ont été relaxés par le tribunal correctionnel de Paris. Le tribunal a estimé qu\'il n\'était pas prouvé qu\'ils avaient connaissance de la minorité de Zahia Dehar, qui avait menti sur son âge. Le procureur avait d\'ailleurs requis la relaxe.'
    },    
    {
        nom: 'Louvin, Gérard',
        photo: 'Personne.png',
        reponse: 'pas-condamne',
        infosSupplementaires: 'Producteur, acteur\n\nPlusieurs hommes ont porté plainte contre Gérard Louvin et son mari, Daniel Moyne, pour des faits de viols et d\'agressions sexuelles qu\'ils auraient subis lorsqu\'ils étaient mineurs.\n\nL\'un des plaignants, le neveu de Gérard Louvin, a accusé son oncle d\'avoir "favorisé" des viols incestueux commis sur lui par Daniel Moyne dans les années 80.\n\nEn septembre 2021, une nouvelle enquête préliminaire a été ouverte à Paris contre Gérard Louvin et son mari, Daniel Moyne, suite à un témoignage transmis à la justice. Selon le quotidien Le Parisien, ce témoignage accusait le couple d\'avoir organisé des "parties sexuelles payantes" avec des mineurs des favelas de Rio de Janeiro en 2004.'
    },
    {
        nom: 'Samitier, Thierry',
        photo: 'Personne.png',
        reponse: 'pas-condamne',
        infosSupplementaires: 'Comédien, humoriste\n\nGestes déplacés et agressions sexuelles présumés sur plusieurs femmes. Ces faits auraient eu lieu dans le cadre de la pièce "Boeing Boeing" et du tournage de la série "Nos chers voisins". Deux actrices ont déposé une main courante. L\'acteur a démenti publiquement ces accusations.\n\nPlacement en garde à vue en mai 2023 dans le cadre de l\'enquête. Jugement prévu en 2025 pour harcèlement et agressions sexuelles.\n\nL\'acteur a écrit un livre inspiré de cette affaire, "Surprise !", relatant un acteur victime de diffamation.'
    },    
    {
        nom: 'Miller, Gérard',
        photo: 'Gérard_Miller.jpg',
        reponse: 'pas-condamne',
        infosSupplementaires: 'Ecrivain, psychanalyste, réalisateur\n\nDepuis début 2024, plus de quatre-vingt-dix femmes ont accusé Gérard Miller de comportements déplacés, d\'agressions sexuelles et de viols, dont certains sous hypnose, ce qu\'il conteste.\n\nEn octobre 2024, Chloé Vienne a publié un livre enquête intitulé "Serial Miller. Gérard Miller : enquête sur trente ans de silences" décrivant un système de prédation sexuelle. En avril 2025, Alice Augustin et Cécile Ollivier ont publié une enquête complète sur les agissements de Miller pendant des décennies, intitulée "Anatomie d\'une prédation".\n\nCes accusations font suite à la publication par le magazine Elle d\'une enquête où deux femmes témoignent d\'agressions sexuelles et une troisième de viol, survenus lors de séances d\'hypnose. Suite à cette publication, 41 autres femmes ont contacté le magazine, alléguant avoir également été victimes d\'agressions sexuelles de la part de Gérard Miller entre 1993 et 2020.\n\nUne enquête judiciaire est en cours concernant ces accusations, que Gérard Miller nie.'
    },    
    {
        nom: 'Vodk',
        photo: 'Personne.png',
        reponse: 'pas-condamne',
        infosSupplementaires: 'Influenceur\n\nEn juillet 2020, suite au mouvement #BalanceTonYoutubeur, des accusations ont émergé selon lesquelles Vodkprod aurait utilisé sa notoriété pour draguer des fans, parfois mineures, et aurait proposé des plans à trois à certaines d\'entre elles.'
    },    
    {
        nom: 'Quatennens, Adrien',
        photo: 'Adrien_Quatennens.jpg',
        reponse: 'condamne',
        infosSupplementaires: 'Homme politique\n\nEn septembre 2022, des informations ont été révélées par Le Canard enchaîné concernant des violences exercées par Adrien Quatennens envers son épouse. Face à ces révélations, Adrien Quatennens a reconnu publiquement les faits, évoquant des disputes et avoir donné une gifle à sa femme. Il a également mentionné l\'envoi de nombreux SMS.\n\nEn décembre 2022, Adrien Quatennens a été condamné par le tribunal correctionnel de Lille à quatre mois de prison avec sursis pour des faits de violences sur son épouse.'
    },    
    {
        nom: 'Coquerel, Eric',
        photo: 'Eric_Coquerel.jpg',
        reponse: 'pas-condamne',
        infosSupplementaires: 'Homme politique\n\nEn juillet 2022, Sophie Tissier, militante politique, a publiquement accusé Éric Coquerel de harcèlement et d\'agression sexuelle lors d\'événements militants entre 2014 et 2016. Elle a notamment décrit des gestes déplacés, des remarques insistantes et une tentative d\'embrassade forcée.\n\nÉric Coquerel a catégoriquement nié ces accusations, dénonçant des "allégations mensongères" et une "instrumentalisation politique".\n\nSophie Tissier a déposé plainte pour agression sexuelle et harcèlement. En avril 2023, le parquet de Paris a classé sans suite cette plainte pour prescription de l\'action publique concernant l\'agression sexuelle et pour infraction insuffisamment caractérisée concernant le harcèlement.'
    },    
    {
        nom: 'Cauet, Sébastien',
        photo: 'Sébastien_Cauet.jpg',
        reponse: 'pas-condamne',
        infosSupplementaires: 'Animateur, producteur, DJ, humoriste, imitateur\n\nPlusieurs femmes ont porté plainte contre Sébastien Cauet, l\'accusant d\'agressions sexuelles et de viols, dont certaines alors qu\'elles étaient mineures au moment des faits.\n\nSébastien Cauet a été mis en examen pour viols et agressions sexuelles sur mineures de moins de 15 ans et sur majeurs. Suite à sa mise en examen, il a été placé sous contrôle judiciaire.\n\nIl conteste l\'ensemble de ces accusations.'
    },
        {
        nom: 'Lassalle, Jean',
        photo: 'Jean_Lassalle.jpg',
        reponse: 'pas-condamne',
        infosSupplementaires: 'Homme politique\n\nEn 2017, lors d\'une émission sur RTL, Jean Lassalle a été interpellé sur des témoignages anonymes l\'accusant d\'avoir eu des gestes déplacés envers des femmes, notamment une main aux fesses. Jean Lassalle avait nié avoir eu des comportements de ce type avec une intention de nuire ou d\'agresser, tout en reconnaissant être quelqu\'un de "tactile" et ayant une "tendance à embrasser fortement".\n\nEn juillet 2023, une enquête préliminaire a été ouverte par le parquet de Bordeaux suite à la plainte d\'une femme de 45 ans l\'accusant de viol et d\'agression sexuelle lors d\'un rendez-vous en 2010. Jean Lassalle avait déclaré avoir été prévenu et attendre d\'en savoir plus, sans nier explicitement les faits à ce moment-là.\n\nL\'enquête préliminaire ouverte en juillet 2023 a été classée sans suite par le parquet de Bordeaux en mars 2024. Les raisons précises de ce classement n\'ont pas été détaillées publiquement dans tous les médias, mais il est indiqué que l\'enquête n\'a pas permis de confirmer les faits.'
    },
];

export default celebrites;
