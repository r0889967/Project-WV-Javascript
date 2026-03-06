let grimReaper = {
    title: "Sarah and the Grim Reaper",
    text:["The Grim Reaper has arrived to take Sarah's life, but Sarah didn't want to die yet, so she begged the Grim Reaper",
        "to let her live longer by lighting up a candle and saying 'Let me live until you see candle burns up one day.'",
        "The grim reaper agreed and left the scene. Sarah them immediately extinguished the candle by blowing at it.",
        "Surprisely, even after many years, the Grim Reaper never came again to take Sarah's life.",
        "How did Sarah escape her death? Please mark the correct box."],
    type : "A",
    diff : 0,
    choices : ["The Grim Reaper wanted to stay away from candles.","The Grim Reaper decided that Sarah can live forever.","The Grim Reaper was afraid to return to Sarah once more.",
        "The Grim Reaper never saw the candle burning up.","The Grim Reaper forgot about Sarah.","The Grim Reaper was killed by something or someone."],
    correctAnswers : [3],
}

let racersDilemma = {
    title: "Racers dilemma",
    text:["Suppose we have 6 racers called A, B, C, D, E and F.",
        "A runs faster than B, B runs faster than C, C runs faster than D, D runs faster than E,",
        "E runs faster than F, F runs faster than A.",
        "Which racer is the fastest?"],
    type: "A",
    diff : 1,
    choices : ["A","B","C","D","E","F","All racers are equally fast.","There is a contradiction."],
    correctAnswers : [7],
}

let racersDilemma2 = {
    title: "Racers dilemma",
    text:["Suppose we have 6 racers called A, B, C, D, E and F.",
        "A is at least as fast as B, B is at least as fast as C, C is at least as fast as D, D is at least as fast as E,",
        "E is at least as fast as F, F is at least as fast as A.",
        "Which racer is the fastest?"],
    type: "A",
    diff : 2,
    choices : ["A","B","C","D","E","F","All racers are equally fast.","There is a contradiction."],
    correctAnswers : [6],
}

let guessTheCardsGame = {
    title:"The card game",
    text:["Alice, Bob and Carole are playing a game called \"guess the cards\", where Alice have 3 cards in her hand and she is",
        "not allowed to show her cards directly to Bob or Carole, Alice have to try her best to give Bob hints about her",
        "cards but must be aware of Carole, who might also use the hints to know Alice's cards. After giving the hints,",
        "Bob and Carole must try to guess all of Sarah's cards. If Bob got all cards correct and Carole got at least one",
        "card wrong, Alice and Bob will win, but if Carole got all cards correct, she will win regardless of how many cards",
        "Bob got correct. Carole has sharp ears and eyes, can easily identify any subtle details, can speak all foreign ",
        "languages and she has a device to intercept and decrypt any calls and messages between Alice and Bob.",
        "What will be the best way for Alice to give hints to Bob without giving Carole too much information?"],
    type : "A",
    diff : 1,
    choices : ["Whispering to Bob, telling him the cards directly through voice.","Use fingers to depict the card's rank and suit to Bob.",
        "Speak in a foreign language with Bob so Carole can't understand.","Send secret messages to Bob through phone to avoid Carole.","None of the above mentioned methods."],
    correctAnswers : [4],
}

let whoIsTheCulprit = {
    title:"Who is the culprit?",
    text:["Sarah put a beautiful vase on a table touching the front door of her home. She then invited her friends Alice, Bob, Carole,",
        "Dilan and Eva to come and play with her inside her bedroom. The 5 friends all came rushing into her home through the",
        "front door. When night came, her friends left once again. But when Sarah woke up and went downstairs the next morning, she",
        "found her vase broken on the ground. Sarah suspect that her friends might have broken her vase yesterday by accident.",
        "Which of Sarah's friends might be the culprits?"],
    type : "A",
    diff : 1,
    hint: "All of Sarah's friends entered though the frontdoor, what could this imply?",
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
    diff : 0,
    hint: "By logical, we mean all reasons that can possibly happen in reality.",
    choices : ["The snail was a super-snail that can go very fast.","The man decided to sleep for many hours during the race, allowing the snail to win.",
        "The snail had asked an identical looking snail to stand at the finish line beforehand.","The snail had learned to teleport.","The man might had faced some unforeseen circumstances during the race, causing him to lose."],
    correctAnswers : [1,2,4],
}

let equivalentStatement = {
    title:"Equivalent statement",
    text:["Suppose we have the following statement: If it rains, then I take my umbrella.",
        "Which of the following statement(s) are equivalent with it?"],
    type:"A",
    diff : 3,
    choices:["It rains or I take my umbrella.","It rains and I take my umbrella.",
        "If it doesn't rain, then I don't take my umbrella.","If I don't take my umbrella, then it doesn't rain.",
        "I only take my umbrella if it rains.","It is either I take my umbrella or it doesn't rain.",],
    correctAnswers : [3,5],
}

let spellWord1 ={
    title:"Spell the word",
    text:["The letters are scrambled, please rearrange them to form a word.",],
    type : "C",
    diff : 1,
    choices : ["O","L","E","W","L","Y"],
    correctOrder : ["Y","E","L","L","O","W"],
}

