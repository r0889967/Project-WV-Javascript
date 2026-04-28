let nextNumberInSeq = {
    title: "Volgend element in de reeks",
    text : ["Gegeven de onderstaande reeks:",
        "2, 5, 10, 17, 28, 41, 58, 77, 100, 129, ?",
        "Wat is het volgende element in de reeks?"],
    type:"B",
    diff : 3,
    hint: "Het heeft iets met priemgetallen te maken.",
    correctAnswer : "160",
    fb1: "De verschillen tussen de opeenvolgende elementen in de reeks zijn de opeenvolgende priemgetallen.",
    fb2: "De laatste stap was +29, dus de volgende stap is +31, want dat is het priemgetal dat volgt op 29."
}

let nextNumberInSeq2 = {
    title: "Volgend element in de reeks",
    text:["Gegeven de onderstaande reeks:",
        "5738, 121011, 33112, 6423, 1065, ?",
        "Wat is het volgende element in de reeks?"],
    type:"B",
    diff : 2,
    hint : "Kijk wat je kan doen met de afzonderlijke cijfers van elk element in de reeks.",
    correctAnswer : "1611",
    fb1: "We leggen het patroon uit met behulp van de eerste overgang (5738 -> 121011): 5 + 7 = 12, 7 + 3 = 10, 3 + 8 = 11. Dus we krijgen 12, 10 en 11, wat samen 121011 vormt.",
}

let nextNumberInSeq3 = {
    title: "Volgende element in reeks",
    text:["Gegeven onderstaande reeks.",
        "27, 9279, 27927927, ?",
        "Wat is het volgende element in de reeks?"],
    type:"B",
    diff : 1,
    correctAnswer : "812792792781",
}

let nextNumberInSeq4 = {
    title: "Volgende element in reeks",
    text:["Gegeven onderstaande reeks.",
        "0,1,1,2,3,5,8,13,21,34,? ",
        "Wat is het volgende element in de reeks?"],
    type:"B",
    diff : 0,
    hint: "Het is mogelijk dat je de twee voorafgaande elementen nodig hebt in plaats van één om het volgende te vinden.",
    correctAnswer : "55",
    fb1: "Deze reeks staat bekend als de Fibonacci-reeks, waarbij elk element de som is van de twee voorafgaande elementen."
}

let nextNumberInSeq5 = {
    title: "Volgende element in reeks",
    text:["Gegeven onderstaande reeks.",
        "2,4,6,18,21,84,88,? ",
        "Wat is het volgende element in de reeks?"],
    type:"B",
    diff : 0,
    hint: "Je ziet grote en kleine sprongen, het is dus mogelijk dat er twee verschillende bewerkingen zijn die worden afgewisseld.",
    correctAnswer : "440",
    fb1: "De bewerkingen gaan als volgt: *2, +2, *3, +3, *4, +4, *5, +5, ... Dus het volgende element is 88 * 5 = 440."
}

let nextNumberInSeq6 = {
    title: "Volgende element in reeks",
    text:["Gegeven onderstaande reeks.",
        "2,3,5,7,11,13,17,19,23,29,31,?",
        "Wat is het volgende element in de reeks?"],
    type:"B",
    diff : 1,
    hint: "Deze reeks gaat minder over de bewerkingen tussen de elementen, maar meer over de aard van de elementen zelf.",
    correctAnswer : "37",
    fb1: "Deze reeks bestaat uit de opeenvolgende priemgetallen. Het volgende priemgetal na 31 is 37."
}

let nextNumberInSeq7 = {
    title: "Volgende element in reeks",
    text:["Gegeven onderstaande reeks.",
        "11,121,1331,14641,15101051,?",
        "Wat is het volgende element in de reeks?"],
    type:"B",
    diff : 2,
    correctAnswer : "1615201561",
    fb1: "Deze reeks maakt gebruik van de getallen in de driehoek van Pascal, maar de elementen worden aan elkaar geplakt."
}

let nextNumberInSeq8 = {
    title: "Volgende element in reeks",
    text:["Gegeven onderstaande reeks.",
        "2,6,12,20,30,42,56,72,90,110,?",
        "Wat is het volgende element in de reeks?"],
    type:"B",
    diff : 2,
    hint: "Zie je ook een verandering in de bewerking die wordt uitgevoerd?",
    correctAnswer : "132",
    fb1: "Het getal dat wordt bijgeteld neemt steeds met 2 toe: +4, +6, +8, +10, +12, +14, +16, +18, +20, +22, ..."
}


