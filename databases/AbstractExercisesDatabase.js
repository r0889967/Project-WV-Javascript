let grimReaper = {
    title: "Sarah en de Grim Reaper",
    text:["De Grim Reaper kwam tot bij Sarah, maar Sarah wou nog niet doodgaan. Daarom had ze een voorstel voor de Grim Reaper.",
        "Ze stak een kaars aan en zei: 'Laat mij leven totdat deze kaars vanzelf is opgebrand.'",
        "De Grim Reaper ging akkoord en ging weg, maar Sarah bloos de kaars onmiddelijk uit nadat de Grim Reaper verdween.",
        "Zelfs na vele jaren is de Grim Reaper nooit teruggekomen voor haar ziel",
        "Hoe is Sarah ontsnapt aan de dood?"],
    type : "A",
    diff : 0,
    choices : ["De Grim Reaper wil wegblijven van kaarsen.","De Grim Reaper wil dat Sarah voor eeuwig leeft.","De Grim Reaper was bang om terug te komen.",
        "De Grim Reaper heeft nooit de kaars zien opbranden.","De Grim Reaper is Sarah vergeten.","De Grim Reaper is dood."],
    correctAnswers : [3],
    fb1:"Grim Reaper komt alleen teurg als hij de kaars vanzelf zien opbranden, maar omdat Sarah de kaars al zelf uitgeblazen hebben, zag hij de kaars nooit opbranden.",
    fb2:"Denk er goed over na wat Sarah tegen Grim Reaper gezegd heeft."
}

let whoIsTheCulprit = {
    title:"Wie is de dader?",
    text:["Sarah plaatste een mooie vaas op een tafel naast de voordeur van haar huis. Ze nodigde haar vrienden Alice, Bob, Carole,",
        "Dilan en Eva uit om samen te spelen in de slaapkamer. De 5 vrienden liepen 's ochtends haar huis binnen via de voordeur en ",
        "gingen 's avonds weer naar huis. Maar toen Sarah de volgende ochtend wakker werd en naar beneden kwam, lag",
        "haar vaas in duizend stukken op de grond. Sarah denkt dat één van haar vrienden per ongeluk de vaas heeft gebroken,", 
        "maar ze weet niet wie.",
        "Welke informatie mist er zodat Sarah kan weten wie de dader is?"],
    type : "A",
    diff : 1,
    hint: "Duidt alle opties aan waardoor Sarah met 100% zekerheid kan weten wie de dader is.",
    choices : ["Geen informatie mist.","De volgorde waarin de vrienden zijn vertrokken.","Het tijdstip waarop de vrienden zijn vertrokken.",
        "Of de vrienden aan Sarah zouden melden dat er een gebroken vaas op de grond ligt.","De volgorde waarin de vrienden zijn aangekomen."],
    correctAnswers : [1,3],
    fb1:"De volgorde is belangrijk omdat als de dader als laatste vertrokken is, dan zou hij of zij de vaas hebben kunnen breken en het niet hebben gemeld aan Sarah.",
    fb2:"Het is ook belangrijk om te weten of ze iets zouden melden, want als ze dat niet zouden doen, zou je zelfs met de volgorde van vertrek nog niet kunnen weten wie de dader is."
}

//let manAndSnail = {
//    title:"De man en de slak",
//    text:["Een zelfverzekerde man en een slak besloten een lange race te houden; wie als eerste de finish bereikt, wint.",
//        "Toen de race begon, was de man al vertrokken, terwijl de slak langzaam voortkroop.",
//        "De man was er heel zeker van dat hij zou winnen, maar toen hij de finish bereikte, was de slak er al.",
//        "De man kon niet geloven dat hij had verloren.",
//        "Wat zijn de mogelijke en logische oorzaken dat de langzame slak de snelle man versloeg?"],
//    type : "A",
//    diff : 2,
//    hint: "Met logisch bedoelen we elke mogelijkheid die mogelijk is in het echt.",
//    choices : ["De slak was een snelle superslak.","De man had te lang geslapen tijdens de race zodat de slak kan winnen.",
//        "De slak had op voorhand een identische slak bij de finish gezet.","De slak kon teleporteren.","De man was ziek en kan nauwelijks lopen."],
//    correctAnswers : [1,2,4],
//}

