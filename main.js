
let tInput = document.querySelector("[type = 'text']");
let form = document.forms[0];
let sInput = document.querySelector("[type = 'submit']");
let results = document.querySelector(".results");

form.onsubmit = function(event) {
        event.preventDefault();
        let newElement = document.createElement("div");
        let newText = document.createTextNode(tInput.value);
        // newElement.setAttribute("class","box");
        // newElement.setAttribute("title","Element");
        // newElement.setAttribute("id",`id-${i}`);
        newElement.appendChild(newText);
        newElement.style.cssText = "background-color: #F5F5F5;padding: 0.5em 1em;"
        results.appendChild(newElement);
        
}



