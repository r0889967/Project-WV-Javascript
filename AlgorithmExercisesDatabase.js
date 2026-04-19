let encryptedText1 = {
    title: "Versleutelde tekst",
    text:["De onderstaande tekst wordt versleuteld.",
        "Jk dfnk dbt jf djt kvnt",
        "Probeer de tekst te ontcijferen.(Let op hoofdletters!)"],
    type: "B",
    diff:0,
    correctAnswer : "Ik denk dat je dit kunt",
    fb2:"Het heeft iets te maken met de klinkers."
}

let encryptedText2 = {
    title:"Versleutelde tekst",
    text:["De onderstaande tekst wordt versleuteld.",
        "Jl cfo kjvz cftuf wsjfoe",
        "Probeer de tekst te ontcijferen.(Let op hoofdletters!)"],
    type : "B",
    diff:2,
    correctAnswer : "Ik ben jouw beste vriend",
}

let encryptedText3 = {
    title:"Versleutelde tekst",
    text:["De onderstaande tekst wordt versleuteld.",
        "kI ewns jluile eglku",
        "Probeer de tekst te ontcijferen.(Let op hoofdletters!)"],
    type : "B",
    diff:2,
    correctAnswer : "Ik wens jullie geluk",
}

let encryptedText4 = {
    title:"Versleutelde tekst",
    text:["De onderstaande tekst wordt versleuteld.",
        "eJ laz teh droowtna nennuk nezel",
        "Probeer de tekst te ontcijferen.(Let op hoofdletters!)"],
    type : "B",
    diff:1,
    correctAnswer : "Je zal het antwoord kunnen lezen",
}

let encryptedText5 = {
    title:"Versleutelde tekst",
    text:["De onderstaande tekst wordt versleuteld.",
        "loot ezed nav ej dniv taW",
        "Probeer de tekst te ontcijferen.(Let op hoofdletters!)"],
    type : "B",
    diff:1,
    correctAnswer : "Wat vind je van deze tool",
}

let encryptedText6 = {
    title:"Versleutelde tekst",
    text:["De onderstaande tekst wordt versleuteld.",
        "L#f# i# a# e#d#e#s p#o#e#s o# l#a#r#i#g",
        "Probeer de tekst te ontcijferen.(Let op hoofdletters!)"],
    type : "B",
    diff:2,
    hint:"De tekst is in het Engels.",
    correctAnswer : "Life is an endless process of learning",
}

let encryptedText7 = {
    title:"Versleutelde tekst",
    text:["De onderstaande tekst wordt versleuteld.",
    "Dverzaeag iesen guriottdeaging vjouolrlie",
        "Probeer de tekst te ontcijferen.(Let op hoofdletters!)"],
    type : "B",
    diff:4,
    hint:"Elk woord in de versleutelde tekst is een mix van 2 woorden.",
    correctAnswer : "Deze vraag is een grote uitdaging voor jullie",
}

let mapping1 = {
    title:"Map functie",
    text:["Als f(abc)=bdf, f(def)=egi, f(cbe)=ddh,",
        "f(fas)=?"],
    type : "B",
    diff:1,
    correctAnswer : "gcv",
}

let mapping2 = {
    title:"Map functie",
    text:["Als f(art)=3, f(flower)=6, f(dogs)=4, f(weather)=7",
        "f(horse)=?"],
    type : "B",
    diff:0,
    correctAnswer : "5",
}

let mapping3 = {
    title:"Map functie",
    text:["Als f(abghjp)=aaeeio, f(zzxwpb)=uuuuoa, f(fghbzi)=eeeaui",
        "f(afckel)=?"],
    type : "B",
    diff:3,
    correctAnswer : "aeaiei",
}

let mapping4 = {
    title:"Map functie",
    text:["Als f(2)=2,f(3)=3,f(4)=3,f(5)=5,f(6)=5,f(10)=7,f(12)=11,f(13)=11,f(16)=13",
        "f(35)=?"],
    type : "B",
    diff:2,
    correctAnswer : "31",
}

