const Exercises = [];

const abstractionExercises = [];
const decompositionExercises = [];
const patternExercises = [];
const algorithmExercises = [];
const IntegratedExercises = [];
const tutorialExercises = [];

Exercises.push(abstractionExercises);
Exercises.push(decompositionExercises);
Exercises.push(patternExercises);
Exercises.push(algorithmExercises);
Exercises.push(IntegratedExercises);
Exercises.push(tutorialExercises);

let grimReaper = {
    title: "Sarah and the Grim Reaper",
    text:["The Grim Reaper has arrived to take Sarah's life, but Sarah didn't want to die yet, so she begged the Grim Reaper",
    "to let her live longer by lighting up a candle and saying 'Let me live until you see candle burns up one day.'",
    "The grim reaper agreed and left the scene. Sarah them immediately extinguished the candle by blowing at it.",
    "Surprisely, even after many years, the Grim Reaper never came again to take Sarah's life.",
    "How did Sarah escape her death? Please mark the correct box."],
    type : "A",
    choices : ["The Grim Reaper wanted to stay away from candles.","The Grim Reaper decided that Sarah can live forever.","The Grim Reaper was afraid to return to Sarah once more.",
    "The Grim Reaper never saw the candle burning up.","The Grim Reaper forgot about Sarah.","The Grim Reaper was killed by something or someone."],
    correctAnswers : [3],
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
    hint: "By logical, we mean all reasons that can possibly happen in reality.",
    choices : ["The snail was a super-snail that can go very fast.","The man decided to sleep for many hours during the race, allowing the snail to win.",
    "The snail had asked an identical looking snail to stand at the finish line beforehand.","The snail had learned to teleport.","The man might had faced some unforeseen circumstances during the race, causing him to lose."],
    correctAnswers : [1,2,4],
}

let FindWordsInSrcambledText = {
    title:"Words inside scrambled text",
    text:["Study this mess of letters below carefully.",
    "knelybaeblewtodillehgcwreuer",
    "Please list the 6 words that are part of this mess of letters alphabetically from left to right.",
    "Use a single space to separate the words and don't use capitals.",
    ""],
    type : "B",
    correctAnswer : "black blue green red white yellow"
}

let FindWordsInSrcambledText2 = {
    title:"Words inside scrambled text",
    text:["Study this mess of letters below carefully.",
        "nysoe",
        "Please list the 2 words that are part of this mess of letters alphabetically from left to right.",
        "Use a single space to separate the words and don't use capitals.",
        ""],
    type : "B",
    correctAnswer : "no yes"
}

let spellWord1 ={
    title:"Spell the word",
    text:["The letters are scrambled, please rearrange them to form a word.",],
    type : "C",
    choices : ["O","L","E","W","L","Y"],
    correctOrder : ["Y","E","L","L","O","W"],
}

let spellWord2 ={
    title:"Spell the word",
    text:["The letters are scrambled, please rearrange them to form a word.",],
    type : "C",
    choices : ["N","V","I","T","U","R","E","S","I","Y"],
    correctOrder : ["U","N","I","V","E","R","S","I","T","Y"],
}

let spellWord3 ={
    title:"Spell the word",
    text:["The letters are scrambled, please rearrange them to form a word.",],
    type : "C",
    choices : ["W","R","B","T","A","R","E","S","I","Y"],
    correctOrder : ["S","T","R","A","W","B","E","R","R","Y"],
}

let guessSecretNumber = {
    title:"Guess the secret number",
    text:["Try to guess the secret number based on clues in the text. Between 10 and 99 (both boundaries included),",
        "can't be divided by 3,4,5 or 7, the first digit is odd, the sum of the digits is greater than 12",
        "the difference between the first and last digit is less or equal to 2, the first digit is greater than the last digit.",
    ],
    type : "B",
    correctAnswer : "97"
}

