

const dialogue1 = [
    "you look like a very helpful youngster!",
    "you see, i'm holding a party later tonight with my good pal dave.",
    "and, well, there's a problem!",
    "my christmas tree has disappeared!",
    "and you look like a great person for the job of finding it.",
    "will you please come with me to help me find it?",
    "well, thank you! please follow me!"
]

const dialogue2 = [
    "filler",
    "filler",
    "filler",
    "filler"
]

let one = document.getElementById("one-button");
let two = document.getElementById("two-button");

one.addEventListener("click", function() {
    textChange(dialogue1, "text1", "party.html")
});

two.addEventListener("click", function() {
    textChange(dialogue2, "text2", "kitchen.html")
});

let index = 0;
function textChange(dialogue, textId, location) {
    let text = document.getElementById(textId);
    console.log(dialogue);
    if (index < dialogue.length) {
        text.innerHTML = dialogue[index];
        index++;
    } else {
        window.location.href = location;
        index = 0;
    }
}

