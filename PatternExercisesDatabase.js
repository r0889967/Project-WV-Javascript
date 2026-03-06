let nextNumberInSeq = {
    title: "Next number in sequence",
    text : ["Given the following sequence of numbers.",
        "2,5,10,17,28,41,58,77,100,129,?",
        "What is the next number in the sequence?",],
    type:"B",
    diff : 3,
    hint: "It has something to do with prime numbers.",
    correctAnswer : "160",
}

let nextNumberInSeq2 = {
    title: "Next number in sequence",
    text:["Given the following sequence of numbers.",
        "5738, 121011, 33112, 6423, 1065, ?",
        "What is the next number in the sequence?",],
    type:"B",
    diff : 2,
    correctAnswer : "1611",
}

let nextNumberInSeq3 = {
    title: "Next number in sequence",
    text:["Given the following sequence of numbers.",
        "27, 9279, 27927927, ?",
        "What is the next number in the sequence?"],
    type:"B",
    diff : 1,
    correctAnswer : "812792792781",
}

let nextNumberInSeq4 = {
    title: "Next number in sequence",
    text:["Given the following sequence of numbers.",
        "0,1,1,2,3,5,8,13,21,34,? ",
        "What is the next number in the sequence?"],
    type:"B",
    diff : 0,
    correctAnswer : "55",
}

let nextNumberInSeq5 = {
    title: "Next number in sequence",
    text:["Given the following sequence of numbers.",
        "2,4,6,18,21,84,88,? ",
        "What is the next number in the sequence?"],
    type:"B",
    diff : 0,
    correctAnswer : "440",
}

let nextNumberInSeq6 = {
    title: "Next number in sequence",
    text:["Given the following sequence of numbers.",
        "2,3,5,7,11,13,17,19,23,29,31,?",
        "What is the next number in the sequence?"],
    type:"B",
    diff : 1,
    correctAnswer : "37",
}

let nextNumberInSeq7 = {
    title: "Next number in sequence",
    text:["Given the following sequence of numbers.",
        "11,121,1331,14641,15101051,?",
        "What is the next number in the sequence?"],
    type:"B",
    diff : 2,
    correctAnswer : "1615201561",
}

let nextNumberInSeq8 = {
    title: "Next number in sequence",
    text:["Given the following sequence of numbers.",
        "2,6,12,20,30,42,56,72,90,110,?",
        "What is the next number in the sequence?"],
    type:"B",
    diff : 2,
    correctAnswer : "132",
}

let nextStrInSeq = {
    title: "Next string in sequence",
    text:["Given the following sequence of strings.",
        "a, abb, cccabb, cccabbdddd, eeeeecccabbdddd, ?",
        "What is the next string in the sequence?",],
    type:"B",
    diff:1,
    correctAnswer : "eeeeecccabbddddffffff",
}

let nextStrInSeq2 = {
    title: "Next string in sequence",
    text:["Given the following sequence of strings.",
        "a, ab, adad, ahahahah, ?",
        "What is the next string in the sequence?",],
    type:"B",
    diff:2,
    correctAnswer : "apapapapapapapap",
}

let nextStrInSeq3 = {
    title: "Next string in sequence",
    text:["Given the following sequence of strings.",
        "a, bab, ccbabcc, dddccbabccddd, ?",
        "What is the next string in the sequence?",],
    type:"B",
    diff:0,
    correctAnswer : "eeeedddccbabccdddeeee",
}

let nextStrInSeq4 = {
    title: "Next string in sequence",
    text:["Given the following sequence of strings.",
        "a, e, i, o, ?",
        "What is the next string in the sequence?",],
    type:"B",
    diff:0,
    correctAnswer : "u",
}

let nextStrInSeq5 = {
    title: "Next string in sequence",
    text:["Given the following sequence of strings.",
        "a,aabb,aaabbbccc,aaaabbbbccccdddd,?",
        "What is the next string in the sequence?",],
    type:"B",
    diff:1,
    correctAnswer : "aaaaabbbbbcccccdddddeeeee",
}

let missingStrInSeq1 = {
    title: "Missing string in sequence",
    text:["Given the following sequence of strings.",
        "a, 11, e, 22, i, 33, o, 44, ?, 55",
        "What is the missing string in the sequence?",],
    type:"B",
    diff:0,
    correctAnswer : "u",
}

let missingStrInSeq2 = {
    title: "Missing strings in sequence",
    text:["Given the following sequence of strings.",
        "a, b, a, ?, c, a, b, ?, ?, a, b, ?, d, e",
        "What are the missing strings in the sequence?",],
    type:"B",
    diff:1,
    correctAnswer : "b c d c",
}

let missingNumberInSeq1 = {
    title: "Missing numbers in sequence",
    text:["Given the following sequence of numbers.",
        "1,?,333,?,?,666666,7777777",
        "What are the missing numbers in the sequence?",],
    type:"B",
    diff:0,
    correctAnswer : "22 4444 55555",
}

