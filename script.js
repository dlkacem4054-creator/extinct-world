function toggleMode(){
document.body.classList.toggle("light");
}

// SEARCH SYSTEM
document.addEventListener("input", function(e){
if(e.target.id === "search"){
let value = e.target.value.toLowerCase();
let cards = document.querySelectorAll(".card");

cards.forEach(card=>{
let text = card.innerText.toLowerCase();
card.style.display = text.includes(value) ? "block" : "none";
});
}
});
function toggleMode(){
document.body.classList.toggle("light");
}
let score = 0;

function addScore(){
score += 10;
document.getElementById("score").innerText = score;
}