let mapping5 = {
    title:"Map functie",
    text:["Als f([a,b])=3,f([b,a])=3,f([b,c,d])=9,f([a,c])=4,f([b,b])=4,f([a,c,b,e])=11",
        "f([a,a,b,c,e])=?"],
    type : "B",
    diff:3,
    hint:"Probeer een relatie tussen de letters en de getallen te vinden.",
    correctAnswer : "12",
}

let mapping6 = {
    title:"Map functie",
    text:["ALs f(33)=[3,11],f(8)=[2,2,2],f(100)=[2,2,5,5],f(37)=[37]",
        "f(78)="],
    type : "B",
    diff:0,
    correctAnswer : "[2,3,13]",
}

let mapping7 = {
    title:"Map functie",
    text:["Als f(334)=1,f(7)=1,f(15)=1,f(20)=0,f(37)=1,f(49)=1,f(24)=0",
        "f(51)="],
    type : "B",
    diff:0,
    correctAnswer : "0",
}

let filter1 = {
    title:"Filter functie",
    text:["Als f([1,2,4,3,5,7])=[1,3,5,7], f([9,7,4,5,6,1]=[9,7,5,1]",
        "f([2,3,5,4,4,6])=?"],
    type : "B",
    diff:0,
    correctAnswer : "[3,5]",
}

let filter2 = {
    title:"Filter functie",
    text:["Als f([10,25,41,3,9])=[41,3], f([7,61,88,5,91,110]=[7,61,5]",
        "f([2,78,31,11,45,79,4])=?"],
    type : "B",
    diff:1,
    correctAnswer : "[2,31,11,79]",
}

let followAlgorithm1 = {
    title:"Volg het algoritme",
    text:["Stel dat we beginnen met het getal 137, dan voeren we de volgende stappen uit:",
"1) Vervang elk cijfer kleiner dan 5 door 2.",
"2) Wissel het eerste en het laatste cijfer om.",
"3) Vervang het eerste en het tweede cijfer door hun som.",
"4) Trek één af van elk cijfer.",
"5) Vervang het hele getal door de som van zijn cijfers."],
    type : "B",
    diff:3,
    correctAnswer : "9"
}

let followAlgorithm2 = {
    title:"Volg het algoritme",
    text:["Stel dat we aan het begin een A hebben, dan voeren we de volgende stappen uit:",
        "1) Voeg een spatie toe aan het einde van de string, gevolgd door een kopie van de string aan het einde.",
"2) Voeg een B toe rechts van elke A.",
"3) Voeg een C toe links van elke B.",
    "Wat is het resultaat als we bovenstaande stappen 2 keren achtereenvolgens uitvoeren?",],
    type : "B",
    diff:2,
    correctAnswer : "ACBCCB ACBCCB ACBCCB ACBCCB",
}

let followAlgorithm3 = {
    title:"Volg het algoritme",
    text:["Stel dat we beginnen met 4, dan voeren we de volgende stappen uit:",
"1) Zolang het getal niet deelbaar is door 5, tel er 3 bij op.",
"2) Vervang het getal door het kleinste priemgetal dat groter is dan het getal.",
    "Wat is het resultaat als we bovenstaande stappen 4 keren achtereenvolgens uitvoeren?"],
    type : "B",
    diff:2,
    correctAnswer : "41",
}

let followAlgorithm4 = {
    title:"Volg het algorithme",
    text:["Stel we hebben in het begin de string AAAAAAAA, p=0 en q=1 hebben, we voeren onderstaande stappen uit.",
        "1) Ga naar begin van de string.",
    "2) Als p deelbaar is door q, zet de letter op die positie om naar de volgende letter in het alfabet.",
    "3) Tel 1 op bij p",
    "4) Ga naar de volgende positie in de string.",
    "5) Als we niet op het einde van de string zitten, spring naar stap 2.",
    "6) Zet p op 0, tel 1 op bij q",
    "Wat is het resultaat als we bovenstaande stappen 4 keren achtereenvolgens uitvoeren?",],
    type : "B",
    diff:4,
    correctAnswer : "EBCDEBDB",
}

