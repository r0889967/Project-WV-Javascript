var selectedExerciseIdx = 0;
var chosenExercises = [];
var chosenExercisesCount = 20;
var limit = 0;
var score = 0;

function getElem(id){
    return document.getElementById(id);
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

function toNextLevel(){
    selectedExerciseIdx++;
    if(selectedExerciseIdx < Math.min(limit,chosenExercisesCount)) {
        loadExerciseContents();
    }else{
        loadFinishedScreen();
    }
}

function loadFinishedScreen(tutorial){
    getElem("level").innerHTML = "";
    let html = "";
    html += "<h1>Result</h1>";
    html += textLine("You have finished all exercises.");
    html += textLine(`Your score is ${score}/${Math.min(limit,chosenExercisesCount)}`)
    html += emptyLine(3);
    html += createButton("button1", "", "Module Selection", "returnToModuleSelection();score=0");
    getElem("finished").innerHTML = html;
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
        showAnswer.innerHTML = "The answer is correct!";
        score++;
    }else{
        showAnswer.style.color = "red";
        showAnswer.innerHTML = "The answer is incorrect!";
    }
    showAnswer.innerHTML += createButton("button1","","Next Level","toNextLevel()");

}

function checkAnswerB(input){
    let exercise = chosenExercises[selectedExerciseIdx];
    let showAnswer = getElem("showanswer");
    if(input===exercise.correctAnswer){
        showAnswer.style.color = "green";
        showAnswer.innerHTML = "The answer is correct!";
        score++;
    }else{
        showAnswer.style.color = "red";
        showAnswer.innerHTML = "The answer is incorrect!";
    }
    showAnswer.innerHTML += createButton("button1","","Next Level","toNextLevel()");
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
        showAnswer.innerHTML = "The answer is correct!";
        score++;
    }else{
        showAnswer.style.color = "red";
        showAnswer.innerHTML = "The answer is incorrect!";
    }
    showAnswer.innerHTML += createButton("button1","","Next Level","toNextLevel()");
}

function showHint(){
    let exercise = chosenExercises[selectedExerciseIdx]
    let showHint = getElem("showhint");
    showHint.innerHTML = exercise.hint;
}

function pickExercises(moduleIdx,scramble=true){
    selectedExerciseIdx = 0;
    limit = Exercises[moduleIdx].length;
    chosenExercises = [];
    if(scramble) {
        for (var i = 0; i < Math.min(limit, chosenExercisesCount); i++) {
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

function loadTypeAExercise(choices){
    let html = "";
    html += textLine("Please mark the correct box(es)");
    html += emptyLine(1);
    let buttonIdx = 0;
    for(let choice of choices) {
        html += createButton("button2",buttonIdx,choice,`getElem(${buttonIdx}).classList.toggle('marked')`);
        html += emptyLine(1);
        buttonIdx++;
    }
    html += emptyLine(1);
    html += createButton("button3","checkbutton","Check",
        `checkAnswerA();getElem('checkbutton').disabled=true`);
    return html;
}

function loadTypeBExercise(){
    let html = "";
    html += textLine(`Please enter your answer:<input class="input1" id="inputprompt" >`);
    html += createButton("button3","checkbutton","Check",
        `checkAnswerB(getElem('inputprompt').value);getElem('checkbutton').disabled=true`);
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
        ev.target.appendChild(document.getElementById(data));
    }
}

function loadTypeCExercise(choices){
    let html = "";
    html += textLine(`Please drag the boxes in the field down below in the correct order from left to right`);
    html += emptyLine(1);
    let buttonIdx = 0;
    html += textLine("Choices field");
    html += "<div class='div2' id='choicesdiv' ondrop='dropHandler(event)' ondragover='dragoverHandler(event)'>";
    for(let choice of choices){
        html += createButton("button2",buttonIdx,choice, "",true,
            "dragstartHandler(event)");
        buttonIdx++;
    }
    html += "</div>";
    html += emptyLine(2);
    html += textLine("Answer field");
    html += "<div class='div2' id='answerdiv' ondrop='dropHandler(event)' ondragover='dragoverHandler(event)'></div>";
    html += emptyLine(1);
    html += createButton("button3","checkbutton","Check",
        `checkAnswerC();getElem('checkbutton').disabled=true`);
    return html;
}

function loadExerciseContents(){
    getElem("mainmenu").innerHTML = "";
    let exercise = chosenExercises[selectedExerciseIdx]
    let level = getElem("level");
    let html = "";
    if(exercise != null){
        getElem("levelselection").innerHTML = "";
        let t = exercise.title+"("+(selectedExerciseIdx+1)+"/"+chosenExercises.length+")";
        html += `<h1>${t}</h1>`
        for (let line of exercise.text) {
            html += textLine(`${line}`);
        }
        html += emptyLine(1);
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
        html += createButton("button1","","Module Selection","returnToModuleSelection();");
        level.innerHTML = html;
    }
}

function loadModuleSelectionScreen(){
    getElem("mainmenu").innerHTML = "";
    let levelselection = getElem("levelselection");
    let html = "";
    html += "<h1>Module Selection</h1>"
    html += "<p>Selecteer een module:</p>";
    html += emptyLine(1);
    html += "<p>Module 1:</p>";
    html += createButton("button1","","Abstractie",
        `pickExercises(0);loadExerciseContents()`);

    html += emptyLine(2);
    html += "<p>Module 2:</p>";
    html += createButton("button1","","Decompositie",
        `pickExercises(1);loadExerciseContents()`);

    html += emptyLine(2);
    html += "<p>Module 3: </p>";
    html += createButton("button1","","Patroonherkenning",
        `pickExercises(2);loadExerciseContents()`);

    html += emptyLine(2);
    html += "<p>Module 4: </p>";
    html += createButton("button1","","Algoritmisch denken",
        `pickExercises(3);loadExerciseContents()`);

    html += emptyLine(2);
    html += "<p>Module 5: </p>";
    html += createButton("button1","","Geïntegreerde oefeningen",
        "");

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
    html += "<p>CTThinker is een tool om computationele denkvaardigheden bij leerlingen van de tweede graad te verbeteren.</p>";
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
    html += textLine("Een tool om computationeele denkvaardigheden te verbeteren!");
    html += textLine("Door David Jiawei Wang en Senne Bosmans");
    html += textLine("Begin met de tutorial.");
    html += emptyLine(3);
    html += createButton("button1","","Start","loadModuleSelectionScreen()");
    html += emptyLine(4);
    html += createButton("button1","","Tutorial",
        `pickExercises(5,false);loadExerciseContents()`);
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




