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
        `checkAnswerA();this.disabled=true`);
    return html;
}

function loadTypeBExercise(){
    let html = "";
    html += textLine(`Vul hier jouw antwoord(en):<input class="input1" id="inputprompt" >`);
    html += createButton("button3","checkbutton","Check",
        `checkAnswerB(getElem('inputprompt').value);this.disabled=true`);
    return html;
}

function loadTypeCExercise(choices){
    let html = "";
    html += textLine(`Plaats de blokken in de juiste volgorde van links naar rechts.`);
    html += emptyLine(1);
    let buttonIdx = 0;
    html += textLine("Optieveld");
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
        `checkAnswerC();this.disabled=true`);
    return html;
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
                "showHint();this.disabled=true");
        }
        html += emptyLine(1);
        html += `<p id="showhint"></p>`;
        html += `<p id="showanswer"></p>`;
        html += `<p id="showfeedback1"></p>`;
        html += `<p id="showfeedback2"></p>`;
        html += emptyLine(3);
        html += `<h2>Moeilijkheidsgraad: ${exercise.diff} </h2>`
        html += `<h2>Huidige score: ${score}/${chosenExercises.length} </h2>`
        html += createButton("button1","","Module Selectie","returnToModuleSelection();score=0");
        level.innerHTML = html;
    }
}

function startCustomExercises(){
    selectedExerciseIdx = 0;
    chosenExercises = [];

    let counts = [
        parseInt(getElem("input0").value) || 0,
        parseInt(getElem("input1").value) || 0,
        parseInt(getElem("input2").value) || 0,
        parseInt(getElem("input3").value) || 0,
        parseInt(getElem("input4").value) || 0,
    ];

    for(let moduleIdx = 0; moduleIdx < 5; moduleIdx++){
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