let guessSecretNumber2 = {
    title:"Guess the secret number",
    text:["Try to guess the secret number based on clues in the text. Between 1 and 99 (both boundaries included),",
        "can be divided by 3 and 5, both digits are odd, the sum of two digits is less than 8.",
    ],
    type : "B",
    correctAnswer : "15"
}

let guessSecretNumber3 = {
    title:"Guess the secret number",
    text:["Try to guess the secret number based on clues in the text. Between 0 and 100 (both boundaries included),",
        "can be divided by all numbers from 1 to 100, is even, has one digit, is less than 50.",
    ],
    type : "B",
    hint:"This is very easy.",
    correctAnswer : "0"
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
    hint:"Reluctant means that the element played no role in the story.",
    choices : ["hole","bird","scary trees","stone","spider","birch","bear","pond"],
    correctAnswers : [1,2,6,7],
}




let birthdayParty = {
    title:"Organize a birthday party",
    text:["You want to organise a huge birthday party inside your garden. It will take you hours to prepare all the food",
    "since you want to invite a lot of your friends, you also want to keep the food as fresh as possible for the party. ",
    "Your friends don't live far from you, they will come in just a few minutes",
    "after receiving your invitations. Also your garden needs to be decorated and cleaned.",
    "What will be the most logical way to set up the party?",
    ],
    type : "C",
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
    choices : ["E","F","C","B","D","A"],
    correctOrder : ["C","F","A","E","D","B"]
}





let nextNumberInSeq = {
    title: "Next number in sequence",
    text : ["Given the following sequence of numbers.",
        "2,5,10,17,28,41,58,77,100,129,?",
        "What is the next number in the sequence?",],
    type:"B",
    hint: "It has something to do with prime numbers.",
    correctAnswer : "160",
}

let nextNumberInSeq2 = {
    title: "Next number in sequence",
    text:["Given the following sequence of numbers.",
        "5738, 121011, 33112, 6423, 1065, ?",
        "What is the next number in the sequence?",],
    type:"B",
    correctAnswer : "1611",
}

let nextNumberInSeq3 = {
    title: "Next number in sequence",
    text:["Given the following sequence of numbers.",
        "27, 9279, 27927927, ?",
        "What is the next number in the sequence?"],
    type:"B",
    correctAnswer : "812792792781",
}

let nextNumberInSeq4 = {
    title: "Next number in sequence",
    text:["Given the following sequence of numbers.",
        "0,1,1,2,3,5,8,13,21,34,? ",
        "What is the next number in the sequence?"],
    type:"B",
    correctAnswer : "55",
}

let nextNumberInSeq5 = {
    title: "Next number in sequence",
    text:["Given the following sequence of numbers.",
        "2,4,6,18,21,84,88,? ",
        "What is the next number in the sequence?"],
    type:"B",
    correctAnswer : "440",
}

let nextStrInSeq = {
    title: "Next string in sequence",
    text:["Given the following sequence of strings.",
        "a, abb, cccabb, cccabbdddd, eeeeecccabbdddd, ?",
        "What is the next string in the sequence?",],
    type:"B",
    correctAnswer : "eeeeecccabbddddffffff",
}



let nextStrInSeq2 = {
    title: "Next string in sequence",
    text:["Given the following sequence of strings.",
    "a, ab, adad, ahahahah, ?",
    "What is the next string in the sequence?",],
    type:"B",
    correctAnswer : "apapapapapapapap",
}

let nextStrInSeq3 = {
    title: "Next string in sequence",
    text:["Given the following sequence of strings.",
        "a, bab, ccbabcc, dddccbabccddd, ?",
        "What is the next string in the sequence?",],
    type:"B",
    correctAnswer : "eeeedddccbabccdddeeee",
}

let missingStrInSeq1 = {
    title: "Missing string in sequence",
    text:["Given the following sequence of strings.",
        "a, 11, e, 22, i, 33, o, 44, ?, 55",
        "What is the missing string in the sequence?",],
    type:"B",
    correctAnswer : "u",
}

