let encryptedText1 = {
    title: "Versleutelde tekst",
    text:["De onderstaande takest wordt versleutd.",
        "Jk dfnk dbt jf djt kvnt",
        "Probeer de tekst te ontcijferen.(Let op hoofdletters!)"],
    type: "B",
    diff:1,
    correctAnswer : "Ik denk dat je dit kunt",
}

let encryptedText2 = {
    title:"Versleutelde tekst",
    text:["De onderstaande takest wordt versleutd.",
        "J bn zpvs cftu gsjfoe Jl cfo kjvz cftuf wsjfoe",
        "Probeer de tekst te ontcijferen.(Let op hoofdletters!)"],
    type : "B",
    diff:2,
    correctAnswer : "Ik ben jouw beste vriend",
}

let encryptedText3 = {
    title:"Encrypted text",
    text:["The following text has been encrypted using a simple algorithm.",
        "w Isia hll fo oyg uool dcuk",
        "You need to decrypt this text. (The answer is case-sensitive.)"],
    type : "B",
    diff:2,
    correctAnswer : "I wish all of you good luck",
}

let encryptedText4 = {
    title:"Encrypted text",
    text:["The following text has been encrypted using a simple algorithm.",
        "uoY dluohs eb elba ot ees eht rewsna",
        "You need to decrypt this text. (The answer is case-sensitive.)"],
    type : "B",
    diff:0,
    correctAnswer : "You should be able to see the answer",
}

let encryptedText5 = {
    title:"Encrypted text",
    text:["The following text has been encrypted using a simple algorithm.",
        "eavH nuf gearninl hitw shit loot",
        "You need to decrypt this text. (The answer is case-sensitive.)"],
    type : "B",
    diff:0,
    correctAnswer : "Have fun learning with this tool",
}

let encryptedText6 = {
    title:"Encrypted text",
    text:["The following text has been encrypted using a simple algorithm.",
        "L#f# i# a# e#d#e#s p#o#e#s o# l#a#r#i#g",
        "You need to decrypt this text. (The answer is case-sensitive.)"],
    type : "B",
    diff:2,
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
    diff:1,
    hint:"Try to change the letters into numbers.",
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
    title:"Filter function",
    text:["If f([1,2,4,3,5,7])=[1,3,5,7], f([9,7,4,5,6,1]=[9,7,5,1]",
        "f([2,3,5,4,4,6])=? (Please make sure your answer is the same format as the examples)"],
    type : "B",
    diff:0,
    correctAnswer : "[3,5]",
}

let filter2 = {
    title:"Filter function",
    text:["If f([10,25,41,3,9])=[41,3], f([7,61,88,5,91,110]=[7,61,5]",
        "f([2,78,31,11,45,79,4])=? (Please make sure your answer is the same format as the examples)"],
    type : "B",
    diff:1,
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
    diff:1,
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
    diff:2,
    correctAnswer : "ACBCCB ACBCCB ACBCCB ACBCCB",
}

let followAlgorithm3 = {
    title:"Follow algorithm",
    text:["Suppose we have 4 at the start, we execute the following steps.",
        "1) As long as the number is not divisible by 5, add 3 to the number.",
        "2) Replace the number by the smallest prime number that's greater than the number.",
        "What is the result if we repeat the process 4 times?"],
    type : "B",
    diff:2,
    correctAnswer : "41",
}

let ballsAndDrawers = {
    title:"Balls and drawers",
    text:["Sarah wants to put her balls inside her drawers, so she does the following.",
        "She put the 1st ball in the blue drawer, the 2nd ball in the red drawer,",
        "the 3rd ball in the green drawer and the 4th ball in the yellow drawer.",
        "After putting the 4th ball, she will repeat the above mentioned cycle.",
        "In which drawer will Sarah put the 35th ball?"],
    type : "A",
    diff:1,
    choices:["blue","red","green","yellow"],
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
    title: "Random number generator",
    text:["Suppose we have the following algorithm to generate the next random number.",
        "x -> (x+3) modulo 10",
        "If we begin with the number 5, what will be the 9th random number?",],
    type:"B",
    diff:2,
    correctAnswer : "9"
}

let randomNumberGenerator2 = {
    title: "Random number generator",
    text:["Suppose we have the following algorithm to generate the next random number.",
        "x -> (x*3) modulo 15",
        "If we begin with the number 4, what will be the 8th random number?",],
    type:"B",
    diff:3,
    correctAnswer : "3"
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
algoExercises.push(ballsAndDrawers);
algoExercises.push(runningRace);
algoExercises.push(randomNumberGenerator);
algoExercises.push(randomNumberGenerator2);