let grimReaper = {
    title: "Sarah en de Grim Reaper",
    text:["De Grim Reaper kwam naar Sarah, maar sarah wou nog niet dood gaan, dus zij vroeg de Grim Reaper",
        "om haar langer te laten leven door een kaars op te steken en zei 'Laat mij leven tot deze kaars opgebrand is.'",
        "De Grim Reaper zei ja en ging weg. Sarah bloos de kaars onmiddelijk uit nadat Grim Reaper weg is.",
        "Zelfs na vele jaren is het Grim reaper niet teruggekomen om haar leven te nemen.",
        "Hoe heeft Sarah ontsnapt aan de dood?"],
    type : "A",
    diff : 0,
    choices : ["Grim Reaper wil wegblijven van kaarsen.","Grim Reaper wil gewoon dat Sarah voor eeuwig leeft.","Grim Reaper was bang om terug te komen.",
        "Grim Reaper heeft nog de kaars zien opbranden.","Grim Reaper heeft Sarah vergeten.","Grim Reaper is dood."],
    correctAnswers : [3],
}

let racersDilemma = {
    title: "Racers dilemma",
    text:["We hebben 6 racers A, B, C, D, E en F.",
        "A rent sneller dan B, B rent sneller dan C, C rent sneller dan D, D rent sneller dan E,",
        "E rent sneller dan F, F rent sneller dan A.",
        "Wie rent het snelste?"],
    type: "A",
    diff : 1,
    choices : ["A","B","C","D","E","F","Alle racers zijn even snel.","Er is een contradictie."],
    correctAnswers : [7],
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
}

let manAndSnail = {
    title:"The man and the snail",
    text:["An confident man and a snail decided to have a very long race, the one who reaches the finish first wins.",
        "When the race started, the man was already gone while the snail was just crawling slowly.",
        "The man was very confident that he will win but once he reaches the finish, the snail was already there.",
        "The man couldn't believe that he lost.",
        "What are the possible and logical causes that made the slow snail beat the fast man?"],
    type : "A",
    diff : 2,
    hint: "By logical, we mean all reasons that can possibly happen in reality.",
    choices : ["The snail was a super-snail that can go very fast.","The man decided to sleep for many hours during the race, allowing the snail to win.",
        "The snail had asked an identical looking snail to stand at the finish line beforehand.","The snail had learned to teleport.","The man might had faced some unforeseen circumstances during the race, causing him to lose."],
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
        "I neem mijn paraplu alleen als het regent.","Zowel neem ik mijn paraplu, of het regent niet.",],
    correctAnswers : [3,5],
}

let spellWord1 ={
    title:"Spel het woord",
    text:["De letters zijn door elkaar, rangschik de letters om het woord te vormen.",],
    type : "C",
    diff : 1,
    choices : ["O","L","E","W","L","Y"],
    correctOrder : ["Y","E","L","L","O","W"],
}

let spellWord2 ={
    title:"Spel het woord",
    text:["De letters zijn door elkaar, rangschik de letters om het woord te vormen.",],
    type : "C",
    diff : 2,
    choices : ["N","V","I","T","U","R","E","S","I","Y"],
    correctOrder : ["U","N","I","V","E","R","S","I","T","Y"],
}

let spellWord3 ={
    title:"Spel het woord",
    text:["De letters zijn door elkaar, rangschik de letters om het woord te vormen.",],
    type : "C",
    diff : 2,
    choices : ["W","R","B","T","A","R","E","S","R","Y"],
    correctOrder : ["S","T","R","A","W","B","E","R","R","Y"],
}

let spellWord4 ={
    title:"Spel het woord",
    text:["De letters zijn door elkaar, rangschik de letters om het woord te vormen.",],
    type : "C",
    diff : 0,
    choices : ["H","R","E","T","E"],
    correctOrder : ["T","H","R","E","E"],
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
    diff : 1,
    choices : ["G","L","E","G","A","A","N","U"],
    correctOrder : ["L","A","N","G","U","A","G","E"],
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
    hint:"Moet je zelfs een antwoord geven op dee vraag?",
    correctAnswers : [],
}

let questionWithNoAnswer2 = {
    title:"Gekke vraag",
    text:["Wat is het antwoord van een vraag die 'Geen antwoord' als antwoord heeft?"],
    type:"A",
    diff:1,
    choices : ["Ik weet niet.","Geen antwoord.","Neen!","Dit is dom.",".........","Vermoord mij!","Alleen God weet het."],
    hint:"Waarom zijn er aanhalingstekens rond Geen antwoord?",
    correctAnswers : [1],
}

let largeProduct = {
    title:"Gekke vraag",
    text:["Bereken 1x2x3x4x5x6x7x8x9x10x11x12x13x14x15x16x17x18x19x0x20x21x22x23x24x25x26x27x28x29x30="],
    type:"B",
    diff:1,
    hint:"Als je dit probeert te berekenen, dan ben je tijd aan het verspillen.",
    correctAnswer : "0"
}