let missingNumberInSeq1 = {
    title: "Missing numbers in sequence",
    text:["Given the following sequence of numbers.",
        "1,?,333,?,?,666666,7777777",
        "What are the missing numbers in the sequence?",],
    type:"B",
    correctAnswer : "22 4444 55555",
}

let missingNumberInSeq2 = {
    title: "Missing numbers in sequence",
    text:["Given the following sequence of numbers.",
        "3000,?,1000,750,600,?",
        "What are the missing numbers in the sequence?",],
    type:"B",
    hint:"Think of division.",
    correctAnswer : "1500 500",
}

let missingNumberInSeq3 = {
    title: "Missing numbers in sequence",
    text:["Given the following sequence of numbers.",
        "1,3,6,?,?,?,28,36,45",
        "What are the missing numbers in the sequence?",],
    type:"B",
    correctAnswer : "10 15 21",
}

let missingNumberInSeq4 = {
    title: "Missing numbers in sequence",
    text:["Given the following sequence of numbers.",
        "1,?,20,3,?,300,4,40,400,4000,?,?",
        "What are the missing numbers in the sequence?",],
    type:"B",
    correctAnswer : "2 30 5 50",
}

let findPatternSeq1 = {
    title: "Find pattern sequences",
    text:["Observe the sequences below carefully.",
        "Which sequence(s) have a pattern inside them?"],
    type:"A",
    choices: ["1,123,12345,1234567,123456789","1,10,101,1001,10010,100101,1001011","1,2,4,8,17,33,64,128,256,513","1,10,5,2,11,6,3,12,7,4",
        "1,12,412,4128,164128,16412832","1,8,56,2,7,5,3,9,12,200","1,20,300,4000,50001,600000,7000000"],
    correctAnswers : [0,3,4],
}

let findNonPatternSeq1 = {
    title: "Find non-pattern sequences",
    text:["Observe the following sequences carefully.",
    "Which sequence(s) have no patterns?"],
    type:"A",
    choices: ["1,2,0,3,-1,4,-2,5,-3","1,2,6,24,48,144,576,1152,3456","1,6,7,9,16,17,19,27,29,31",
        "1,3,6,10,15,21,28,36,45","1,121,1331,14441,155551,1666661","1,15,10,115,110,155,150,515,510","1,4,14,414,14414,41414414"],
    correctAnswers : [2,5],
}

let findNonPatternSeq2 = {
    title: "Find non-pattern sequences",
    text:["Observe the sequences below carefully.",
        "Which sequence(s) have no patterns?"],
    type:"A",
    choices:["a,ab,abe,abec,abeci,abecid,abecido","abab,cbcb,cdcd,eded,efef,gfgf","a,bbbb,cc,ddddddd,eeee,fffff,gggggg","a,bab,cbabc,dcbabcd,dcbabcdee",
        "aaa,aab,abb,bbb,bbc,bcc,ccc,ccd","a,b,c,d,e,f,g,h,j,i,k,l,n,m","a,aa,aaa,aaaa,aaaaa,aaaaaa","a,ab,abc,d,de,def,g,gh,ghi"],
    correctAnswers : [2,3,5],
}

let WhatIsThePattern = {
    title: "What is the pattern?",
    text:["Observe the sequence below carefully, in what order are the operations of the pattern applied?",
        "5,35,8,80,16,6,42,6,60,12,2"],
    type:"C",
    choices : ["greatest digit","/5","x10","sum of digits","x7"],
    correctOrder : ["x7","sum of digits","x10","/5","greatest digit"],
}

let WhatIsThePattern2 = {
    title: "What is the pattern?",
    text:["Observe the sequence below carefully, in what order are the operations of the pattern applied?",
        "1,2,4,7,11,9,10,12,15,19,17"],
    type:"C",
    choices : ["+4","-1","+1","+3","+2"],
    correctOrder : ["+1","+2","+3","+4","-1"],
}

