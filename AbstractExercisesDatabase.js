let grimReaper = {
    title: "Sarah en de Grim Reaper",
    text:["De Grim Reaper kwam naar Sarah, maar sarah wou nog niet dood gaan, dus zij vroeg de Grim Reaper",
        "om haar langer te laten leven door een kaars op te steken en zei 'Laat mij leven tot deze kaars vanzelf opgebrand is.'",
        "De Grim Reaper zei ja en ging weg. Sarah bloos de kaars onmiddelijk uit nadat Grim Reaper weg is.",
        "Zelfs na vele jaren is het Grim reaper niet teruggekomen om haar leven te nemen.",
        "Hoe heeft Sarah ontsnapt aan de dood?"],
    type : "A",
    diff : 0,
    choices : ["Grim Reaper wil wegblijven van kaarsen.","Grim Reaper wil gewoon dat Sarah voor eeuwig leeft.","Grim Reaper was bang om terug te komen.",
        "Grim Reaper heeft nooit de kaars zien opbranden.","Grim Reaper heeft Sarah vergeten.","Grim Reaper is dood."],
    correctAnswers : [3],
    fb1:"Grim Reaper komt alleen teurg als hij de kaars vanzelf zien opbranden, maar omdat Sarah de kaars al zelf uitgeblazen hebben, zag hij de kaars nooit opbranden.",
    fb2:"Denk er goed over na wat Sarah tegen Grim Reaper gezegd heeft."
}

let racersDilemma = {
    title: "Racers dilemma",
    text:["We hebben 6 racers A, B, C, D, E en F.",
        "A rent sneller dan B, B rent sneller dan C, C rent sneller dan D, D rent sneller dan E,",
        "E rent sneller dan F, F rent sneller dan A.",
        "Wie rent het snelste?"],
    type: "A",
    diff : 2,
    choices : ["A","B","C","D","E","F","Alle racers zijn even snel.","Er is een contradictie."],
    correctAnswers : [7],
    fb1:"Goed gezien, er is dus een contradictie met deze vraag.",
    fb2:"Kijk niet enkel naar 'normale' opties, maar ook abnormale opties!"
}

let racersDilemma2 = {
    title: "Racers dilemma",
    text:["We hebben 6 racers A, B, C, D, E en F.",
        "A rent tenminste zo snel als B, B rent tenminste zo snel als C, C rent tenminste zo snel als D, D rent tenminste zo snel als E,",
        "E rent tenminste zo snel als F, F rent tenminste zo snel als A.",
        "Wie rent het snelste?"],
    type: "A",
    diff : 2,
    choices : ["A","B","C","D","E","F","Alle racers zijn even snel.","Er is een contradictie."],
    correctAnswers : [6],
    fb1:"Deze uitspraak kan alleen waar zijn als iedereen even snel is.",
    fb2:"Probeer goed op te letten op de eerste en laatste deel van de vraag!"
}

let whoIsTheCulprit = {
    title:"Wie is de dader?",
    text:["Sarah plaatste een mooie vaas op een tafel naast de voordeur van haar huis. Zij nodigde haar vrienden Alice, Bob, Carole,",
        "Dilan en Eva uit om samen te spelen in het slaapkamer. De 5 vrienden raasten haar huis binnen via de voordeur.",
        "Bij nacht gingen de vrienden weer weg. Maar toen Sarah in het morgen wakker wordt en naar beneden komt, was",
        "haar vaas gebroken in stukken. Sarah denkt dat haar vrienden misschien de vaas gisteren per ongeluk gebroken heeft.",
        "Welke van de frienden kunnen de daders zijn?"],
    type : "A",
    diff : 3,
    hint: "Alle vrienden zijn binnengekomen langs de voordeur, wat kan dit betekenen?",
    choices : ["Alice","Bob","Carole","Dilan","Eva"],
    correctAnswers : [0,1,2,3,4],
    fb1:"Als iedereen langs de voordeur is binnengeraast, kunnen ze allemaal per ongeluk de vaas breken.",
    fb2:"Probeer logisch te denken, wat betekent het als iedereen het huis binnenkomt bij de voordeur?"
}