let ballsAndDrawers = {
    title:"Ballen en schotels",
    text:["Sarah wil haar ballen in haar lades leggen, dus doet ze het volgende.",
        "Ze legt de eerste bal in de blauwe schotel, de tweede bal in de rode schotel,",
        "de derde bal in de groene schotel en de vierde bal in de gele schotel.",
        "Nadat ze de vierde bal erin heeft gelegd, herhaalt ze de bovenstaande cyclus.",
        "In welke schotel legt Sarah de 35e bal?"],
    type : "A",
    diff:1,
    choices:["blauw","rood","groen","geel"],
    correctAnswers : [2]
}

let runningRace = {
    title:"100m ren race",
    text:["Alice,Bob,Carole,Dilan en Eva hebben een race van 100m. Ze hebben elk zijn eigen strategie.",
        "We veronderstellen dat elke renner loopt met snelheid 1m/s..",
        "Alice rent 1 meter en stopt 1 second.",
        "Bob rent 5 meter en stopt 10 seconden.",
        "Carole rent 3 meter en stopt 2 seconden.",
        "Dilan rent 50 meter en stopt 75 seconden.",
        "Eva rent 10 meter en stopt 5 seconden.",
        "Elke renner herhaalt zijn strategie tijdens de volledig race.",
        "In welke volgorde komen ze aan bij het einde? "],
    type:"C",
    diff:3,
    choices : ["Alice","Bob","Carole","Dilan","Eva"],
    correctOrder : ["Eva","Carole","Alice","Dilan","Bob"],
}

let randomNumberGenerator = {
    title: "Getalgenerator",
    text:["Stel dat we het volgende algoritme hebben om het volgende willekeurige getal te genereren.",
        "x -> (x+3) modulo 10",
        "Als we beginnen met 5, wat zal de 9de getal zijn?",],
    type:"B",
    diff:2,
    correctAnswer : "9"
}

let randomNumberGenerator2 = {
    title: "Getalgenerator",
    text:["Stel dat we het volgende algoritme hebben om het volgende willekeurige getal te genereren.",
        "x -> (x*3) modulo 15",
        "Als we beginnen met 4, wat zal de 8ste getal zijn?",],
    type:"B",
    diff:3,
    correctAnswer : "3"
}

let blueCar = {
    title:"Rij naar het einde",
    text:["Rij de blauwe auto naar het einde, hieronder zie je de wegenkaart.",
    "De blauwe auto kan gestuurd worden door 3 soorten instructies:",
    "↑: rij tot helemaal aan het einde van de weg, ↱: rechts afslaan, ↰: links afslaan",
    "Plaats de instructies in de juiste volgorde zodat de auto naar het einde kan rijden",
    "Let op: je hoeft niet alle blokken te gebruiken."],
    image:"images/blauwe auto.png",
    type: "C",
    diff : 2,
    choices : ["↑","↑","↑","↑","↑","↑","↑","↑","↑","↑","↑","↑","↑","↱","↱","↱","↱","↱","↱","↱","↱","↱","↱","↱","↱","↱",
        "↰","↰","↰","↰","↰","↰","↰","↰","↰","↰","↰","↰","↰",],
    correctOrder:["↑","↰","↑","↰","↑","↰","↑","↱","↑","↱","↑","↰","↑","↱","↑","↰","↑"]
}

let getGivenNumber1 = {
    title: "Verkrijg gegeven getal",
    text:["Stel dat we op het begin 36 hebben, in welke volgorde moeten we de onderstaande bewerkingen uitvoeren",
    "om 2 te krijgen?"],
    type:"C",
    diff:1,
    choices:["/7","neem som van cijfers","+5"],
    correctOrder: ["neem som van cijfers","+5","/7"]
}