let mountEverest = {
    title:"Gekke vraag",
    text:["Wat was de hoogste berg op Aarde voordat Mount Everest ontdekt wordt?"],
    type:"A",
    diff:0,
    choices : ["Mount Fuji","Mount blanc","Mount Kilimanjaro","K2","Mount Elbrus","Mount Everest","Chogolisa","Annapurna"],
    hint:"Omdat je iets niet ontdekt heeft, betekent niet dat het niet bestaat.",
    correctAnswers:[5]
}

let prisonerAnd2Doors = {
    title:"Prisoner and 2 doors",
    text:["A prisoner is standing in front of 2 doors, there is a guard standing next to each door.",
        "One door will lead to freedom and one door will lead to death.",
        "One guard always tells the truth and one guard always lies.",
        "The prisoner doesn't know anything about the doors or guards.",
        "The prisoner is given a chance to ask one of the guards one question.",
        "What question should the prisoner ask to know 100% which door leads to freedom?"],
    type:"A",
    diff : 2,
    hint:"Try to think on how you can get information of both doors with one question.",
    choices:["Does door 1 lead to freedom?","Does door 2 lead to freedom?","Does door 1 lead to death?",
        "Does door 2 lead to death?","Which door leads to freedom?","Which door leads to death?",
        "What will the other guard say about which door leads to freedom?"],
    correctAnswers : [6],
}

let reluctantStoryElements = {
    title:"Reluctant story elements",
    text:["Sarah had lost her 4 balls while she was playing outside yesterday so she decided to for look them.",
        "First she found her red ball when she fell into a hole. As she continued to look for the other balls,",
        "a random bird flew by. She soon walked deep into the forest with some creepy-looking trees.",
        "After some more walking, she finally found the yellow ball under a stone.",
        "While looking for the green ball, she came across a abandoned hut filled with many spiders.",
        "One spider suddenly jumped out of the hut and climbed onto her, causing her to panic and ran into a birch.",
        "When she hit the birch, the green ball fell from the birch and onto her head, a bear in the distance looked confused at her,",
        "wondering what was going on. She searched for the last ball, which was the blue ball. She walked across a pond,",
        "eventually stopping at the foot of a hill, where she found the blue ball and walked back home.",
        "What elements in the story are reluctant?"],
    type : "A",
    diff : 2,
    hint:"Reluctant means that the element played no role in the story.",
    choices : ["hole","bird","scary trees","stone","spider","birch","bear","pond"],
    correctAnswers : [1,2,6,7],
}

let nonFittingWords = {
    title:"Woorden die niet passen",
    text:["Gegeven onderstaande woorden.",
    "Er zijn 2 woorden die niet thuishoren, duid die 2 woorden aan."],
    type:"A",
    diff : 1,
    choices : ["appel","wortel","peer","perziek","wortel","meloen","pluim","kers","aardbei"],
    correctAnswers : [1,4],
}

let nonFittingWords2 = {
    title:"Woorden die niet passen",
    text:["Gegeven onderstaande woorden.",
        "Er is een woord die niet thuishoort, duid dat woord aan."],
    type:"A",
    diff : 2,
    choices : ["aardbei","kers","banaan","appel","framboos","tomaat"],
    correctAnswers : [2],
}

let nonFittingWords3 = {
    title:"Woorden die niet passen",
    text:["Gegeven onderstaande woorden.",
        "Er zijn 2 woorden die niet thuishoren, duid die 2 woorden aan."],
    type:"A",
    diff : 2,
    hint:"Denk aan de regenboog.",
    choices : ["rood","indigo","bruin","groen","geel","zwart","blauw","violet","oranje"],
    correctAnswers : [2,5],
}

let nonFittingWords4 = {
    title:"Woorden die niet passen",
    text:["Gegeven onderstaande woorden.",
        "Er is een woord die niet thuishoort, duid dat woord aan."],
    type:"A",
    diff : 1,
    choices : ["kip","mens","penguin","vogel","varken","eend","gans"],
    correctAnswers : [4],
}

let nonFittingWords5 = {
    title:"Woorden die niet passen",
    text:["Gegeven onderstaande woorden.",
        "Er is een woord die niet thuishoort, duid dat woord aan."],
    type:"A",
    diff : 0,
    choices : ["vliegtuig","paard","auto","fiets","schip"],
    correctAnswers : [1],
}

let nonFittingWords6 = {
    title:"Woorden die niet passen",
    text:["Gegeven onderstaande woorden.",
        "Er zijn 2 woorden die niet thuishoren, duid die 2 woorden aan."],
    type:"A",
    diff : 3,
    choices : ["specht","uil","mus","pinguin","arend","valk","zwaluw","meeuw","struisvogel","duif"],
    correctAnswers : [3,8],
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
abExercises.push(reluctantStoryElements);
abExercises.push(nonFittingWords);
abExercises.push(nonFittingWords2);
abExercises.push(nonFittingWords3);
abExercises.push(nonFittingWords4);
abExercises.push(nonFittingWords5);
abExercises.push(nonFittingWords6);