let questionWithNoAnswer = {
    title:"Gekke vraag",
    text:["Wat is het antwoord op een vraag die geen antwoord heeft?"],
    type:"A",
    diff:3,
    choices : ["Ik weet het niet.","Geen antwoord.","Nee!","Dit is dom.",".........","Alleen God weet het."],
    hint:"Moet je hier wel een antwoord op geven?",
    correctAnswers : [],
    fb1:"Soms is niets aanduiden ook een correct antwoord.",
    fb2:"Waarom geef je überhaupt een antwoord?"
}

let questionWithNoAnswer2 = {
    title:"Gekke vraag",
    text:["Wat is het antwoord van een vraag die 'Geen antwoord' als antwoord heeft?"],
    type:"A",
    diff:1,
    choices : ["Ik weet niet.","Geen antwoord.","Neen!","Dit is dom.",".........","Alleen God weet het."],
    hint:"Waarom zijn er aanhalingstekens rond Geen antwoord?",
    correctAnswers : [1],
    fb1:"Het is gewoon een kwestie van logisch denken.",
    fb2:"Een vraag met 'Geen antwoord' als antwoord is niet dezelfde als een vraag zonder antwoord."
}

let largeProduct = {
    title:"Gekke vraag",
    text:["Bereken 1x2x3x4x5x6x7x8x9x10x11x12x13x14x15x16x17x18x19x0x20x21x22x23x24x25x26x27x28x29x30="],
    type:"B",
    diff:1,
    correctAnswer : "0",
    fb1:"Let altijd goed op kleine details, de vraag lijkt onmogelijk, maar door goed op te letten kun je het oplossen",
    fb2:"Heb je goed naar de details gekeken?"
}

let mountEverest = {
    title:"Gekke vraag",
    text:["Wat was de hoogste berg op aarde voordat Mount Everest ontdekt werd?"],
    type:"A",
    diff:0,
    choices : ["Mount Fuji","Mont Blanc","Mount Kilimanjaro","K2","Mount Elbrus","Mount Everest","Chogolisa","Annapurna"],
    correctAnswers:[5],
    fb1: "Iets dat nog niet ontdekt is, bestaat nog steeds.",
    fb2:"Lees de vraag zorgvuldig."
}

let prisonerAnd2Doors = {
    title:"Gevangene en 2 deuren",
    text:["Een gevangene staat voor 2 deuren, voor elke deur staat er een agent.",
        "1 deur leidt tot vrijheid en de andere leidt tot dood.",
        "1 agent zegt altijd de waarheid en de andere liegt altijd.",
        "De gevangene weet niets over de dueren en de agenten",
        "De ontvangene heeft de mogelijkheid om slechts 1 vraag aan 1 van de 2 agenten te stellen.",
        "Wat moet hij vragen zodat hij 100% weet welke deur tot vrijheid leidt?"],
    type:"A",
    diff : 2,
    choices:["Leidt deur 1 tot vrijheid?","Leidt deur 2 tot vrijheid?","Leidt deur 1 tot dood?",
        "Leidt deur 2 tot dood?","Welke deur leidt tot vrijheid?","Welke deur leidt tot dood?",
        "Wat zou de andere agent zeggen als ik hem vraag of deur 1 tot vrijheid leidt?"],
    correctAnswers : [6],
    fb2:"Hoe kun je informatie van 2 deuren krijgen met 1 vraag?"
}

