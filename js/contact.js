let textBox = document.getElementById("textbox");
let wordCount = document.getElementById("wordcount")

textBox.addEventListener("input", () => {    
    let textLength = textBox.value.length;
    wordCount.innerHTML = textLength + " / 400"
});