let sortTheNumbers1 = {
    title:"Getallen sorteren",
    text:["Sorteer de getallen van klein naar groot volgens de volgende regels.",
        "1) Alle priemgetallen zijn groter dan alle niet-priemgetallen.",
        "2) Sorteer priemgetallen gewoon van klein naar groot op de normale manier.",
        "3) Sorteer niet-priemgetallen van klein naar groot op basis van de som van hun cijfers."],
    type : "C",
    diff : 2,
    choices : ["31","52","18","29","13","15","21","5","2"],
    correctOrder : ["21","15","52","18","2","5","13","29","31"]
}

let sortTheNumbers2 = {
    title:"Getallen sorteren",
    text:["Sorteer de getallen van klein naar groot volgens de volgende regels.",
        "1) Sorteer de getallen op basis van de som van hun cijfers.",
        "2) Sorteer getallen met dezelfde som van hun cijfers op basis van het product van hun cijfers.",],
    type : "C",
    diff : 1,
    choices : ["6","33","141","41","120","32","9","81"],
    correctOrder : ["120","41","32","141","6","33","81","9"]
}

let sortTheNumbers3 = {
    title:"Getallen sorteren",
    text:["Sorteer de getallen van klein naar groot volgens de volgende regels.",
        "Sorteer de getallen op basis van de som van hun cijfers.",],
    type : "C",
    diff : 0,
    choices : ["6","25","5000","31","111","26","9"],
    correctOrder : ["111","31","5000","6","25","26","9"]
}

let frogAndFlies = {
    title:"Kikker en vliegen",
    text:["Op de onderstaande tekening staan een kikker en een aantal vliegen op de lelies.",
    "Deze kikker gedraagt zich vreeemd, hij wil namelijk altijd eerst de vlieg opeten die zich het verst van hem bevindt.",
    "In welke volgorde zal de kikker de vliegen opeten?"],
    image:"images/kikker en vliegen.png",
    type:"C",
    diff: 1,
    choices : ["blauw vliegje","zwart vliegje","bruin vliegje","rood vliegje","paars vliegje"],
    correctOrder : ["rood vliegje","paars vliegje","blauw vliegje","zwart vliegje","bruin vliegje"],
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
        "A rent minstens zo snel als B, B rent minstens zo snel als C, C rent minstens zo snel als D, D rent minstens zo snel als E,",
        "E rent minstens zo snel als F, F rent minstens zo snel als A.",
        "Wie rent het snelste?"],
    type: "A",
    diff : 2,
    choices : ["A","B","C","D","E","F","Alle racers zijn even snel.","Er is een contradictie."],
    correctAnswers : [6],
    fb1:"Deze uitspraak kan alleen waar zijn als iedereen even snel is.",
    fb2:"Kijk goed naar het eerste en laatste deel van deze vraag."
}

let equivalentStatement = {
    title:"Equivalente uitspraak",
    text:["We hebben de volgende uitspraak: Als het regent, neem ik mijn paraplu.",
        "Welke van de volgende uitspraken zijn equivalent aan de bovenstaande uitspraak?"],
    type:"A",
    diff : 4,
    choices:["Het regent of ik neem mijn paraplu.","Het regent en ik neem mijn paraplu.",
        "Als het niet regent, neem ik mijn paraplu niet.","Als ik mijn paraplu niet neem, regent het niet.",
        "Ik neem mijn paraplu alleen als het regent.","Ofwel neem ik mijn paraplu, of het regent niet."],
    correctAnswers : [3,5],
}

let minimalGraph = {
    title:"Minimale graaf",
    text:["Gegeven de onderstaande graaf: wat is het maximale aantal bogen dat je kunt verwijderen zonder dat de graaf uit elkaar valt?",
        "Dit betekent dat elke knoop bereikbaar moet blijven vanuit elke andere knoop."],
    image:"images/minimale graaf.png",
    type:"B",
    diff : 2,
    correctAnswer: "10",
    fb2:"Probeer de bogen één voor één te verwijderen."
}

