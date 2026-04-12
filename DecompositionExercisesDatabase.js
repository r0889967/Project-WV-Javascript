let birthdayParty = {
    title:"Verjaardagsfeest",
    text:["Je wilt een groot verjaardagsfeest in je tuin organiseren. Het kost je uren om al het eten klaar te maken.",
        "Omdat je veel vrienden wilt uitnodigen, wil je het eten ook zo vers mogelijk houden voor het feest.",
        "Je vrienden wonen niet ver weg, ze komen binnen een paar minuten nadat ze je uitnodigingen hebben ontvangen.",
        "Je tuin moet ook nog versierd en schoongemaakt worden, je wil dat de versieringen zo proper mogelijk zijn.",
        "Wat is de meest logische manier om het feest te organiseren?",
    ],
    type : "C",
    diff : 0,
    choices : ["Tuin versieren","Uitnodigingen sturen","Eten maken","Tuin schoonmaken",],
    correctOrder: ["Tuin schoonmaken","Tuin versieren","Eten maken","Uitnodigingen sturen"],
}

let naughtyKittens = {
    title:"De stoute poesjes",
    text:["Je bent de eigenaar van een huisdierwinkel en wil 5 poesjes",
        "Tommy, Celie, Johny, Mali en Daniel in slaap brengen, maar dit gaat niet zo soepel want de poesjes zijn stout",
        "Hier is wat je weet:",
        "Celie slaapt alleen als Daniel slaapt.",
        "Als Daniel niet slaapt, zal de andere poesjes nooit slapen.",
        "Johny slaapt alleen als Tommy slaapt.",
        "Mali slaapt alleen als elke poesje wiens naam alfabetisch voor Mali is slaapt.",
        "Tommy slaapt alleen als Celie slaapt.",
        "In welke volgorde moet je de poesjes in slaap brengen? "],
    type : "C",
    diff : 1,
    choices : ["Celie","Daniel","Johny","Mali","Tommy"],
    correctOrder : ["Daniel","Celie","Tommy","Johny","Mali",],

}

let machinesInFactory = {
    title:"Machinen in de fabriek",
    text:["Er zijn 6 machines A,B,C,D,E en F die opgestart moet worden. Sommige machinen kunnen direct opgestart worden, ",
        "sommige moeten wachten tot andere machinen eerst opgestart wordt.",
        "C kan direct opgestart worden.",
        "F start alleen op als C opstart.",
        "B start alleen op als A en D opstarten.",
        "D start alleen op als if F en E opstarten.",
        "E start alleen op als if A opstart.",
        "A start alleen op als if F opstart.",
        "In welke volgorde moet de machinen opgestart worden?"],
    type : "C",
    diff : 1,
    choices : ["E","F","C","B","D","A"],
    correctOrder : ["C","F","A","E","D","B"]
}

let numberOfWaysToReachSum = {
    title:"Munten",
    text:["Stel dat we munten hebben met de waarden 1, 2, 5 en 10.",
        "Op hoeveel manieren kunnen we 20 bereiken?"],
    type : "B",
    diff : 4,
    hint : "Probeer eerst te berekenen op hoeveel manieren je 1, 2, 3, 4 of 5 kunt maken en werk dan stap voor stap verder.",
    correctAnswer : "40",
}

let stoneGame = {
    title:"Steen spel",
    text:["Alice en Bob spelen een spel waarbij een aantal stenen op een tafel liggen.",
        "Beide spelers nemen om de beurt 1, 2 of 3 stenen van de tafel. De speler die de laatste steen wegneemt, verliest het spel.",
        "Stel dat er aan het begin 7 stenen liggen en Alice begint, ",
        "hoeveel stenen moet Alice wegnemen op haar eerste beurt zodat zij 100% kan winnen?"],
    type:"A",
    diff:3,
    hint:"Je wil dat er alleen maar 1 steen overblijft bij Bob's beurt.",
    choices:["1 steen","2 stenen","3 stenen","Alice kan nooit 100% winnen hoe dan ook."],
    correctAnswers : [1],
    fb2:"Probeer het spel stap voor stap uit te spelen met de verschillende mogelijkheden voor beide spelers op elke beurt!"
}

