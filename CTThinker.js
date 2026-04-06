var selectedExerciseIdx = 0;
var chosenExercises = [];
var chosenExercisesCount = 20;
var limit = 0;
var score = 0;


function getElem(id){
    return document.getElementById(id);
}

function getImage(path){
    return `<img src="${path}" alt="">`;
}

function createButton(class_,id,text,onclickfunc,draggable=false,ondragstart=""){
    return `<button class="${class_}" id="${id}" onclick="${onclickfunc}" 
draggable="${draggable}" ondragstart="${ondragstart}">${text}</button>`;
}

function textLine(text){
    return `<p>${text}</p>`;
}

function emptyLine(count){
    let html = "";
    for(let i = 0; i < count; i++){
        html += "<br>";
    }
    return html;
}

function dragstartHandler(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function dragoverHandler(ev) {
    ev.preventDefault();
}

function dropHandler(ev) {
    ev.preventDefault();
    const data = ev.dataTransfer.getData("text");
    if(ev.target.classList.contains('div2')){
        ev.target.appendChild(getElem(data));
    }
}

function checkAnswerA(){
    let exercise = chosenExercises[selectedExerciseIdx];
    let markedIdxs = [];
    let showAnswer = getElem("showanswer");
    for(let i = 0; i < exercise.choices.length; i++){
        if(getElem(i).classList.contains("marked")){
            markedIdxs.push(i);
        }
    }
    if(markedIdxs.toString()===exercise.correctAnswers.toString()){
        showAnswer.style.color = "green";
        showAnswer.innerHTML = "Het antwoord is juist!";
        score++;
    }else{
        showAnswer.style.color = "red";
        showAnswer.innerHTML = "Het antwoord is fout!";
    }
    showAnswer.innerHTML += createButton("button1","","Volgende vraag","toNextLevel()");

}

function checkAnswerB(input){
    let exercise = chosenExercises[selectedExerciseIdx];
    let showAnswer = getElem("showanswer");
    let trimmedInput = input.trim();
    let answerParts = trimmedInput.split(" ");
    let isCorrect = true;
    if(trimmedInput.length===0){
        isCorrect = false;
    }
    for(let part of answerParts){
        if(!exercise.correctAnswer.includes(part)){
            isCorrect = false;
            break;
        }
    }
    if(isCorrect){
        showAnswer.style.color = "green";
        showAnswer.innerHTML = "Het antwoord is juist!";
        score++;
    }else{
        showAnswer.style.color = "red";
        showAnswer.innerHTML = "Het antwoord is fout!";
    }
    showAnswer.innerHTML += createButton("button1","","Volgende vraag","toNextLevel()");
}

function checkAnswerC(){
    let exercise = chosenExercises[selectedExerciseIdx];
    let showAnswer = getElem("showanswer");
    let currentOrder = [];
    let answerdiv = getElem("answerdiv");
    for(let i = 0; i < answerdiv.childNodes.length; i++){
        currentOrder.push(answerdiv.childNodes[i].textContent);
    }
    if(currentOrder.toString() === exercise.correctOrder.toString()){
        showAnswer.style.color = "green";
        showAnswer.innerHTML = "Het antwoord is juist!";
        score++;
    }else{
        showAnswer.style.color = "red";
        showAnswer.innerHTML = "Het antwoord is fout!";
    }
    showAnswer.innerHTML += createButton("button1","","Volgende vraag","toNextLevel()");
}

function showHint(){
    let exercise = chosenExercises[selectedExerciseIdx]
    let showHint = getElem("showhint");
    showHint.innerHTML = exercise.hint;
}

function pickExercisesMixed(){
    selectedExerciseIdx = 0;
    chosenExercises = [];
    limit = chosenExercisesCount;
    for(let i = 0; i < chosenExercisesCount; i++){
        let moduleIdx = Math.floor(Math.random()*4);
        let exerciseIdx = Math.floor(Math.random()*Exercises[moduleIdx].length);
        let exercise = Exercises[moduleIdx][exerciseIdx];
        while (chosenExercises.includes(exercise)) {
            moduleIdx = Math.floor(Math.random()*4);
            exerciseIdx = Math.floor(Math.random()*Exercises[moduleIdx].length);
            exercise = Exercises[moduleIdx][exerciseIdx];
        }
        chosenExercises.push(exercise);
    }
    chosenExercises.sort((a, b) => {
        const diff1 = a.diff;
        const diff2 = b.diff;
        if (diff1 < diff2) {
            return -1;
        }
        if (diff1 > diff2) {
            return 1;
        }
        return 0;
    })
}

function pickExercises(moduleIdx,scramble=true){
    selectedExerciseIdx = 0;
    limit = Exercises[moduleIdx].length;
    chosenExercises = [];
    if(scramble) {
        for (let i = 0; i < Math.min(limit, chosenExercisesCount); i++) {
            let randomExerciseIdx = Math.floor(Math.random() * (limit));
            let exercise = Exercises[moduleIdx][randomExerciseIdx];
            while (chosenExercises.includes(exercise)) {
                randomExerciseIdx = Math.floor(Math.random() * (limit));
                exercise = Exercises[moduleIdx][randomExerciseIdx];
            }
            chosenExercises.push(exercise)
        }
    }else{
        chosenExercises = Exercises[moduleIdx];
    }
    chosenExercises.sort((a, b) => a.diff - b.diff);
}

function loadTypeAExercise(choices){
    let html = "";
    html += textLine("Duid de juiste antwoord(en) aan.");
    html += emptyLine(1);
    let buttonIdx = 0;
    for(let choice of choices) {
        html += createButton("button2", buttonIdx, choice, `getElem(${buttonIdx}).classList.toggle('marked')`);
        if(buttonIdx%2===1) {
            html += emptyLine(1);
        }
        buttonIdx++;
    }
    html += emptyLine(1);
    html += createButton("button3","checkbutton","Check",
        `checkAnswerA();getElem('checkbutton').disabled=true`);
    return html;
}

function loadTypeBExercise(){
    let html = "";
    html += textLine(`Vul hier jouw antwoord(en):<input class="input1" id="inputprompt" >`);
    html += createButton("button3","checkbutton","Check",
        `checkAnswerB(getElem('inputprompt').value);getElem('checkbutton').disabled=true`);
    return html;
}

function loadTypeCExercise(choices){
    let html = "";
    html += textLine(`Plaats de blokken in de juiste volgorde van links naar rechts.`);
    html += emptyLine(1);
    let buttonIdx = 0;
    html += textLine("Optiesveld");
    html += "<div class='div2' id='choicesdiv' ondrop='dropHandler(event)' ondragover='dragoverHandler(event)'>";
    for(let choice of choices){
        html += createButton("button2",buttonIdx,choice, "",true,
            "dragstartHandler(event)");
        buttonIdx++;
    }
    html += "</div>";
    html += emptyLine(2);
    html += textLine("Antwoordveld");
    html += "<div class='div2' id='answerdiv' ondrop='dropHandler(event)' ondragover='dragoverHandler(event)'></div>";
    html += emptyLine(1);
    html += createButton("button3","checkbutton","Check",
        `checkAnswerC();getElem('checkbutton').disabled=true`);
    return html;
}


function toNextLevel(){
    selectedExerciseIdx++;
    if(selectedExerciseIdx < Math.min(limit,chosenExercisesCount)) {
        loadExerciseContents();
    }else{
        loadFinishedScreen();
    }
}

function loadFinishedScreen(){
    getElem("level").innerHTML = "";
    let html = "";
    html += "<h1>Result</h1>";
    html += textLine("Je hebt alle vragen voltooid.");
    html += textLine(`Jouw score is ${score}/${Math.min(limit,chosenExercisesCount)}`)
    html += emptyLine(3);
    html += createButton("button1", "", "Module Selectie", "returnToModuleSelection();score=0;"
        );
    getElem("finished").innerHTML = html;
}

function loadExerciseContents(){
    getElem("mainmenu").innerHTML = "";
    let exercise = chosenExercises[selectedExerciseIdx]
    let level = getElem("level");
    let html = "";
    if(exercise){
        getElem("levelselection").innerHTML = "";
        let t = exercise.title+"("+(selectedExerciseIdx+1)+"/"+chosenExercises.length+")";
        html += `<h1>${t}</h1>`
        for (let line of exercise.text) {
            html += textLine(`${line}`);
        }
        html += emptyLine(1);
        if(exercise.image){
            html += getImage(exercise.image);
        }
        if(exercise.type==='A'){
            html += loadTypeAExercise(exercise.choices);
        }
        else if(exercise.type==='B') {
            html += loadTypeBExercise();
        }
        else if(exercise.type==='C'){
            html += loadTypeCExercise(exercise.choices);
        }
        if(exercise.hint) {
            html += createButton("button4", "hintbutton", "Hint",
                "showHint();getElem('hintbutton').disabled=true");
        }
        html += emptyLine(1);
        html += `<p id="showhint"></p>`;
        html += `<p id="showanswer"></p>`;
        html += emptyLine(3);
        html += createButton("button1","","Module Selectie","returnToModuleSelection();score=0");
        level.innerHTML = html;
    }
}

function loadModuleSelectionScreen(){
    getElem("mainmenu").innerHTML = "";
    let levelselection = getElem("levelselection");
    let html = "";
    html += "<h1>Module Selectie</h1>"
    html += textLine("Kies een module om te beginnen")
    html += emptyLine(1);
    html += textLine("Module 1: Abstractie");
    html += createButton("button1","","Abstractie",
        `pickExercises(0);loadExerciseContents()`);

    html += emptyLine(2);
    html += textLine("Module 2: Decompositie");
    html += createButton("button1","","Decompositie",
        `pickExercises(1);loadExerciseContents()`);

    html += emptyLine(2);
    html += textLine("Module 3: Patroonherkenning")
    html += createButton("button1","","Patroonherkenning",
        `pickExercises(2);loadExerciseContents()`);

    html += emptyLine(2);
    html += textLine("Module 4: Algorithmisch denken");
    html += createButton("button1","","Algorithmisch denken",
        `pickExercises(3);loadExerciseContents()`);

    html += emptyLine(2);
    html += textLine("Module 5: Geïntegreerde oefeningen");
    html += createButton("button1","","Geïntegreerde oefeningen",
        "pickExercisesMixed();loadExerciseContents()");

    html += emptyLine(2);
    html += "<p>Maak je eigen module: </p>";
    html += createButton("button1","","Aangepaste oefenset",
        "loadCustomSelectionScreen()");

    html += emptyLine(2);
    html += createButton("button1","","Hoofdmenu","returnToMainMenu()");

    levelselection.innerHTML = html;
}

function returnToModuleSelection(){
    getElem("level").innerHTML = "";
    getElem("finished").innerHTML = "";
    loadModuleSelectionScreen();
}

function loadInfoScreen(){
    getElem("mainmenu").innerHTML = "";
    let info = getElem("info");
    let html = "";
    html += "<h1>Over CTThinker</h1>";
    html += "<p>CTThinker is een tool om de computationele denkvaardigheden bij leerlingen van de tweede graad te verbeteren.</p>";
    html += "<p>De tool bevat 5 modules gebaseerd op het PRADA-model van Computationeel Denken:<\p>"
    html += emptyLine(1);
    html += "<p>Module 1: Abstractie<\p>"
    html += "<p>Module 2: Decompositie<\p>"
    html += "<p>Module 3: Patroonherkenning<\p>"
    html += "<p>Module 4: Algoritmisch denken<\p>"
    html += "<p>Module 5: Geïntegreerde oefeningen<\p>"
    html += emptyLine(1);
    html += "<p>Je kan beginnen met een module naar keuze, maar we raden aan module 5 als laatste te doen.</p>"
    html += "<p>Je krijgt een aantal willekeurige en vaste oefeningen van de geselecteerde module</p>"
    html += emptyLine(1);
    html += "<p> Er zijn drie soorten oefeningen in de tool:<\p>"
    html += "<p>Type 1: Meerkeuze</p>";
    html += "<p>Type 2: Invuloefeningen</p>";
    html += "<p>Type 3: Interactieve sleepoefeningen (Drag and Drop)</p>";
    html += emptyLine(1);
    html += "<p>Je krijgt feedback na het beantwoorden van elke vraag, zodat je de oplossing goed begrepen hebt.</p>"
    html += createButton("button1","","Hoofdmenu","returnToMainMenu()");
    info.innerHTML = html;
}

function loadMainMenu(){
    let mainmenu = getElem("mainmenu");
    let html = "";
    html += "<h1>CTThinker</h1>";
    html += textLine("Een tool om computationele denkvaardigheden te verbeteren!");
    html += textLine("Door David Jiawei Wang en Senne Bosmans");
    html += textLine("Begin met de tutorial.");
    html += emptyLine(3);
    html += createButton("button1","","Start","loadModuleSelectionScreen()");
    html += emptyLine(4);
    html += createButton("button1","","Tutorial",
        `pickExercises(4,false);loadExerciseContents()`);
    html += emptyLine(4);
    html += createButton("button1","","Over CTThinker","loadInfoScreen()");
    mainmenu.innerHTML = html;
}

function returnToMainMenu() {
    getElem("info").innerHTML = "";
    getElem("levelselection").innerHTML = "";
    getElem("level").innerHTML = "";
    getElem("finished").innerHTML = "";
    loadMainMenu();
}

function loadCustomSelectionScreen(){
    getElem("mainmenu").innerHTML = "";
    let html = "";

    html += "<h1>Aangepaste oefenset</h1>";
    html += textLine("Kies het aantal oefeningen per element:");

    html += emptyLine(1);

    // max aantal oefeningen per module: 28, 25, 30, 23 (afhankelijk van hoeveel we er uiteindelijk in elke module steken, maar dit zijn de huidige aantallen)
    html += "Abstractie: <input class='input1' id='input0' type='number' onkeydown='return false' min='0' max='28' value='0'><br>";
    html += "Decompositie: <input class='input1' id='input1' type='number' onkeydown='return false' min='0' max='25' value='0'><br>";
    html += "Patroonherkenning: <input class='input1' id='input2' type='number' onkeydown='return false' min='0' max='30' value='0'><br>";
    html += "Algoritmisch denken: <input class='input1' id='input3' type='number' onkeydown='return false' min='0' max='23' value='0'><br>";

    html += emptyLine(2);

    html += createButton("button3","","Start","startCustomExercises()");
    html += emptyLine(2);
    html += createButton("button1","","Hoofdmenu","returnToMainMenu()");

    getElem("levelselection").innerHTML = html;
}

function startCustomExercises(){
    selectedExerciseIdx = 0;
    chosenExercises = [];

    let counts = [
        parseInt(getElem("input0").value) || 0,
        parseInt(getElem("input1").value) || 0,
        parseInt(getElem("input2").value) || 0,
        parseInt(getElem("input3").value) || 0
    ];

    for(let moduleIdx = 0; moduleIdx < 4; moduleIdx++){
        let moduleExercises = Exercises[moduleIdx];

        for(let i = 0; i < counts[moduleIdx]; i++){
            let randomExercise = moduleExercises[Math.floor(Math.random()*moduleExercises.length)];

            while(chosenExercises.includes(randomExercise)){
                randomExercise = moduleExercises[Math.floor(Math.random()*moduleExercises.length)];
            }

            chosenExercises.push(randomExercise);
        }
    }

    limit = chosenExercises.length;

    // sorteer op moeilijkheid
    chosenExercises.sort((a, b) => a.diff - b.diff);

    loadExerciseContents();
}
