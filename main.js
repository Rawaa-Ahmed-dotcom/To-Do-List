let form = document.querySelector("form");
let textInput = document.getElementById("text");
let submitInput = document.getElementById("create");
let itemsContainer = document.getElementById("list");


if(form && textInput && submitInput ) {
        form.onsubmit = function(event) {
                event.preventDefault();
                if(textInput.value.trim() !== "") {
                        let item = document.createElement("li");
                        window.localStorage.setItem("text",textInput.value.trim());
                        item.innerHTML = localStorage.getItem("text");
                        let icon = document.createElement("i");
                        icon.setAttribute("class", "fa-solid fa-circle-xmark");
                        item.appendChild(icon);
                        itemsContainer.appendChild(item);
                        textInput.value = "";
                }
}
}
itemsContainer.addEventListener("click",function(element) {
        if(element.target.tagName === "LI"){
                element.target.classList.toggle("checked");
        }
        else if(element.target.tagName === "I"){
                element.target.parentElement.remove();
        }                     
});