let spellWord2 ={
    title:"Spell the word",
    text:["The letters are scrambled, please rearrange them to form a word.",],
    type : "C",
    diff : 2,
    choices : ["N","V","I","T","U","R","E","S","I","Y"],
    correctOrder : ["U","N","I","V","E","R","S","I","T","Y"],
}

let spellWord3 ={
    title:"Spell the word",
    text:["The letters are scrambled, please rearrange them to form a word.",],
    type : "C",
    diff : 2,
    choices : ["W","R","B","T","A","R","E","S","R","Y"],
    correctOrder : ["S","T","R","A","W","B","E","R","R","Y"],
}

let spellWord4 ={
    title:"Spell the word",
    text:["The letters are scrambled, please rearrange them to form a word.",],
    type : "C",
    diff : 0,
    choices : ["H","R","E","T","E"],
    correctOrder : ["T","H","R","E","E"],
}

let spellWord5 ={
    title:"Spell the word",
    text:["The letters are scrambled, please rearrange them to form a word.",],
    type : "C",
    diff : 3,
    choices : ["I","Y","A","N","D","L","E","S","D","N"],
    correctOrder : ["D","I","S","N","E","Y","L","A","N","D"],
}

let spellWord6 ={
    title:"Spell the word",
    text:["The letters are scrambled, please rearrange them to form a word.",],
    type : "C",
    diff : 1,
    choices : ["G","L","E","G","A","A","N","U"],
    correctOrder : ["L","A","N","G","U","A","G","E"],
}

let spellWord7 ={
    title:"Spell the word",
    text:["The letters are scrambled, please rearrange them to form a word.",],
    type : "C",
    diff : 3,
    choices : ["D","L","E","G","A","A","B","H","S","N"],
    correctOrder : ["B","A","N","G","L","A","D","E","S","H"],
}

let guessSecretNumber = {
    title:"Guess the secret number",
    text:["Try to guess the secret number based on clues in the text. Between 10 and 99 (both boundaries included),",
        "can't be divided by 3,4,5 or 7, the first digit is odd, the sum of the digits is greater than 12",
        "the difference between the first and last digit is less or equal to 2, the first digit is greater than the last digit.",
    ],
    type : "B",
    diff : 3,
    correctAnswer : "97"
}

let guessSecretNumber2 = {
    title:"Guess the secret number",
    text:["Try to guess the secret number based on clues in the text. Between 1 and 99 (both boundaries included),",
        "can be divided by 3 and 5, both digits are odd, the sum of two digits is less than 8.",
    ],
    type : "B",
    diff : 1,
    correctAnswer : "15"
}

let guessSecretNumber3 = {
    title:"Guess the secret number",
    text:["Try to guess the secret number based on clues in the text. Between 0 and 100 (both boundaries included),",
        "can be divided by all numbers from 1 to 100, is even, has one digit, is less than 50.",
    ],
    type : "B",
    diff : 0,
    hint:"This is very easy.",
    correctAnswer : "0"
}

let guessSecretNumber4 = {
    title:"Guess the secret number",
    text:["Try to guess the secret number based on clues in the text. Between 0 and 100 (both boundaries included),",
        "the sum of its digits is divisible by 5, is a prime number, is less than 40.",
    ],
    type : "B",
    diff : 2,
    correctAnswer : "23"
}

let questionWithNoAnswer = {
    title:"Funny question",
    text:["What is the answer of a question that has no answers?"],
    type:"A",
    diff:3,
    choices : ["I don't know.","No answer.","No!","This is stupid.",".........","Kill me!","Only God knows."],
    hint:"Do I even have to select an answer?",
    correctAnswers : [],
}

let questionWithNoAnswer2 = {
    title:"Funny question",
    text:["What is the answer of a question that has 'No answer' as the answer?"],
    type:"A",
    diff:0,
    choices : ["I don't know.","No answer.","No!","This is stupid.",".........","Kill me!","Only God knows."],
    hint:"Why are there quotation marks around No answer?",
    correctAnswers : [1],
}

let largeProduct = {
    title:"Funny question",
    text:["1x2x3x4x5x6x7x8x9x10x11x12x13x14x15x16x17x18x19x0x20x21x22x23x24x25x26x27x28x29x30=?"],
    type:"B",
    diff:1,
    hint:"If you try to calculate this, then you are wasting your time.",
    correctAnswer : "0"
}

let mountEverest = {
    title:"Funny question",
    text:["What was the tallest mountain on Earth before Mount Everest was discovered?"],
    type:"A",
    diff:0,
    choices : ["Mount Fuji","Mount blanc","Mount Kilimanjaro","K2","Mount Elbrus","Mount Everest","Chogolisa","Annapurna"],
    hint:"Just because vou haven't discovered something, doesn't mean it doesn't exist.",
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


abExercises.push(grimReaper);
abExercises.push(racersDilemma);
abExercises.push(racersDilemma2);
abExercises.push(guessTheCardsGame);
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
abExercises.push(guessSecretNumber);
abExercises.push(guessSecretNumber2);
abExercises.push(guessSecretNumber3);
abExercises.push(guessSecretNumber4);
abExercises.push(questionWithNoAnswer);
abExercises.push(questionWithNoAnswer2);
abExercises.push(prisonerAnd2Doors);
abExercises.push(largeProduct);
abExercises.push(mountEverest);
abExercises.push(reluctantStoryElements);