let nextStrInSeq = {
    title: "Volgende element in reeks",
    text:["Gegeven onderstaande reeks.",
        "a, abb, cccabb, cccabbdddd, eeeeecccabbdddd, ?",
        "Wat is het volgende element in de reeks?",],
    type:"B",
    diff:1,
    correctAnswer : "eeeeecccabbddddffffff",
    fb1: "Het aantal keer dat een letter wordt toegevoegd is steeds de plaats waarin ze in het alfabet staat (bijvoorbeeld, b staat op de tweede plaats, dus wordt twee keer toegevoegd.)",
    fb2: "Ook worden ze afwisselend vooraan en achteraan toegevoegd."
}

let nextStrInSeq2 = {
    title: "Volgende element in reeks",
    text:["Gegeven onderstaande reeks.",
        "a, ab, adad, ahahahah, ?",
        "Wat is het volgende element in de reeks?",],
    type:"B",
    diff:2,
    correctAnswer : "apapapapapapapap",
}

let nextStrInSeq3 = {
    title: "Volgende element in reeks",
    text:["Gegeven onderstaande reeks.",
        "a, bab, ccbabcc, dddccbabccddd, ?",
        "Wat is het volgende element in de reeks?",],
    type:"B",
    diff:0,
    correctAnswer : "eeeedddccbabccdddeeee",
}

let nextStrInSeq4 = {
    title: "Volgende element in reeks",
    text:["Gegeven onderstaande reeks.",
        "a, e, i, o, ?",
        "Wat is het volgende element in de reeks?",],
    type:"B",
    diff:0,
    correctAnswer : "u",
}

let nextStrInSeq5 = {
    title: "Volgende element in reeks",
    text:["Gegeven onderstaande reeks.",
        "a,aabb,aaabbbccc,aaaabbbbccccdddd,?",
        "Wat is het volgende element in de reeks?",],
    type:"B",
    diff:1,
    correctAnswer : "aaaaabbbbbcccccdddddeeeee",
}

let missingStrInSeq1 = {
    title: "Missende elementen in reeks",
    text:["Gegeven onderstaande reeks.",
        "a, 11, e, 22, i, 33, o, ?, ?, 55",
        "Wat zijn de missende elementen in de reeks?",],
    type:"B",
    diff:0,
    correctAnswer : "44 u",
}

let missingStrInSeq2 = {
    title: "Missende elementen in reeks",
    text:["Gegeven onderstaande reeks.",
        "a, b, a, b, c, a, b, ?, ?, a, b, ?, d, e",
        "Wat zijn de missende elementen in de reeks?",],
    type:"B",
    diff:1,
    correctAnswer : "c d c",
}

let missingNumberInSeq1 = {
    title: "Missende elementen in reeks",
    text:["Gegeven onderstaande reeks.",
        "1,?,333,?,?,666666,7777777",
        "Wat zijn de missende elementen in de reeks?",],
    type:"B",
    diff:0,
    correctAnswer : "22 4444 55555",
}

let missingNumberInSeq2 = {
    title: "Missende elementen in reeks",
    text:["Gegeven onderstaande reeks.",
        "3000,?,1000,750,600,?",
        "Wat zijn de missende elementen in de reeks?",],
    type:"B",
    diff:2,
    hint:"Think of division.",
    correctAnswer : "1500 500",
}

let missingNumberInSeq3 = {
    title: "Missende elementen in reeks",
    text:["Gegeven onderstaande reeks.",
        "1,3,6,?,?,?,28,36,45",
        "Wat zijn de missende elementen in de reeks?",],
    type:"B",
    diff:0,
    correctAnswer : "10 15 21",
}

let missingNumberInSeq4 = {
    title: "Missende elementen in reeks",
    text:["Gegeven onderstaande reeks.",
        "1,?,20,3,?,300,4,40,400,4000,?,?",
        "Wat zijn de missende elementen in de reeks?",],
    type:"B",
    diff:1,
    correctAnswer : "2 30 5 50",
}

let missingNumberInSeq5 = {
    title: "Missende elementen in reeks",
    text:["Gegeven onderstaande reeks.",
        "1,?,5,10,20,50,100,?,?,?",
        "Wat zijn de missende elementen in de reeks?",],
    type:"B",
    diff:2,
    correctAnswer : "2 200 500 1000",
}

let missingNumberInSeq6 = {
    title: "Missende elementen in reeks",
    text:["Gegeven onderstaande reeks.",
        "0,?,0,1,2,?,?,?,2,3,2,1,0,1,2,?,?,3,2,1,0",
        "Wat zijn de missende elementen in de reeks?",],
    type:"B",
    diff:3,
    correctAnswer : "1 1 0 1 3 4",
}