let manAndSnail = {
    title:"De man en de slak",
    text:["Een zelfverzekerde man en een slak besloten een lange race te houden; wie als eerste de finish bereikt, wint.",
        "Toen de race begon, was de man al vertrokken, terwijl de slak langzaam voortkroop.",
        "De man was er heel zeker van dat hij zou winnen, maar toen hij de finish bereikte, was de slak er al.",
        "De man kon niet geloven dat hij had verloren.",
        "Wat zijn de mogelijke en logische oorzaken dat de langzame slak de snelle man versloeg?"],
    type : "A",
    diff : 2,
    hint: "Met logisch bedoelen we elke mogelijkheid die mogelijk is in het echt.",
    choices : ["De slak was een snelle superslak.","De man had te lang geslapen tijdens de race zodat de slak kan winnen.",
        "De slak had op voorhand een identische slak bij de finish gezet.","De slak kon teleporteren.","De man was ziek en kan nauwelijks lopen."],
    correctAnswers : [1,2,4],
}

let equivalentStatement = {
    title:"Equivalente statement",
    text:["We hebben de volgorde statement: Als het regent, neem ik mijn paraplu.",
        "Welke van de volgende statements zijn equivalent met de bovenstaande statement?"],
    type:"A",
    diff : 4,
    choices:["Het regent of ik neem mijn paraplu.","Hte regent en ik neem mijn paraplu.",
        "Als het niet regent, neem ik mijn paraplu niet.","Als ik mijn paraplu niet neem, regent het niet.",
        "I neem mijn paraplu alleen als het regent.","Ofwel neem ik mijn paraplu, of het regent niet.",],
    correctAnswers : [3,5],
}

let spellWord1 ={
    title:"Spel het woord",
    text:["De letters zijn door elkaar, rangschik de letters om het woord te vormen.",],
    type : "C",
    diff : 1,
    choices : ["A","R","T","W","Z"],
    correctOrder : ["Z","W","A","R","T"],
}

let spellWord2 ={
    title:"Spel het woord",
    text:["De letters zijn door elkaar, rangschik de letters om het woord te vormen.",],
    type : "C",
    diff : 3,
    choices : ["N","T","V","I","T","I","U","R","E","S","I","E"],
    correctOrder : ["U","N","I","V","E","R","S","I","T","E","I","T"],
}

let spellWord3 ={
    title:"Spel het woord",
    text:["De letters zijn door elkaar, rangschik de letters om het woord te vormen.",],
    type : "C",
    diff : 2,
    choices : ["I","B","A","E","A","R","D"],
    correctOrder : ["A","A","R","D","B","E","I"],
}

let spellWord4 ={
    title:"Spel het woord",
    text:["De letters zijn door elkaar, rangschik de letters om het woord te vormen.",],
    type : "C",
    diff : 0,
    choices : ["I","R","E","V"],
    correctOrder : ["V","I","E","R"],
}

let spellWord5 ={
    title:"Spel het woord",
    text:["De letters zijn door elkaar, rangschik de letters om het woord te vormen.",],
    type : "C",
    diff : 3,
    choices : ["I","Y","A","N","D","L","E","S","D","N"],
    correctOrder : ["D","I","S","N","E","Y","L","A","N","D"],
}

let spellWord6 ={
    title:"Spel het woord",
    text:["De letters zijn door elkaar, rangschik de letters om het woord te vormen.",],
    type : "C",
    diff : 2,
    choices : ["G","L","E","G","A","A","N","U"],
    hint:"Het is een woord uit het Engels.",
    correctOrder : ["L","A","N","G","U","A","G","E"],
    fb1:"Je hebt goed op de letters gelet, het is inderdaad een Engels woord.",
    fb2:"Hoeft het woord altijd een Nederlandse woord te zijn?"
}

