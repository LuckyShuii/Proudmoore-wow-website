const frTranslation = {
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
            { "id": "crossFaction", "title": "Complètement inter-factions", "description": "Jouez avec vos amis quelle que soit votre faction — le crossfaction est entièrement activé (Groupe/Raid/HV/Champ de bataille/etc).", isFav: 1 },
            { "id": "transmogrification", "title": "Transmogrification complète", "description": "Personnalisez entièrement votre apparence avec des options de transmogrification complètes. (Sans limites)", isFav: 1 },
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
                answer: "Oui! Proudmoore fonctionne très bien avec <span class='font-bold'>Proton (Steam Deck)</span> et <span class='font-bold'>Wine (Linux)</span>. Des guides communautaires seront disponibles après le lancement pour vous aider à l'installation."
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
                question: "Le multiboxing est-il autorisé ?",
                answer: "Nous autorisons le multiboxing de bon sens. World of Warcraft a du contenu qui est destiné au jeu en groupe. S'il y a un boss trop difficile à faire en solo, est-ce que cela signifie que vous vous connectez sur un deuxième compte pour le vaincre ? Non, cela signifie que vous trouvez un ami pour vous aider. Les joueurs sont autorisés à utiliser le multiboxing pour le craft, la banque, et d'autres choses à l'intérieur des grandes villes. Nous n'autorisons pas le multiboxing pour le leveling, les champs de bataille, les raids, les donjons, etc."
            },
            {
                question: "La 2FA (authentification à deux facteurs) sera-t-elle prise en charge ?",
                answer: "Oui. L'authentification à deux facteurs sera disponible par e-mail ou via une application d'authentification pour aider à sécuriser votre compte. Nous encourageons fortement tous les joueurs à l'activer."
            },
            {
                question: "Puis-je changer mon nom d'utilisateur ou mon adresse e-mail ?",
                answer: "Pour des raisons de sécurité, nous n'autorisons pas ouvertement les joueurs à changer leur nom d'utilisateur ou leur adresse e-mail. S'il y a des circonstances atténuantes, l'équipe d'administration peut faire des exceptions manuellement."
            },
            {
                question: "Serai-je capable de réserver des noms avant le lancement ?",
                answer: "Oui, il y aura différentes manières de réserver des noms avant le lancement, restez à l'écoute."
            },
            {
                question: "Puis-je utiliser mon compte Twinstar ?",
                answer: "Oui ! Si vous avez un compte Twinstar, vous n'aurez pas besoin d'en créer un autre pour Proudmoore. Bien que nous soyons notre propre projet, la base de données d'authentification de TwinStar sera utilisée pour les connexions."
            }
        ]
    },

    faqCommunity: {
        title: "Communauté et Discord",
        questions: [
            {
                question: "Discord est-il requis pour participer aux événements ou pour le support ?",
                answer: "Non, mais c'est <span class='font-bold'>fortement recommandé</span>. La plupart des annonces et des mises à jour de support seront d'abord publiées sur Discord. Vous n'avez pas besoin de parler ou de rejoindre un salon vocal — le simple fait d'être sur le serveur vous tient informé."
            },
            {
                question: "Puis-je lier mon Discord ou mon e-mail pour récupérer des comptes ?",
                answer: "Non pour Discord, oui pour l'e-mail. Les joueurs ne sont pas tenus de lier leurs comptes Discord à leurs comptes en jeu."
            },
            {
                question: "Y aura-t-il des forums ou seulement Discord ?",
                answer: "Nous commencerons par Discord pour le support, les mises à jour et les discussions communautaires. Des forums traditionnels pourront suivre s'il y a une forte demande pour des discussions organisées, mais Discord permet une communication plus rapide et plus directe."
            },
            {
                question: "Puis-je faire appel des bannissements ou des sanctions ? Où ?",
                answer: "Oui, les appels seront traités via un système de formulaire et gérés par notre équipe de Maîtres de jeu. Chaque cas est examiné par le personnel, et les décisions sont transparentes et enregistrées. Votre appel ne sera jamais traité par le même membre du personnel qui a infligé la sanction, afin de garantir l'équité."
            },
            {
                question: "Est-ce que vous soutenez les streamers ou les créateurs de contenu ?",
                answer: "Absolument. Nous offrons des avantages aux créateurs. Postulez via le salon <span class='font-bold'>Programme des créateurs (À DÉTERMINER)</span> sur Discord."
            },
            {
                question: "Y aura-t-il un système pour signaler les joueurs ?",
                answer: "Oui. Les joueurs peuvent signaler d'autres joueurs via la commande /report en jeu, par le biais d'un ticket de MJ, ou via nos formulaires sur Discord. Nous enquêtons de manière approfondie sur tous les signalements et agissons rapidement en cas d'abus ou de tricherie confirmés."
            }
        ]
    },

    faqEvents: {
        title: "Événements et saisons",
        questions: [
            {
                question: "Y a-t-il des événements en jeu comme les fêtes saisonnières ou les tournois JcJ ?",
                answer: "Absolument, oui ! Nous organisons à la fois des <span class='font-bold'>événements saisonniers de type Blizzard</span> (comme la Sanssaint, le Voile d'hiver) et des <span class='font-bold'>événements personnalisés</span>, incluant des tournois, des chasses au trésor, des courses de boss mondiaux, et plus encore — tous avec des récompenses cosmétiques ou d'apparat. Il y aura aussi d'autres petits événements pour les jours fériés dans le monde entier."
            },
            {
                question: "Y aura-t-il des défis hebdomadaires ou des objectifs à l'échelle du serveur ?",
                answer: "Tous les défis et objectifs à l'échelle du serveur se dérouleront dans nos classements en ligne. Nous espérons continuer à les développer pour créer le plus de compétition et de gloire possible."
            },
            {
                question: "L'équipement et les hauts faits seront-ils réinitialisés entre les saisons ?",
                answer: "Nous suivrons le chemin de progression de Blizzard, il n'y aura donc aucune réinitialisation de l'équipement ou des hauts faits pendant la progression à travers les saisons ou les patchs. Lorsque nous atteindrons la fin de la progression, nous pourrions commencer à pimenter les choses, mais cela dépendra de la communauté."
            }
        ]
    },

    faqMonetization: {
        title: "Monétisation et boutique",
        questions: [
            {
                question: "Proudmoore est-il gratuit ?",
                answer: "Oui. Proudmoore est <span class='font-bold'>100 % gratuit</span>, sans P2W, sans frais cachés et sans achat requis pour accéder à n'importe quel contenu."
            },
            {
                question: "Y a-t-il une boutique de vanité ou de services ?",
                answer: "Oui, nous aurons des dons optionnels et des boutiques. Pas de 'Payer pour gagner' (P2W). Les joueurs pourront gagner tout ce qui se trouve dans les boutiques de dons sans jamais avoir à faire de donation."
            },
            {
                question: "Y a-t-il des avantages cosmétiques ou de qualité de vie pour les donateurs ?",
                answer: "Nous offrirons un certain nombre d'avantages cosmétiques et de qualité de vie aux donateurs. Nous tenons à souligner que faire un don sur Proudmoore n'est pas destiné à créer une 'classe supérieure' de joueurs avec des avantages uniques non disponibles pour les autres joueurs. Absolument tout ce qui se trouve dans notre boutique sera accessible aux joueurs simplement en jouant au jeu. Notre boutique est destinée aux joueurs qui souhaitent soutenir notre projet, et la majorité des fonds collectés est directement réinvestie dans la communauté."
            },
            {
                question: "La boutique est-elle uniquement cosmétique, ou propose-t-elle des boosts ?",
                answer: "La boutique est <span class='font-bold'>strictement axée sur les cosmétiques et les utilitaires</span>. Aucun équipement, aucune puissance, ni aucune progression ne peuvent y être achetés. Nous nous engageons à <span class='font-bold'>ne jamais être pay-to-win</span>. Nous sommes le seul serveur privé Cataclysm à offrir cela, et nous prévoyons de le rester."
            },
            {
                question: "Les transmogrifications sont-elles disponibles sans faire de don ?",
                answer: "<span class='font-bold'>Oui</span>. Nous avons pris la décision de rendre la transmogrification complète et illimitée gratuite pour tous les joueurs. Les joueurs peuvent choisir de faire un don pour des transmogs, mais elles sont facultatives et ne sont pas réservées uniquement aux joueurs payants. Nous sommes le seul serveur privé Cataclysm à offrir cela gratuitement."
            },
            {
                question: "Y a-t-il des boîtes à butin ou des systèmes de jeu de hasard ?",
                answer: "Non. Jamais. Proudmoore n'utilisera jamais de boîtes à butin ou d'achats basés sur le hasard. Nous pourrions ajouter des boîtes à butin en jeu en tant qu'incitation pour des choses comme les files d'attente pour le donjon aléatoire, mais celles-ci seront toujours des fonctionnalités gratuites. Tous les articles de la boutique de dons ont des prix transparents et des descriptions claires — pas de mécanismes de confusion."
            },
            {
                question: "Le serveur est-il « pay-to-win » sous quelque forme que ce soit ?",
                answer: "Absolument pas. Proudmoore est bâti sur l'intégrité et l'équilibre. Les donateurs soutiennent le serveur, pas leurs performances. Cela dit, certains joueurs peuvent considérer des choses comme les bonus de taux d'expérience comme du 'pay- to - win'. Proudmoore est construit sur l'idée que les joueurs n'ont plus le temps qu'ils avaient autrefois dans leur vie bien remplie, mais qu'ils veulent quand même pouvoir profiter du jeu. Tout service optionnel que nous proposons dans la boutique sera conçu en pensant à ces joueurs. Mais nous ne permettrons jamais que ces services interfèrent avec la compétition réelle, comme les courses au 'first du royaume'. Pas de 'pay - to - win'. Jamais."
            }
        ]
    },

    faqRules: {
        title: "Règles et politiques",
        questions: [
            {
                question: "Quelle est la politique concernant l'utilisation de bots ou d'aides à la rotation (PQR) ?",
                answer: "Vous plaisantez si vous posez la question sérieusement. Tolérance zéro. Toute forme de botting, d'automatisation ou de scripts de rotation entraînera un bannissement immédiat. Nous privilégions un environnement juste et compétitif pour tous les joueurs."
            },
            {
                question: "Y a-t-il des addons qui ne sont pas autorisés ?",
                answer: "Il y a un certain nombre d'addons qui sont basés sur l'automatisation et qui répondent avec des entrées ; ceux-ci ne sont pas autorisés. La frontière n'est pas exactement claire, nous ferons donc preuve de discernement envers les joueurs. Il y a des addons qui automatisent les ventes à l'hôtel des ventes, que ce soit pour acheter ou vendre. Ils ne vous rendent pas différent d'un bot. Si vous utilisez des addons qui vous font ressembler à un bot, vous pourriez être traité par notre équipe de MJs comme si vous en étiez un."
            },
            {
                question: "Les MJ modéreront-ils le canal 'World Chat' ou resteront-ils en retrait ?",
                answer: "La modération sera <span class='font-bold'>légère, mais active</span>. Nous visons un environnement libre et amusant. Il n'y aura pas de « grand frère » qui vous surveille ici. Toute conversation qui va trop loin entraînera un avertissement privé de la part d'un MJ. Le racisme, les discours de haine, le spam ou le harcèlement seront rapidement supprimés. Les MJ sont là pour soutenir la communauté, pas pour la surveiller inutilement."
            },
            {
                question: "Quelle est votre politique en matière de toxicité et de harcèlement ?",
                answer: "Nous prenons ce sujet très au sérieux et comprenons la nuance des mots 'toxicité' et 'harcèlement', surtout dans un MMORPG comme WoW. Les plaisanteries, les taquineries, le 'trolling', sont des comportements très courants entre les gens, même entre amis. Nous tenons compte de cela avec beaucoup de sérieux au sein de notre équipe de Maîtres de jeu. Chaque MJ autorisé à modérer le chat devra explicitement prouver qu'il est capable de voir cette nuance et de comprendre quand la plaisanterie devient hostile et agressive. Il existe des systèmes en jeu pour bloquer des personnes de votre chat, et nous nous attendons à ce que les joueurs les utilisent. Mais les cas répétés d'intimidation ou de harcèlement entraîneront des sanctions."
            },
            {
                question: "Puis-je faire de la publicité pour mon stream/ma guilde dans le chat global ?",
                answer: "Oui, <span class='font-bold'>dans la mesure du raisonnable</span>. Les annonces de recrutement de guilde occasionnelles ou de stream sont autorisées avec modération. Répéter les publicités ou spammer le chat global entraînera des mises en sourdine ou des temps d'arrêt. Soyez respectueux de l'espace et des joueurs. Si vous publiez vos annonces et que les joueurs commencent à faire entendre leur mécontentement, et que vous continuez quand même, nous considérerons votre annonce comme perturbatrice pour la communauté, dans la mesure du raisonnable."
            }
        ]
    },

    faqProgression: {
        title: "Progression et transferts",
        questions: [
            {
                question: "Puis-je transférer un personnage d'un autre serveur privé ?",
                answer: "Non, nous n'acceptons <span class='font-bold'>pas les transferts depuis d'autres serveurs privés</span>. Proudmoore est un départ frais et équitable pour tout le monde. Autoriser des transferts externes compromettrait l'intégrité et l'équilibre. D'autres projets Cataclysm ont des boutiques P2W, et accepter des transferts reviendrait à accepter des joueurs P2W."
            },
            {
                question: "Les personnages seront-ils un jour transférés vers de futurs royaumes ?",
                answer: "Proudmoore est conçu pour être un royaume permanent. Si nous décidons de lancer un nouveau royaume à l'avenir, oui, nous aurons un système de transferts de personnages hérités. Si nous décidons de le faire, veuillez garder à l'esprit que la stabilité, la compétition et l'équité des nouveaux royaumes seront prioritaires par rapport à votre personnage existant."
            },
            {
                question: "Il y-a-t'il un royaume fresh de prévu?",
                answer: "Proudmoore n'a actuellement pas de projet pour un nouveau royaume 'fresh'. Proudmoore est conçu pour être un serveur permanent et à long terme. Cependant, si la communauté exprime un fort intérêt à l'avenir, nous pourrions envisager un royaume 'legacy' avec des transferts de personnages."
            },
            {
                question: "Les changements de nom, de race ou de faction de personnage sont-ils disponibles ?",
                answer: "Oui, tous ces services seront disponibles pour les joueurs. En interne, nous n'avons pas encore discuté de la manière dont ils seront proposés, mais par défaut, nous supposons qu'il s'agira de services payants optionnels. C'est une question que nous allons soumettre à la communauté pour voir comment elle souhaite que cela soit mis en place."
            },
            {
                question: "Proposerez-vous des services payants tels que le transfert de serveur, le changement d'apparence, etc. ?",
                answer: "Nous offrirons des <span class='font-bold'>services de personnage facultatifs</span> comme le changement de nom, le changement d'apparence et le changement de faction. Tous les services sont basés sur l'apparence ou l'identité — pas de boosts de gameplay ou de P2W."
            }
        ]
    },

    faqDevelopment: {
        title: "Développement et commentaires",
        questions: [
            {
                question: "Comment puis-je signaler des bugs ?",
                answer: "Pour l'instant, c'est à déterminer. L'infrastructure de Twinstar possède un système de signalement de bugs intégré, et nous pourrions finir par utiliser une version de celui-ci. Ou nous pourrions utiliser GitHub. Cette information sera mise à jour et nous ferons une annonce sur Discord quand la décision sera prise.Pour être clair, les développeurs ne surveillent pas Discord. Se plaindre des bugs ou exiger des corrections à cet endroit ne donnera pas le résultat que vous souhaitez. En tant qu'équipe d'administration, nous pensons que certains bugs sont parfois suffisamment critiques pour justifier une discussion publique, et nous encourageons les joueurs à s'exprimer s'ils voient quelque chose d'important. Mais nous aurons des processus standards pour la gestion des bugs que tous les joueurs devront suivre.Par courtoisie, notre équipe de MJs offre une aide précieuse aux joueurs qui rencontrent des bugs. Si vous rencontrez un bug qui bloque votre progression ou crée un autre problème nécessitant une résolution rapide, veuillez faire un ticket de MJ en jeu."
            },
            {
                question: "Les correctifs de bugs seront-ils publiés publiquement ?",
                answer: "Oui. Il est important que les joueurs sachent ce qui est corrigé et quand. Vous saurez toujours ce qui se passe en coulisses."
            },
            {
                question: "À quelle fréquence les mises à jour sont-elles déployées ?",
                answer: "TBA. Sur Proudmoore, nous abordons tout avec des faits et des données. L'agressivité avec laquelle nous déploierons les mises à jour dépendra du nombre de bugs que nous rencontrerons et de leur gravité. Proudmoore utilise un noyau qui est en développement actif depuis 17 ans, nous ne sommes donc pas trop préoccupés par cela."
            },
            {
                question: "L'équipe de développement est-elle active sur Discord ?",
                answer: "Non. Nous sommes fermement convaincus qu'il faut permettre à notre équipe de travailler dans l'environnement qui lui convient le mieux. Le temps passé à discuter ou à se laisser distraire sur Discord est du temps qui pourrait être consacré à la résolution de problèmes prioritaires. Nous maintiendrons cette limite pour nos développeurs, ainsi que pour nos maîtres de jeu, s'ils ne veulent pas être présents sur le Discord public. Cela dit, notre équipe d'administration et de gestion de la communauté sera informée et connaîtra tout sujet pertinent au développement. Nous donnerons toujours la priorité à l'écoute des joueurs et à la compréhension de la communauté."
            },
            {
                question: "Les joueurs peuvent-ils voter sur les changements ou les fonctionnalités ?",
                answer: "Oui. S'il y a des changements ou des fonctionnalités significatifs qui, selon nous, pourraient avoir un impact sur les joueurs, nous impliquerons la communauté dans les décisions. Nous écouterons régulièrement les joueurs, recueillerons leurs commentaires et encouragerons les discussions ouvertes."
            },
            {
                question: "Est-ce basé sur TrinityCore ou un autre noyau ?",
                answer: "Le noyau de Cataclysm de Twinstar était à l'origine basé sur TrinityCore en 2011. Depuis, nous avons eu plus de 50 000 mises à jour du noyau. Notre noyau et TrinityCore sont maintenant si différents que nous ne sommes plus en mesure d'utiliser les mises à jour open source de TrinityCore. Nous considérons cela comme une force, pas une faiblesse."
            }
        ]
    },

    faqMiscellaneous: {
        title: "Divers",
        questions: [
            {
                question: "Est-ce que les hauts faits et les montures sont liés au compte ?",
                answer: "Oui ! Il s'agit d'une simple amélioration de la qualité de vie qui est très populaire auprès des joueurs. Vous l'avez mérité, vous méritez de le montrer, quel que soit le personnage avec lequel vous jouez."
            },
            {
                question: "Y aura-t-il un classement ou un système de rang pour le PvP ?",
                answer: "Ohh oui. Nous aurons un classement complet et un système de rang disponibles en ligne. C'est un domaine dans lequel Proudmoore marchera sur les traces de Twinstar, et s'efforcera d'être plus grand et meilleur que jamais. Nous voulons étendre les classements et la progression des joueurs de manière significative, et nous avons déjà les meilleurs classements de tous les serveurs Cataclysm."
            },
            {
                question: "Y aura-t-il un mode spectateur pour les arènes ?",
                answer: "Actuellement, non. C'est quelque chose que nous pourrions envisager s'il y a une forte demande, mais d'après l'expérience, les fonctionnalités de spectateur semblent souvent être de niche et sont rarement utilisées."
            },
            {
                question: "Y aura-t-il un support pour le jeu de rôle ou des royaumes de jeu de rôle ?",
                answer: "Proudmoore n'est pas un royaume de jeu de rôle, mais nous nous considérons comme amicaux envers le jeu de rôle. Si un groupe ou une guilde de jeu de rôle souhaite nous rejoindre, n'hésitez pas à contacter notre équipe d'administration et nous verrons ce que nous pouvons faire pour vous."
            }
        ]
    },

    rates: "<li><span class='font-bold'>Taux d'XP :</span> 1x–3x (activé par le joueur)</li><li><span class='font-bold'>Réputation :</span> 1x (et bonus de week-end)</li><li><span class='font-bold'>Butin et pièces d'or :</span> 1x (économie équilibrée)</li><li><span class='font-bold'>Matériaux rares :</span> ~1,2x en Héroïques/Raids</li><li><span class='font-bold'>Métiers :</span> 1x (et bonus de week-end)</li><li><span class='font-bold'>Honneur :</span> 1,25x (et bonus de week-end)</li><li><span class='font-bold'>Points de justice/vaillance :</span> 1x (et bonus d'activité hebdomadaire)</li>",

    bugFixes: [
        {
            title: "Révisions du noyau",
            description: "Améliorations côté serveur, sur mesure, pour la stabilité, la précision et la logique du noyau."
        },
        {
            title: "Révisions de la base de données",
            description: "Plus de 10 000 améliorations de la base de données pour les quêtes, les PNJ, les objets et les mécaniques."
        },
        {
            title: "Années de développement actif",
            description: "Développement constant : nous construisons, améliorons et itérons sans cesse."
        },
    ],

    bugFixesComment: "Oui. Nous savons ce que nous faisons.",
    ratesComment: "Patience pour les quêtes d'escorte : 0x",

    legalityPage: {
        title: "Est-il sûr de jouer sur des serveurs privés ?",
        titleDescription: "Tout ce que vous devez savoir sur vos droits et la légalité de jouer sur un serveur privé.",

        mainWarning: "✅ Aucun joueur n'a jamais été condamné à une amende, poursuivi en justice ou banni par Blizzard pour avoir joué sur un serveur privé. Vous êtes en sécurité. ✅",

        firstBottomWarning: "Proudmoore existe pour offrir aux joueurs une expérience de World of Warcraft équitable, nostalgique et équilibrée.",
        secondBottomWarning: "Des millions de joueurs ont profité des serveurs privés sans crainte.",
        thirdBottomWarning: "Vous ne faites rien de mal en jouant ici, et nous sommes ravis de vous accueillir.",

        faqAmISafe: {
            title: "Suis-je en sécurité en faisant cela ?",
            questions: [
                {
                    question: "Quel est le pire qui pourrait m'arriver en tant que joueur ?",
                    answer: "Réaliste, le seul 'risque' est qu'un serveur puisse fermer de manière inattendue. Dans ce cas, vous perdriez l'accès à vos personnages et à votre progression. Il n'y a pas de conséquences financières ou légales. Cependant, ce n'est pas une préoccupation pour nous."
                },
                {
                    question: "Blizzard a-t-il déjà poursuivi des joueurs ?",
                    answer: "Non, Blizzard ne s'est jamais attaqué aux joueurs pour avoir joué sur des serveurs privés. L'entreprise concentre ses actions en justice sur les administrateurs et les propriétaires de serveurs privés qui enfreignent les droits d'auteur et exploitent le jeu à des fins lucratives, notamment en vendant des objets ou des avantages."
                },
                {
                    question: "Puis-je avoir des ennuis juridiques en jouant sur Proudmoore ?",
                    answer: "Non. Les joueurs n'ont jamais été ciblés par Blizzard ou par une quelconque entité juridique pour avoir utilisé un serveur privé de World of Warcraft. Les poursuites judiciaires, le cas échéant, sont dirigées contre ceux qui hébergent le serveur, et non contre ceux qui y jouent."
                },
                {
                    question: "Blizzard bannira-t-il mon compte WoW officiel (retail) si je joue ici ?",
                    answer: "Il n'y a aucun cas documenté de bannissement par Blizzard pour le simple fait de jouer sur un serveur privé. L'entreprise ne suit pas les joueurs sur ces serveurs et aurait besoin d'un accès direct à votre ordinateur ou à votre compte pour savoir que vous y jouez."
                },
                {
                    question: "L'utilisation d'un serveur privé est-elle considérée comme du piratage ?",
                    answer: "Non. Le simple fait de jouer sur un serveur privé n'est pas considéré comme du piratage. Vous ne redistribuez pas et ne tirez pas profit de matériel protégé par des droits d'auteur. Le problème juridique concerne les administrateurs de serveurs qui distribuent les fichiers de jeu de Blizzard, et non les joueurs qui s'y connectent."
                },
                {
                    question: "Que se passe-t-il si le serveur est fermé par Blizzard ?",
                    answer: "Si un serveur privé est fermé, votre seul risque est de perdre l'accès au jeu. Vos données personnelles et vos comptes ne sont pas menacés, et Blizzard n'a jamais ciblé les joueurs suite à la fermeture d'un serveur. Nous ne sommes pas personnellement inquiets de la fermeture de Proudmoore."
                }
            ]
        },

        faqTracking: {
            title: "Peuvent-ils me suivre ou me voir ?",
            questions: [
                {
                    question: "Blizzard peut-il détecter si je joue sur un serveur privé ?",
                    answer: "Seulement si vous le leur disiez ou si vous essayiez de vous connecter à votre compte Battle.net depuis un client privé (ce que vous ne devriez pas faire). Les serveurs privés comme Proudmoore sont complètement distincts de l'infrastructure de Blizzard."
                },
                {
                    question: "Est-ce que mon FAI ou le gouvernement me bloquera ou me signalera pour avoir joué ?",
                    answer: "Non. Le jeu sur des serveurs de jeu privés n'est pas surveillé ou bloqué par les fournisseurs d'accès à Internet ou les gouvernements dans la plupart des pays. Il n'existe aucun cas connu où une personne a été pénalisée par son fournisseur pour avoir joué à WoW sur un serveur privé. Toutefois, certains pays, comme l'Iran, surveillent le trafic web. Dans ce cas, il serait conseillé d'utiliser un VPN."
                },
                {
                    question: "Ai-je besoin d'utiliser un VPN pour rester en sécurité ?",
                    answer: "Non. La plupart des joueurs n'utilisent pas de VPN, et il n'y a pas besoin d'en utiliser un, sauf si vous souhaitez plus de confidentialité. Les VPN sont facultatifs, mais ne sont pas nécessaires pour vous protéger en jouant. Selon votre emplacement, un VPN peut améliorer votre latence."
                },
                {
                    question: "Si Proudmoore est fermé, Blizzard pourrait-il obtenir mon adresse e-mail ou mon adresse IP ?",
                    answer: "Non. Proudmoore ne partage pas les données des joueurs, et il n'existe aucun précédent de serveur ayant remis des informations de joueur à Blizzard. De plus, nous ne sommes pas inquiets d'être fermés."
                }
            ]
        },

        faqPersonalData: {
            title: "Est-ce que je renonce à des données personnelles ?",
            questions: [
                {
                    question: "Les serveurs privés peuvent-ils accéder à mon identité réelle ou à mes informations de paiement ?",
                    answer: "Seulement si vous les fournissez volontairement. Proudmoore ne demande pas d'identité personnelle ni d'informations de paiement pour jouer. Les dons, s'ils sont acceptés, passent par des processeurs tiers sécurisés comme PayPal."
                },
                {
                    question: "Proudmoore peut-il voir mon compte retail ou mon activité Blizzard ?",
                    answer: "Non. Les serveurs privés ne se connectent pas aux systèmes de Blizzard et ne peuvent ni voir ni accéder à aucune de vos activités de compte Blizzard ou Battle.net."
                },
                {
                    question: "Jouer ici pourrait-il infecter mon ordinateur ou voler mes données ?",
                    answer: "Non. Pour rester en sécurité, téléchargez toujours le client directement depuis le site web officiel de Proudmoore et ne partagez jamais votre mot de passe sur plusieurs services."
                }
            ]
        },

        faqDonation: {
            title: "Et si je fais un don ?",
            questions: [
                {
                    question: "Si je fais un don à un serveur privé, suis-je plus exposé légalement ?",
                    answer: "Non. Même les joueurs qui ont fait des dons à des serveurs privés n'ont jamais été poursuivis en justice. La limite légale est fixée au niveau de l'hébergement et de la distribution à des fins commerciales, et non des joueurs qui soutiennent un projet."
                }
            ]
        },

        faqEdgeCases: {
            title: "Que se passe-t-il dans les cas extrêmes sur le plan juridique ?",
            questions: [
                {
                    question: "Est-il légal de télécharger un client WoW modifié pour jouer sur un serveur privé ?",
                    answer: "C'est une zone juridiquement grise. Alors que la distribution de clients modifiés peut violer les termes de Blizzard, les joueurs qui les téléchargent et les utilisent n'ont jamais été confrontés à des conséquences juridiques. Pensez-y comme à des émulateurs : le logiciel peut violer les termes, mais les utilisateurs ne sont pas poursuivis."
                },
                {
                    question: "Qu'en est-il du droit d'auteur de l'UE ou des États-Unis ? Cela pourrait-il un jour se retourner contre moi ?",
                    answer: "Dans toute l'histoire des serveurs privés, aucun joueur n'a jamais été ciblé en vertu du droit d'auteur de l'UE ou des États-Unis. Les tribunaux n'ont poursuivi que les opérateurs de serveurs ou les distributeurs, jamais les joueurs."
                }
            ]
        },

        faqNewOkay: {
            title: "Je suis nouveau, est-ce que ça va ?",
            questions: [
                {
                    question: "Je n'ai jamais joué à WoW. Est-ce que rejoindre un serveur privé comme Proudmoore est risqué en tant que débutant ?",
                    answer: "Pas du tout. Les serveurs privés sont souvent plus accueillants et axés sur la communauté que les serveurs officiels. Vous constaterez que de nombreux joueurs sur les serveurs privés sont serviables et passionnés par le jeu, et de nombreuses fonctionnalités de Proudmoore sont spécifiquement conçues"
                }
            ]
        },
    }
};

export default frTranslation;