let findPatternSeq1 = {
    title: "Vind reeks(en) met patronen",
    text:["Kijk aandachtig naar onderstaande reeksen.",
        "Welke reeks(en) hebben een duidelijk patroon?"],
    type:"A",
    diff:2,
    choices: ["1,123,12345,1234567,123456789","1,10,101,1001,10010,100101,1001011","1,2,4,8,17,33,64,128,256,513","1,10,5,2,11,6,3,12,7,4",
        "1,12,412,4128,164128,16412832","1,8,56,2,7,5,3,9,12,200","1,20,300,4000,50001,600000,7000000"],
    correctAnswers : [0,3,4],
}

let findPatternSeq2 = {
    title: "Vind reeks(en) met patronen",
    text:["Kijk aandachtig naar onderstaande reeksen.",
        "Welke reeks(en) hebben een duidelijk patroon?"],
    type:"A",
    diff:1,
    choices: ["1,5,10,50,100,500","1,5,10,15,150,500","1,15,50,100,115,150","1,10,15,50,115,155",
        "1,15,10,150,100,1500"],
    correctAnswers : [0,2,4],
}

let findPatternSeq3 = {
    title: "Vind reeks(en) met patronen",
    text:["Kijk aandachtig naar onderstaande reeksen.",
        "Welke reeks(en) hebben een duidelijk patroon?"],
    type:"A",
    diff:1,
    choices: ["1,3,5,7,9,11,13,15","1,5,9,13,17,21,25,29","3,5,7,10,11,13,15,17","1,13,135,1357,13579",
        "1,33,555,7677,99999","5,9,14,17,21,25,29"],
    correctAnswers : [0,1,3],
}

let findPatternSeq4 = {
    title: "Vind reeks(en) met patronen",
    text:["Kijk aandachtig naar onderstaande reeksen.",
        "Welke reeks(en) hebben een duidelijk patroon?"],
    type:"A",
    diff:0,
    choices: ["1,-1,-1,1,-1,1,-1,1,-1,1,-1","1,-1,1,-1,-1,1,-1,-1,-1,1","-1,1,-1,1,-1,1,-1","1,1,-1,-1,1,1,-1,-1,1,1,1",
        "1,-1,1,-1,1,-1,1,-1,1","-1,-1,1,-1,-1,-1,-1,-1,-1","1,1,1,1,1,1,1,1,1,1"],
    correctAnswers : [1,2,4,6],
}

let findPatternSeq5 = {
    title: "Vind reeks(en) met patronen",
    text:["Kijk aandachtig naar onderstaande reeksen.",
        "Welke reeks(en) hebben een duidelijkpatroon?"],
    type:"A",
    diff:3,
    choices: ["3,5,9,17,33,65,128,257","2,4,8,16,32,64,128,256","2,8,16,64,256,1024,4096","2,5,8,17,32,65,128,257",
        "15,25,45,85,165,325,645","2,4,9,17,32,64,128,257","6,12,24,48,96,193,384,768"],
    correctAnswers : [1,2,3,4],
    fb1: "De tweede reeks: *2 bij elke stap, de derde reeks: *4 bij elke stap, de vierde reeks: *2 + 1 en *2 - 2 om de beurt, de vijfde reeks: optelstap verdubbelt bij elke stap, beginnende met 10"
}

let findPatternSeq6 = {
    title: "Vind reeks(en) met patronen",
    text : ["Kijk aandachtig naar onderstaande reeksen.",
        "Welke reeks(en) hebben een patroon?"],
    type:"A",
    diff:0,
    choices : ["1,0,2,3,3,0,4","1,0,2,0,2,3,0,4,0","1,0,0,2,0,0,3,0,0,4","1,0,2,0,0,3,0,0,0","1,0,0,2,0,3,0,4,0,0,0",
    "1,0,0,0,2,0,0,3,0","1,2,2,0,3,4,4,0","1,0,0,0,0,0,0,2,0,0"],
    correctAnswers : [2,3,5,6]
}

let findNonPatternSeq1 = {
    title: "Vind reeks(en) zonder patronen",
    text:["Kijk aandachtig naar onderstaande reeksen.",
        "Welke reeks(en) hebben geen patroon?"],
    type:"A",
    diff:1,
    choices: ["1,2,0,3,-1,4,-2,5,-3","1,2,6,24,48,144,576,1152,3456","1,6,7,9,16,17,19,27,29,31",
        "1,3,6,10,15,21,28,36,45","1,121,1331,14441,155551,1666661","1,15,10,115,110,155,150,515,510","1,4,14,414,14414,41414414"],
    correctAnswers : [2,5],
}

