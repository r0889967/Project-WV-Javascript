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
        "Op hoeveel manieren kunnen we een som van 20 bereiken?"],
    type : "B",
    diff : 4,
    hint : "Probeer eerst te berekenen op hoeveel manieren je 1, 2, 3, 4 of 5 kunt maken en werk dan stap voor stap verder.",
    correctAnswer : "40",
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

let robotMaze = {
    title:"Robotdoolhof",
    text:["De robot staat op het groene vakje en moet naar het rode vakje gaan.",
    "De grijze vakjes zijn muren waar de robot niet doorheen kan.",
    "Op hoeveel manieren kan de robot het rode vakje bereiken,",
    "als hij enkel naar rechts en naar beneden mag bewegen?"],
    image:"images/robotdoolhof.png",
    type:"B",
    diff: 4,
    hint:"Splits het probleem op in kleinere deelproblemen per vakje.",
    correctAnswer : "15",
}

let stackBlocks = {
    title:"Blokken stapelen",
    text:["We hebben 3 blauwe, 3 rode en 3 groene blokken en willen een toren van 3 blokken hoog bouwen.",
        "Hoeveel kleurencombinaties zijn er mogelijk met de blokken die we hebben?"],
    type:"B",
    diff:2,
    hint:"Verdeel de gevallen op basis van kleurcombinaties.",
    correctAnswer:"27",
}


let computerVirus = {
    title:"Computervirus",
    text:["Gegeven onderstaande computernetwerk, 1 van de computers is besmet met een virus.",
    "Elke dag zal het virus zich verspreiden over het netwerk via de verbindingen tussen de computers.",
    "Hoeveel dagen duurt het voordat het virus het volledige netwerk heeft besmet?"],
    image:"images/computer virus.png",
    type:"B",
    hint:"Doe het stap voor stap, welke computers worden besmet per dag?",
    diff:2,
    correctAnswer :"4",
    fb1:"Je kunt deze vraag gemakkelijk oplossen door elke dag de nieuwe besmette computers te vinden.",
    fb2:"Het is altijd een beter idee om een groot probleem op te splitsen dan het in 1 keer uitrekenen."
}

let decompMath = {
    title:"Wiskundige stappen",
    text:["Gegeven: (3 + 5) + (8 * 2)",
    "In welke volgorde moet je de stappen uitvoeren? Als er blokken zijn met gelijke prioriteit, orden je ze van links naar rechts.",
    "Je hebt misschien niet alle blokken nodig om het probleem op te lossen."],
    type:"C",
    diff : 0,
    choices : ["8 * 2","De resultaten optellen","3 + 5"],
    correctOrder : ["3 + 5","8 * 2","De resultaten optellen"],
    fb1: "Goed gedaan! Het is belangrijk om in te zien dat je een groter probleem kan oplossen door het op te splitsen in kleinere problemen en deze stap voor stap op te lossen.",
}

let decompMath2 = {
    title:"Wiskundige stappen",
    text:["Gegeven: 20 - 4 * 3 + 18 ÷ 2",
    "In welke volgorde moet je de stappen uitvoeren? Als er blokken zijn met gelijke prioriteit, orden je ze van links naar rechts.",
    "Je hebt misschien niet alle blokken nodig om het probleem op te lossen."],
    type:"C",
    diff : 1,
    choices : ["20 - resultaat","18 ÷ 2","De resultaten optellen","4 * 3","20 - 4"],
    correctOrder : ["4 * 3","18 ÷ 2","20 - resultaat","De resultaten optellen"],
    fb1: "Goed gedaan! Het is belangrijk om in te zien dat je een groter probleem kan oplossen door het op te splitsen in kleinere problemen en deze stap voor stap op te lossen.",
}

let decompMath3 = {
    title:"De Bakker",
    text:["Je bestelt bij de bakker 4 croissants, elk voor 2 euro, en 2 taarten van elk 11 euro. Je geeft de bakker 50 euro.",
    "In welke volgorde moet je de stappen uitvoeren om te berekenen hoeveel wisselgeld je krijgt?", 
    "Als er blokken zijn met gelijke prioriteit, orden je ze in de volgorde dat ze in de vraag staan.",
    "Je hebt misschien niet alle blokken nodig om het probleem op te lossen."],
    type:"C",
    diff : 2,
    hint : "Probeer eerst de kosten van de croissants en taarten apart te berekenen, tel dan deze resultaten op en trek dit af van het geld dat je aan de bakker hebt gegeven.",
    choices : ["2 * 11","De resultaten optellen","50 - resultaat","11 * 4","4 * 2","2 + 11"],
    correctOrder : ["4 * 2","2 * 11","De resultaten optellen","50 - resultaat"],
    fb1: "Goed gedaan! Het is belangrijk om in te zien dat je een groter probleem kan oplossen door het op te splitsen in kleinere problemen en deze stap voor stap op te lossen.",
}


//decExercises.push(birthdayParty);
//decExercises.push(naughtyKittens);
//decExercises.push(machinesInFactory);
decExercises.push(numberOfWaysToReachSum)
//decExercises.push(FindWordsInSrcambledText);
//decExercises.push(FindWordsInSrcambledText2);
//decExercises.push(FindWordsInSrcambledText3);
//decExercises.push(FindWordsInSrcambledText4);
//decExercises.push(FindWordsInSrcambledText5);
//decExercises.push(FindWordsInSrcambledText6);
decExercises.push(robotMaze);
decExercises.push(stackBlocks);
decExercises.push(computerVirus);
decExercises.push(decompMath);
decExercises.push(decompMath2);
decExercises.push(decompMath3);