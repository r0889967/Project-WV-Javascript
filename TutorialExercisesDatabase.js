let tutorial0 = {
    title: "Check knop",
    text: ["Je hoeft alleen de 'check' knoop te drukken,",
        "druk dan op 'volgende vraag' om deze vraag te voltooien.",
    "Telkens als je klaar bent met een vraag, druk op",
    "die groene knop om naar de volgende vraag te gaan."],
    type: "A",
    diff:0,
    choices: [],
    correctAnswers: [],
}

let tutorial1 = {
    title:"Meerkeuzevraag(1 antwoord)",
    text:["Dit is een meerkeuzevraag, je moet de juiste antwoorden aanduiden.",
        "Om een antwoord te markeren, druk op het antwoord, druk op het nog een keer om het te demarkeren.",
        "Duid het antwoord A aan om de vraag te voltooien.",],
    type:"A",
    diff:0,
    choices : ["A","B","C","D","E"],
    correctAnswers : [0],
}

let tutorial2 = {
    title:"Meerkeuzevraag(Meerdere antwoorden)",
    text:["Dit is een andere meerkeuzevraag, dit keer moet je meerdere antwoorden aanduiden.",
        "Om deze vraag te voltooien, markeer de antwoorden A,C and E",
    "Let op: bij deze vragen moet je altijd alle juist antwoorden aanduiden."],
    type : "A",
    diff:0,
    choices : ["A","B","C","D","E"],
    correctAnswers : [0,2,4],
}

let tutorial3 = {
    title:"Invulvraag(1 antwoord)",
    text:["Dit is een typische invulvraag, je moet jouw antwoord in het onderstaande veld invullen.",
        "Druk op het veld met jouw muis, gebruik jouw toetsenbord om text in te vullen.",
        "Om deze vraag te voltooien, vul a1b2c3 in het veld.",
    "Let op: het antwoord moet exact dezelfde zijn als hierboven!",
    "Plaats dus geen onnodige dingen leestekens of allerlei andere gekke tekens",
    "bij het begin, het einde of tussen het antwoord."],
    type: "B",
    diff:0,
    correctAnswer : "a1b2c3"
}

let tutorial4 = {
    title:"Invulvraag(antwoord met meerdere delen)",
    text:["Als het antwoord uit meerdere delen bestaat, dan moet je tussen elk deel een spatie laten.",
        "Om deze vraag te voltooien, vul 'a1 B2 cd3' in het veld, de volgorde is niet belangrijk.",
    "Er moet mindestens 1 spatie tussen de delen liggen, en het antwoord is ook hoofdletter-gevoelig!",
    "Herhaling: plaats zeker geen overbodige dingen bij jouw antwoord, anders wordt het als fout gerekend."],
    type: "B",
    diff:0,
    correctAnswer : "a1 B2 cd3",
}

let tutorial5 = {
    title:"Drag en drop vraag",
    text:["Dit is een typische drag en drop vraag, je moet de blokken in de juiste volgorde zetten.",
        "Je kunt blokken met jouw muis van het optiesveld naar het antwoordveld draggen.",
        "Je kunt ook blokken van het antwoordveld terug draggen naar het optiesveld.",
        "Om deze vraag te voltooien, breng de blokken in de volgorde 1,2,3,4,5 van links naar rechts in het antwoordveld.",],
    type:"C",
    diff:0,
    choices : ["5","1","2","4","3"],
    correctOrder : ["1","2","3","4","5"],
}

let tutorial6 = {
    title:"Drap en drop vraag",
    text:["Dit is een andere drag en drop vraag, soms heb je niet alle opties nodig.",
        "Om deze vraag te voltooien, breng de blokken in de volgorde 1,2,3 van links naar rechts in het antwoordveld.",
        "Laat blokken die je niet nodig heb in het optiesveld.",],
    type:"C",
    diff:0,
    choices : ["5","1","2","4","3"],
    correctOrder : ["1","2","3"],
}



tutorExercises.push(tutorial0);
tutorExercises.push(tutorial1);
tutorExercises.push(tutorial2);
tutorExercises.push(tutorial3);
tutorExercises.push(tutorial4);
tutorExercises.push(tutorial5);
tutorExercises.push(tutorial6);