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
    if(input.trim()===exercise.correctAnswer){
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
    for(let i = 0; i < chosenExercisesCount; i++){
        let moduleIdx = Math.floor(Math.random()*4);
        let exerciseIdx = Math.floor(Math.random()*Exercises[moduleIdx].length);
        let exercise = Exercises[moduleIdx][exerciseIdx];
        while (chosenExercises.includes(exercise)) {
            moduleIdx = Math.floor(Math.random()*4);
            exerciseIdx = Math.floor(Math.random() * (limit));
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
    html += textLine("Duid de juiste antwoord(en) aan.");
    html += emptyLine(1);
    let buttonIdx = 0;
    let i = 0;
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

function loadFinishedScreen(tutorial){
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
        html += createButton("button1","","Module Selectie","returnToModuleSelection();");
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
    html += textLine("Module 5: Integreerde vragen");
    html += createButton("button1","","Integreerde vragen",
        "pickExercisesMixed();loadExerciseContents()");

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
    html += textLine("CTThinker is een tool ontwikkeld wordt om studenten computionele denken aan te leren.");
    html += textLine("De tool bevat 5 modules met allerlei vragen.")
    html += emptyLine(1);
    html += textLine("Module 1 gaat over abstractie")
    html += textLine("Module 2 gaat over decompositie")
    html += textLine("Module 3 gaat over patroonherkenning")
    html += textLine("Module 4 gaat over Algorithmisch denken")
    html += textLine("Module 5 is een mix van bovenstaande modules")
    html += emptyLine(1);
    html += textLine("Je kunt een module kiezen om te starten.")
    html += textLine("Elk keer wordt er 20 willekeurige vragen geselecteerd van makkelijk tot moeilijk.")
    html += textLine("Er zijn verschillende types van oefeningen.")
    html += emptyLine(1);
    html += textLine("Meerkeuzevragen: Duid de juiste antwoord(en) aan.")
    html += textLine("Invulvragen: Vul het correcte antwoord(en) in")
    html += textLine("Drag en drop vragen: Blokken plaatsen in de juiste volgorde")
    html += emptyLine(1);
    html += textLine("Sommige oefeningen beschikken over hints en feedbacks")
    html += textLine("om studenten te helpen.")
    html += createButton("button1","","Hoofdmenu","returnToMainMenu()");
    info.innerHTML = html;
}

function loadMainMenu(){
    let mainmenu = getElem("mainmenu");
    let html = "";
    html += "<h1>CTThinker</h1>";
    html += textLine("Een tool om computionele denken te bevorderen");
    html += textLine("Gemaakt door David Jiawei Wang and Senne Bosmans");
    html += textLine("Als het jouw eerste keer is, speel eerst de tutorial");
    html += emptyLine(3);
    html += createButton("button1","","Starten","loadModuleSelectionScreen()");
    html += emptyLine(3);
    html += createButton("button1","","Tutorial",
        `pickExercises(4,false);loadExerciseContents()`);
    html += emptyLine(3);
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




