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
    "this here is my party...",
    "...without a tree!",
    "look right there, i can see exactly where my tree is supposed to go, but it's gone!",
    "dave's already here, but if you talk to him, he's real upset about it."
]

const dialogue3 = [
    "hey...",
    "johnny invited me over to spread the christmas cheer.",
    "but it looks like there's none in this house!",
    "i really need that tree back.",
    "if i don't get it, i'll never have a good christmas!",
    "please help us find it!",
    "i think i smelled some pine in the kitchen earlier..."
]

let one = document.getElementById("one-button");
let two = document.getElementById("two-button");
let three = document.getElementById("three-button");
let four = document.getElementById("four-button");
let five = document.getElementById("five-button");

if (one) {
    one.addEventListener("click", function() {
        textChange(dialogue1, "text1", "party.html", true);
    });
}

if (two) {
    two.addEventListener("click", function() {
        textChange(dialogue2, "text2", "kitchen.html", false);
    });
}

if (three) {
    three.addEventListener("click", function() {
        textBoxChange(dialogue3, "img", "party-text", "assets/dave.png", "dave", "four-button");
    })
}

if (four) {
    four.addEventListener("click", function() {
        textChange(dialogue3, "text2", "kitchen.html", false);
    })
}

if (five) {
    five.addEventListener("click", function() {
        pageChange("kitchen.html");
    })
}


let index = 0;
function textChange(dialogue, textId, location, go) {
    let text = document.getElementById(textId);
    if (index < dialogue.length) {
        text.innerHTML = dialogue[index];
        index++;
    } else if (go) {
        window.location.href = location;
        index = 0;
    } else {
        text.innerHTML = "";
        index = 0;
    }
}

function textBoxChange(dialogue, imgId, textId, newImg, newName, newButton) {
    let img = document.getElementsByClassName(imgId);
    let text = document.getElementById(textId);

    img.innerHTML = "<img class = '" + newName + "' src='" + newImg + "' alt= '" + newName + "' />";
    text.innerHTML = "<h1 id='name'>" + newName + "</h1>" +
                     "<h2 id='text2'>" + dialogue[0] + "</h2>" +
                     "<button id=" + newButton + ">click to continue...</button>";

}

function pageChange(location) {
    window.location.href = location;
}