let missingNumberInSeq2 = {
    title: "Missing numbers in sequence",
    text:["Given the following sequence of numbers.",
        "3000,?,1000,750,600,?",
        "What are the missing numbers in the sequence?",],
    type:"B",
    diff:1,
    hint:"Think of division.",
    correctAnswer : "1500 500",
}

let missingNumberInSeq3 = {
    title: "Missing numbers in sequence",
    text:["Given the following sequence of numbers.",
        "1,3,6,?,?,?,28,36,45",
        "What are the missing numbers in the sequence?",],
    type:"B",
    diff:0,
    correctAnswer : "10 15 21",
}

let missingNumberInSeq4 = {
    title: "Missing numbers in sequence",
    text:["Given the following sequence of numbers.",
        "1,?,20,3,?,300,4,40,400,4000,?,?",
        "What are the missing numbers in the sequence?",],
    type:"B",
    diff:1,
    correctAnswer : "2 30 5 50",
}

let missingNumberInSeq5 = {
    title: "Missing numbers in sequence",
    text:["Given the following sequence of numbers.",
        "1,?,5,10,20,50,100,?,?,?",
        "What are the missing numbers in the sequence?",],
    type:"B",
    diff:1,
    correctAnswer : "2 200 500 1000",
}

let findPatternSeq1 = {
    title: "Find pattern sequences",
    text:["Observe the sequences below carefully.",
        "Which sequence(s) have a pattern inside them?"],
    type:"A",
    diff:2,
    choices: ["1,123,12345,1234567,123456789","1,10,101,1001,10010,100101,1001011","1,2,4,8,17,33,64,128,256,513","1,10,5,2,11,6,3,12,7,4",
        "1,12,412,4128,164128,16412832","1,8,56,2,7,5,3,9,12,200","1,20,300,4000,50001,600000,7000000"],
    correctAnswers : [0,3,4],
}

let findPatternSeq2 = {
    title: "Find pattern sequences",
    text:["Observe the sequences below carefully.",
        "Which sequence(s) have a pattern inside them?"],
    type:"A",
    diff:1,
    choices: ["1,5,10,50,100,500","1,5,10,15,150,500","1,15,50,100,115,150","1,10,15,50,115,155",
        "1,15,10,150,100,1500"],
    correctAnswers : [0,2,4],
}

let findPatternSeq3 = {
    title: "Find pattern sequences",
    text:["Observe the sequences below carefully.",
        "Which sequence(s) have a pattern inside them?"],
    type:"A",
    diff:1,
    choices: ["1,3,5,7,9,11,13,15","1,5,9,13,17,21,25,29","3,5,7,10,11,13,15,17","1,13,135,1357,13579",
        "1,33,555,7677,99999","5,9,14,17,21,25,29"],
    correctAnswers : [0,1,3],
}

let findPatternSeq4 = {
    title: "Find pattern sequences",
    text:["Observe the sequences below carefully.",
        "Which sequence(s) have a pattern inside them?"],
    type:"A",
    diff:0,
    choices: ["1,-1,-1,1,-1,1,-1,1,-1,1,-1","1,-1,1,-1,-1,1,-1,-1,-1,1","-1,1,-1,1,-1,1,-1","1,1,-1,-1,1,1,-1,-1,1,1,1",
        "1,-1,1,-1,1,-1,1,-1,1","-1,-1,1,-1,-1,-1,-1,-1,-1","1,1,1,1,1,1,1,1,1,1"],
    correctAnswers : [1,2,4,6],
}

let findPatternSeq5 = {
    title: "Find pattern sequences",
    text:["Observe the sequences below carefully.",
        "Which sequence(s) have a pattern inside them?"],
    type:"A",
    diff:3,
    choices: ["3,5,9,17,33,65,128,257","2,4,8,16,32,64,128,256","2,8,16,64,256,1024,4096","2,5,8,17,32,65,128,257",
        "15,25,45,85,165,325,645","2,4,9,17,32,64,128,257","6,12,24,48,96,193,384,768"],
    correctAnswers : [1,2,3,4],
}

let findNonPatternSeq1 = {
    title: "Find non-pattern sequences",
    text:["Observe the following sequences carefully.",
        "Which sequence(s) have no patterns?"],
    type:"A",
    diff:1,
    choices: ["1,2,0,3,-1,4,-2,5,-3","1,2,6,24,48,144,576,1152,3456","1,6,7,9,16,17,19,27,29,31",
        "1,3,6,10,15,21,28,36,45","1,121,1331,14441,155551,1666661","1,15,10,115,110,155,150,515,510","1,4,14,414,14414,41414414"],
    correctAnswers : [2,5],
}

let findNonPatternSeq2 = {
    title: "Find non-pattern sequences",
    text:["Observe the sequences below carefully.",
        "Which sequence(s) have no patterns?"],
    type:"A",
    diff:2,
    choices:["a,ab,abe,abec,abeci,abecid,abecido","abab,cbcb,cdcd,eded,efef,gfgf","a,bbbb,cc,ddddddd,eeee,fffff,gggggg","a,bab,cbabc,dcbabcd,dcbabcdee",
        "aaa,aab,abb,bbb,bbc,bcc,ccc,ccd","a,b,c,d,e,f,g,h,j,i,k,l,n,m","a,aa,aaa,aaaa,aaaaa,aaaaaa","a,ab,abc,d,de,def,g,gh,ghi"],
    correctAnswers : [2,3,5],
}