let spellWord7 ={
    title:"Spel het woord",
    text:["De letters zijn door elkaar, rangschik de letters om het woord te vormen.",],
    type : "C",
    diff : 3,
    choices : ["D","L","E","G","A","A","B","H","S","N"],
    correctOrder : ["B","A","N","G","L","A","D","E","S","H"],
}

let questionWithNoAnswer = {
    title:"Gekke vraag",
    text:["Wat is het antwoord van een vraag die geen antwoord heeft?"],
    type:"A",
    diff:3,
    choices : ["Ik weet niet.","geen antwoord.","Neen!","Dit is dom.",".........","Vermoord mij!","Alleen God weet het."],
    hint:"Moet je zelfs een antwoord geven op deze vraag?",
    correctAnswers : [],
    fb1:"Soms is niets aanduiden ook een mogelijk antwoord.",
    fb2:"Waarom geef je zelfs een antwoord?"
}

let questionWithNoAnswer2 = {
    title:"Gekke vraag",
    text:["Wat is het antwoord van een vraag die 'Geen antwoord' als antwoord heeft?"],
    type:"A",
    diff:1,
    choices : ["Ik weet niet.","Geen antwoord.","Neen!","Dit is dom.",".........","Vermoord mij!","Alleen God weet het."],
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
    text:["Wat was de hoogste berg op Aarde voordat Mount Everest ontdekt wordt?"],
    type:"A",
    diff:0,
    choices : ["Mount Fuji","Mount blanc","Mount Kilimanjaro","K2","Mount Elbrus","Mount Everest","Chogolisa","Annapurna"],
    correctAnswers:[5],
    fb1: "Omdat je iets niet ontdekt heeft, betekent niet dat het niet bestaat.",
    fb2:"Misschien heb je de vraag op de foutive manier begrepen: Wat was de hoogste berg die men kent voordat Mount Everest ontdekt wordt?"
}

let answerCraziness = {
    title:"Gekke vraag",
    text:["Het juiste antwoord is 'Het Antwoord'."],
    type:"A",
    diff:1,
    choices : ["het antwoord","het Antwoord","Het antwoord","Antwoord","antwoord","het AntwoorD",
    "de antwoord","De antwoord","Het AntWoord","Het Antwoord","het AntWoord","Het AntwoorD","HET ANTWOORD"],
    hint:"Let op op de kleine verschillen.",
    correctAnswers:[9],
    fb1:"Goed gedaan, je hebt goed op de details gelet.",
    fb2:"Het is belangrijk dat je goed op de details let.",
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
        "Wat zal de andere agent zeggen over welke deur leidt tot vrijheid?"],
    correctAnswers : [6],
    fb2:"Hoe kun je informatie van 2 deuren krijgen met 1 vraag?"
}

let reluctantStoryElements = {
    title:"Overbodig elementen",
    text:["Sarah was gisteren tijdens het buitenspelen haar vier ballen kwijtgeraakt, dus besloot ze ernaar te zoeken.",
        "Eerst vond ze haar rode bal toen ze in een gat viel. Terwijl ze verder zocht naar de andere ballen,",
        "vloog er een vogel voorbij. Ze liep al snel diep het bos in, langs een paar griezelig uitziende bomen.",
        "Na nog wat lopen vond ze eindelijk de gele bal onder een steen.",
        "Tijdens haar zoektocht naar de groene bal kwam ze een verlaten hut tegen vol spinnen.",
        "Een spin sprong plotseling uit de hut en klom op haar, waardoor ze in paniek raakte en tegen een berk aan rende.",
        "Toen ze tegen de berk aan botste, viel de groene bal van de berk op haar hoofd. Een beer in de verte keek haar verward aan,",
        "en vroeg zich af wat er aan de hand was. Ze zocht naar de laatste bal, de blauwe. Ze liep over een vijver,",
        "uiteindelijk stopte ze aan de voet van een heuvel, waar ze de blauwe bal vond en terug naar huis liep.",
        "Welke elementen in het verhaal zijn overbodig?"],
    type : "A",
    diff : 3,
    hint:"Overbodig betekent dat het element geen grote rol heeft gespeeld, maar slechts als achtergrondfiguren.",
    choices : ["gat","vogel","griezelige bomen","steen","spin","berk","beer","vijver"],
    correctAnswers : [1,2,6,7],
    fb2:"Als je het verhaal goed gelezen hebben zou de antwoorden duidelijk moeten zijn."
}

