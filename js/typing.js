const content = "Chaerin's \n portfolio";
const text = document.querySelector(".text");
let k = 0;

function typing(){
    let txt = content[k++];
    text.innerHTML += txt=== "\n" ? "<br/>": txt;
    if (k > content.length) {
        text.textContent = "";
        k = 0;
    }
}
setInterval(typing, 200)