let WhatIsThePattern = {
    title: "What is the pattern?",
    text:["Observe the sequence below carefully, in what order are the operations of the pattern applied?",
        "5,35,8,80,16,6,42,6,60,12,2"],
    type:"C",
    diff:1,
    choices : ["greatest digit","/5","x10","sum of digits","x7"],
    correctOrder : ["x7","sum of digits","x10","/5","greatest digit"],
}

let WhatIsThePattern2 = {
    title: "What is the pattern?",
    text:["Observe the sequence below carefully, in what order are the operations of the pattern applied?",
        "1,2,4,7,11,9,10,12,15,19,17"],
    type:"C",
    diff:0,
    choices : ["+4","-2","+1","+3","+2"],
    correctOrder : ["+1","+2","+3","+4","-2"],
}

let formPattern = {
    title: "Form a pattern",
    text:["Below are a few numbers, please rearrange them to form a pattern.",
        "The sequence should begin with 10 first."],
    type:"C",
    diff:3,
    choices : ["16","10","70","85","12","17","15","80","75"],
    correctOrder : ["10","15","75","70","12","17","85","80","16"],
}

let formPattern2 = {
    title: "Form a pattern",
    text:["Below are a few numbers, please rearrange them to form a pattern.",
        "The sequence should begin with the smallest number first."],
    type:"C",
    diff:1,
    choices : ["13","5","9","3","11","7","1","15"],
    correctOrder : ["1","3","5","7","9","11","13","15"],
}

let formPattern3 = {
    title: "Form a pattern",
    text:["Below are a few numbers, please rearrange them to form a pattern.",
        "The sequence should begin with the smallest number first."],
    type:"C",
    diff:2,
    choices : ["2","5","7","3","23","11","17","19","13"],
    correctOrder : ["2","3","5","7","11","13","17","19","23"],
}

let formPattern4 = {
    title: "Form a pattern",
    text:["Below are a few numbers, please rearrange them to form a pattern.",
        "The sequence should begin with the greatest number first."],
    type:"C",
    diff:2,
    choices : ["1500","6000","3000","1000","2000","1200"],
    correctOrder : ["6000","3000","2000","1500","1200","1000"],
}

let formPattern5 = {
    title: "Form a pattern",
    text:["Below are a few numbers, please rearrange them to form a pattern.",
        "The sequence should begin with 012 first."],
    type:"C",
    diff:0,
    choices : ["678","123","345","789","234","456","012","567"],
    correctOrder : ["012","123","234","345","456","567","678","789"],
}

let formPattern6 = {
    title: "Form a pattern",
    text:["Below are a few numbers, please rearrange them to form a pattern.",
        "The sequence should begin with the smallest number first."],
    type:"C",
    diff:0,
    choices : ["1","36","15","55","3","45","10","21","6","0"],
    correctOrder : ["0","1","3","6","10","15","21","28","36","45","55"],
}

let formPattern7 = {
    title: "Form a pattern",
    text:["Below are a few numbers, please rearrange them to form a pattern.",
        "The sequence should begin with the smallest number first."],
    type:"C",
    diff:1,
    choices : ["1","6","120","5040","2","720","24"],
    correctOrder : ["1","2","6","24","120","720","5040"],
}

patExercises.push(nextNumberInSeq);
patExercises.push(nextNumberInSeq2);
patExercises.push(nextNumberInSeq3);
patExercises.push(nextNumberInSeq4);
patExercises.push(nextNumberInSeq5);
patExercises.push(nextNumberInSeq6);
patExercises.push(nextNumberInSeq7);
patExercises.push(nextNumberInSeq8);
patExercises.push(nextStrInSeq);
patExercises.push(nextStrInSeq2);
patExercises.push(nextStrInSeq3);
patExercises.push(nextStrInSeq4);
patExercises.push(nextStrInSeq5);
patExercises.push(missingStrInSeq1);
patExercises.push(missingStrInSeq2);
patExercises.push(missingNumberInSeq1);
patExercises.push(missingNumberInSeq2);
patExercises.push(missingNumberInSeq3);
patExercises.push(missingNumberInSeq4);
patExercises.push(missingNumberInSeq5);
patExercises.push(findPatternSeq1);
patExercises.push(findPatternSeq2);
patExercises.push(findPatternSeq3);
patExercises.push(findPatternSeq4);
patExercises.push(findPatternSeq5);
patExercises.push(findNonPatternSeq1);
patExercises.push(findNonPatternSeq2);
patExercises.push(WhatIsThePattern);
patExercises.push(WhatIsThePattern2);
patExercises.push(formPattern);
patExercises.push(formPattern2);
patExercises.push(formPattern3);
patExercises.push(formPattern4);
patExercises.push(formPattern5);
patExercises.push(formPattern6);
patExercises.push(formPattern7);