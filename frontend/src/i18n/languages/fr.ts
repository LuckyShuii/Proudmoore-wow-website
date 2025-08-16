const enTranslation = {
    welcome: "Welcome to the Proudmoore WoW Website",

    nav: {
        home: "Accueil",
        about: "Qu'est-ce que Proudmoore ?",
        features: "Fonctionnalités & Taux",
        timeline: "Délais et dates de lancements",
        discord: "Rejoindre la Communauté",
        faq: "Foire Aux Questions",
        legal: "Légalité & Droits des joueurs",
        appeal: "Appels de bannissement Discord"
    },

    copyright: "<span class='text-sm text-gray-400 font-extrabold'>© 2025 Proudmoore, en partenariat avec TwinStar-WoW</span>. Non affilié à Blizzard Entertainment. Tous droits réservés.",
    copyrightExtraWarning: "Le droit d'auteur de ce site web est la propriété de proudmoore.gg et de leurs auteurs respectifs, à l'exception des marques de commerce et autres éléments qui sont la propriété de leurs propriétaires respectifs. Tous droits réservés. La copie, la modification, le transfert ou la distribution du contenu du site web sous quelque forme que ce soit n'est pas autorisée sans la permission de proudmoore.gg.",

    videoDescription: "Une nouvelle ère de Cataclysm est en marche…",

    descriptionTitle: "Qu'est-ce que Proudmoore ?",
    descriptionText: "Proudmoore est un serveur Cataclysm créé <span class='italic'>sur mesure</span> — conçu pour les joueurs qui veulent une expérience moderne tout en conservant l'esprit d'origine de World of Warcraft.<br><br>Pas de files d'attente. Pas de 'Pay-to-Win'. Pas de <span class='font-extrabold'>surcharge</span> du client officiel.<br>Juste un JcJ fluide, un contenu JcE entièrement scripté, et un nouveau départ qui respecte votre temps.<br><br>Si vous avez déjà joué sur des serveurs privés, vous sentirez la différence.<br>Si ce n'est pas le cas — <span class='font-extrabold'>c'est ici que vous devez commencer.</span>",

    features: {
        title: "Fonctionnalités & Taux",
        description: "Découvrez toutes les fonctionnalités de jeu principales, nos taux et les nombreuses corrections qui rendent Proudmoore unique.",
        nav: {
            features: "Fonctionnalités",
            rates: "Taux",
            bugfixes: "Corrections de bugs"
        },
        items: [
            { "id": "mythicPlus", "title": "Donjons Mythique +", "description": "Découvrez les donjons Mythique+ avec des défis chronométrés et une difficulté croissante.", isFav: 1 },
            { "id": "soloQueue", "title": "Arène en file d'attente solo", "description": "Faites la queue en solo pour les arènes sans avoir besoin d'une équipe préfabriquée.", isFav: 1 },
            { "id": "crossFaction", "title": "Complètement inter-factions", "description": "Play with friends regardless of faction — crossfaction is fully enabled (Party/Raid/AH/BG/etc).", isFav: 1 },
            { "id": "transmogrification", "title": "Full Transmogrification", "description": "Personnalisez entièrement votre apparence avec des options de transmogrification complètes. (Sans limites)", isFav: 1 },
            { "id": "progressiveContent", "title": "Contenu progressif", "description": "Le contenu est publié en phases, reproduisant la progression originale de Cataclysm.", isFav: 0 },
            { "id": "casualRaid", "title": "Difficulté de raid décontractée", "description": "Des difficultés de raid plus indulgentes pour les joueurs occasionnels et semi-hardcore.", isFav: 1 },
            { "id": "battlegroundLeveling", "title": "Montée en niveau via les champs de bataille", "description": "Maximisation les façons de monter en niveau à partir du niveau 10.", isFav: 1 },
            { "id": "weekendEvents", "title": "Événements du week-end", "description": "Profitez d'événements exclusifs durant le week-end qui augmentent les récompenses et les taux.", isFav: 0 },
            { "id": "racialSwap", "title": "Échange de traits raciaux", "description": "Personnalisez vos traits raciaux pour qu'ils correspondent à votre build.", isFav: 0 },
            { "id": "xpRate", "title": "Taux d'XP ajustables", "description": "Choisissez la vitesse à laquelle vous voulez monter de niveau grâce à un gain d'expérience ajustable, de 100 % à 0 %.", isFav: 0 },
            { "id": "mopArena", "title": "Système d'équipes d'arène MoP", "description": "Utilisez les équipes d'arène de style Mists of Pandaria, en donnant la priorité à la cote personnelle plutôt qu'à la cote d'équipe.", isFav: 0 },
            { "id": "accountWide", "title": "Montures et compagnons liés au compte", "description": "Gagnez et partagez des montures et des compagnons de prestige sur tous les personnages de votre compte.", isFav: 0 },
            { "id": "antiBot", "title": "Systèmes modernes anti-bots & anti-vendeurs d'or", "description": "Des systèmes agressifs empêcheront le botting et la vente d'or comme sur aucun autre serveur.", isFav: 0 },
            { "id": "dualSpec", "title": "Double spécialisation à bas niveau et gratuite", "description": "La double spécialisation est débloquée à partir du niveau 10 sans frais.", isFav: 0 },
            { "id": "automaticSpell", "title": "Apprentissage automatique des sorts de classe", "description": "Pas besoin de visiter les maîtres de classe — apprenez les capacités automatiquement en montant de niveau.", isFav: 0 },
            { "id": "catchupMecanics", "title": "Mécaniques de rattrapage", "description": "Rattrapage rapide avec des systèmes conçus pour aider les nouveaux joueurs qui se lancent après le lancement du serveur.", isFav: 0 },
            { "id": "gatheringProfessions", "title": "Professions de récolte dynamiques", "description": "Les lieux de récolte donneront la priorité à la fois à la stabilité économique et à la densité de population des zones.", isFav: 0 },
            { "id": "lootRules", "title": "Règles de butin équitables", "description": "Règles de butin équitables sur tout le contenu pour réduire le 'ninja-looting'.", isFav: 0 },
            { "id": "altFriendly", "title": "Systèmes favorables aux alts", "description": "Conçu pour que vos personnages secondaires puissent bénéficier de la progression de votre compte.", isFav: 0 },
            { "id": "playerFirst", "title": "Assistance MJ axée sur le joueur (Player-First)", "description": "Assistance MJ axée sur le joueur. Notre équipe priorise les joueurs et la communauté dans chaque politique que nous mettons en œuvre.", isFav: 0 }
        ]
    },

    timeline: {
        title: "Proudmoore débute le",
        description: "13 septembre 2025"
    },

    discord: "Rejoignez notre Discord",

    faqTitle: "Foire aux questions",

    faqGeneral: {
        title: "Informations générales",
        questions: [
            {
                question: "Qu'est-ce qui différencie Proudmoore des autres serveurs Cataclysm ?",
                answer: "Proudmoore n'est pas juste un autre royaume Cataclysm, il s'appuie sur des concepts bien testés pour rendre l'extension bien équilibrée pour les joueurs hardcore et occasionnels. Nous introduisons les donjons Mythique+, les files d'attente JcJ cotées en solo, une variété de nouvelles voies de progression de niveau, et des systèmes inter-factions, tout en préservant l'expérience Cataclysm de base."
            },
            {
                question: "Qui dirige Proudmoore ? Est-ce une nouvelle équipe ou une renaissance ?",
                answer: "Proudmoore est un nouveau projet dirigé par une équipe expérimentée, une collaboration utilisant l'infrastructure de TwinStar et une nouvelle équipe composée de vétérans des serveurs privés avec des années d'expérience dans la gestion de projets. En mettant l'accent sur la communauté et la qualité, nous visons à créer le meilleur projet Cataclysm possible."
            },
            {
                question: "Pourquoi avoir choisi l'expansion Cataclysm?",
                answer: "Cataclysm est souvent mal compris. Sous ses changements controversés se cache la conception de classe la plus raffinée de l'ère classique de WoW, ainsi que des refontes du monde et des systèmes JcJ qui méritent une seconde chance. Nous pensons que la version 4.3.4, une fois modernisée et rééquilibrée, offre une boucle de jeu incroyablement gratifiante, et nous sommes là pour le prouver."
            },
            {
                question: "Le serveur sera-t-il Blizzlike ou personnalisé ?",
                answer: "Considérez Proudmoore comme un hybride. Le contenu et la progression resteront fidèles à Cataclysm de Blizzard, mais les systèmes et les mécanismes seront modernisés pour 2025. Nous restons fidèles aux fondations de Blizzard, mais nous n'avons pas peur de corriger ce qui doit être corriger ou d'améliorer ce que l'original n'a pas réussi à faire."
            },
            {
                question: "Combien de temps ce serveur a-t-il été en développement ?",
                answer: "Proudmoore utilise le core Cataclysm de TwinStar, qui est en développement depuis près de 17 ans maintenant. Nous avons reconstruit et affiné pratiquement tous les aspects du code du jeu de A à Z, en nous assurant que chaque fonctionnalité que nous lançons est prête pour la production et durable."
            },
            {
                question: "Quel est le plan à long terme du serveur ?",
                answer: "Notre objectif est d'offrir une expérience Cataclysm vivante et évolutive. Cela implique des rotations de contenu saisonnières, de nouvelles incitations pour le JcE et le JcJ, des événements communautaires, et des mises à jour d'équilibrage continues. Lorsque le royaume atteindra la fin naturelle de sa progression, nous nous éloignerons du format « blizzlike » et commencerons à apporter des changements expérimentaux pour que le jeu reste dynamique."
            },
            {
                question: "Est-ce que Proudmoore va se réinitialiser ou faire un « wipe » à l'avenir ?",
                answer: "Non, Proudmoore n'est pas un projet saisonnier ou à durée limitée. Votre progression est là pour rester. Bien que nous puissions envisager de nouveaux serveurs frais facultatifs dans un avenir lointain, le royaume principal ne sera jamais effacé ou réinitialisé."
            },
            {
                question: "Y a-t-il une feuille de route disponible après le lancement ?",
                answer: "Oui. Une feuille de route complète sera publiée peu après le lancement, détaillant notre calendrier pour les rotations de Mythic+, les événements saisonniers, les nouveaux systèmes et les mises à jour de qualité de vie. Proudmoore est un projet vivant, et nous nous engageons à faire preuve d'une totale transparence au fur et à mesure que nous grandissons."
            }
        ]
    },

    faqGameplay: {
        title: "Expériences de jeu et Fonctionnalités",
        questions: [
            {
                question: "Quels sont les taux d'XP, d'or, de réputation et de butin ?",
                answer: "Nous avons conçu les taux de Proudmoore en cherchant à <span class='font-bold'>équilibrer le jeu décontracté et la durabilité à long terme</span>. Voici comment chacun d'eux s'inscrit dans cette vision :<br><ul><li><span class='font-bold'>XP (1x–3x, commutable) :</span><br>Monter de niveau doit être gratifiant, pas fastidieux. Avec un taux par défaut de 3x, les joueurs qui ne peuvent jouer que le week-end ou de manière occasionnelle devraient pouvoir progresser de manière significative sans se sentir à la traîne. Il y aura également des bonus supplémentaires, en particulier le week-end et les jours fériés. Nous avons une option pour commuter les taux d'XP, afin que vous puissiez choisir le rythme que vous souhaitez. Certains veulent monter de niveau le plus vite possible, d'autres veulent en faire l'expérience pleinement, nous vous donnons la liberté de choisir.</li><li><span class='font-bold'>Réputation (1x avec des bonus le week-end) :</span><br>Le « farming » de réputation définit le contenu de fin de jeu de Cataclysm. Nous maintenons le taux de base 'blizzlike' pour préserver la valeur de la progression, mais nous offrons des bonus le week-end pour alléger la charge des joueurs qui travaillent.</li><li><span class='font-bold'>Butin et or (1x) :</span><br>L'inflation de l'or tue les économies. Nous maintenons le butin et l'or à 1x pour préserver la valeur des objets, empêcher l'abus des 'bots' et garantir que les métiers et le commerce entre joueurs restent importants. Cela garantit également que les coûts des vendeurs et des réparations conservent leur sens au fil du temps.</li><li><span class='font-bold'>Matériaux rares (~1,2x en donjons héroïques/raids) :</span><br>Une légère augmentation des butins de matériaux rares dans le contenu de défi récompense le jeu en groupe et soutient la progression des métiers sans inonder le marché. Cela rend également les donjons plus gratifiants au fil du temps.</li><li><span class='font-bold'>Métiers (1x avec des bonus d'XP le week-end) :</span><br>La collecte et l'artisanat doivent être significatifs, et non pas une étape à sauter. Le maintien du taux à 1x assure une progression constante, tandis que les bonus de week-end offrent une fenêtre de rattrapage naturelle pour les joueurs ayant un temps limité.</li><li><span class='font-bold'>Honneur (1,25x avec des bonus le week-end) :</span><br>S'équiper en JcJ ne devrait pas être un second emploi. Un gain d'Honneur légèrement plus élevé respecte votre temps tout en maintenant l'acquisition d'équipement à un rythme suffisant pour soutenir des saisons saines et la progression dans le classement. Les bonus sur les taux d'Honneur seront principalement axés sur les heures de pointe pour encourager de larges files d'attente.</li><li><span class='font-bold'>Points de Justice / Vaillance (1x avec des bonus d'activité hebdomadaire) :</span><br>La monnaie du JcE reste à 1x pour préserver le rythme des récompenses, mais les joueurs actifs sont récompensés par des bonus d'activité hebdomadaire qui accélèrent les choses sans trivialiser le contenu.</li></ul>",
                additionalInfoTitle: "En résumé:",
                additionalInfoText: "Nous voulons que la progression soit <span class='italic'>méritée</span> mais <span class='italic'>pas épuisante</span>. Ces taux évitent l'épuisement des sessions de « farming » uniquement en 1x tout en restant loin des « cadeaux » offerts dans la version officielle du jeu. Vous vous sentirez récompensé pour le temps que vous y avez consacré et l'économie restera active pendant des mois, contrairement à d'autres projets."
            },
            {
                question: "Y a-t-il le RF (Recherche de raid) ?",
                answer: "Non, il n'y a pas de Recherche de raid. Elle a été ajoutée à l'origine avec le raid de l'Âme des dragons, et elle était extrêmement impopulaire/controversée. Nous n'avons aucune intention de l'ajouter ici."
            },
            {
                question: "Quel est le statut des champs de bataille classés, des arènes et de la file d'attente solo ?",
                answer: "Tous les modes de <span class='font-bold'>JcJ classé</span> seront disponibles au lancement de la saison, en même temps que la sortie des raids. La file d'attente solo <span class='font-bold'>non classée</span> pour les arènes est activée dès le lancement comme voie de montée en niveau supplémentaire, tout comme les <span class='font-bold'>champs de bataille non classés</span>. Les champs de bataille classés sont entièrement fonctionnels et seront liés aux récompenses saisonnières."
            },
            {
                question: "Y a-t-il des champs de bataille/donjons inter-factions ?",
                answer: "Oui. Proudmoore propose une mise en file d'attente inter-factions complète pour les champs de bataille, les donjons et les raids."
            },
            {
                question: "Est-ce qu'il y a des classes ou des spécialisations désactivées ou rééquilibrées ?",
                answer: "Aucune classe ou spécialisation n'est désactivée ou rééquilibrée. Il y a quelques légers rééquilibrages vers le contenu de fin de jeu pour s'adapter au fait que nous utilisons le client 4.3.4. Lorsque nous atteindrons la fin de la progression, nous commencerons à expérimenter le rééquilibrage des classes et des spécialisations pour que le contenu reste dynamique."
            },
            {
                question: "Les champs de bataille sont-ils actifs ou fusionnés de quelque manière que ce soit ?",
                answer: "Il s'agit d'un projet de serveur privé, ce qui signifie que nous n'avons qu'un seul serveur. Les groupes de bataille tels qu'ils existent chez Blizzard & dans la version officielle du jeu sont superflus, tous les joueurs font partie d'un seul pool de 'matchmaking' pour le JcJ, la recherche de donjon (RDF)"
            },
            {
                question: "Les donjons et les raids sont-ils scriptés ? À quel niveau d'achèvement ?",
                answer: "Oui, tous les donjons et raids de Cataclysm sont entièrement scriptés. Nous utilisons le core de Cataclysm de Twinstar, qui a plus de 17 ans de développement. Des mécaniques de donjon à l'IA et aux événements des boss, vous pouvez vous attendre à vivre une expérience complète."
            },
            {
                question: "Avec quel palier le serveur est-il lancé ?",
                answer: "Nous lançons le serveur avec le contenu d'avant le palier 11 : le Bastion du Crépuscule, Descente de l'Aile noire et le Trône des quatre vents. Les raids du palier 11 seront disponibles une ou deux semaines après la date de lancement (à déterminer). Les paliers futurs seront échelonnés en fonction de la progression de la communauté, et non de dates fixes."
            },
            {
                question: "Comment fonctionnent la progression de l'équipement et les systèmes de rattrapage ?",
                answer: "La progression de l'équipement suivra celle de Blizzard, à l'exception de nos ajouts de donjons Mythique+ et de raids en mode décontracté. Le Mythique+ servira de passerelle entre les donjons héroïques et les raids normaux, et les raids en mode décontracté serviront à réduire la courbe de compétence nécessaire pour passer des donjons aux raids. Nos systèmes de rattrapage seront annoncés à une date ultérieure, mais ils inciteront essentiellement les joueurs qui rejoignent tardivement à rattraper le contenu actuel sans en être pénalisés."
            },
            {
                question: "Y a-t-il une restriction de progression JcE ou JcJ ?",
                answer: "La progression sera restreinte de manière logique et suivra principalement la chronologie originale de Blizzard. Comme mentionné précédemment, nous n'aurons pas de dates fixes pour la progression des futurs patchs ; à la place, nous aurons un mélange de calendriers potentiels, équilibrés par des analyses sur la progression individuelle des joueurs et des mesures de participation. En substance, nous voulons progresser à travers les patchs sans laisser les joueurs à la traîne, tout en gardant un œil sur la progression des joueurs les plus assidus. Il n'est pas possible de planifier cela parfaitement pour tous les publics, mais nous ferons de notre mieux."
            },
            {
                question: "Le JcJ sauvage est-il encouragé ? Comment ?",
                answer: "Nous garderons un œil attentif sur le JcJ sauvage. S'il y a un nombre important de joueurs qui y participent et forment des groupes spécifiquement pour cela, nous l'encouragerons davantage. Nous ne voulons pas que Proudmoore devienne un terrain de jeu pour le harcèlement gratuit, mais nous voulons encourager le JcJ sauvage en groupe s'il y a un intérêt pour cela."
            },
            {
                question: "Avez-vous la double spécialisation ? Est-elle gratuite ou basée sur l'or ?",
                answer: "La double spécialisation est automatiquement activée gratuitement à partir du niveau 10."
            },
            {
                question: "Existe-t-il des zones ou des événements personnalisés ?",
                answer: "Pas de zones personnalisées, mais il y aura de nombreux événements. Nous explorerons les parties les plus 'personnalisées' de Cataclysm lorsque nous atteindrons la fin de la progression et que les joueurs commenceront à s'ennuyer du contenu 4.3.4."
            },
            {
                question: "Verra-t-on des équivalents de Timewalking Mythic+ ou un ajustement des classes ?",
                answer: "Oui - Proudmoore propose un <span class='font-bold'>système Mythique+</span> fait maison, avec une difficulté évolutive, des affixes et un suivi du classement. L'équilibrage des classes sera abordé à la fin de la progression du contenu. Nous pourrions éventuellement ajuster certains équipements de fin de jeu pour les arènes et les champs de bataille cotés. Le raid de Marcheurs du temps est à l'étude dans le cadre du futur contenu saisonnier."
            }
        ],
    },

    faqTechnical: {
        title: "Questions techniques",
        questions: [
            {
                question: "Quel client ai-je besoin ? Où puis-je le télécharger ?",
                answer: "N'importe quel client 4.3.4 fonctionnera avec Proudmoore. Vous pouvez en trouver un via Google. De plus, nous fournirons nos propres liens de téléchargement pour notre client 4.3.4, à l'approche de la date de lancement."
            },
            {
                question: "Y a-t-il un lanceur ? Un patcher ?",
                answer: "Non. Pour ne pas entrer dans les détails techniques, un lanceur ou un patcher est un programme exécutable, un fichier .exe. Tout fichier .exe personnalisé qu'un serveur privé produit ne sera probablement pas signé, ce qui signifie qu'il ne possède pas de 'certificat numérique' garantissant qu'il est sûr. C'est pourquoi la plupart des projets avec un fichier .exe personnalisé vous demandent de 'lancer le programme en tant qu'administrateur', car cela contourne les protocoles de sécurité qui se déclenchent lors de l'exécution d'un fichier .exe non signé. En termes simples, ce n'est pas sûr et il n'y a aucune garantie sur ce que vous installez et sur l'accès que cela a à votre ordinateur. Proudmoore n'encouragera jamais les joueurs à télécharger et à utiliser un fichier .exe non signé."
            },
            {
                question: "Puis-je utiliser mon propre client Cataclysm ?",
                answer: "Oui. Certains clients peuvent avoir des patchs MPQ modifiés, ce qui peut potentiellement perturber votre jeu. Pour vous assurer de ne pas avoir de problèmes graphiques ou de bugs, nous vous recommandons d'utiliser un client propre et vierge."
            },
            {
                question: "Ce serveur est-il hébergé sur la côte Est, en Europe, ou ailleurs ?",
                answer: "Notre serveur est hébergé en Europe."
            },
            {
                question: "Quelle est la latence/le temps de ping attendu pour les joueurs d'Amérique du Nord, d'Europe et d'Amérique du Sud ?",
                answer: "EU : 20-60 ms<br><br>NA : 70-130 ms<br><br>SA : 90-160 ms<br><br>Nous avons effectué des tests de routage approfondis et optimisé notre CDN pour que tout soit aussi fluide que possible dans toutes les régions."
            },
            {
                question: "Quel genre de système anti-triche est utilisé ?",
                answer: "Dans la plupart des cas, aucun VPN n'est nécessaire. Si vous êtes dans une région où le routage est restreint (par exemple, en Océanie ou dans certaines parties de l'Asie), un VPN léger peut améliorer la stabilité. De plus, si vous êtes dans une région où l'accès à Internet est restreint, vous pourriez avoir besoin d'un VPN pour jouer."
            },
            {
                question: "Puis-je jouer sur Steam Deck ou Linux ?",
                answer: "Oui\! Proudmoore fonctionne très bien avec \<span class='font-bold'\>Proton (Steam Deck)\</span\> et \<span class='font-bold'\>Wine (Linux)\</span\>. Des guides communautaires seront disponibles après le lancement pour vous aider à l'installation."
            },
            {
                question: "Les clients mobiles tels que WoW Mini ou Android fonctionneront-ils ?",
                answer: "Nous ne prenons pas officiellement en charge les clients mobiles en raison de préoccupations liées à la performance et à la sécurité. Cependant, les utilisateurs avancés peuvent expérimenter à leurs risques et périls — sachez simplement que le support et la compatibilité peuvent varier."
            }
        ]
    },

    faqAccountSecurity: {
        title: "Compte et sécurité",
        questions: [
            {
                question: "Comment puis-je récupérer un mot de passe perdu ou un compte verrouillé ?",
                answer: "Notre panneau de compte aura un bouton intitulé « Mot de passe oublié ». Vous pouvez l'utiliser pour récupérer votre compte. Si votre compte est verrouillé, veuillez contacter notre équipe d'assistance via Discord, une réponse rapide est garantie."
            },
            {
                question: "Le partage de compte est-il autorisé ?",
                answer: "Pour des raisons de sécurité et d'équité, nous n'autorisons pas les joueurs à partager leurs comptes. Nous sommes nous-mêmes des joueurs, et nous savons comment les choses fonctionnent, surtout entre amis proches et au sein des guildes. Le partage de compte arrivera, nous le comprenons, et nous ferons preuve d'une certaine souplesse à ce sujet. Cependant, si nous découvrons qu'un compte est partagé dans le but de progresser de manière compétitive ou de rester connecté 24h/24 et 7j/7, attendez-vous à des bannissements temporaires, voire permanents. En raison de cette politique, nous ne ferons preuve d'aucune indulgence envers les joueurs qui perdent leurs comptes ou leur équipement à cause du partage de compte. Faites-le à vos propres risques."
            },
            {
                question: "Is multiboxing allowed?",
                answer: "We allow common sense multiboxing. World of Warcraft has content that is intended for group play. If there is a boss that is too difficult to do on your own, does that mean you log into a second account to down it? No, it means you find a friend to help. Players are allowed to multibox when it comes to crafting, banking, and other things inside major cities. We do not allow multiboxing in leveling, battlegrounds, raids, dungeons, etc."
            },
            {
                question: "Will 2FA (two-factor authentication) be supported?",
                answer: "Yes. Two-Factor Authentication will be available via email or an authenticator app to help keep your account secure. We strongly encourage all players to enable it."
            },
            {
                question: "Can I change my username or email?",
                answer: "For security purposes, we do not openly allow players to change their usernames or emails. If there is an extenuating circumstance, the administration team may manually make exceptions."
            },
            {
                question: "Will I be able to reserve names before launch?",
                answer: "Yes, there will be a variety of ways to reserve names before launch, stay tuned."
            },
            {
                question: "Can I use my Twinstar account?",
                answer: "Yes! If you have a Twinstar account, you will not need to create another account for Proudmoore. While we are our own project, TwinStar authentication database will be used for logins"
            }
        ]
    },

    faqCommunity: {
        title: "Community & Discord",
        questions: [
            {
                question: "Is Discord required to participate in events or support?",
                answer: "No, but it’s <span class='font-bold'>highly recommended</span>. Most announcements and support updates will happen on Discord first. You don’t need to talk or join voice — just being in the server keeps you in the loop."
            },
            {
                question: "Can I link my Discord or email to recover accounts?",
                answer: "No to Discord, yes to email. Players are not required to link their discord accounts to their in-game accounts."
            },
            {
                question: "Will there be forums or just Discord?",
                answer: "We’ll start with Discord for support, updates, and community discussion. Traditional forums may follow if there’s strong demand for organized discussion, but Discord allows faster, more direct communication."
            },
            {
                question: "Can I appeal bans or punishments? Where?",
                answer: "Yes, appeals will be handled through a form system and handled by our GM Team. Every case is reviewed by staff, and decisions are transparent and logged. Your appeal will never be handled by the same staff member that gave the punishment, to assure fairness."
            },
            {
                question: "Do you support streamers or content creators?",
                answer: "Absolutely. We offer perks for creators. Apply through the <span class='font-bold'>Creator Program (TBA)</span> channel on Discord."
            },
            {
                question: "Will there be a system to report players?",
                answer: "Yes. Players can report players via /report in-game, via GM ticket, or through our Discord forms. We investigate all reports thoroughly and act quickly on confirmed abuse or cheating."
            }
        ]
    },

    faqEvents: {
        title: "Events & Seasons",
        questions: [
            {
                question: "Are there in-game events like seasonal holidays or PvP tournaments?",
                answer: "Absolutely, yes! We host both <span class='font-bold'>Blizzard-style seasonal events</span> (like Hallow’s End, Winter Veil) and <span class='font-bold'>custom events</span>, including tournaments, scavenger hunts, world boss races, and more — all with cosmetic or vanity rewards. There will be additional small events for holidays around the world."
            },
            {
                question: "Will there be weekly challenges or server-wide goals?",
                answer: "All challenges and goals on a server-wide level will take place in our online leaderboards. We hope to continue expanding on these to create as much competition & boasting rights as possible."
            },
            {
                question: "Will gear/achievements be reset between seasons?",
                answer: "We will be following Blizzard’s progression path, so there will be no gear or achievement resets while progressing through seasons or patches. When we hit the end of progression, we may begin to spice things up, but that will be up to the community."
            }
        ]
    },

    faqMonetization: {
        title: "Monetization & Store",
        questions: [
            {
                question: "Is Proudmoore free to play?",
                answer: "Yes. Proudmoore is <span class='font-bold'>100% free to play</span>, no P2W, no hidden fees, no purchase required to access any content."
            },
            {
                question: "Is there a vanity or service shop?",
                answer: "Yes, we will have optional donations and shops. No P2W. Players will be able to earn anything in donation shops without ever donating."
            },
            {
                question: "Are there cosmetic or QoL perks for donors?",
                answer: "We will offer a number of cosmetic and QoL perks for donors. We want to emphasize here that donating on Proudmoore is not intended to create an “upper class” of players with unique advantages not available to players. Every single thing in our shop will be available to players by playing the game. Our shop is for players who want to support our project, and a majority of the funding gained from it goes directly back into the community."
            },
            {
                question: "Is the shop only cosmetic, or does it have boosts?",
                answer: "The shop is <span class='font-bold'>strictly cosmetic and utility-based</span>. No gear, power, or progression can be purchased. We are committed to <span class='font-bold'>no pay-to-win</span>. Ever. We are the only Cataclysm private server that offers this, and we plan to keep it that way."
            },
            {
                question: "Are transmogs available without donating?",
                answer: "<span class='font-bold'>Yes</span>. We have made the decision to make unlimited & full transmog free to all players. Players can choose to donate for transmogs, but these are optional and not restricted to only paying players. We are the only Cataclysm private server that offers this for free."
            },
            {
                question: "Are there lootboxes or gamble systems?",
                answer: "NO. Never. Proudmoore will never use lootboxes or RNG-based purchased. We may add lootboxes in-game as an incentive for things such as RDF queues, but these will always be free features. All donation items are transparently priced with clear descriptions — no bait-and-switch mechanics."
            },
            {
                question: "Is the server pay-to-win in any form?",
                answer: "Absolutely not. Proudmoore is built on integrity and balance. Donors support the server, not their performance. That being said, some players may view things such as experience rate boosts as P2W. Proudmoore is built upon the idea that players do not have the time they used to in their busy lives, but still want to be able to enjoy playing the game. Any optional service we offer in the store will be with these players in mind. But we will never allow these services to interfere with actual competition, such as realm first races. No P2W. Ever."
            }
        ]
    },

    faqRules: {
        title: "Rules & Policies",
        questions: [
            {
                question: "What's the policy on using bots or rotation helpers (PQRs)?",
                answer: "You’re joking if you’re asking this seriously. Zero tolerance. Any form of botting, automation, or rotation scripts will result in immediate bans. We prioritize a fair and competitive environment for all players."
            },
            {
                question: "Are there any addons that aren't allowed?",
                answer: "There are a number of addons that are automation-based and respond with inputs, these are not allowed. The line on this is not exactly black and white, so we will give discretion towards players. There are addons that will automate auction house sales, both buying and selling. These make you no different than a bot. If you are using addons that make you look like a bot, you may be handled by our GM team like you are a bot."
            },
            {
                question: "Will GMs moderate world chat or stay hands-off?",
                answer: "Moderation will be <span class='font-bold'>light, but active</span>. We aim for a free, fun environment. There will not be any “big brother” watching down on you here. Any conversation that goes too far will result in a warning from a GM privately. Racism, hate speech, spam, or harassment will be removed quickly. GMs are there to support the community, not police it unnecessarily."
            },
            {
                question: "What's your policy on toxicity and harassment?",
                answer: "We take it seriously, and understand there is nuance to the words “toxicity” and “harassment”, especially in an MMORPG like WoW. Banter, goading, trolling, these are all things that are very common in the way that people act towards each other, even friends. We take this understanding very seriously when it comes to our GM team. Every GM with permissions to moderate chat will explicitly prove that they are able to see the nuance here, and understand when banter becomes hostile and aggressive. There are in-game systems to block people from your chat, we expect players to use them. But repeated instances of bullying or harassment will result in punishments."
            },
            {
                question: "Can I advertise my stream/guild in global chat?",
                answer: "Yes, <span class='font-bold'>within reason</span>. Occasional guild recruitment or stream announcements are allowed in moderation. Repeating ads or spamming global chat will result in mutes or timeouts. Be respectful of the space, and of the players. If you post your ads and players begin getting vocally upset, and you continue anyways, we will see your ad as disruptive to the community, within reason."
            }
        ]
    },

    faqProgression: {
        title: "Progression & Transfers",
        questions: [
            {
                question: "Can I transfer a character from another private server?",
                answer: "No, we <span class='font-bold'>do not accept transfers from other private servers</span>. Proudmoore is a fresh, fair start for everyone. Allowing external transfers would compromise integrity and balance. Other Cataclysm projects have P2W stores, and accepting transfers would mean accepting P2W players."
            },
            {
                question: "Will characters ever carry over to future realms?",
                answer: "Proudmoore is intended to be a permanent realm. If we do decide to launch a new realm in the future, yes, we will have a system for legacy transfers. If this is something we decide to do, please keep in mind that the stability of the fresh realms competition and fairness will be prioritized over your legacy character."
            },
            {
                question: "Is there a fresh realm planned?",
                answer: "Directly from the administration team – we have not discussed any future realms, whatsoever. Proudmoore is our primary and only focus. We will hold space to say that there could be future realms based on our community, but that is a discussion for years down the road. If we do ever have any future realms besides Proudmoore, fresh starts will never force wipes on the main realm."
            },
            {
                question: "Are character renames or race/faction changes available?",
                answer: "Yes, these services will all be available to players. Internally, we have not discussed how these services will be available, by default we assume they will be optional paid services. This is something we will bring up with the community and see what they want this to look like."
            },
            {
                question: "Will you offer paid services like server transfer, appearance change, etc.?",
                answer: "We will offer <span class='font-bold'>optional character services</span> like name change, appearance change, and faction swap. All services are cosmetic or identity-based — no gameplay boosts or P2W."
            }
        ]
    },

    faqDevelopment: {
        title: "Development & Feedback",
        questions: [
            {
                question: "How can I report bugs?",
                answer: "TBD. Twinstar’s infrastructure has a built-in bug reporting system, we may end up using a version of this. Or we may use github. This will be updated and we will have a Discord announcement when this information is clear. To be clear, developers do not monitor Discord. Complaining about bugs or demanding fixes there will not result in what you want. As an administration team, we do believe that sometimes bugs are critical enough that they warrant public discussion, and we do encourage players to speak up if they see something critical. But we will have standard processes for handling bugs that all players must go through. As a courtesy, our GM Team extends a strong helping hand when players experience bugs. If you experience a bug that is blocking your progression or creating another issue that needs quick resolution, please make a GM Ticket in-game."
            },
            {
                question: "Will bug fixes be posted publicly?",
                answer: "Yes. It is important for players to know what is fixed, and when. You’ll always know what’s going on behind the scenes."
            },
            {
                question: "How often are updates rolled out?",
                answer: "TBA. On Proudmoore, we approach everything with facts and data. How aggressively we roll out updates will depend on the amount of bugs we encounter and the severity. Proudmoore is running a core that has been in active development for 17 years, so we are not too concerned about this."
            },
            {
                question: "Is the dev team active in Discord?",
                answer: "No. We strongly believe in allowing our staff team to work in the environment that is best for them. Time spent chatting or getting derailed in Discord is time that could be spent fixing priority issues. We will hold this boundary for our Developers, and for our Game Masters as well, if they do not want to be present on the public Discord. That being said, our administration team and community management team will be informed and knowledgeable about any subject relevant to development. We will always prioritize listening to players and understanding the community."
            },
            {
                question: "Do players get to vote on changes or features?",
                answer: "Yes. If there are any significant changes or features that we believe may impact players, we will involve the community on the decisions. We will regularly listen to players, gather feedback, and encourage open discussion."
            },
            {
                question: "Is this based on TrinityCore or another core?",
                answer: "Twinstar’s Cataclysm core was originally based on TrinityCore back in 2011. Since then, we have had over 50,000 updates to the core. Our core and TrinityCore are now so different that we are not able to utilize TrinityCore’s open source updates. We view this as a strength, not a weakness."
            }
        ]
    },

    faqMiscellaneous: {
        title: "Miscellaneous",
        questions: [
            {
                question: "Are achievements and mounts account-wide?",
                answer: "Yes! This is a simple QOL improvement that is widely popular amongst players. You earned it, you deserve to show it off, regardless of what character you’re playing on."
            },
            {
                question: "Will there be a ladder or ranking system for PvP?",
                answer: "Ohhh yes. We will have a full leaderboard and ranking system available online. This is one area that Proudmoore will walk in Twinstar’s footsteps, and push to be bigger and better than ever. We want to expand on leaderboards and player progression extensively, and we already have the best leaderboards of all Cataclysm servers."
            },
            {
                question: "Is there a spectator mode for arena?",
                answer: "Currently, no. This is something we may look into if there is a large demand, but from experience, spectator features often seem to be niche and rarely used."
            },
            {
                question: "Will there be RP support or RP realms?",
                answer: "Proudmoore is not an RP realm, but we would consider ourselves RP-friendly. If any RP group or guild wishes to join, feel free to reach out to our administration team and we’ll see what we can do for you."
            }
        ]
    },

    rates: "<li><span class='font-bold'>XP Rates:</span> 1x–3x (player-controlled toggle)</li><li><span class='font-bold'>Reputation:</span> 1x (& weekend bonuses)</li><li><span class='font-bold'>Loot & Gold:</span> 1x (balanced economy)</li><li><span class='font-bold'>Rare Materials:</span> ~1.2x in Heroics/Raids</li><li><span class='font-bold'>Professions:</span> 1x (& weekend bonuses)</li><li><span class='font-bold'>Honor:</span> 1.25x (& weekend bonuses)</li><li><span class='font-bold'>Justice / Valor Points:</span> 1x (& weekly activity bonus)</li>",

    ratesComment: "Patience for escort quests: 0x",

    bugFixes: [
        {
            title: "Core Revisions",
            description: "Tailored server-side improvements to stability, accuracy, and core logic."
        },
        {
            title: "Database Revisions",
            description: "10,000+ DB enhancements to quests, NPCs, items, and mechanics."
        },
        {
            title: "Years of Active Development",
            description: "Consistent development — we build, polish, and iterate nonstop."
        },
    ],

    bugFixesComment: "Yeah. We know what we're doing."
};

export default enTranslation;