let nonFittingWords = {
    title:"Woorden die niet passen",
    text:["Gegeven onderstaande woorden.",
    "Er zijn 2 woorden die niet thuishoren, duid die 2 woorden aan."],
    type:"A",
    diff : 1,
    choices : ["appel","wortel","peer","perziek","sla","meloen","pluim","kers","aardbei"],
    correctAnswers : [1,4],
    fb1:"Wortel en sla zijn geen fruit."
}

let nonFittingWords2 = {
    title:"Woorden die niet passen",
    text:["Gegeven onderstaande woorden.",
        "Er is een woord die niet thuishoort, duid dat woord aan."],
    type:"A",
    diff : 2,
    choices : ["aardbei","kers","banaan","appel","framboos","tomaat"],
    correctAnswers : [2],
    fb1:"Een banaan is geel, de andere dingen zijn rood."
}

let nonFittingWords3 = {
    title:"Woorden die niet passen",
    text:["Gegeven onderstaande woorden.",
        "Er zijn 2 woorden die niet thuishoren, duid die 2 woorden aan."],
    type:"A",
    diff : 2,
    choices : ["rood","indigo","bruin","groen","geel","zwart","blauw","violet","oranje"],
    correctAnswers : [2,5],
    fb1:"Bruin en zwart zijn geen kleuren van de regenboog."
}

let nonFittingWords4 = {
    title:"Woorden die niet passen",
    text:["Gegeven onderstaande woorden.",
        "Er is een woord die niet thuishoort, duid dat woord aan."],
    type:"A",
    diff : 1,
    choices : ["kip","mens","penguin","vogel","varken","eend","gans"],
    correctAnswers : [4],
    fb1:"Een varken heeft 4 poten, de andere hebben 2 poten/voeten."
}

let nonFittingWords5 = {
    title:"Woorden die niet passen",
    text:["Gegeven onderstaande woorden.",
        "Er is een woord die niet thuishoort, duid dat woord aan."],
    type:"A",
    diff : 0,
    choices : ["vliegtuig","paard","auto","fiets","schip"],
    correctAnswers : [1],
    fb1:"Een paard is een dier, de andere dingen niet."
}

let nonFittingWords6 = {
    title:"Woorden die niet passen",
    text:["Gegeven onderstaande woorden.",
        "Er zijn 2 woorden die niet thuishoren, duid die 2 woorden aan."],
    type:"A",
    diff : 3,
    choices : ["specht","uil","mus","pinguin","arend","valk","zwaluw","meeuw","struisvogel","duif"],
    correctAnswers : [3,8],
    fb1:"Struisvogels en pinguins kunnen niet vliegen."
}

let minimalGraph = {
    title:"Minimale graaf",
    text:["Gegeven onderstaande graaf, wat is het maximale aantal bogen die je kunt verwijderen zonder de graaf in stukken te breken?",
        "Dit wil dus zeggen dat elke knoop bereikbaar moet blijven vanuit elke andere knoop."],
    image:"images/minimale graaf.png",
    type:"B",
    diff : 2,
    correctAnswer: "10",
    fb2:"Probeer de bogen 1 voor 1 weg te halen!"
}

let fourShapes = {
    title:"4 figuren plaatsen",
    text:["Gegeven 4 figuren, hoe moet je hen boven elkaar plaatsen om de onderste tekening te krijgen?",
    "Zet de figuur die je eerste moet plaatsen aan de onderkant."],
    image:"images/4 figuren.png",
    type:"C",
    diff : 1,
    choices : ["driehoek","ster","vierkant","cirkel"],
    correctOrder : ["vierkant","cirkel","ster","driehoek"]
}

