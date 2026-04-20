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
        showAnswer.innerHTML = "Je hebt alle juiste antwoorden aangeduid!";
        if(exercise.fb1){
            let showFeedback1 = getElem("showfeedback1");
            showFeedback1.innerHTML = exercise.fb1;
        }
        score++;
    }else{
        let splittedMarkedIdxsString = markedIdxs.toString().split(",");
        let partialCorrect = true;
        for(let idx of splittedMarkedIdxsString){
            if(!exercise.correctAnswers.toString().includes(idx)){
                partialCorrect = false;
                break;
            }
        }
        if(partialCorrect){
            showAnswer.style.color = "orange";
            showAnswer.innerHTML = "Je hebt niet alle juiste antwoorden aangeduid!";
            score += markedIdxs.length/exercise.correctAnswers.length;
        }else {
            showAnswer.style.color = "red";
            showAnswer.innerHTML = "Je hebt foute antwoorden aangeduid!";
        }
        if(exercise.fb2){
            let showFeedback2 = getElem("showfeedback2");
            showFeedback2.innerHTML = exercise.fb2;
        }
    }
    showAnswer.innerHTML += createButton("button1","","Volgende vraag","toNextLevel()");

}

function checkAnswerB(input){
    let exercise = chosenExercises[selectedExerciseIdx];
    let showAnswer = getElem("showanswer");
    let trimmedInput = input.trim();
    let answerParts = trimmedInput.split(" ");
    let isCorrect = true;
    let partialCorrect = true;
    if(trimmedInput.length===0){
        isCorrect = false;
        partialCorrect = false;
    }
    let inputLen = 0;
    for(let part of answerParts){
        if(!exercise.correctAnswer.includes(part)){
            isCorrect = false;
            partialCorrect = false;
            break;
        }
        if(part!=='') {
            inputLen++;
        }
    }
    if(inputLen<exercise.correctAnswer.split(" ").length){
        isCorrect = false;
    }
    if(isCorrect){
        showAnswer.style.color = "green";
        showAnswer.innerHTML = "Het antwoord is juist!";
        score++;
        if(exercise.fb1){
            let showFeedback1 = getElem("showfeedback1");
            showFeedback1.innerHTML = exercise.fb1;
        }
    }else{
        if(partialCorrect){
            showAnswer.style.color = "orange";
            showAnswer.innerHTML = "Het antwoord is juist, maar onvolledig!"
            score += inputLen/exercise.correctAnswer.split(" ").length;
        }else {
            showAnswer.style.color = "red";
            showAnswer.innerHTML = "Het antwoord is fout!";
        }
        if(exercise.fb2){
            let showFeedback2 = getElem("showfeedback2");
            showFeedback2.innerHTML = exercise.fb2;

        }
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
        showAnswer.innerHTML = "De volgorde is juist!";
        score++;
        if(exercise.fb1){
            let showFeedback1 = getElem("showfeedback1");
            showFeedback1.innerHTML = exercise.fb1;
        }
    }else{
        showAnswer.style.color = "red";
        showAnswer.innerHTML = "De volgorde is fout!";
        if(exercise.fb2){
            let showFeedback2 = getElem("showfeedback2");
            showFeedback2.innerHTML = exercise.fb2;
        }
    }
    showAnswer.innerHTML += createButton("button1","","Volgende vraag","toNextLevel()");
}