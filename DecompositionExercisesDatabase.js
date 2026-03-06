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
    title:"The naughty kittens",
    text:["You are the owner of a pet shop and you need to put 5 naughty little kittens called",
        "Tommy, Celie, Johny, Mali and Daniel to sleep, but it won't be easy as they are very naughty.",
        "From days of observation you have noticed the following:",
        "Celie will only sleep if Daniel sleeps.",
        "If Daniel don't sleep, no kitten will ever sleep.",
        "Johny will only sleep if Tommy sleeps.",
        "Mali will only sleep if every kitten whose name comes before its name alphabetically sleeps.",
        "Tommy will only sleep if Celie sleeps.",
        "In what order do you have to put the kittens asleep? "],
    type : "C",
    diff : 1,
    choices : ["Celie","Daniel","Johny","Mali","Tommy"],
    correctOrder : ["Daniel","Celie","Tommy","Johny","Mali",],
}

let machinesInFactory = {
    title:"Machines in the factory",
    text:["Inside a factory there are 6 machines A,B,C,D,E and F that must be started. But some machines can only be started if ",
        "others has already been started up.",
        "C can be started up right away.",
        "F can be started only if C has started.",
        "B can be started only if A and D has started.",
        "D can be started only if F and E has started.",
        "E can be started only if A has started.",
        "A can be started only if F has started.",
        "In what order do the machines have to be started?"],
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
    choices : ["6","33","141","41","120","32","9","81","0"],
    correctOrder : ["0","120","41","32","141","6","33","81","9"]
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
    title:"Words inside scrambled text",
    text:["Study this mess of letters below carefully.",
        "lndbgdeuerru",
        "Please list the 3 words (they are all colors) that are part of this mess of letters alphabetically from left to right.",
        "Use a single space to separate the words and don't use capitals.",
        ""],
    type : "B",
    diff : 1,
    correctAnswer : "blue green red"
}

let FindWordsInSrcambledText2 = {
    title:"Words inside scrambled text",
    text:["Study this mess of letters below carefully.",
        "nysoe",
        "Please list the 2 words that are part of this mess of letters alphabetically from left to right.",
        "Use a single space to separate the words and don't use capitals.",
        ""],
    type : "B",
    diff : 0,
    correctAnswer : "no yes"
}

let FindWordsInSrcambledText3 = {
    title:"Words inside scrambled text",
    text:["Study this mess of letters below carefully.",
        "iotopdcwagcg",
        "Please list the 4 words (they are all animals) that are part of this mess of letters alphabetically from left to right.",
        "Use a single space to separate the words and don't use capitals.",
        ""],
    type : "B",
    diff : 1,
    correctAnswer : "cat cow dog pig"
}

let FindWordsInSrcambledText4 = {
    title:"Words inside scrambled text",
    text:["Study this mess of letters below carefully.",
        "yeonteraonosaehfde",
        "Please list the 5 words (they are all body parts) that are part of this mess of letters alphabetically from left to right.",
        "Use a single space to separate the words and don't use capitals.",
        ""],
    type : "B",
    diff : 2,
    correctAnswer : "ear eye foot hand nose"
}

let FindWordsInSrcambledText5 = {
    title:"Words inside scrambled text",
    text:["Study this mess of letters below carefully.",
        "omousnn",
        "Please list the 2 words (they are in our skies) that are part of this mess of letters alphabetically from left to right.",
        "Use a single space to separate the words and don't use capitals.",
        ""],
    type : "B",
    diff : 2,
    correctAnswer : ""
}

let FindWordsInSrcambledText6 = {
    title:"Words inside scrambled text",
    text:["Study this mess of letters below carefully.",
        "rsnlnuFrGcnaDgtciheEmheh",
        "Please list the 4 words (they are names of languages) that are part of this mess of letters alphabetically from left to right.",
        "Use a single space to separate the words and don't use capitals.",
        ""],
    type : "B",
    diff : 3,
    hint: "Look at the capital letters for some clue.",
    correctAnswer : "Dutch English French German"
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

decExercises.push(birthdayParty);
decExercises.push(pocketLampProblem);
decExercises.push(naughtyKittens);
decExercises.push(machinesInFactory);
decExercises.push(farmerWolfGoatCabbage);
decExercises.push(sortTheNumbers1);
decExercises.push(sortTheNumbers2);
decExercises.push(cannibalsAndMissionaries);
decExercises.push(numberOfWaysToReachSum)
decExercises.push(stoneGame);
decExercises.push(FindWordsInSrcambledText);
decExercises.push(FindWordsInSrcambledText2);
decExercises.push(FindWordsInSrcambledText3);
decExercises.push(FindWordsInSrcambledText4);
decExercises.push(FindWordsInSrcambledText5);
decExercises.push(FindWordsInSrcambledText6);