let findNonPatternSeq2 = {
    title: "Vind reeks(en) zonder patronen",
    text:["Kijk aandachtig naar onderstaande reeksen.",
        "Welke reeks(en) hebben geen patroon?"],
    type:"A",
    diff:2,
    choices:["a,ab,abe,abec,abeci,abecid,abecido","abab,cbcb,cdcd,eded,efef,gfgf","a,bbbb,cc,ddddddd,eeee,fffff,gggggg","a,bab,cbabc,dcbabcd,dcbabcdee",
        "aaa,aab,abb,bbb,bbc,bcc,ccc,ccd","a,b,c,d,e,f,g,h,j,i,k,l,n,m","a,aa,aaa,aaaa,aaaaa,aaaaaa","a,ab,abc,d,de,def,g,gh,ghi"],
    correctAnswers : [2,3,5],
}


let redBlueCircles = {
    title:"Rode en blauwe cirkels",
    text:["Gegeven onderstaande tekening, er staan blauwe en rode cirkels.",
    "De cirkels zou een patroon moeten vormen, maar sommige cirkels zijn verkeerd gekleurd.",
    "Welke cirkels zijn verkeerd gekleurd?", 
    "Geef de nummers van alle verkeerd gekleurde cirkels en zet ze in volgorde van klein naar groot met een spatie tussen de nummers."],
    image: "images/rood blauw cirkels.png",
    type:"B",
    diff: 4,
    hint:"Probeer eerst het juiste patroon te herkennen. ",
    correctAnswer: "7 11 20 24",
    fb2:"Kijk naar het aantal blauwe cirkels tussen opeenvolgende rode cirkels, probeer de patroon te vinden!"
}

let ballsAndDrawers = {
    title:"Ballen en schotels",
    text:["Sarah wil haar ballen in haar lades leggen, dus doet ze het volgende.",
        "Ze legt de eerste bal in de blauwe schotel, de tweede bal in de rode schotel,",
        "de derde bal in de groene schotel en de vierde bal in de gele schotel.",
        "Nadat ze de vierde bal heeft opgeborgen, herhaalt ze de bovenstaande cyclus.",
        "In welke schotel legt Sarah bal nummer 35?"],
    type : "A",
    diff:1,
    choices:["blauw","rood","groen","geel"],
    correctAnswers : [2]
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

patExercises.push(nextNumberInSeq);
patExercises.push(nextNumberInSeq2);
//patExercises.push(nextNumberInSeq3); Kan te veel opties hebben
patExercises.push(nextNumberInSeq4);
patExercises.push(nextNumberInSeq5);
patExercises.push(nextNumberInSeq6);
//patExercises.push(nextNumberInSeq7); Te moeilijk, leerlingen kennen de driehoek van Pascal waarschijnlijk niet
patExercises.push(nextNumberInSeq8);
patExercises.push(nextStrInSeq);
patExercises.push(nextStrInSeq2);
patExercises.push(nextStrInSeq3);
//patExercises.push(nextStrInSeq4);
//patExercises.push(nextStrInSeq5);
//patExercises.push(missingStrInSeq1);
//patExercises.push(missingStrInSeq2);
//patExercises.push(missingNumberInSeq1);
//patExercises.push(missingNumberInSeq2);
//patExercises.push(missingNumberInSeq3);
//patExercises.push(missingNumberInSeq4);
//patExercises.push(missingNumberInSeq5);
//patExercises.push(missingNumberInSeq6);
patExercises.push(findPatternSeq1);
patExercises.push(findPatternSeq2);
patExercises.push(findPatternSeq3);
//patExercises.push(findPatternSeq4);
patExercises.push(findPatternSeq5);
//patExercises.push(findPatternSeq6);
//patExercises.push(findNonPatternSeq1);
//patExercises.push(findNonPatternSeq2);
//patExercises.push(redBlueCircles); Je hebt niet genoeg informatie om dit probleem te kunnen oplossen...
patExercises.push(ballsAndDrawers);
//patExercises.push(nonFittingWords);
//patExercises.push(nonFittingWords2);
//patExercises.push(nonFittingWords3);
//patExercises.push(nonFittingWords4);
//patExercises.push(nonFittingWords5);
//patExercises.push(nonFittingWords6);
//patExercises.push(spellWord1);
//patExercises.push(spellWord2);
//patExercises.push(spellWord3);
//patExercises.push(spellWord4);
//patExercises.push(spellWord5);
//patExercises.push(spellWord6);
//patExercises.push(spellWord7);