let FindWordsInSrcambledText = {
    title:"Woorden in letterpuin",
    text:["Kijk aandachtig naar onderstaande puin van letters.",
        "urberdoaowolgn",
        "Find de 3 woorden (ze zijn allemaal kleuren) die je met de letters in de puin kan spellen.",
        "Vul de woorden in, de volgorde is niet belangrijk, zet exact 1 spatie tussen de woorden en gebruik geen hoofdletters.",
        ""],
    type : "B",
    diff : 1,
    correctAnswer : "blauw groen rood"
}

let FindWordsInSrcambledText2 = {
    title:"Woorden in letterpuin",
    text:["Kijk aandachtig naar onderstaande puin van letters.",
        "enejan",
        "Find de 2 woorden die je met de letters in de puin kan spellen.",
        "Vul de woorden in, de volgorde is niet belangrijk, zet exact 1 spatie tussen de woorden en gebruik geen hoofdletters.",
        ""],
    type : "B",
    diff : 0,
    correctAnswer : "ja neen"
}

let FindWordsInSrcambledText3 = {
    title:"Woorden in letterpuin",
    text:["Kijk aandachtig naar onderstaande puin van letters.",
        "oadhkntoke",
        "Find de 3 woorden (ze zijn allemaal dieren) die je met de letters in de puin kan spellen.",
        "Vul de woorden in, de volgorde is niet belangrijk, zet exact 1 spatie tussen de woorden en gebruik geen hoofdletters.",
        ""],
    type : "B",
    diff : 2,
    correctAnswer : "hond kat koe"
}

let FindWordsInSrcambledText4 = {
    title:"Woorden in letterpuin",
    text:["Kijk aandachtig naar onderstaande puin van letters.",
        "soertouoeonvgo",
        "Find de 4 woorden (ze zijn allemaal lichaamsdelen) die je met de letters in de puin kan spellen.",
        "Vul de woorden in, de volgorde is niet belangrijk, zet exact 1 spatie tussen de woorden en gebruik geen hoofdletters.",
        ""],
    type : "B",
    diff : 3,
    correctAnswer : "neus oog oor voet"
}

let FindWordsInSrcambledText5 = {
    title:"Woorden in letterpuin",
    text:["Kijk aandachtig naar onderstaande puin van letters.",
        "anmzano",
        "Find de 4 woorden (ze zijn in de hemel) die je met de letters in de puin kan spellen.",
        "Vul de woorden in, de volgorde is niet belangrijk, zet exact 1 spatie tussen de woorden en gebruik geen hoofdletters.",
        ""],
    type : "B",
    diff : 0,
    correctAnswer : "maan zon"
}

let FindWordsInSrcambledText6 = {
    title:"Woorden in letterpuin",
    text:["Kijk aandachtig naar onderstaande puin van letters.",
        "ragtFesnuDslsiEn",
        "Find de 3 woorden (ze zijn talen) die je met de letters in de puin kan spellen.",
        "Vul de woorden in, de volgorde is niet belangrijk, zet exact 1 spatie tussen de woorden en gebruik geen hoofdletters.",
        ""],
    type : "B",
    diff : 2,
    hint: "Kijk aandachtig naar de hoofdletters in de puin van letters.",
    correctAnswer : "Duits Engels Frans",
    fb1:"De hoofdletters waren belangrijke sleutels.",
    fb2:"De hoofdletters staan er niet voor niets."
}