let soccerGame = {
    title:"Voetbalwedstrijd",
    text:["Stel dat er in een voetbalwedstrijd van 90 minuten in totaal 7 doelpunten worden gescoord,",
    "en dat één van beide teams ergens twee doelpunten na elkaar scoort.",
    "Welke van de onderstaande eindstanden zijn mogelijk?"],
    type:"A",
    diff : 1,
    hint:"Als één team twee keer na elkaar scoort, wat betekent dat voor de volgorde van de andere doelpunten?",
    choices:["4-3","2-5","6-1","0-7","1-6","3-4","5-2","7-0"],
    correctAnswers : [0,1,5,6],
}

let pathFinding = {
    title:"Juiste pad vinden",
    text:["Deze robot heeft een lage batterij en moet naar het oplaadstation bewegen, maar eerst moet hij de onderdelen",
    "die hij heeft laten vallen weer gaan oprapen. Sleep de stappen die de robot moet volgen in de juiste volgorde.",
    "De robot is oorspronkelijk naar rechts geörienteerd.",],
    image:"images/pathfinding1.png",
    type : "C",
    diff : 0,
    hint: "Probeer eerst de stappen te ordenen die de robot moet volgen om alle onderdelen op te rapen, en kijk dan welke stappen hij moet volgen om naar het oplaadstation te gaan.",
    choices : ["Draai 90 graden links","Beweeg 50 stappen voorwaarts","Draai 90 graden rechts","Beweeg 100 stappen voorwaarts"],
    correctOrder : ["Draai 90 graden rechts","Beweeg 50 stappen voorwaarts","Draai 90 graden links","Beweeg 100 stappen voorwaarts"],
    fb1: "Goed gedaan, check altijd eerst of de robot in de juiste richting staat voordat je hem stappen laat zetten.",
}

let pathFinding2 = {
    title:"Juiste pad vinden",
    text:["Deze robot heeft een lage batterij en moet naar het oplaadstation bewegen, maar eerst moet hij de onderdelen",
    "die hij heeft laten vallen weer gaan oprapen. Sleep de stappen die de robot moet volgen in de juiste volgorde.",
    "De robot is oorspronkelijk naar boven geörienteerd.",
    "Het is mogelijk dat niet alle blokken gebruikt moeten worden.",],
    image:"images/pathfinding2.png",
    type : "C",
    diff : 1,
    hint: "Probeer eerst de stappen te ordenen die de robot moet volgen om alle onderdelen op te rapen, en kijk dan welke stappen hij moet volgen om naar het oplaadstation te gaan.",
    choices : ["Draai 90 graden links","Beweeg 50 stappen voorwaarts","Draai 135 graden rechts","Beweeg 50 stappen voorwaarts","Draai 45 graden links", "Draai 45 graden rechts"],
    correctOrder : ["Draai 135 graden rechts","Beweeg 50 stappen voorwaarts","Draai 90 graden links","Beweeg 50 stappen voorwaarts"],
    fb1: "Goed gedaan, check altijd eerst of de robot in de juiste richting staat voordat je hem stappen laat zetten.",
}

let pathFinding3 = {
    title:"Juiste pad vinden",
    text:["Deze robot heeft een lage batterij en moet naar het oplaadstation bewegen, maar eerst moet hij de onderdelen",
    "die hij heeft laten vallen weer gaan oprapen. Sleep de stappen die de robot moet volgen in de juiste volgorde.",
    "De robot is oorspronkelijk naar rechts geörienteerd.",
    "Gebruik zo weinig mogelijk blokken.",],
    image:"images/pathfinding3.png",
    type : "C",
    diff : 2,
    hint: "Probeer eerst de stappen te ordenen die de robot moet volgen om alle onderdelen op te rapen, en kijk dan welke stappen hij moet volgen om naar het oplaadstation te gaan.",
    choices : ["Draai 90 graden links","Beweeg 50 stappen voorwaarts","Draai 270 graden rechts","Beweeg 50 stappen voorwaarts","Draai 45 graden links", "Draai 45 graden rechts", "Draai 270 graden links", "Beweeg 100 stappen voorwaarts", "Draai 270 graden links"],
    correctOrder : ["Beweeg 50 stappen voorwaarts","Draai 270 graden links","Beweeg 100 stappen voorwaarts","Draai 270 graden links", "Beweeg 50 stappen voorwaarts"],
    fb1: "Goed gedaan, check altijd eerst of de robot in de juiste richting staat voordat je hem stappen laat zetten.",
}