let formPattern = {
    title: "Form a pattern",
    text:["Below are a few numbers, please rearrange them to form a pattern.",
    "The sequence should begin with 10 first."],
    type:"C",
    choices : ["16","10","70","85","12","17","15","80","75"],
    correctOrder : ["10","15","75","70","12","17","85","80","16"],
}

let formPattern2 = {
    title: "Form a pattern",
    text:["Below are a few numbers, please rearrange them to form a pattern.",
        "The sequence should begin with the smallest number first."],
    type:"C",
    choices : ["13","5","9","3","11","7","1","15"],
    correctOrder : ["1","3","5","7","9","11","13","15"],
}

let formPattern3 = {
    title: "Form a pattern",
    text:["Below are a few numbers, please rearrange them to form a pattern.",
        "The sequence should begin with the smallest number first."],
    type:"C",
    choices : ["2","5","7","3","23","11","17","19","13"],
    correctOrder : ["2","3","5","7","11","13","17","19","23"],
}

let formPattern4 = {
    title: "Form a pattern",
    text:["Below are a few numbers, please rearrange them to form a pattern.",
        "The sequence should begin with the greatest number first."],
    type:"C",
    choices : ["1500","6000","3000","1000","2000","1200"],
    correctOrder : ["6000","3000","2000","1500","1200","1000"],
}






let encryptedText1 = {
    title: "Encrypted text",
    text:["The following text has been encrypted using a simple algorithm.",
    "J thjnk ypv cbn dp thjs pnf",
        "You need to decrypt this text.(The answer is case-sensitive)"],
    type: "B",
    correctAnswer : "I think you can do this one",
}

let encryptedText2 = {
    title:"Encrypted text",
    text:["The following text has been encrypted using a simple algorithm.",
    "J bn zpvs cftu gsjfoe",
        "You need to decrypt this text.(The answer is case-sensitive)"],
    type : "B",
    correctAnswer : "I am your best friend",
}

let encryptedText3 = {
    title:"Encrypted text",
    text:["The following text has been encrypted using a simple algorithm.",
    "w Isia hll fo oyg uool dcuk",
    "You need to decrypt this text. (The answer is case-sensitive.)"],
    type : "B",
    correctAnswer : "I wish all of you good luck",
}

let mapping1 = {
    title:"Map function",
    text:["If f(abc)=bdf, f(def)=egi, f(cbe)=ddh,",
    "f(fas)=?"],
    type : "B",
    correctAnswer : "gcv",
}

let mapping2 = {
    title:"Map function",
    text:["If f(art)=3, f(flower)=6, f(dogs)=4, f(weather)=7",
        "f(horse)=?"],
    type : "B",
    correctAnswer : "5",
}

let mapping3 = {
    title:"Map function",
    text:["If f(abghjp)=aaeeio, f(zzxwpb)=uuuuoa, f(fghbzi)=eeeaui",
        "f(afckel)=?"],
    type : "B",
    correctAnswer : "aeaiei",
}

let mapping4 = {
    title:"Map function",
    text:["If f(2)=2,f(3)=3,f(4)=3,f(5)=5,f(6)=5,f(10)=7,f(12)=11,f(13)=11,f(16)=13",
    "f(35)=?"],
    type : "B",
    correctAnswer : "31",
}

let mapping5 = {
    title:"Map function",
    text:["If f([a,b])=3,f([b,a])=3,f([b,c,d])=9,f([a,c])=4,f([b,b])=4,f([a,c,b,e])=11",
    "f([a,a,b,c,e])=?"],
    type : "B",
    correctAnswer : "12",
}

let filter1 = {
    title:"Filter function",
    text:["If f([1,2,4,3,5,7])=[1,3,5,7], f([9,7,4,5,6,1]=[9,7,5,1]",
    "f([2,3,5,4,4,6])=? (Please make sure your answer is the same format as the examples)"],
    type : "B",
    correctAnswer : "[3,5]",
}

