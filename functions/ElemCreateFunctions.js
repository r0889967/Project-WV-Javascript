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
