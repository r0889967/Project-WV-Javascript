let stoneGame = {
    title:"Steen spel",
    text:["Alice en Bob spelen een spel waarbij een aantal stenen op een tafel liggen.",
        "Beide spelers nemen om de beurt 1, 2 of 3 stenen van de tafel. De speler die de laatste steen wegneemt, verliest het spel.",
        "Stel dat er aan het begin 7 stenen liggen, beide spelers optimaal spelen en Alice begint, ",
        "hoeveel stenen moet Alice wegnemen op haar eerste beurt zodat zij 100% kan winnen?"],
    type:"A",
    diff:3,
    hint:"Je wil dat er alleen maar 1 steen overblijft bij Bob's beurt.",
    choices:["1 steen","2 stenen","3 stenen","Alice kan nooit 100% winnen hoe dan ook."],
    correctAnswers : [1],
    fb2:"Probeer het spel stap voor stap uit te spelen met de verschillende mogelijkheden voor beide spelers op elke beurt!"
}

let numberPyramid = {
    title:"Getallenpiramide",
    text:["Gegeven onderstaande piramide met getallen, er missen een paar getallen",
        "Welke getallen missen er? Vul ze allemaal in."],
    image: "images/getallenpiramide.png",
    type:"B",
    diff:1,
    correctAnswer:"3 3 4 4 10 10",
    fb1:"Dit wordt ook de driehoek van Pascal genoemd."
}

let catEatMice = {
    title:"Kat eet muizen",
    text:["We hebben een kat en 7 muizen, bij dit spel ben je de kat en je moet alle muizen opeten om te scoren",
    "In het begin is jouw score 1, verder weten we de volgende over de muizen",
    "Als je de rode muis opeet, wordt jouw score vermenigvuldigd met 2.",
    "Als je de orange muis opeet, wordt jouw score vermenigvuldigd met zichzelf.",
    "Als je de gele muis opeet, wordt jouw score 0.",
    "Als je de groene muis opeet, komt er 15 bij de score.",
    "Als je de blauwe muis opeet, wordt elke cijfer van jouw score de grootste cijfer van jouw score.",
    "Als je de paarse muis opeet, wordt jouw score vermenigvuldigd met het aantal muizen die je eerder hebt opgegeten,",
    "(de paarse muis zelf telt niet)",
    "Als je de roze muis opeet, wordt jouw score -10.",
    "In welke volgorde moet je de muizen opeten om de hoogste mogelijke score te behalen?"],
    image:"images/kat en muizen.png",
    type:"C",
    diff:4,
    choices:["groene muis","gele muis","roze muis","rode muis","paarse muis","blauwe muis","oranje muis"],
    correctOrder:["roze muis","gele muis","groene muis","rode muis","oranje muis","blauwe muis","paarse muis"],
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



integExercises.push(stoneGame);//decomposition+algoritme
integExercises.push(numberPyramid);//patroon+algoritme
integExercises.push(catEatMice);//abstraction+decomposition+algoritme
integExercises.push(farmerWolfGoatCabbage);//logisch denken
integExercises.push(answerCraziness);//logisch denken