let pathFinding4 = {
    title:"Juiste pad vinden",
    text:["Deze robot heeft een lage batterij en moet naar het oplaadstation bewegen, maar eerst moet hij de onderdelen",
    "die hij heeft laten vallen weer gaan oprapen. Sleep de stappen die de robot moet volgen in de juiste volgorde.",
    "De robot is oorspronkelijk naar rechts geörienteerd.",
    "Gebruik zo weinig mogelijk blokken.",],
    image:"images/pathfinding4.png",
    type : "C",
    diff : 3,
    hint: "Probeer eerst de stappen te ordenen die de robot moet volgen om alle onderdelen op te rapen, en kijk dan welke stappen hij moet volgen om naar het oplaadstation te gaan.",
    choices : ["Draai 90 graden links", "Draai 135 graden rechts","Beweeg 50 stappen voorwaarts","Beweeg 50 stappen voorwaarts", "Draai 45 graden links", "Beweeg 100 stappen voorwaarts", "Draai 45 graden rechts", "Beweeg 100 stappen voorwaarts", "Draai 90 graden rechts","Draai 135 graden links", "Beweeg 100 stappen voorwaarts", "Draai 180 graden"],
    correctOrder : ["Beweeg 50 stappen voorwaarts","Draai 135 graden rechts","Beweeg 100 stappen voorwaarts","Draai 90 graden rechts", "Beweeg 100 stappen voorwaarts", "Draai 90 graden links", "Beweeg 100 stappen voorwaarts"],
    fb1: "Goed gedaan, check altijd eerst of de robot in de juiste richting staat voordat je hem stappen laat zetten.",
}

//algoExercises.push(encryptedText1);
//algoExercises.push(encryptedText2);
//algoExercises.push(encryptedText3);
//algoExercises.push(encryptedText4);
//algoExercises.push(encryptedText5);
//algoExercises.push(encryptedText6);
//algoExercises.push(encryptedText7);
//algoExercises.push(mapping1);
//algoExercises.push(mapping2);
//algoExercises.push(mapping3);
//algoExercises.push(mapping4);
//algoExercises.push(mapping5);
//algoExercises.push(mapping6);
//algoExercises.push(mapping7);
//algoExercises.push(filter1);
//algoExercises.push(filter2);
algoExercises.push(followAlgorithm1);
algoExercises.push(followAlgorithm2);
algoExercises.push(followAlgorithm3);
algoExercises.push(followAlgorithm4);
//algoExercises.push(ballsAndDrawers); patroonherkenning, niet algoritmisch denken
algoExercises.push(runningRace);
//algoExercises.push(randomNumberGenerator);
//algoExercises.push(randomNumberGenerator2);
algoExercises.push(blueCar);
algoExercises.push(getGivenNumber1);
algoExercises.push(sortTheNumbers1);
algoExercises.push(sortTheNumbers2);
algoExercises.push(sortTheNumbers3);
algoExercises.push(frogAndFlies);
algoExercises.push(racersDilemma);
algoExercises.push(racersDilemma2);
algoExercises.push(equivalentStatement);
algoExercises.push(minimalGraph);
algoExercises.push(soccerGame);
algoExercises.push(pathFinding);
algoExercises.push(pathFinding2);
algoExercises.push(pathFinding3);
algoExercises.push(pathFinding4);