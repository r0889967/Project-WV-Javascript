let stoneGame = {
    title:"Steen spel",
    text:["Alice en Bob spelen een spel waarbij een aantal stenen op een tafel liggen.",
        "Beide spelers nemen om de beurt 1, 2 of 3 stenen van de tafel. De speler die de laatste steen wegneemt, verliest het spel.",
        "Stel dat er aan het begin 7 stenen liggen, beide spelers optimaal spelen en Alice begint, ",
        "hoeveel stenen moet Alice wegnemen op haar eerste beurt zodat zij 100% kan winnen?"],
    type:"A",
    diff:3,
    hint:"Je wil dat er alleen maar 1 steen overblijft bij Bob's beurt.",
    choices:["1 steen","2 stenen","3 stenen","Alice kan nooit 100% winnen hoe dan ook."],
    correctAnswers : [1],
    fb2:"Probeer het spel stap voor stap uit te spelen met de verschillende mogelijkheden voor beide spelers op elke beurt!"
}

let numberPyramid = {
    title:"Getallenpiramide",
    text:["Gegeven onderstaande piramide met getallen, er missen een paar getallen",
        "Welke getallen missen er? Vul ze allemaal in."],
    image: "images/getallenpiramide.png",
    type:"B",
    diff:1,
    correctAnswer:"3 3 4 4 10 10",
    fb1:"Dit wordt ook de driehoek van Pascal genoemd."
}



integExercises.push(stoneGame);//decomposition+algoritme
integExercises.push(numberPyramid);//patroon+algoritme