var selectedExerciseIdx = 0;
var chosenExercises = [];
var chosenExercisesCount = 20;
var limit = 0;
var score = 0;
var selectedButton1 ;
var selectedButton2;


function loadMainMenu(){
    let mainmenu = getElem("mainmenu");
    let html = "";
    html += "<h1>CTThinker</h1>";
    html += "<p>A great tool to boost computional thinking</p>";
    html += "<p>Made by David Jiawei Wang and Senne Bosmans</p>";
    html += "<p>If it is your first time playing, please play the tutorial first.</p>";
    html += emptyLine(3);
    html += createButton("button1","","Start Game","loadModuleSelectionScreen()");
    html += emptyLine(4);
    html += createButton("button1","","Tutorial",
        `pickExercises(5,false);loadExerciseContents()`);
    html += emptyLine(4);
    html += createButton("button1","","About CTThinker","loadInfoScreen()");
    mainmenu.innerHTML = html;
}

function swapButtons(buttonIdx) {
    if(selectedButton1===undefined){
        selectedButton1 = getElem(buttonIdx);
    }else{
        selectedButton2 = getElem(buttonIdx);
        selectedButton1.classList.remove("marked");
        selectedButton2.classList.remove("marked");
        let tmp = selectedButton1.innerText;
        selectedButton1.innerText = selectedButton2.innerText;
        selectedButton2.innerText = tmp;
        selectedButton1 = undefined;
        selectedButton2 = undefined;
    }

}

function getElem(id){
    return document.getElementById(id);
}

function createButton(class_,id,text,onclickfunc){
    return `<button class="${class_}" id="${id}" onclick="${onclickfunc}">${text}</button>`;
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
    html += "<p>You have finished all exercises.</p>"
    html += `<p>Your score is ${score}/${Math.min(limit,chosenExercisesCount)}</p>`
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
    for(let i = 0; i < exercise.choices.length; i++){
        currentOrder.push(getElem(i).innerText);
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
}

function loadTypeAExercise(choices){
    let html = "";
    html += `<p>Please mark the correct boxes</p>`;
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
    html += `<p>Please enter your answer:<input class="input1" id="inputprompt" ></p>`;
    html += createButton("button3","checkbutton","Check",
        `checkAnswerB(getElem('inputprompt').value);getElem('checkbutton').disabled=true`);
    return html;
}

function loadTypeCExercise(choices){
    let html = "";
    html += `<p>Please put the boxes in the correct order from left to right</p>`;
    html += emptyLine(1);
    let buttonIdx = 0;
    for(let choice of choices){
        html += createButton("button2",buttonIdx,choice,
            `getElem(${buttonIdx}).classList.toggle('marked');swapButtons('${buttonIdx}')`);
        buttonIdx++;
    }
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
        html += `<h1>${exercise.title}</h1>`
        for (let line of exercise.text) {
            html += `<p>${line}</p>`;
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
        html += emptyLine(1);
        html += `<p id="showanswer"></p>`;
        html += emptyLine(3);
        html += createButton("button1","","Module Selection","returnToModuleSelection()");
        level.innerHTML = html;
    }
}

function returnToModuleSelection(){
    getElem("level").innerHTML = "";
    getElem("finished").innerHTML = "";
    loadModuleSelectionScreen();
}


function loadModuleSelectionScreen(){
    getElem("mainmenu").innerHTML = "";
    let levelselection = getElem("levelselection");
    let html = "";
    html += "<h1>Module Selection</h1>"
    html += "<p>Please select a module to play</p>";
    html += emptyLine(1);
    html += "<p>Module 1: Abstraction</p>";
    html += createButton("button1","","Abstraction Exercises",
        `pickExercises(0);loadExerciseContents()`);

    html += emptyLine(2);
    html += "<p>Module 2: Decomposition</p>";
    html += createButton("button1","","Decomposition Exercises",
        `pickExercises(1);loadExerciseContents()`);

    html += emptyLine(2);
    html += "<p>Module 3: Pattern recognization</p>";
    html += createButton("button1","","Pattern Exercises",
        `pickExercises(2);loadExerciseContents()`);

    html += emptyLine(2);
    html += "<p>Module 4: Algorithmic thinking</p>";
    html += createButton("button1","","Algorithm Exercises",
        `pickExercises(3);loadExerciseContents()`);

    html += emptyLine(2);
    html += "<p>Module 5: Integrated exercisesDatabase</p>";
    html += createButton("button1","","Integrated Exercises",
        "");

    html += emptyLine(2);
    html += createButton("button1","","Main Menu","returnToMainMenu()");

    levelselection.innerHTML = html;
}

function loadInfoScreen(){
    getElem("mainmenu").innerHTML = "";
    let info = getElem("info");
    let html = "";
    html += "<h1>About CTThinker</h1>";
    html += "<p>CTThinker is a tool developed to teach students vital computational thinking skills.</p>";
    html += "<p>The tool contains 5 modules with challenging levels in each module.<\p>"
    html += emptyLine(1);
    html += "<p>Module 1 focuses on abstraction<\p>"
    html += "<p>Module 2 focuses on decomposition<\p>"
    html += "<p>Module 3 focuses on patterns<\p>"
    html += "<p>Module 4 focuses on algorithmic thinking<\p>"
    html += "<p>Module 5 combines the previous 4 skills<\p>"
    html += emptyLine(1);
    html += "<p>You can choose a module to start</p>"
    html += "<p>You will then be presented with a few random exercisesDatabase from that module</p>"
    html += "<p>There are different types of exercisesDatabase</p>"
    html += emptyLine(1);
    html += "<p>Type A: Mark one or more answers from the given options</p>";
    html += "<p>Type B: Enter the correct answer inside an input prompt</p>";
    html += "<p>Type C: Drag a few blocks into the right order</p>";
    html += emptyLine(1);
    html += "<p>The tool also provides feedbacks after completing each exercise<\p>"
    html += "<p>to help students understand the solution.</p>"
    html += createButton("button1","","Main Menu","returnToMainMenu()");
    info.innerHTML = html;
}

function returnToMainMenu() {
    getElem("info").innerHTML = "";
    getElem("levelselection").innerHTML = "";
    getElem("level").innerHTML = "";
    getElem("finished").innerHTML = "";
    loadMainMenu();
}




