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

let exercise1_1 = {
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

let exercise1_2 = {
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

let exercise1_3 = {
    title:"",
    text:[],
    type : "A",
    choices : [],
    correctAnswers : [],

}

let exercise1_4 = {
    title:"Who is the culprit?",
    text:["Sarah put a beautiful vase on a table touching the front door of her home. She then invited her friends Alice, Bob, Carole,",
    "Dilan and Eva to come and play with her inside her bedroom. The 5 friends all came rushing into her home through the",
    "front door. When night came, her friends left once again. But when Sarah woke up and went downstairs the next morning, she",
    "found her vase broken on the ground. Sarah suspect that her friends might have broken her vase yesterday by accident.",
    "Which of Sarah's friends might be the culprits?"],
    type : "A",
    choices : ["Alice","Bob","Carole","Dilan","Eva"],
    correctAnswers : [0,1,2,3,4],
}

let exercise1_5 = {
    title:"The man and the snail",
    text:["An confident man and a snail decided to have a very long race, the one who reaches the finish first wins.",
        "When the race started, the man was already gone while the snail was just crawling slowly.",
        "The man was very confident that he will win but once he reaches the finish, the snail was already there.",
        "The man couldn't believe that he lost.",
        "What are the possible and logical causes that made the slow snail beat the fast man?"],
    type : "A",
    choices : ["The snail was a super-snail that can go very fast.","The man decided to sleep for many hours during the race, allowing the snail to win.",
    "The snail had asked an identical looking snail to stand at the finish line beforehand.","The snail had learned to teleport.","The man might had faced some unforeseen circumstances during the race, causing him to lose."],
    correctAnswers : [1,2,4],
}

let exercise1_6 = {
    title:"Words inside scrambled text",
    text:["Study this mess of letters below carefully.",
    "knelybaeblewtodillehgcwreuer",
    "Please list the 6 words that are part of this mess of letters alphabetically from left to right.",
    "Use a single space to separate the words and don't use capitals.",
    ""],
    type : "B",
    correctAnswer : "black blue green red white yellow"
}

let exercise1_7 = {
    title:"Guess the secret number",
    text:["Try to guess the secret number based on clues in the text. Between 10 and 99 (both boundaries included),",
        "can't be divided by 3,4,5 or 7, the first digit is odd, the sum of the digits is greater than 12",
        "the difference between the first and last digit is less or equal to 2, the first digit is greater than the last digit.",
    ],
    type : "B",
    correctAnswer : "97"
}

let exercise2_1 = {
    title:"Organize a birthday party",
    text:["You want to organise a huge birthday party inside your garden. It will take you hours to prepare all the food",
    "since you want to invite a lot of your friends, you also want to keep the food as fresh as possible for the party. ",
    "Your friends don't live far from you, they will come in just a few minutes",
    "after receiving your invitations. Also your garden needs to be decorated and cleaned.",
    "What will be the most logical way to set up the party?",
    ],
    type : "A",
    choices : ["Send invitations->Prepare food->Decorate garden->Clean garden","Clean garden->Prepare food->Decorate garden->Send invitations",
    "Decorate garden->Clean garden->Send invitations->Prepare food","Clean garden->Decorate Garden->Prepare food->Send invitations",
    "Prepare food->Clean garden->Decorate garden->Send invitations","Decorate garden->Send invitations->Prepare food->Clean garden",
    "Clean garden->Decorate Garden->Send invitations->Prepare food"],
    correctAnswers : [3],
}

let exercise2_2 = {
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

let exercise2_3 = {
    title:"",
    text:[],
    type : "B",
    correctAnswer : "",
}

let exercise2_4 = {
    title:"",
    text:[],
    type : "B",
    correctAnswer : "",
}

let exercise3_1 = {
    title: "Next number in sequence",
    text : ["Given the following sequence of numbers.",
        "2,5,10,17,28,41,58,77,100,129,?",
        "What is the next number in the sequence?",
        "Hint: it has something to do with prime numbers.",],
    type:"B",
    correctAnswer : "160",
}

let exercise3_2 = {
    title: "Next string in sequence",
    text:["Given the following sequence of strings.",
        "a, abb, cccabb, cccabbdddd, eeeeecccabbdddd, ?",
        "What is the next string in the sequence?",],
    type:"B",
    correctAnswer : "eeeeecccabbddddffffff",
}

let exercise3_3 = {
    title: "Next number in sequence",
    text:["Given the following sequence of numbers.",
        "5738, 121011, 33112, 6423, 1065, ?",
        "What is the next number in the sequence?",],
    type:"B",
    correctAnswer : "1611",
}

let exercise3_4 = {
    title: "Next number in sequence",
    text:["Given the following sequence of numbers.",
        "27, 9279, 27927927, ?",
        "What is the next number in the sequence?"],
    type:"B",
    correctAnswer : "812792792781",
}
let exercise3_5 = {
    title: "Next string in sequence",
    text:["Given the following sequence of strings.",
    "a, ab, adad, ahahahah",
    "What is the next string in the sequence?",],
    type:"B",
    correctAnswer : "apapapapapapapap",

}

let exercise3_6 = {
    title: "Find non-pattern sequences",
    text:["Observe the following sequences carefully.",
    "Which sequence(s) have no patterns?"],
    type:"A",
    choices: ["1,2,0,3,-1,4,-2,5,-3","1,2,6,24,48,144,576,1152,3456","1,6,7,9,16,17,19,27,29,31",
        "1,3,6,10,15,21,28,36,45","1,121,1331,14441,155551,1666661","1,15,10,115,110,155,150,515,510","1,4,14,414,14414,41414414"],
    correctAnswers : [2,5],
}

let exercise3_7 = {
    title: "Find pattern sequences",
    text:["Observe the sequences below carefully.",
    "Which sequence(s) have a pattern inside them?"],
    type:"A",
    choices: ["1,123,12345,1234567,123456789","1,10,101,1001,10010,100101,1001011","1,2,4,8,17,33,64,128,256,513","1,10,5,2,11,6,3,12,7,4",
    "1,12,412,4128,164128,16412832","1,8,56,2,7,5,3,9,12,200","1,20,300,4000,50001,600000,7000000"],
    correctAnswers : [0,3,4],
}

let exercise3_8 = {
    title: "Find non-pattern sequences",
    text:["Observe the sequences below carefully.",
    "Which sequence(s) have no patterns?"],
    type:"A",
    choices:["a,ab,abe,abec,abeci,abecid,abecido","abab,cbcb,cdcd,eded,efef,gfgf","a,bbbb,cc,ddddddd,eeee,fffff,gggggg","a,bab,cbabc,dcbabcd,dcbabcdee",
    "aaa,aab,abb,bbb,bbc,bcc,ccc,ccd","a,b,c,d,e,f,g,h,j,i,k,l,n,m","a,aa,aaa,aaaa,aaaaa,aaaaaa","a,ab,abc,d,de,def,g,gh,ghi"],
    correctAnswers : [2,3,5],
}

let exercise4_1 = {
    title: "Encrypted text",
    text:["The following text has been encrypted using a simple algorithm.",
    "J thjnk ypv cbn dp thjs pnf",
        "You need to decrypt this text.(The answer is case-sensitive)"],
    type: "B",
    correctAnswer : "I think you can do this one",
}

let exercise4_2 = {
    title:"Encrypted text",
    text:["The following text has been encrypted using a simple algorithm.",
    "J bn zpvs cftu gsjfoe",
        "You need to decrypt this text.(The answer is case-sensitive)"],
    type : "B",
    correctAnswer : "I am your best friend",
}

let exercise4_3 = {
    title:"",
    text:[],
    type : "B",
    correctAnswer : "",
}

let exercise4_4 = {
    title:"",
    text:[],
    type : "B",
    correctAnswer : "",
}

abstractionExercises.push(exercise1_1);
abstractionExercises.push(exercise1_2);
abstractionExercises.push(exercise1_3);
abstractionExercises.push(exercise1_4);
abstractionExercises.push(exercise1_5);
abstractionExercises.push(exercise1_6);
abstractionExercises.push(exercise1_7);

decompositionExercises.push(exercise2_1);
decompositionExercises.push(exercise2_2);
decompositionExercises.push(exercise2_3);
decompositionExercises.push(exercise2_4);

patternExercises.push(exercise3_1);
patternExercises.push(exercise3_2);
patternExercises.push(exercise3_3);
patternExercises.push(exercise3_4);
patternExercises.push(exercise3_5);
patternExercises.push(exercise3_6);
patternExercises.push(exercise3_7);
patternExercises.push(exercise3_8);

algorithmExercises.push(exercise4_1);
algorithmExercises.push(exercise4_2);
algorithmExercises.push(exercise4_3);
algorithmExercises.push(exercise4_4);