let filter2 = {
    title:"Filter function",
    text:["If f([10,25,41,3,9])=[41,3], f([7,61,88,5,91,110]=[7,61,5]",
        "f([2,78,31,11,45,79,4])=? (Please make sure your answer is the same format as the examples)"],
    type : "B",
    correctAnswer : "[2,31,11,79]",
}

let followAlgorithm1 = {
    title:"Follow algorithm",
    text:["Suppose we have the number 137 at the start, we execute the following steps.",
    "1) Replace every digit smaller than 5 with 2.",
    "2) Swap the first and last digit.",
    "3) Replace the first and second digit with their sum.",
    "4) Minus one to every digit.",
    "5) Replace the whole number by the sum of its digits."],
    type : "B",
    correctAnswer : "9"
}

let followAlgorithm2 = {
    title:"Follow algorithm",
    text:["Suppose we have A at the start, we execute the following steps.",
    "1) Add a whitespace at the end of the string, followed by a copy of the string to the end.",
    "2) Add a B to the right of each A.",
    "3) Add a C to the left of each B.",
    "What is the result if we repeat the process 2 times?"],
    type : "B",
    correctAnswer : "ACBCCB ACBCCB ACBCCB ACBCCB",
}

let followAlgorithm3 = {
    title:"Follow algorithm",
    text:["Suppose we have 4 at the start, we execute the following steps.",
        "1) As long as the number is not divisible by 5, add 3 to the number.",
        "2) Replace the number by the smallest prime number that's greater than the number.",
        "What is the result if we repeat the process 4 times?"],
    type : "B",
    correctAnswer : "41",
}

let numberOfCombinations1 = {
    title:"Number of Combinations",
    text:["Suppose we have an empty string at the start, we execute the following steps.",
        "1) Add either 1 a or 1 b at the end of the string.",
        "How many possible strings can we make if we repeat the process 5 times?"],
    type : "B",
    correctAnswer : "32",
}

let runningRace = {
    title:"100m running race",
    text:["Alice,Bob,Carole,Dilan and Eva are having a 100m race. Each of them has his or her own strategies.",
        "We will first assume that it will take each runner exactly 1 second to run 1 meter.",
        "Alice runs 1 meter and then stops for 1 second.",
        "Bob runs 5 meters and then stops for 10 seconds.",
        "Carole runs 3 meters and then stops for 2 seconds.",
        "Dilan runs 50 meters and then stops for 75 seconds.",
        "Eva runs 10 meters and then stops for 5 seconds.",
        "Each runner will repeat their strategies during the entire race.",
        "In what order will the runners reach the finish? "],
    type:"C",
    choices : ["Alice","Bob","Carole","Dilan","Eva"],
    correctOrder : ["Eva","Carole","Alice","Dilan","Bob"],
}

let tutorial0 = {
    title: "Check button",
    text: ["You just need to click the 'check' button,",
    "and then click on 'next level' to complete this exercise."],
    type: "A",
    choices: [],
    correctAnswers: [],
}

let tutorial1 = {
    title:"Type A exercise(single answer)",
    text:["This is a typical type A exercise, you have to mark the correct boxes down below.",
    "To mark a box, simply click on it, click it again to unmark it.",
    "To complete this exercise, simply mark the boxes with A on it.",
    "Once you are done, click the 'check button' to check your answer and go to the next exercise."],
    type:"A",
    choices : ["A","B","C","D","E"],
    correctAnswers : [0],
}

let tutorial2 = {
    title:"Type A exercise(multiple answers)",
    text:["This is another type A exercise, this time you have to mark multiple boxes.",
    "To complete this exercise, mark the boxes with A,C and E"],
    type : "A",
    choices : ["A","B","C","D","E"],
    correctAnswers : [0,2,4],
}