let redundantStoryElements = {
    title:"Overbodige elementen",
    text:["Sarah was gisteren tijdens het buitenspelen haar vier ballen kwijtgeraakt en besloot ze te gaan zoeken.",
        "Eerst vond ze haar rode bal toen ze in een gat viel. Terwijl ze verder zocht naar de andere ballen,",
        "vloog er een vogel voorbij. Ze liep al snel diep het bos in, langs enkele griezelig bomen.",
        "Na nog wat zoeken vond ze eindelijk de gele bal onder een steen.",
        "Tijdens haar zoektocht naar de groene bal kwam ze een verlaten hut tegen vol spinnen.",
        "Plots sprong er een spin uit de hut en klom op haar, waardoor ze in paniek raakte en tegen een berk aan liep.",
        "Toen ze tegen de berk botste, viel de groene bal uit de boom op haar hoofd. Een beer in de verte keek verbaasd toe",
        "en vroeg zich af wat er aan de hand was. Daarna zocht ze naar de laatste bal, de blauwe. Ze liep langs een vijver,",
        "en uiteindelijk vond ze de blauwe bal aan de voet van een heuvel en ging ze terug naar huis.",
        "Welke elementen in het verhaal zijn overbodig?"],
    type : "A",
    diff : 3,
    hint:"Overbodig betekent dat het element geen belangrijke rol speelt in het verhaal.",
    choices : ["gat","vogel","griezelige bomen","steen","spin","berk","beer","vijver", "heuvel"],
    correctAnswers : [1,2,6,7],
    fb1: "De belangrijke elementen zijn die die ervoor hebben gezorgd dat Sarah haar ballen heeft gevonden, de rest is overbodig.",
    fb2:"Als je het verhaal goed leest, worden de antwoorden duidelijk."
}



let guessSecretNumber = {
    title:"Raad het getal",
    text:["Probeer het geheime getal te raden met behulp van de volgende hints: Tussen 10 and 99,",
        "niet deelbaar door 3,4,5 of 7, het eerste cijfer is oneven, de som van de cijfers is groter dan 12",
        "het verschil tussen het eerste en laatste cijfer is gelijk of kleiner dan 2, het eerste cijfer is groter dan het laatste cijfer,",
        "het is een priemgetal, het eerste cijfer is 9."
    ],
    type : "B",
    diff : 3,
    correctAnswer : "97",
    fb1:"Je kunt al veel opties uitsluiten met de feit dat het eerste cijfer 9 is.",
    fb2:"Probeer de hints te vinden waarmee je de meeste opties kan uitsluiten."
}

let guessSecretNumber2 = {
    title:"Raad het getal",
    text:["Probeer het geheime getal te raden met behulp van de volgende hints. Tussen 1 and 99, het eerste cijfer is 1",
        "deelbaar door 3 en 5, het laatste cijfer is oneven, de som van de 2 cijfers in het getal is kleiner dan 8 en groter dan 5.",
    ],
    type : "B",
    diff : 1,
    correctAnswer : "15",
    fb2:"Probeer de hints te vinden waarmee je de meeste opties kan uitsluiten."
}

let guessSecretNumber3 = {
    title:"Raad het getal",
    text:["Stel dat je een geheim getal moet raden met behulp van de hints die hieronder staan. Duid alle hints aan die je zeker nodig hebt",
        "om het geheime getal te kunnen vinden.",
    ],
    type : "A",
    diff : 0,
    hint:"Denk goed na welke hints overlappen met elkaar. Als het getal kleiner is dan 50, dan is het ook kleiner dan 75.",
    choices : ["Het getal is kleiner dan 50","Het getal is kleiner dan 75","Het laatste cijfer is 5","Het getal is oneven","De som van de cijfers is 8"],
    correctAnswers : [0, 2, 4],
    fb1:"Sommige hints geven dezelfde informatie, of minder informatie dan andere, dus je hoeft ze niet allemaal te gebruiken.",
}

let guessSecretNumber4 = {
    title:"Raad het getal",
    text:["Probeer het geheime getal te raden met behulp van de volgende hints: Tussen 0 and 100,",
        "de som van de cijfers is deelbaar door 5, het getal is oneven,",
        "het eerste cijfer is kleiner dan het tweede cijfer, het verschil van de 2 cijfers is gelijk aan 1.",
    ],
    type : "B",
    diff : 2,
    correctAnswer : "23",
    fb2:"Probeer de hints te vinden waarmee je de meeste opties kan uitsluiten."
}

abExercises.push(grimReaper);
abExercises.push(whoIsTheCulprit);
//abExercises.push(manAndSnail);
//abExercises.push(questionWithNoAnswer);
//abExercises.push(questionWithNoAnswer2);
abExercises.push(prisonerAnd2Doors);
//abExercises.push(largeProduct);
//abExercises.push(mountEverest);
abExercises.push(redundantStoryElements);
abExercises.push(guessSecretNumber);
abExercises.push(guessSecretNumber2);
abExercises.push(guessSecretNumber3);
abExercises.push(guessSecretNumber4);