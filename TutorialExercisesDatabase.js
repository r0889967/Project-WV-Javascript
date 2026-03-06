let tutorial0 = {
    title: "Check button",
    text: ["You just need to click the 'check' button,",
        "and then click on 'next level' to complete this exercise."],
    type: "A",
    diff:0,
    choices: [],
    correctAnswers: [],
}

let tutorial1 = {
    title:"Type A exercise(single answer)",
    text:["This is a typical type A exercise, you have to mark the correct boxes down below.",
        "To mark a box, simply click on it, click it again to unmark it.",
        "To complete this exercise, simply mark the boxes with A on it.",
        "Once you are done, click the 'check button' to check your answer and go to the next exercise."],
    type:"A",
    diff:0,
    choices : ["A","B","C","D","E"],
    correctAnswers : [0],
}

let tutorial2 = {
    title:"Type A exercise(multiple answers)",
    text:["This is another type A exercise, this time you have to mark multiple boxes.",
        "To complete this exercise, mark the boxes with A,C and E"],
    type : "A",
    diff:0,
    choices : ["A","B","C","D","E"],
    correctAnswers : [0,2,4],
}

let tutorial3 = {
    title:"Type B exercise(single-part answer)",
    text:["This is a typical type B exercise, you have have to enter your answer in the input box below.",
        "To enter the text, simply click on the input box, use your keyboard to enter the text.",
        "To complete this exercise, simply type 'a1b2c3' in the input box.",
        "Once you are done, click the 'check button' to check your answer and go to the next exercise.",],
    type: "B",
    diff:0,
    correctAnswer : "a1b2c3"
}

let tutorial4 = {
    title:"Type B exercise(multiple-parts answer)",
    text:["If the answer consists of multiple parts, then you have to put a single space between each part.",
        "To complete this exercise, type 'a1 B2 cd3' in the input box",],
    type: "B",
    diff:0,
    correctAnswer : "a1 B2 cd3",
}

let tutorial5 = {
    title:"Type C exercise",
    text:["This is a typical type C exercise, you have to arrange boxes in the correct order.",
        "To arrange the boxes, simply drag a box with the mouse from the choices field into the answer field below",
        "You can also drag a box from the answer field back to the choices field.",
        "To complete this exercise, simply arrange the boxes in the order 1,2,3,4,5 from left to right in the answer field.",
        "Once you are done, the click 'check button' to check your answer and go to the next exercise.",],
    type:"C",
    diff:0,
    choices : ["5","1","2","4","3"],
    correctOrder : ["1","2","3","4","5"],
}

let tutorial6 = {
    title:"Type C exercise",
    text:["This is another type C exercise, sometimes you might not need to use all the boxes in the choices field.",
        "To complete this exercise, simply arrange the boxes in the order 1,2,3 from left to right in the answer field.",
        "Leave the boxes that you don't need inside the choices field.",
        "Once you are done, the click 'check button' to check your answer and go to the next exercise.",],
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