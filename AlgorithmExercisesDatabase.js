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
    "Wat is het resultaat als we dit proces 2 keer herhalen?",],
    type : "B",
    diff:2,
    correctAnswer : "ACBCCB ACBCCB ACBCCB ACBCCB",
}

let followAlgorithm3 = {
    title:"Volg het algoritme",
    text:["Stel dat we beginnen met 4, dan voeren we de volgende stappen uit:",
"1) Zolang het getal niet deelbaar is door 5, tel er 3 bij op.",
"2) Vervang het getal door het kleinste priemgetal dat groter is dan het getal.",
    "Wat is het resultaat als we dit proces 4 keer herhalen?"],
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



algoExercises.push(encryptedText1);
algoExercises.push(encryptedText2);
algoExercises.push(encryptedText3);
algoExercises.push(encryptedText4);
algoExercises.push(encryptedText5);
algoExercises.push(encryptedText6);
algoExercises.push(mapping1);
algoExercises.push(mapping2);
algoExercises.push(mapping3);
algoExercises.push(mapping4);
algoExercises.push(mapping5);
algoExercises.push(mapping6);
algoExercises.push(mapping7);
algoExercises.push(filter1);
algoExercises.push(filter2);
algoExercises.push(followAlgorithm1);
algoExercises.push(followAlgorithm2);
algoExercises.push(followAlgorithm3);
algoExercises.push(followAlgorithm4);
algoExercises.push(ballsAndDrawers);
algoExercises.push(runningRace);
algoExercises.push(randomNumberGenerator);
algoExercises.push(randomNumberGenerator2);
algoExercises.push(blueCar);