let farmerWolfGoatCabbage = {
    title:"Farmer wolf goat cabbage",
    text:["Een boer (B), een wolf (W), een geit (G) en een kool (K) moeten met boot een rivier oversteken.",
        "De boot kan maximaal het gewicht van 2 dingen dragen.",
        "Alleen de boer kan de boot besturen.",
        "De wolf zal de geit opeten als hij alleen wordt gelaten.",
        "De geit zal de kool opeten als hij alleen wordt gelaten.",
        "Hoe kunnen de boer en zijn bezittingen de rivier oversteken zonder iets te verliezen?"],
    type : "C",
    diff:4,
    choices:["B neemt K mee naar overkant","B neemt W mee naar overkant","B neemt G mee naar overkant","B komt terug alleen",
        "B komt terug alleen","B neemt G mee naar overkant","B komt terug met G","B komt terug met W","B komt teurg met K"],
    correctOrder:["B neemt G mee naar overkant","B komt terug alleen","B neemt W mee naar overkant","B komt terug met G",
        "B neemt K mee naar overkant","B komt terug alleen","B neemt G mee naar overkant",],
    fb2:"Probeer de relaties tussen de boer, de geit, de wolf en de kool beter te bestuderen!"
}

let robotMaze = {
    title:"Robotdoolhof",
    text:["Onze robot staat bij het groene vakje in de doolhof en moet naar het rode vakjes gaan,",
    "De grijze vakjes zijn muren, de robot kan niet door de muren wandelen.",
    "Hoeveel manieren zijn er voor de robot om van het groene vakje naar het rode vakjes te gaan,",
    "als de robot slechts naar rechts en naar onder kan bewegen?"],
    image:"images/robotdoolhof.png",
    type:"B",
    diff: 4,
    hint:"Denk goed na hoe je dit probleem kan opsplitsen in deelproblemen.",
    correctAnswer : "15",
    fb2:"Probeer de oplossing stap voor stap uit te werken door bij elke vakje het aantal manieren uit te rekenen, begin met de vakjes naast het rode vakje."
}

let stackBlocks = {
    title:"Blokken stapelen",
    text:["We hebben 3 blauwe, 3 rode en 3 groene blokken, en we willen een toren van 3 blokken bouwen.",
        "Op hoeveel manieren kun je de toren bouwen?",],
    type:"B",
    diff:2,
    hint:"Probeer de manieren op te splitsen in verschillende categorien op basis van het aantal blokken met zelfde kleuren! ",
    correctAnswer:"27",
    fb2: "De toren kan ofwel 3 blokken met dezelfde kleuren, 2 blokken met dezelfde kleuren of 3 blokken met verschillende kleuren hebben.",
}


let computerVirus = {
    title:"Computervirus",
    text:["Gegeven onderstaande computernetwerk, 1 van de computers is besmet met een virus.",
    "Elke dag zal de virus zich verspreiding over het netwerk via de verbindingen tussen de computers.",
    "Hoeveel dagen duurt het voordat het virus het volledige netwerk besmet?"],
    image:"images/computer virus.png",
    type:"B",
    hint:"Doe het stap voor stap, welke computers worden besmet per dag?",
    diff:2,
    correctAnswer :"4",
    fb1:"Je kunt deze vraag gemakkelijk oplossen door elke dag de nieuwe besmette computers te vinden.",
    fb2:"Het is altijd een betere idee om een groot probleem op te splitsen dan het in 1 keer uitrekenen."
}

decExercises.push(birthdayParty);
decExercises.push(naughtyKittens);
decExercises.push(machinesInFactory);
decExercises.push(farmerWolfGoatCabbage);
decExercises.push(numberOfWaysToReachSum)
decExercises.push(stoneGame);
decExercises.push(FindWordsInSrcambledText);
decExercises.push(FindWordsInSrcambledText2);
decExercises.push(FindWordsInSrcambledText3);
decExercises.push(FindWordsInSrcambledText4);
decExercises.push(FindWordsInSrcambledText5);
decExercises.push(FindWordsInSrcambledText6);
decExercises.push(robotMaze);
decExercises.push(stackBlocks);
decExercises.push(computerVirus);