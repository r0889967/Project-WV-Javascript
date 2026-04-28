let stoneGame = {
    title:"Steen spel",
    text:["Alice en Bob spelen een spel waarbij een aantal stenen op een tafel liggen.",
        "Beide spelers nemen om de beurt 1, 2 of 3 stenen van de tafel. De speler die de laatste steen wegneemt, verliest het spel.",
        "Stel dat er oorspronkelijk 7 stenen liggen, beide spelers optimaal spelen en Alice begint.",
        "Hoeveel stenen moet Alice wegnemen bij haar eerste beurt zodat zij met 100% zekerheid kan winnen?"],
    type:"A",
    diff:3,
    hint:"Je wil dat er maar 1 steen overblijft bij de start van de beurt van Bob.",
    choices:["1 steen","2 stenen","3 stenen","Alice kan nooit met 100% zekerheid winnen"],
    correctAnswers : [1],
    fb2:"Probeer het spel stap voor stap uit te spelen met de verschillende mogelijkheden voor beide spelers bij elke beurt!"
}

let numberPyramid = {
    title:"Getallenpiramide",
    text:["Gegeven onderstaande piramide met getallen, er missen een paar getallen",
        "Welke getallen missen er? Zet een spatie tussen de getallen en zet ze in volgorde van klein naar groot."],
    image: "images/getallenpiramide.png",
    type:"B",
    diff:1,
    hint: "Zoek naar een patroon in de getallen van boven naar onder.",
    correctAnswer:"3 3 4 4 10 10",
    fb1:"Dit wordt ook de driehoek van Pascal genoemd."
}

let catEatMice = {
    title:"Kat eet muizen",
    text:["Er zijn een kat en 7 muizen. Bij dit spel ben je de kat en je moet muizen opeten om punten te verdienen.",
    "In het begin is je score 1, verder weten we het volgende over de muizen:",
    "Als je de rode muis opeet, wordt jouw score vermenigvuldigd met 2.",
    "Als je de orange muis opeet, wordt jouw score vermenigvuldigd met zichzelf.",
    "Als je de gele muis opeet, wordt jouw score op 0 gezet.",
    "Als je de groene muis opeet, komt er 15 bij je score.",
    "Als je de blauwe muis opeet, wordt elk cijfer in je score het grootste cijfer in het getal van je score. (vb. 123 wordt 333)",
    "Als je de paarse muis opeet, wordt jouw score vermenigvuldigd met het aantal muizen die je eerder hebt opgegeten,",
    "(de paarse muis zelf telt niet)",
    "Als je de roze muis opeet, wordt jouw score op -10 gezet.",
    "In welke volgorde moet je de muizen opeten om de hoogst mogelijke score te behalen?"],
    image:"images/kat en muizen.png",
    type:"C",
    diff:4,
    choices:["groene muis","gele muis","roze muis","rode muis","paarse muis","blauwe muis","oranje muis"],
    correctOrder:["roze muis","gele muis","groene muis","rode muis","oranje muis","blauwe muis","paarse muis"],
}

let farmerWolfGoatCabbage = {
    title:"Farmer wolf goat cabbage",
    text:["Een boer (B), een wolf (W), een geit (G) en een kool (K) moeten met een boot een rivier oversteken.",
        "De boot kan maximaal het gewicht van 2 dingen dragen.",
        "Alleen de boer kan de boot besturen.",
        "De wolf zal de geit opeten als de boer ze alleen laat.",
        "De geit zal de kool opeten als de boer ze alleen laat.",
        "Hoe kunnen de boer en zijn bezittingen de rivier oversteken zonder iets te verliezen?"],
    type : "C",
    diff:4,
    choices:["B neemt K mee naar overkant","B neemt W mee naar overkant","B neemt G mee naar overkant","B komt terug alleen",
        "B komt terug alleen","B neemt G mee naar overkant","B komt terug met G","B komt terug met W","B komt teurg met K"],
    correctOrder:["B neemt G mee naar overkant","B komt terug alleen","B neemt W mee naar overkant","B komt terug met G",
        "B neemt K mee naar overkant","B komt terug alleen","B neemt G mee naar overkant",],
    fb2:"Probeer de relaties tussen de boer, de geit, de wolf en de kool beter te bestuderen!"
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
    fb1:"Het is belangrijk dat je goed op de details let.",
}



integExercises.push(stoneGame);//decomposition+algoritme
integExercises.push(numberPyramid);//patroon+algoritme
integExercises.push(catEatMice);//abstraction+decomposition+algoritme
integExercises.push(farmerWolfGoatCabbage);//logisch denken
//integExercises.push(answerCraziness);//niet echt CT