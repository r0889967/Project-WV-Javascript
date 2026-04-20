var selectedExerciseIdx = 0;
var chosenExercises = [];
var chosenExercisesMaxCount = 20;
var score = 0;

function showHint(){
    let exercise = chosenExercises[selectedExerciseIdx]
    let showHint = getElem("showhint");
    showHint.innerHTML = exercise.hint;
}

// function pickExercisesMixed(){
//     selectedExerciseIdx = 0;
//     chosenExercises = [];
//     limit = chosenExercisesMaxCount;
//     for(let i = 0; i < chosenExercisesMaxCount; i++){
//         let moduleIdx = Math.floor(Math.random()*4);
//         let exerciseIdx = Math.floor(Math.random()*Exercises[moduleIdx].length);
//         let exercise = Exercises[moduleIdx][exerciseIdx];
//         while (chosenExercises.includes(exercise)) {
//             moduleIdx = Math.floor(Math.random()*4);
//             exerciseIdx = Math.floor(Math.random()*Exercises[moduleIdx].length);
//             exercise = Exercises[moduleIdx][exerciseIdx];
//         }
//         chosenExercises.push(exercise);
//     }
//     chosenExercises.sort((a, b) => a.diff - b.diff);
// }

function pickExercises(moduleIdx,scramble=true){
    selectedExerciseIdx = 0;
    let totalExercisesCount = Exercises[moduleIdx].length;
    let actualChosenExercisesCount = Math.min(chosenExercisesMaxCount, totalExercisesCount);
    chosenExercises = [];
    if(scramble) {
        for (let i = 0; i < actualChosenExercisesCount; i++) {
            let randomExerciseIdx = Math.floor(Math.random() * actualChosenExercisesCount);
            let exercise = Exercises[moduleIdx][randomExerciseIdx];
            while (chosenExercises.includes(exercise)) {
                randomExerciseIdx = Math.floor(Math.random() * actualChosenExercisesCount);
                exercise = Exercises[moduleIdx][randomExerciseIdx];
            }
            chosenExercises.push(exercise)
        }
    }else{
        chosenExercises = Exercises[moduleIdx];
    }
    chosenExercises.sort((a, b) => a.diff - b.diff);
}

function toNextLevel(){
    selectedExerciseIdx++;
    if(selectedExerciseIdx < chosenExercises.length) {
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
    html += textLine(`Jouw score is ${score}/${chosenExercises.length}`)
    html += emptyLine(3);
    html += createButton("button1", "", "Module Selectie", "returnToModuleSelection();score=0;"
        );
    getElem("finished").innerHTML = html;
}



function loadModuleSelectionScreen(){
    getElem("mainmenu").innerHTML = "";
    let levelselection = getElem("levelselection");
    let html = "";
    let moduleNames = ["Abstractie","Decompositie","Patroonherkenning","Algoritmen",
    "Geïntegreerde oefeningen"];
    html += "<h1>Module Selectie</h1>"
    html += textLine("Kies een module om te beginnen");

    for(let i=0;i<moduleNames.length;i++){
        html += emptyLine(2);
        html += textLine(`Module ${i+1}: ${moduleNames[i]}`);
        html += createButton("button1","",moduleNames[i],
            `pickExercises(${i});loadExerciseContents()`);
    }

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
    let moduleNames = ["Abstractie","Decompositie","Patroonherkenning","Algoritmen",
        "Geïntegreerde oefeningen"];
    for(let i=0;i<moduleNames.length;i++){
        html += textLine(`Module ${i+1}: ${moduleNames[i]}`);
    }
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

function loadCustomSelectionScreen(){
    getElem("mainmenu").innerHTML = "";
    let html = "";

    html += "<h1>Aangepaste oefenset</h1>";
    html += textLine("Kies het aantal oefeningen per element:");

    html += emptyLine(1);

    html += `Abstractie: <input class='input1' id='input0' type='number' onkeydown='return false' min='0' max=${abExercises.length} value='0'><br>`;
    html += `Decompositie: <input class='input1' id='input1' type='number' onkeydown='return false' min='0' max=${decExercises.length} value='0'><br>`;
    html += `Patroonherkenning: <input class='input1' id='input2' type='number' onkeydown='return false' min='0' max=${patExercises.length} value='0'><br>`;
    html += `Algoritmisch denken: <input class='input1' id='input3' type='number' onkeydown='return false' min='0' max=${algoExercises.length} value='0'><br>`;

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

    // sorteer op moeilijkheid
    chosenExercises.sort((a, b) => a.diff - b.diff);
    loadExerciseContents();
}
