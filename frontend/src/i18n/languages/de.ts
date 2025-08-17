const deTranslation = {
    welcome: "Welcome to the Proudmoore WoW Website",

    nav: {
        home: "Startseite",
        about: "Was ist Proudmoore eigentlich?",
        features: "Besonderheiten & Raten",
        timeline: "Startplan & Termine",
        discord: "Werde Teil der Community",
        faq: "Häufig gestellte Fragen",
        legal: "Rechtliche Hinweise & Spielerrechte",
        appeal: "Discord-Entbannungsantrag"
    },

    copyright: "<span class='text-sm text-gray-400 font-extrabold'>© 2025 Proudmoore, in Partnerschaft mit TwinStar-WoW</span>. Steht in keinem Zusammenhang mit Blizzard Entertainment. Alle Rechte vorbehalten.",
    copyrightExtraWarning: "Das Urheberrecht an dieser Website liegt bei proudmoore.gg und den jeweiligen Autoren, mit Ausnahme von Marken und anderen Elementen, die Eigentum ihrer jeweiligen Inhaber sind. Alle Rechte vorbehalten. Das Kopieren, Ändern, Weitergeben oder Verteilen von Inhalten dieser Website in jeglicher Form ist ohne die Zustimmung von proudmoore.gg nicht gestattet.",

    videoDescription: "Eine neue Ära des Cataclysm beginnt…",

    descriptionTitle: "Was ist Proudmoore eigentlich?",
    descriptionText: "Proudmoore ist ein <span class='italic'>handgefertigter</span> Cataclysm-Server — für Spieler, die ein modernes Erlebnis wollen, das sich trotzdem nach OG World of Warcraft anfühlt.<br><br>Keine Warteschlangen. Kein Pay-to-Win. Kein unnötiger <span class='font-extrabold'>Ballast</span> wie im offiziellen WoW.<br>Nur flüssiges PvP, vollständig geskriptete PvE-Inhalte und ein Neustart, der deine Zeit respektiert.<br><br>Wenn du schon private Server gespielt hast, wirst du den Unterschied spüren.<br>Wenn nicht — <span class='font-extrabold'>hier ist der perfekte Startpunkt.</span>",

    features: {
        title: "Besonderheiten & Serverraten",
        description: "Entdecke alle Kern-Spielmechaniken, unsere Serverraten und die vielen Anpassungen, die Proudmoore einzigartig machen.",
        nav: {
            features: "Besonderheiten",
            rates: "Raten",
            bugfixes: "Fehlerbehebungen"
        },
        items: [
            { "id": "mythicPlus", "title": "Mythische Dungeons", "description": "Erlebe Mythische Dungeons mit zeitbasierten Herausforderungen & steigendem Schwierigkeitsgrad", isFav: 1 },
            { "id": "soloQueue", "title": "Arena Solo-Warteschlange", "description": "Melde dich Solo für die Arena an, ohne ein vorgefertigtes Team zu benötigen.", isFav: 1 },
            { "id": "crossFaction", "title": "Komplett Fraktionsübergreifend", "description": "Spiele unabhängig deiner Fraktion mit deinen Freunden, Gruppen, Raid, BGs, usw. sind vollkommen Fraktionsübergreifend", isFav: 1 },
            { "id": "transmogrification", "title": "Komplette Transmogrifikation", "description": "Gestalte dein Aussehen frei mit allen Transmogrifikations-Optionen – ohne Einschränkungen!", isFav: 1 },
            { "id": "progressiveContent", "title": "Fortschreitender Spielinhalt", "description": "Die Content wird phasenweise freigeschaltet und orientieren sich am ursprünglichen Cataclysm-Fortschritt.", isFav: 0 },
            { "id": "casualRaid", "title": "Einfacher Raid-Schwierigkeitsgrad", "description": "Einfacher Raid-Schwierigkeitsgrad", isFav: 1 },
            { "id": "battlegroundLeveling", "title": "Leveln durch Battlegrounds.", "description": "Ab Stufe 10 erwarten dich zusätzliche Level-Möglichkeiten.", isFav: 1 },
            { "id": "weekendEvents", "title": "Wochenend-Events", "description": "Genieße exklusive Wochenend-Events mit erhöhten Belohnungen und Raten.", isFav: 0 },
            { "id": "racialSwap", "title": "Wechsel der Volksfähigkeiten", "description": "Passe deine Volksfähigkeiten deinem Spielstil an.", isFav: 0 },
            { "id": "xpRate", "title": "Anpassbare Erfahrungsraten", "description": "Wähle, wie schnell du leveln willst, mit einstellbarem Erfahrungsgewinn von 0 % bis 100 %.", isFav: 0 },
            { "id": "mopArena", "title": "Arena-Gruppen-System aus Mists of Pandaria", "description": "Verwende Arena-Gruppen im Stil von Mists of Pandaria, bei denen die persönliche Wertung Vorrang vor der Teamwertung hat.", isFav: 0 },
            { "id": "accountWide", "title": "Accountweite Reittiere & Haustiere", "description": "Reittiere und Haustiere sind auf allen Charakteren deines Accounts verfügbar.", isFav: 0 },
            { "id": "antiBot", "title": "Moderne Systeme gegen Bots & Gold Verkäufer", "description": "Aggressive Systeme verhindern Botting und Goldverkauf wie auf keinem anderer Server.", isFav: 0 },
            { "id": "dualSpec", "title": "Frühe & kostenlose duale Talentspezialisierung", "description": "Die duale Talentspezialisierung wird ab Stufe 10 ohne Kosten freigeschaltet.", isFav: 0 },
            { "id": "automaticSpell", "title": "Automatisches erlernen der Klassenfähigkeiten", "description": "Kein Besuch bei Trainern nötig – Fähigkeiten werden beim Aufleveln automatisch erlernt", isFav: 0 },
            { "id": "catchupMecanics", "title": "Aufholmechaniken", "description": "Schnelles Aufholen dank Systemen, die neuen Spielern nach dem Start den Einstieg erleichtern.", isFav: 0 },
            { "id": "gatheringProfessions", "title": "Dynamische Sammelberufe", "description": "Materialvorkommen werden sowohl die wirtschaftliche Stabilität als auch die Bevölkerungsdichte der Zone berücksichtigen.", isFav: 0 },
            { "id": "lootRules", "title": "Faire Beute-Regeln", "description": "Faire Beute-Regeln für den gesamten Content, um Ninja-Looting zu reduzieren.", isFav: 0 },
            { "id": "altFriendly", "title": "Twink freundliche Systeme", "description": "So gestaltet, dass deine Twinks vom Fortschritt deines Accounts profitieren.", isFav: 0 },
            { "id": "playerFirst", "title": "Spielerorientierter GameMaster-Service", "description": "Spielerorientierter GameMaster-Support. Unser Team stellt Spieler & die Gemeinschaft bei jeder von uns umgesetzten Richtlinie an erste Stelle.", isFav: 0 }
        ]
    },

    timeline: {
        title: "Proudmoore beginnt",
        description: "13. September 2025"
    },

    discord: "Tritt unserem Discord bei",

    faqTitle: "Häufig gestellte Fragen",

    faqGeneral: {
        title: "Allgemeine Informationen",
        questions: [
            {
                question: "Was unterscheidet Proudmoore von anderen Cataclysm Servern?",
                answer: "Proudmoore ist nicht einfach nur ein weiterer Cataclysm Server, sondern baut auf bewährten Konzepten auf, um die Erweiterung für Hardcore- und Gelegenheitsspieler gleichermaßen abzurunden. Wir bieten mythische Dungeons, Solo-Wertung PvP Warteschlangen, eine Vielzahl neuer Levelpfade und fraktionsübergreifende Systeme an, während wir gleichzeitig das Kernerlebnis von Cataclysm bewahren."
            },
            {
                question: "Wer betreibt Proudmoore? Ist es ein neues Team oder eine Neuauflage?",
                answer: "Proudmoore ist ein neues Projekt aus erfahrenen Händen, eine Zusammenarbeit, die die Infrastruktur von Twinstar und ein neues Team nutzt, das aus privat Server Veteranen mit jahrelanger Erfahrung in der Projektleitung besteht. Mit starkem Fokus auf Gemeinschaft und Qualität wollen wir das bestmögliche Cataclysm-Projekt schaffen."
            },
            {
                question: "Warum habt Ihr Cataclysm als Erweiterung gewählt?",
                answer: "Cataclysm wird oft missverstanden. Hinter den umstrittenen Änderungen verbirgt sich das raffinierteste Klassenkonzept der klassischen Ära von WoW, ergänzt durch Überarbeitungen der Welt und PvP-Systeme, die eine zweite Chance verdienen. Wir sind überzeugt: Wird 4.3.4 modernisiert und ausbalanciert, entsteht ein unglaublich gutes Spielgefühl, und genau das wollen wir beweisen."
            },
            {
                question: "Wird der Server dem Blizzard-Original entsprechen oder verändert sein?",
                answer: "Betrachte Proudmoore als Hybrid. Inhalte und Progression bleiben Blizzards Cataclysm treu, doch die dahinterliegenden Systeme und Mechaniken wurden für 2025 modernisiert. Wir halten uns an Blizzards Designgrundlagen, scheuen uns jedoch nicht, Fehler zu beheben oder Bereiche auszubauen, in denen das Original hinter den Erwartungen zurückblieb."
            },
            {
                question: "Wie lange war der Server in der Entwicklung?",
                answer: "Proudmoore nutzt Twinstars Cataclysm-Core, der nun seit fast 17 Jahren in Entwicklung ist. Wir haben nahezu jeden Aspekt des Spielcodes von Grund auf neu aufgebaut und verfeinert, um sicherzustellen, dass jede von uns veröffentlichte Funktion produktionbereit und robust ist."
            },
            {
                question: "Wie ist der langfristige Plan des Servers?",
                answer: "Unser Ziel ist es, eine lebendige, sich entwickelnde Cataclysm-Erfahrung zu bieten. Das bedeutet saisonale Contentrotationen, neue Anreize für PvE und PvP, Community-Events und kontinuierliche Balance-Updates. Sobald der Server sein natürliches Ende der Progression erreicht, werden wir uns von der blizzlike-Form entfernen und experimentelle Änderungen einführen, um den Content frisch zu halten."
            },
            {
                question: "Wird Proudmoore zurückgesetzt oder neu starten in der Zukunft?",
                answer: "Nein, Proudmoore ist kein saisonales oder zeitlich begrenztes Projekt. Dein Fortschritt bleibt bestehen. Zwar könnten wir in ferner Zukunft optionale Neuanfänge erkunden, aber der Haupt-Realm wird niemals gelöscht oder zurückgesetzt."
            },
            {
                question: "Ist nach der Veröffentlichung eine Roadmap verfügbar?",
                answer: "Ja. Eine vollständige Roadmap wird kurz nach dem Launch veröffentlicht und zeigt unseren Zeitplan für Mythische-Rotationen, saisonale Events, neue Systeme und Quality-of-Life-Updates. Proudmoore ist ein lebendiges Projekt, und wir verpflichten uns zu vollständiger Transparenz, während wir wachsen."
            }
        ]
    },

    faqGameplay: {
        title: "Spielmechaniken & Besonderheiten (Funktionen)",
        questions: [
            {
                question: "Wie hoch sind die Erfahrungs-, Gold-, Ruf- und Loot-Raten?",
                answer: "Wir haben die Raten von Proudmoore so gestaltet, dass <span class='font-bold'>casual Gameplay und langfristiger Fortschritt</span> im Gleichgewicht bleiben. Jede Rate folgt dieser Vision:<br><ul><li><span class='font-bold'>EP (1x–3x, umschaltbar):</span><br>Leveln soll lohnend, nicht mühsam sein. Mit 3x Standardrate können Spieler, die nur am Wochenende oder gelegentlich spielen, bedeutenden Fortschritt erzielen, ohne sich zurückgelassen zu fühlen. Zusätzlich gibt es Boni an Wochenenden und Feiertagen. Die EP-Rate ist umschaltbar, sodass du das Tempo selbst bestimmen kannst. Manche wollen schnell leveln, andere das Leveling voll auskosten – wir geben dir die Freiheit, zu wählen.</li><li><span class='font-bold'>Ruf (1x mit Wochenend-Boni):</span><br>Rep-Grinds definieren das Endgame von Cataclysm. Wir halten die Basis Blizzlike, um den Progressionswert zu erhalten, bieten aber Wochenend-Boni, um berufstätigen Spielern die Last zu erleichtern.</li><li><span class='font-bold'>Loot & Gold (1x):</span><br>Goldinflation zerstört die Wirtschaft. Loot und Gold bleiben bei 1x, um den Gegenstandswert zu erhalten, Bot-Missbrauch zu verhindern und sicherzustellen, dass Berufe und Handel zwischen Spielern relevant bleiben. Auch Kosten für Händler und Reparaturen behalten so über die Zeit ihre Bedeutung.</li><li><span class='font-bold'>Seltene Materialien (~1.2x in Heroischen Instanzen/Schlachtzüge):</span><br>Leicht erhöhte Drops seltener Materialien in anspruchsvollem Content belohnen das Gruppenspiel und unterstützen den Handwerks-Fortschritt, ohne den Markt zu überschwemmen. So wirken Instanzen lohnender.</li><li><span class='font-bold'>Berufe (1x mit Wochenend-EP-Boni):</span><br>Sammeln und Herstellen soll bedeutsam sein, nicht überspringbar. 1x sorgt für stetigen Fortschritt, während Wochenend-Boni Spielern mit wenig Zeit ein natürliches Nachholfenster bieten.</li><li><span class='font-bold'>Ehre (1.25x mit Wochenend-Boni):</span><br>PvP-Ausrüstung sollte kein Zweitjob sein. Leicht höhere Ehre respektiert deine Zeit, während der Gear-Fortschritt so gesteuert bleibt, dass gesunde Seasons und Ranglisten-Fortschritt unterstützt werden. Boni auf die Ehrenrate fokussieren sich auf Prime-Time, um Warteschlangen zu fördern.</li><li><span class='font-bold'>Gerechtigkeits- / Tapferkeitspunkte (1x mit wöchentlichen Aktivitätsboni):</span><br>PvE-Währung bleibt bei 1x, um das Belohnungstempo zu erhalten. Aktive Spieler werden jedoch durch wöchentliche Aktivitätsboni belohnt, die den Fortschritt beschleunigen, ohne Content zu trivialisieren.</li></ul>",
                additionalInfoTitle: "Kurzgefasst:",
                additionalInfoText: "Wir möchten, dass sich Fortschritt <span class='italic'>verdient</span> anfühlt, aber <span class='italic'>nicht erschöpfend</span>. Diese Raten verhindern Burnout durch endlose 1x-Grinds und zugleich zu schnelles Leveln wie auf Retail-Niveau. So wirst du für deine Zeit belohnt, und die Wirtschaft wirkt über mehrere Monate lebendig – anders als bei vielen anderen Projekten."
            },
            {
                question: "Gibt es einen Raid-Finder?",
                answer: "Nein, es gibt keinen Raid-Finder. Er wurde ursprünglich für den Drachenseelen-Raid eingeführt und war extrem unbeliebt. Wir haben keine Pläne, ihn hier hinzuzufügen."
            },
            {
                question: "Wie ist der aktuelle Status von gewerteten BGs, Arenen und Solo-Warteschlangen?",
                answer: "Alle <span class='font-bold'>gewerteten PvP</span>-Modi werden mit dem Start der Saison veröffentlicht, gleichzeitig mit den Raid-Veröffentlichungen. <span class='font-bold'>Ungewertete</span> Solo-Warteschlangen für Arenen sind ab Launch verfügbar, ebenso wie <span class='font-bold'>unbewertete Schlachtfelder</span>. Gewertete Schlachtfelder sind voll funktionsfähig und werden in saisonale Belohnungen eingebunden."
            },
            {
                question: "Gibt es Fraktionsübergreifende BGs und Dungeons?",
                answer: "Ja. Proudmoore bietet vollständig fraktionsübergreifende Warteschlangen für Bgs, Dungeons und Raids."
            },
            {
                question: "Sind irgendwelche Klassen oder Spezialisierungen deaktiviert oder neu balanciert?",
                answer: "Keine Klassen oder Spezialisierungen wurden deaktiviert oder grundlegend neu ausbalanciert. Lediglich im Endgame-Content gab es kleine Anpassungen, um den 4.3.4-Client optimal zu berücksichtigen. Sobald die Progression abgeschlossen ist, werden wir gezielt mit Klassen- und Spezialisierungsanpassungen experimentieren, um den Content frisch zu halten."
            },
            {
                question: "Sind  Kampfgruppen aktiv oder in irgendeiner Form zusammengelegt?",
                answer: "Dies ist ein Privatserver-Projekt, was bedeutet, dass wir nur einen einzigen Server haben. Kampfgruppen, wie sie bei Blizzard & im Retail existieren, sind daher überflüssig, alle Spieler sind Teil eines einzigen Matchmaking-Pools für PvP und Dungeons."
            },
            {
                question: "Sind Dungeons und Raids gescripted? Wenn ja, bis zu welchem Fertigstellungsgrad?",
                answer: "Ja, alle Cataclysm-Dungeons und -Raids sind vollständig gescriptet. Wir nutzen Twinstars Cataclysm-Core, der über 17 Jahre Entwicklung umfasst. Von Dungeon-Mechaniken über Boss-Events bis hin zum KI-Verhalten kannst du eine vollständige Erfahrung erwarten."
            },
            {
                question: "Mit welchem Tier startet der Server?",
                answer: "Wir starten vor Tier 11: Bastion des Zwielichts, Pechschwingenabstieg und Thron der Vier Winde. Tier-11-Schlachtzüge werden ein bis zwei Wochen nach dem Release-Termin (TBA) verfügbar. Zukünftige Tiers werden gestaffelt freigeschaltet, basierend auf dem Fortschritt der Community, nicht nach festen Terminen."
            },
            {
                question: "Wie laufen Ausrüstungsprogression und Aufholmechaniken ab?",
                answer: "Die Ausrüstungsprogression folgt Blizzards Vorlage, ergänzt um unsere Mythischen Instanzen und Casual-Mode-Schlachtzüge. Mythische Dungeons dienen dabei als Zwischenschritt zwischen heroischen Dungeons und normalen Raids, während Casual-Mode-Raids die Einstiegshürde vom Dungeon- zum Raid-Content senken. Unsere Aufholsysteme werden zu einem späteren Zeitpunkt angekündigt. Sie sollen im Wesentlichen Spieler belohnen, die später dazustoßen, sodass sie zum aktuellen Content aufschließen können, ohne dafür bestraft zu werden."
            },
            {
                question: "Gibt es Fortschrittsbeschränkungen für PvE oder PvP?",
                answer: "Die Progression wird logisch begrenzt und folgt größtenteils Blizzards ursprünglichem Zeitplan. Wie bereits erwähnt, wird es keine festen Termine für zukünftige Patch-Progressionen geben. Stattdessen setzen wir auf eine Kombination möglicher Zeitpläne, abgestimmt auf Analysen der individuellen Spielerprogression und Teilnahme. Im Wesentlichen möchten wir die Patches voranschreiten lassen, ohne Spieler zurückzulassen, während wir gleichzeitig den Fortschritt von Hardcore-Raidern im Auge behalten. Eine perfekte Abstimmung für alle Zielgruppen ist nicht möglich, aber wir werden unser Bestes geben."
            },
            {
                question: "Wird Welt-PvP gefördert? Wenn ja, wie?",
                answer: "Wir werden Welt-PvP genau beobachten. Wenn eine größere Anzahl von Spielern daran teilnimmt und gezielt Gruppen dafür bildet, werden wir zusätzliche Anreize schaffen. Wir wollen nicht, dass Proudmoore zu einem reinen Griefing-Fest wird, aber wir möchten gruppenbasiertes Welt-PvP fördern, wenn Interesse daran besteht."
            },
            {
                question: "Gibt es eine duale Talentspezialisierung? Is diese kostenlos oder gegen Gold verfügbar?",
                answer: "Die duale Talentspezialisierung wird automatisch freigeschalten beim erreichen der Stufe 10 und ist kostenlos."
            },
            {
                question: "Gibt es neue Zonen oder Events?",
                answer: "Es gibt keine neuen Zonen, aber es wird viele Events geben. Die „Custom“-Seite von Cataclysm werden wir erst erkunden, sobald die Progression abgeschlossen ist und die Spieler sich am 4.3.4-Content sattgesehen haben."
            },
            {
                question: "Werden wir Zeitwanderungs-Äquivalente Dungeons oder Klassenanpassungen sehen?",
                answer: "Ja, Proudmoore bietet ein selbst entwickeltes <span class='font-bold'>Mythisches-System</span> mit skalierbarem Schwierigkeitsgrad, Affixen und Ranglistenverfolgung. Klassenanpassungen werden am Ende der Content-progression erfolgen. Möglicherweise werden wir einige Endgame-Ausrüstungen für Arenen und gewertete Schlachtfelder anpassen. Zeitwanderung wird als Teil zukünftiger saisonalen Content in Betracht gezogen."
            }
        ],
    },

    faqTechnical: {
        title: "Technische Fragen",
        questions: [
            {
                question: "Welchen Client benötige ich? Wo kann ich ihn herunterladen?",
                answer: "Jeder 4.3.4-Client funktioniert mit Proudmoore. Du kannst diesen über Google finden. Außerdem werden wir kurz vor der Veröffentlichung Links zu unserem eigenen 4.3.4-Client bereitstellen."
            },
            {
                question: "Gibt es einen Launcher oder Patcher?",
                answer: "Nein. Ohne zu sehr ins Detail zu gehen: Ein Launcher oder Patcher ist ein ausführbares Programm, also eine .exe. Jede benutzerdefinierte .exe, die ein Privatserver erstellt, ist höchstwahrscheinlich nicht signiert, das heißt, sie besitzt kein „digitales Zertifikat“, das ihre Sicherheit garantiert. Aus diesem Grund weisen die meisten Projekte mit einer eigenen .exe darauf hin, das Programm „als Administrator auszuführen“, da so Sicherheitsprotokolle umgangen werden, die beim Starten einer unsignierten .exe ausgelöst würden. Einfach gesagt: Es ist nicht sicher, und es gibt keine Garantie dafür, was genau installiert wird und welche Zugriffsrechte das Programm auf deinem Computer hat. Proudmoore wird Spieler niemals dazu auffordern, eine unsignierte .exe herunterzuladen oder zu verwenden."
            },
            {
                question: "Kann ich meinen eigenen Cataclysm client benutzen?",
                answer: "Ja. Einige Clients könnten modifizierte MPQ-Patches enthalten, die dein Spiel möglicherweise stören. Um Grafikprobleme oder Fehler zu vermeiden, empfehlen wir die Nutzung eines sauberen und frischen Clients."
            },
            {
                question: "Wird dieser Server an der Ost- oder Westküste, in der EU oder anderswo gehostet?",
                answer: "Unser Server wird in Euopa gehostet."
            },
            {
                question: "Welche Latenz- und Pingzeiten sind für Spieler aus NA, EU und SA zu erwarten?",
                answer: "EU: 20–60 ms<br><br>NA: 70–130 ms<br><br>SA: 90–160 ms<br><br>Wir haben umfangreiche Routing-Tests und CDN-Optimierungen durchgeführt, um für alle Regionen ein möglichst flüssiges Spielerlebnis zu gewährleisten."
            },
            {
                question: "Welche Art von Anti-Cheat wird verwendet?",
                answer: "In den meisten Fällen ist kein VPN erforderlich. Befindest du dich jedoch in einer Region mit eingeschränktem Routing (z. B. Ozeanien oder Teile Asiens), kann ein leichtes VPN die Stabilität verbessern. Außerdem kann in Regionen mit eingeschränktem Internet ein VPN notwendig sein, um spielen zu können."
            },
            {
                question: "Kann ich auf Steam Deck oder unter Linux spielen?",
                answer: "Ja! Proudmoore läuft einwandfrei über <span class='font-bold'>Proton (Steam Deck)</span> und <span class='font-bold'>Wine (Linux)</span>. Community-Guides zur Einrichtung werden nach dem Launch verfügbar sein."
            },
            {
                question: "Werden mobile Clients wie WoW Mini oder Android funktionieren?",
                answer: "Wir unterstützen mobile Clients offiziell nicht, aufgrund von Leistungs- und Sicherheitsbedenken. Fortgeschrittene Nutzer können jedoch auf eigene Verantwortung experimentieren, beachten Sie dabei, dass Support und Kompatibilität variieren können."
            }
        ]
    },

    faqAccountSecurity: {
        title: "Account & Sicherheit",
        questions: [
            {
                question: "Wie kann ich ein verlorenes Passwort oder einen gesperrten Account wiederherstellen?",
                answer: "Unser Account-Panel verfügt über eine Schaltfläche mit der Aufschrift „Passwort vergessen“. Damit kannst du deinen Account wiederherstellen. Wenn dein Account gesperrt ist, wende dich bitte über Discord an unser Support-Team, schnelle Antworten sind garantiert."
            },
            {
                question: "Ist die Weitergabe von Accounts erlaubt?",
                answer: "Aus Sicherheits- und Fairnessgründen erlauben wir kein Teilen von Accounts. Wir sind selbst Spieler und wissen, wie das gerade bei engen Freunden oder Gilden ablaufen kann. Account-Sharing wird vorkommen, das verstehen wir, und wir zeigen hier ein gewisses Maß an Flexibilität. Wenn wir jedoch feststellen, dass ein Account geteilt wird, um wettbewerbsorientiert Fortschritt zu erzielen oder rund um die Uhr eingeloggt zu bleiben, sind temporäre oder sogar permanente Sperren möglich. Aufgrund dieser Regelung gibt es keine Nachsicht für Spieler, die durch Account-Sharing ihre Accounts oder Ausrüstung verlieren. Du handelst auf eigenes Risiko."
            },
            {
                question: "Ist Multiboxing erlaubt?",
                answer: "Wir erlauben Multiboxing mit gesundem Menschenverstand. World of Warcraft bietet Content, die für Gruppen gedacht sind. Wenn ein Boss zu schwer ist, um ihn alleine zu besiegen, heißt das nicht, dass man sich mit einem zweiten Account einloggt um den Boss zu besiegen, man sucht sich einen Freund zur Unterstützung. Multiboxing ist bei Handwerk, Bankgeschäften und ähnlichen Tätigkeiten in größeren Städten erlaubt. Beim Leveln, in Bgs, Schlachtzügen, Dungeons usw. ist Multiboxing hingegen nicht gestattet."
            },
            {
                question: "Wird 2FA (Zwei-Faktor-Authentifizierung) unterstützt?",
                answer: "Ja, die Zwei-Faktor-Authentifizierung wird über E-Mail oder der App verfügbar sein, um deinen Account zu sichern. Wir empfehlen allen Spielern dringend, 2FA zu verwenden."
            },
            {
                question: "Kann ich meinen Benutzernamen oder meine E-Mail ändern?",
                answer: "Aus Sicherheitsgründen erlauben wir es Spielern nicht, ihre Benutzernamen oder E-Mail-Adressen eigenständig zu ändern. In Ausnahmefällen kann das Administrationsteam manuell Ausnahmen genehmigen."
            },
            {
                question: "Will I be able to reserve names before launch?",
                answer: "Ja, es wird mehrere Möglichkeiten geben, Namen vor dem Launch zu reservieren. Bleib dran."
            },
            {
                question: "Kann ich meinen Twinstar Account benutzen?",
                answer: "Ja! Wenn du einen Twinstar-Account hast, musst du keinen weiteren Account für Proudmoore erstellen. Obwohl wir ein eigenes Projekt sind, wird die TwinStar-Authentifizierungsdatenbank für die Logins genutzt."
            }
        ]
    },

    faqCommunity: {
        title: "Community & Discord",
        questions: [
            {
                question: "Wird Discord für die Teilnahme an Events oder für Support benötigt?",
                answer: "Nein, aber es ist <span class='font-bold'>sehr empfehlenswert</span>. Die meisten Ankündigungen und Support-Updates erfolgen zunächst nur über Discord. Du musst nicht schreiben oder dem Voice-Chat beitreten, allein die Mitgliedschaft im Server hält dich auf dem Laufenden."
            },
            {
                question: "Kann ich meinen Discord-Account oder meine E-Mail Adresse verknüpfen, um meine Accounts wiederherzustellen?",
                answer: "Nein zu Discord, ja zu E-Mail. Spieler müssen ihre Discord-Accounts nicht mit ihrem Ingame-Account verknüpfen."
            },
            {
                question: "Wird es Foren geben oder nur Discord?",
                answer: "Wir beginnen mit Discord für Support, Updates und Community-Diskussionen. Traditionelle Foren könnten folgen, wenn eine starke Nachfrage nach organisierten Diskussionen besteht, aber Discord ermöglicht schnellere und direktere Kommunikation."
            },
            {
                question: "Kann ich gegen Sperren oder Strafen Einspruch einlegen? Wenn ja, wo?",
                answer: "Ja, Einsprüche werden über ein Formularsystem vom GM- und/oder CM-Team bearbeitet. Jeder Fall wird vom Personal geprüft, und Entscheidungen sind transparent und protokolliert. Dein Einspruch wird niemals vom selben Mitarbeiter bearbeitet, der die Strafe verhängt hat, um Fairness zu gewährleisten."
            },
            {
                question: "Unterstützt Ihr Streamer oder Content creator?",
                answer: "Absolut. Wir bieten Vorteile für Creator an. <span class='font-bold'>Bewirb dich über Discord.</span>"
            },
            {
                question: "Wird es ein System geben um Spieler zu melden?",
                answer: "Ja. Spieler können andere Spieler über den Ingame-Befehl /report, ein GM-Ticket oder unsere Discord-Formulare melden. Wir untersuchen alle Meldungen gründlich und reagieren schnell auf bestätigten Missbrauch oder Betrug."
            }
        ]
    },

    faqEvents: {
        title: "Events & Saisons",
        questions: [
            {
                question: "Gibt es Ingame-Events wie saisonale Feiertage oder PvP-Turniere?",
                answer: "Absolut, ja! Wir veranstalten sowohl <span class='font-bold'>Blizzard-typische saisonale Events</span> (wie Hallow’s End oder Winterhauch) als auch <span class='font-bold'>eigene Events</span>, darunter Turniere, Schatzsuchen, Weltboss-Rennen und mehr – alles mit kosmetischen oder Vanity-Belohnungen. Außerdem wird es zusätzliche kleinere Events zu weltweiten Feiertagen geben."
            },
            {
                question: "Wird es wöchentliche Herausforderungen oder serverweite Ziele geben?",
                answer: "Alle Herausforderungen und serverweiten Ziele werden über unsere Online-Ranglisten abgebildet. Wir möchten diese weiter ausbauen, um möglichst viel Wettbewerb und Angeberrechte zu ermöglichen."
            },
            {
                question: "Werden Ausrüstung und Erfolge zwischen den Saisons zurückgesetzt?",
                answer: "Wir folgen Blizzards Progressionspfad, daher wird es während der Saisons oder Patch-Fortschritte keine Rücksetzungen von Ausrüstung oder Erfolgen geben. Sobald wir das Ende der Progression erreichen, könnten wir Änderungen einführen, aber das hängt von der Community ab."
            }
        ]
    },

    faqMonetization: {
        title: "Monetarisierung & Shop",
        questions: [
            {
                question: "Ist Proudmoore kostenlos?",
                answer: "Ja. Proudmoore ist <span class='font-bold'>zu 100 % kostenlos spielbar</span>, kein Pay-to-Win, keine versteckten Gebühren und kein Kauf nötig, um auf Inhalte zuzugreifen."
            },
            {
                question: "Gibt es einen Kosmetik- oder Service-Shop?",
                answer: "Ja, wir werden optionale Spenden und Shops anbieten. Kein Pay-to-Win. Spieler können alles in den Spenden-Shops erspielen, ohne jemals gespendet zu haben."
            },
            {
                question: "Gibt es kosmetische oder Quality-of-Life-Vorteile für Spender?",
                answer: "Wir werden eine Reihe kosmetischer und Quality-of-Life-Vorteile für Spender anbieten. Wir möchten hier betonen, dass Spenden bei Proudmoore nicht dazu dienen, eine „obere Klasse“ von Spielern mit einzigartigen Vorteilen zu schaffen, die anderen Spielern nicht zur Verfügung stehen. Alles in unserem Shop kann auch durch das Spielen des Spiels freigeschaltet werden. Unser Shop richtet sich an Spieler, die unser Projekt unterstützen möchten, und der Großteil der Einnahmen fließt direkt zurück in die Community."
            },
            {
                question: "Ist der Shop nur kosmetisch, oder gibt es auch Boosts?",
                answer: "Der Shop ist <span class='font-bold'>ausschließlich kosmetisch und nutzungsbezogen</span>. Keine Ausrüstung, Macht oder Progression kann gekauft werden. Wir stehen voll hinter <span class='font-bold'>keinem Pay-to-Win</span>. Niemals. Wir sind der einzige Cataclysm-Privatserver, der dies bietet, und wir haben vor, es auch so zu belassen."
            },
            {
                question: "Sind Transmogs auch ohne Spenden verfügbar?",
                answer: "<span class='font-bold'>Ja</span>. Wir haben entschieden, dass unbegrenzte und vollständige Transmogrifikation für alle Spieler kostenlos ist. Spieler können spenden, um Transmogs zu erhalten, dies ist jedoch optional und nicht nur zahlenden Spielern vorbehalten. Wir sind der einzige Cataclysm-Privatserver, der dies kostenlos anbietet."
            },
            {
                question: "Gibt es Lootboxen oder Glücksspiel-Systeme?",
                answer: "NEIN. Niemals. Proudmoore wird niemals Lootboxen oder käufliche, RNG-basierte Systeme verwenden. Lootboxen könnten eventuell im Spiel als Anreiz für Dinge wie Dungeon-Warteschlangen hinzugefügt werden, diese bleiben jedoch immer kostenlose Features. Alle Spendenartikel sind transparent bepreist und klar beschrieben – keine Bait- oder Täuschungsmechaniken."
            },
            {
                question: "Ist der Server in irgendeiner Form Pay-to-Win?",
                answer: "Auf keinen Fall. Proudmoore basiert auf Integrität und Balance. Spender unterstützen den Server, nicht ihre eigene Leistung. Manche Spieler könnten beispielsweise Erfahrungspunkte-Boni als Pay-to-Win ansehen. Proudmoore geht davon aus, dass Spieler heute weniger Zeit haben, aber trotzdem das Spiel genießen möchten. Alle optionalen Services im Shop richten sich an diese Spieler. Wir werden jedoch niemals zulassen, dass diese Services den Wettbewerb beeinflussen, z. B. Realm-First-Races. Kein Pay-to-Win. Niemals."
            }
        ]
    },

    faqRules: {
        title: "Regeln & Richtlinien",
        questions: [
            {
                question: "Wie ist die Richtlinie zur Nutzung von Bots oder Rotationshilfen (PQRs)?",
                answer: "Du musst schwerzen, wenn du das ernst meinst. Null Toleranz. Jegliche Form von Botting, Automatisierung oder Rotations-Skripten führt zu sofortigen Sperren. Wir legen großen Wert auf eine faire und wettbewerbsfähige Umgebung für alle Spieler."
            },
            {
                question: "Gibt es Addons, die nicht erlaubt sind?",
                answer: "Es gibt eine Reihe von Addons, die auf Automatisierung basieren und Eingaben selbstständig ausführen, diese sind nicht erlaubt. Die Abgrenzung ist nicht immer eindeutig, daher wird im Einzelfall auf Spieler-Ermessensspielraum geachtet. Addons, die Auktionen automatisch kaufen oder verkaufen, gelten als Botting. Wenn du Addons nutzt, die dich wie einen Bot erscheinen lassen, kann unser GM-Team dich genauso behandeln, als wärst du ein Bot."
            },
            {
                question: "Werden GMs den Weltchat moderieren oder sich zurückhalten?",
                answer: "Die Moderation wird <span class='font-bold'>behutsam, aber aktiv</span> sein. Wir streben eine freie und spaßige Umgebung an. Hier wird es keine „Big Brother“-Überwachung geben. Gespräche, die zu weit gehen, führen zu einer privaten Warnung durch einen GM. Rassismus, Hassrede, Spam oder Belästigung werden schnell entfernt. GMs sind da, um die Community zu unterstützen, nicht unnötig zu kontrollieren."
            },
            {
                question: "Wie sind eure Richtlinien zu Toxizität und Belästigung?",
                answer: "Wir nehmen das sehr ernst und verstehen, dass die Begriffe „Toxizität“ und „Belästigung“ Nuancen haben, besonders in einem MMORPG wie WoW. Neckereien, Sticheleien oder Trolling sind übliche Verhaltensweisen zwischen Spielern, selbst unter Freunden. Unser GM-Team berücksichtigt diese Nuancen sehr genau. Jeder GM mit Chat-Moderationsrechten muss ausdrücklich nachweisen, dass er diese Unterschiede erkennt und versteht, wann Neckereien in feindseliges und aggressives Verhalten übergehen. Im Spiel gibt es Systeme, um Personen aus dem Chat zu blockieren, und wir erwarten, dass Spieler diese nutzen. Wiederholte Fälle von Mobbing oder Belästigung führen jedoch zu Strafen."
            },
            {
                question: "Darf ich meinen Stream oder meine Gilde im Globalen-Chat bewerben?",
                answer: "Ja, <span class='font-bold'>in Maßen</span>. Gelegentliche Gildenrekrutierungen oder Stream-Ankündigungen sind erlaubt. Wiederholte Werbung oder Spam im Global-Chat führen zu Mutes oder Timeouts. Sei respektvoll gegenüber dem Chat und den Spielern. Wenn du deine Anzeigen postest, Spieler sich darüber lautstark beschweren und du trotzdem weitermachst, betrachten wir deine Werbung, im Rahmen des Zumutbaren, als störend für die Community."
            }
        ]
    },

    faqProgression: {
        title: "Progression & Transfers",
        questions: [
            {
                question: "Kann ich einen Charakter von einem anderen Privatserver übertragen?",
                answer: "Nein, wir <span class='font-bold'>akzeptieren keine Transfers von anderen Privatservern</span>. Proudmoore startet für alle Spieler frisch und fair, externe Transfers würden die Balance und Integrität des Servers gefährden. Andere Cataclysm-Projekte haben Pay-to-Win-Shops, und Transfers von solchen Servern wären nicht vereinbar. Charaktertransfers von Athena sind jedoch erlaubt, <span class='font-bold'>aber erst nach Abschluss der Proudmoore-Progression</span>."
            },
            {
                question: "Werden Charaktere jemals auf zukünftige Realms übertragen?",
                answer: "Aktuell ist der einzige geplante Transfer von Athena zu Proudmoore, sobald die Progression auf Proudmoore abgeschlossen ist. Sollte die Community irgendwann einen frischen Realm wünschen, werden wir das besprechen und dann passende Transfermöglichkeiten prüfen."
            },
            {
                question: "Ist ein frischer Realm geplant?",
                answer: "Direkt vom Administrationsteam: Wir haben bislang über keine zukünftigen Realms gesprochen. Proudmoore ist unser primärer und einziger Fokus. Wir möchten offenlassen, dass zukünftige Realms je nach Community möglich sind, aber das ist ein Thema für die nächsten Jahre."
            },
            {
                question: "Sind Charakter-Umbenennungen oder Änderungen an der Rasse oder Fraktion möglich?",
                answer: "Ja, diese Services werden allen Spielern zur Verfügung stehen. Intern haben wir noch nicht besprochen, wie genau sie angeboten werden; standardmäßig gehen wir davon aus, dass es optionale kostenpflichtige Dienste sein werden. Dies werden wir mit der Community besprechen, um herauszufinden, wie sie sich das vorstellen."
            },
            {
                question: "Werden kostenpflichtige Services wie Servertransfers, Änderungen am Aussehen usw. angeboten?",
                answer: "Wir werden <span class='font-bold'>optionale Charakter-Services</span> wie Namensänderungen, Änderungen am Aussehen und Fraktionswechsel anbieten. Alle Services sind rein kosmetisch oder identitätsbasiert, es gibt keine Gameplay-Boni und kein Pay-to-Win."
            }
        ]
    },

    faqDevelopment: {
        title: "Entwicklung & Feedback",
        questions: [
            {
                question: "Wie kann ich Bugs melden?",
                answer: "Noch festzulegen. Twinstars Infrastruktur verfügt über ein integriertes Bug-Reporting-System, das wir möglicherweise in einer Version verwenden werden. Alternativ könnten wir GitHub nutzen. Diese Informationen werden aktualisiert, und wir werden eine Ankündigung auf Discord machen, sobald alles klar ist. Zur Klarstellung: Die Entwickler überwachen Discord nicht. Beschwerden über Bugs oder Forderungen nach Fixes dort werden nicht zum gewünschten Ergebnis führen. Als Verwaltungsteam glauben wir jedoch, dass manche Bugs kritisch genug sein können, um öffentlich diskutiert zu werden, und wir ermutigen Spieler, sich zu äußern, wenn sie etwas Kritisches bemerken. Es wird jedoch standardisierte Prozesse für die Bearbeitung von Bugs geben, die alle Spieler einhalten müssen. Unser GM-Team bietet aus Kulanz stets Unterstützung, wenn Spieler auf Bugs stoßen. Wenn du einen Bug erlebst, der deinen Fortschritt blockiert oder ein anderes dringendes Problem verursacht, erstelle bitte ein GM-Ticket im Spiel."
            },
            {
                question: "Werden Fehlerbehebungen öffentlich bekanntgegeben?",
                answer: "Ja. Es ist wichtig für die Spieler zu wissen, was behoben wurde und wann. Ihr werdet immer informiert sein, was hinter den Kulissen passiert."
            },
            {
                question: "Wie oft werden Updates veröffentlicht?",
                answer: "Auf Proudmoore gehen wir alles mit Fakten und Daten an. Wie aggressiv wir Updates veröffentlichen, hängt von der Anzahl der aufgetretenen Bugs und deren Schwere ab. Proudmoore läuft auf einem Core, der seit 17 Jahren aktiv entwickelt wird, daher sind wir diesbezüglich nicht allzu besorgt."
            },
            {
                question: "Ist das Entwickler-Team im Discord aktiv?",
                answer: "Nein. Wir sind fest davon überzeugt, unserem Team zu ermöglichen, in der Umgebung zu arbeiten, die für sie am besten geeignet ist. Zeit, die mit Chatten oder Ablenkungen auf Discord verbracht wird, ist Zeit, die stattdessen für die Behebung von vorrangigen Problemen genutzt werden könnte. Diese Grenze gilt für unsere Entwickler ebenso wie für unsere GMs, wenn sie nicht auf dem öffentlichen Discord präsent sein möchten. Dennoch wird unser Verwaltungsteam sowie das Community-Management-Team über alle für die Entwicklung relevanten Themen informiert und auf dem Laufenden sein. Wir werden stets Priorität darauf legen, den Spielern zuzuhören und die Community zu verstehen."
            },
            {
                question: "Bekommen Spieler ein Mitbestimmungsrecht für Änderungen oder Features?",
                answer: "Ja. Wenn es bedeutende Änderungen oder Features gibt, von denen wir glauben, dass sie die Spieler betreffen könnten, werden wir die Community in die Entscheidungen einbeziehen. Wir werden regelmäßig auf die Spieler hören, Feedback einholen und offene Diskussionen fördern."
            },
            {
                question: "Basiert der Server auf dem Trinity-Core oder einen anderen Core?",
                answer: "Twinstars Cataclysm-Core basierte ursprünglich im Jahr 2011 auf dem TrinityCore. Seitdem haben wir über 50.000 Updates am Core vorgenommen. Unser Core und TrinityCore unterscheiden sich inzwischen so stark, dass wir TrinityCores Open-Source-Updates nicht mehr nutzen können. Wir sehen das als Stärke, nicht als Schwäche."
            }
        ]
    },

    faqMiscellaneous: {
        title: "Sonstiges",
        questions: [
            {
                question: "Sind Erfolge und Reittiere Accountweit?",
                answer: "Ja! Dies ist eine einfache Quality-of-Life Verbesserung, die bei den Spielern sehr beliebt ist. Du hast sie dir verdient und solltest sie zeigen können, egal auf welchem Charakter du spielst."
            },
            {
                question: "Wird es eine Rangliste oder ein Bewertungssystem für PvP geben?",
                answer: "Oh ja. Wir werden ein vollständiges Online-Ranking- und Bestenlisten-System haben. In diesem Bereich wird Proudmoore in die Fußstapfen von Twinstar treten und noch größer und besser werden als je zuvor. Wir wollen die Bestenlisten und die Spielerprogression umfassend ausbauen und haben bereits die besten Bestenlisten aller Cataclysm-Server."
            },
            {
                question: "Gibt es einen Zuschauermodus für die Arena?",
                answer: "Derzeit nicht. Das ist etwas, das wir in Betracht ziehen könnten, wenn eine große Nachfrage besteht, aber unserer Erfahrung nach sind Zuschauerfunktionen oft nur eine Nische und werden selten genutzt."
            },
            {
                question: "Wird es RP Support oder Realms geben?",
                answer: "Proudmoore ist kein RP-Server, aber wir betrachten uns als RP-freundlich. Wenn eine RP-Gruppe oder Gilde beitreten möchte, könnt ihr euch gerne an unser Verwaltungsteam wenden, und wir werden sehen, was wir für euch tun können."
            }
        ]
    },

    rates: "<li><span class='font-bold'>EP-Raten:</span> 1x–3x (vom Spieler steuerbar)</li> <li><span class='font-bold'>Ruf:</span> 1x (& Wochenendboni)</li> <li><span class='font-bold'>Beute & Gold:</span> 1x (ausgeglichene Wirtschaft)</li> <li><span class='font-bold'>Seltene Materialien:</span> ~1,2x in Heroics/Raids</li> <li><span class='font-bold'>Berufe:</span> 1x (& Wochenendboni)</li> <li><span class='font-bold'>Ehre:</span> 1,25x (& Wochenendboni)</li> <li><span class='font-bold'>Gerechtigkeits- / Tapferkeitspunkte:</span> 1x (& wöchentlicher Aktivitätsbonus)</li>",

    ratesComment: "Geduld für Begleitquests: 0x",

    bugFixes: [
        {
            title: "Core-Überarbeitungen",
            description: "Maßgeschneiderte serverseitige Optimierungen für Stabilität, Genauigkeit und Core-Logik."
        },
        {
            title: "Datenbank Überarbeitungen",
            description: "Über 10.000 Datenbank-Verbesserungen für Quests, NPCs, Gegenstände und Mechaniken."
        },
        {
            title: "Jahre aktiver Entwicklung",
            description: "Ständige Weiterentwicklung, wir entwickeln, verfeinern und optimieren laufend."
        },
    ],

    bugFixesComment: "Aufgrund unseres erfahrenen Teams wissen wir was wir tun.."
};

export default deTranslation;