let soccerGame = {
    title:"Voetbalwedstrijd",
    text:["Stel dat er bij een voetbalwedstrijd van 90 minuten 7 goals in totaal gescoord wordt en",
    "1 van beide teams slechts 2 goals achtereenvolgens gescoord hebben.",
    "Welke van onderstaande finale uitkomsten van de wedstrijd zijn mogelijk?"],
    type:"A",
    diff : 1,
    hint:"Als 1 van beide teams 2 goals achtereenvolgens gescoord hebben, hoe zit het dan met de overige goals?",
    choices:["4-3","2-5","6-1","0-7","1-6","3-4","5-2","7-0"],
    correctAnswers : [0,1,5,6],
}

let guessSecretNumber = {
    title:"Raad het getal",
    text:["Probeer het geheime getal te raden door de volgende hints. Tussen 10 and 99,",
        "niet deelbaar door 3,4,5 of 7, de eerste cijfer is oneven, de som van de cijfers is groter dan 12",
        "het verschil tussen de eerste en laatste cijfer is gelijk of kleiner dan 2, de eerste cijfers is groter dan de laatste cijfer.",
    ],
    type : "B",
    diff : 3,
    correctAnswer : "97"
}

let guessSecretNumber2 = {
    title:"Raad het getal",
    text:["Probeer het geheime getal te raden door de volgende hints. Tussen 1 and 99,",
        "deelbaar door 3 en 5, beide cijfers zijn oneven, de som van 2 cijfers is kleiner dan 8.",
    ],
    type : "B",
    diff : 1,
    correctAnswer : "15"
}

let guessSecretNumber3 = {
    title:"Raad het getal",
    text:["Probeer het geheime getal te raden door de volgende hints. Tussen 0 and 100,",
        "deelbaar door alle getallen van 1 tot 100, is even, heeft slechts 1 cijfer, is kleiner dan 50.",
    ],
    type : "B",
    diff : 0,
    hint:"Dit is zeer makkelijk.",
    correctAnswer : "0",
    fb1:"Met deelbaar alle getallen van 1 tot 100 had je het antwoord al snel kunnen vinden.",
    fb2:"Er is een zeer belangrijk hint in de vraag, probeer dit volgende keer te vinden!"
}

let guessSecretNumber4 = {
    title:"Raad het getal",
    text:["Probeer het geheime getal te raden door de volgende hints. Tussen 0 and 100,",
        "de som van de cijfers is deelbaar door 5, is een priemgetal, is kleiner dan 40.",
    ],
    type : "B",
    diff : 2,
    correctAnswer : "23"
}

abExercises.push(grimReaper);
abExercises.push(racersDilemma);
abExercises.push(racersDilemma2);
abExercises.push(whoIsTheCulprit);
abExercises.push(manAndSnail);
abExercises.push(equivalentStatement);
abExercises.push(spellWord1);
abExercises.push(spellWord2);
abExercises.push(spellWord3);
abExercises.push(spellWord4);
abExercises.push(spellWord5);
abExercises.push(spellWord6);
abExercises.push(spellWord7);
abExercises.push(questionWithNoAnswer);
abExercises.push(questionWithNoAnswer2);
abExercises.push(prisonerAnd2Doors);
abExercises.push(largeProduct);
abExercises.push(mountEverest);
abExercises.push(answerCraziness);
abExercises.push(reluctantStoryElements);
abExercises.push(nonFittingWords);
abExercises.push(nonFittingWords2);
abExercises.push(nonFittingWords3);
abExercises.push(nonFittingWords4);
abExercises.push(nonFittingWords5);
abExercises.push(nonFittingWords6);
abExercises.push(minimalGraph);
abExercises.push(fourShapes);
abExercises.push(soccerGame);
abExercises.push(guessSecretNumber);
abExercises.push(guessSecretNumber2);
abExercises.push(guessSecretNumber3);
abExercises.push(guessSecretNumber4);