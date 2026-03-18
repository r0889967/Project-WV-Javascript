let birthdayParty = {
    title:"Organize a birthday party",
    text:["You want to organise a huge birthday party inside your garden. It will take you hours to prepare all the food",
        "since you want to invite a lot of your friends, you also want to keep the food as fresh as possible for the party. ",
        "Your friends don't live far from you, they will come in just a few minutes",
        "after receiving your invitations. Also your garden needs to be decorated and cleaned.",
        "What will be the most logical way to set up the party?",
    ],
    type : "C",
    diff : 0,
    choices : ["Decorate garden","Send invitations","Prepare food","Clean garden",],
    correctOrder: ["Clean garden","Decorate garden","Prepare food","Send invitations"],
}

let pocketLampProblem = {
    title:"5 persons and pocket lamp",
    text:["There are 5 persons A,B,C,D and E who need to walk over a thin log above a cliff during the dark",
        "Since it's dark, they need a pocket lamp to see, without the pocket lamp one will fall from the log and die.",
        "There is only a single pocket lamp and its batteries only lasts for 90 seconds, anyone can hold the pocket lamp.",
        "The log can only hold the weight of at most 2 persons, or else it will break. It will take A 5 seconds to cross,",
        "B 50 seconds, C 20 seconds, D 7 seconds and E 8 seconds.",
        "How can they all walk over the cliff before the battery of their pocket lamp dies? "],
    type : "A",
    diff : 2,
    choices : ["Give C lamp->B and C walk over->C returns->Give A lamp->A and D walk over->A returns->A and E walk over",
        "Give A lamp->A and B walk over->A returns->A and C walk over->A returns->A and E walk over->A returns->A and D walk over",
        "Give C lamp->B and C walk over->C returns->Give A lamp->A and E walk over->A returns->A and D walk over"],
    correctAnswers : [0,2],
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

let sortTheNumbers1 = {
    title:"Sort the numbers",
    text:["Please sort the numbers from small to big according to the following rules.",
        "1) All prime numbers are greater than all non-prime numbers.",
        "2) For prime numbers, simply sort them from small to big normally.",
        "3) For non-prime numbers, sort them from small to big according to the sum of their digits."],
    type : "C",
    diff : 2,
    choices : ["31","52","18","29","13","15","21","5","2"],
    correctOrder : ["21","15","52","18","2","5","13","29","31"]
}

let sortTheNumbers2 = {
    title:"Sort the numbers",
    text:["Please sort the numbers from small to big according to the following rules.",
        "1) Sort the numbers according to the sum of their digits.",
        "2) For numbers with the same sum of digits, sort them according to the product of their digits.",],
    type : "C",
    diff : 1,
    hint:"Try to sort the numbers according to step 1 first.",
    choices : ["6","33","141","41","120","32","9","81"],
    correctOrder : ["120","41","32","141","6","33","81","9"]
}

let sortTheNumbers3 = {
    title:"Sort the numbers",
    text:["Please sort the numbers from small to big according to the following rules.",
        "Sort the numbers according to the sum of their digits.",],
    type : "C",
    diff : 1,
    choices : ["6","25","5000","31","111","26","9"],
    correctOrder : ["111","31","5000","6","25","26","9"]
}

let sortColorfulBalls = {
    title:"Sorteer de ballen",
    text:["In de onderstaande tekening hebben 4 dozen en ballen met verschillende kleuren.",
        "Er zitten al 2 ballen in elke doos.",
    "De ballen moeten in de juiste doos geplaatst worden.",
    "Hoeveel ballen zullen er in elke doos zijn als alle ballen zijn opgeruimd?",
    "Begin met jouw antwoord eerst met de hoeveelheid ballen in de eerste doos links."],
    image:"images/4 dozen en ballen.png",
    type: "B",
    diff : 1,
    correctAnswer : "7 4 5 9"
}

let numberOfWaysToReachSum = {
    title:"Number of ways to reach sum",
    text:["Suppose we have coins of values of 1, 2, 5 and 10.",
        "How many ways are there to reach 20?"],
    type : "B",
    diff : 4,
    hint : "Try to first calculate how many ways there are to make 1,2,3,4 or 5 and work you way step by step up.",
    correctAnswer : "40"
}

let stoneGame = {
    title:"Stone Game",
    text:["Alice and Bob are playing a game where there are a number of stones placed on a table.",
        "Both player take turns to take 1, 2 or 3 stones away from the table, the player that takes away",
        "the last stone will lose the game.",
        "Assuming 7 stones at the start, both player play optimally and Alice plays first, how many stones should Alice take away",
        "on her first turn so she can win 100%."],
    type:"A",
    diff:3,
    hint:"You want there to be only 1 stone left on Bob's turn.",
    choices:["1 stone","2 stones","3 stones","There is no way Alice can win 100%."],
    correctAnswers : [1]
}

let FindWordsInSrcambledText = {
    title:"Woorden in letterpuin",
    text:["Kijk aandachtig naar onderstaande puin van letters.",
        "urberdoaowolgn",
        "Find de 3 woorden (ze zijn allemaal kleuren) die je met de letters in de puin kan spellen.",
        "Vul de woorden in alfabetische volgorde, zet exact 1 spatie tussen de woorden en gebruik geen hoofdletters.",
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
        "Vul de woorden in alfabetische volgorde, zet exact 1 spatie tussen de woorden en gebruik geen hoofdletters.",
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
        "Vul de woorden in alfabetische volgorde, zet exact 1 spatie tussen de woorden en gebruik geen hoofdletters.",
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
        "Vul de woorden in alfabetische volgorde, zet exact 1 spatie tussen de woorden en gebruik geen hoofdletters.",
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
        "Vul de woorden in alfabetische volgorde, zet exact 1 spatie tussen de woorden en gebruik geen hoofdletters.",
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
        "Vul de woorden in alfabetische volgorde, zet exact 1 spatie tussen de woorden en gebruik geen hoofdletters.",
        ""],
    type : "B",
    diff : 2,
    hint: "Kijk aandachtig naar de hoofdletters in de puin van letters.",
    correctAnswer : "Duits Engels Frans"
}

let farmerWolfGoatCabbage = {
    title:"Farmer wolf goat cabbage",
    text:["A farmer(F), wolf(W), goat(G) and cabbage(C) have to cross over a river by boat.",
        "The boat can only hold the weight of at most 2 characters.",
        "Only the farmer can steer the boat.",
        "The wolf will eat the goat if left alone.",
        "The goat will eat the cabbage if left alone.",
        "How can the farmer and his belongings cross over the river without losing something?"],
    type : "C",
    diff:3,
    choices:["F take C across","F take W across","F take G across","F returns alone",
        "F returns alone","F take G across","F returns with G","F returns with W","F returns with C"],
    correctOrder:["F take G across","F returns alone","F take W across","F returns with G",
        "F take C across","F returns alone","F take G across",]
}

let cannibalsAndMissionaries = {
    title:"Cannibals and missionaries",
    text:["3 Cannibals(C) and 3 missionaries(M) have to cross over a river by boat.",
        "The boat can only hold the weight of at most 2 characters.",
        "If there are more cannibals than missionaries on either bank, the missionaries are eaten.",
        "How can all 3 missionaries and all 3 cannibals cross over without any missionaries being eaten?",],
    type:"C",
    diff:4,
    choices:["2C go cross","2M go cross","1C returns","2C go cross","1C returns","2C go cross","2C go cross",
        "1C returns","1C returns","2M go cross","1M and 1C return"],
    correctOrder:["2C go cross","1C returns","2C go cross","1C returns","2M go cross","1M and 1C return",
        "2M go cross","1C returns","2C go cross","1C returns","2C go cross"]
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
    correctAnswer : "0"
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

decExercises.push(birthdayParty);
decExercises.push(pocketLampProblem);
decExercises.push(naughtyKittens);
decExercises.push(machinesInFactory);
decExercises.push(farmerWolfGoatCabbage);
decExercises.push(sortTheNumbers1);
decExercises.push(sortTheNumbers2);
decExercises.push(sortTheNumbers3);
decExercises.push(sortColorfulBalls);
decExercises.push(cannibalsAndMissionaries);
decExercises.push(numberOfWaysToReachSum)
decExercises.push(stoneGame);
decExercises.push(FindWordsInSrcambledText);
decExercises.push(FindWordsInSrcambledText2);
decExercises.push(FindWordsInSrcambledText3);
decExercises.push(FindWordsInSrcambledText4);
decExercises.push(FindWordsInSrcambledText5);
decExercises.push(FindWordsInSrcambledText6);
decExercises.push(guessSecretNumber);
decExercises.push(guessSecretNumber2);
decExercises.push(guessSecretNumber3);
decExercises.push(guessSecretNumber4);