let tutorial3 = {
    title:"Type B exercise(single-part answer)",
    text:["This is a typical type B exercise, you have have to enter your answer in the input box below.",
    "To enter the text, simply click on the input box, use your keyboard to enter the text.",
    "To complete this exercise, simply type 'a1b2c3' in the input box.",
    "Once you are done, click the 'check button' to check your answer and go to the next exercise.",],
    type: "B",
    correctAnswer : "a1b2c3"
}

let tutorial4 = {
    title:"Type B exercise(multiple-parts answer)",
    text:["If the answer consists of multiple parts, then you have to put a single space between each part.",
    "To complete this exercise, type 'a1 B2 cd3' in the input box",],
    type: "B",
    correctAnswer : "a1 B2 cd3",
}

let tutorial5 = {
    title:"Type C exercise",
    text:["This is a typical type C ecercise, you have to arrange boxes in the correct order.",
    "To arrange the boxes, first click on a box and then click on another box to swap them in place.",
    "To complete this exercise, simply arrange the boxes in the order 1,2,3,4,5 from left to right.",
    "Once you are done, the click 'check button' to check your answer and go to the next exercise.",],
    type:"C",
    choices : ["5","1","2","4","3"],
    correctOrder : ["1","2","3","4","5"],
}

abstractionExercises.push(grimReaper);
abstractionExercises.push(guessTheCardsGame);
abstractionExercises.push(whoIsTheCulprit);
abstractionExercises.push(manAndSnail);
abstractionExercises.push(FindWordsInSrcambledText);
abstractionExercises.push(FindWordsInSrcambledText2);
abstractionExercises.push(spellWord1);
abstractionExercises.push(spellWord2);
abstractionExercises.push(spellWord3);
abstractionExercises.push(guessSecretNumber);
abstractionExercises.push(guessSecretNumber2);
abstractionExercises.push(guessSecretNumber3);
abstractionExercises.push(reluctantStoryElements);

decompositionExercises.push(birthdayParty);
decompositionExercises.push(pocketLampProblem);
decompositionExercises.push(naughtyKittens);
decompositionExercises.push(machinesInFactory);

patternExercises.push(nextNumberInSeq);
patternExercises.push(nextNumberInSeq2);
patternExercises.push(nextNumberInSeq3);
patternExercises.push(nextNumberInSeq4);
patternExercises.push(nextNumberInSeq5);
patternExercises.push(nextStrInSeq);
patternExercises.push(nextStrInSeq2);
patternExercises.push(nextStrInSeq3);
patternExercises.push(missingStrInSeq1);
patternExercises.push(missingNumberInSeq1);
patternExercises.push(missingNumberInSeq2);
patternExercises.push(missingNumberInSeq3);
patternExercises.push(missingNumberInSeq4);
patternExercises.push(findPatternSeq1);
patternExercises.push(findNonPatternSeq1);
patternExercises.push(findNonPatternSeq2);
patternExercises.push(WhatIsThePattern);
patternExercises.push(WhatIsThePattern2);
patternExercises.push(formPattern);
patternExercises.push(formPattern2);
patternExercises.push(formPattern3);
patternExercises.push(formPattern4);

algorithmExercises.push(encryptedText1);
algorithmExercises.push(encryptedText2);
algorithmExercises.push(encryptedText3);
algorithmExercises.push(mapping1);
algorithmExercises.push(mapping2);
algorithmExercises.push(mapping3);
algorithmExercises.push(mapping4);
algorithmExercises.push(mapping5);
algorithmExercises.push(filter1);
algorithmExercises.push(filter2);
algorithmExercises.push(followAlgorithm1);
algorithmExercises.push(followAlgorithm2);
algorithmExercises.push(followAlgorithm3);
algorithmExercises.push(numberOfCombinations1);
algorithmExercises.push(runningRace);


tutorialExercises.push(tutorial0);
tutorialExercises.push(tutorial1);
tutorialExercises.push(tutorial2);
tutorialExercises.push(tutorial3);
tutorialExercises.push(tutorial4);
tutorialExercises.push(tutorial5);