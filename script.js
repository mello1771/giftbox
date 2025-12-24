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

const noteDialogue = [
    "filler",
    "filler",
    "filler",
    "endfiller"
]

let one = document.getElementById("one-button");
let two = document.getElementById("two-button");
let three = document.getElementById("three-button");
let five = document.getElementById("five-button");
let six = document.getElementById("six-button");
let seven = document.getElementById("seven-button");
let eight = document.getElementById("eight-button");
let nine = document.getElementById("nine-button");
let ten = document.getElementById("ten-button");


if (one) {
    one.addEventListener("click", function() {
        textChange(dialogue1, "text1", "intro-text", "intro-img", "party.html", true, 0);
    });
}

if (two) {
    two.addEventListener("click", function() {
        textChange(dialogue2, "text2", "party-text", "party-img", "kitchen.html", false, 0);
    });
}

if (three) {
    three.addEventListener("click", function() {
        textBoxChange(dialogue3, "party-img", "party-text", "assets/dave.png", "dave", "four-button");
    })
}


if (five) {
    five.addEventListener("click", function() {
        pageChange("kitchen.html");
    })
}

sixIndex = 0;
if (six) {
    six.addEventListener("click", function() {
        if (sixIndex < 1) {
            document.getElementById("text3").innerHTML = "this is the bathroom door.";
            sixIndex++;
        } else {
            pageChange("bathroom.html");
            sixIndex = 0;
        }
        
    })
}

sevenIndex = 0;
if (seven) {
    seven.addEventListener("click", function() {
        if (sevenIndex < 1) {
            document.getElementById("text3").innerHTML = "you find a note on a table.";
            sevenIndex++;
        } else {
            pageChange("note.html");
            sevenIndex = 0;
        }
    })
}


code1 = false;
code2 = false;
code1Value = 59304;
code2Value = 39201;
eightIndex = 0;

if (eight) {
    eight.addEventListener("click", function() {
        if (code1 && code2) {
            if (eightIndex < 1) {
                document.getElementById("text3").innerHTML = "you got both of the codes, now you can go in!";
                eightIndex++;
            } else {
                pageChange("tree-room.html");
                eightIndex = 0;
            }
        } else if (code1 || code2) {
            document.getElementById("text3").innerHTML = "you still need one more code!";
            checkCode();
        } else {
            document.getElementById("text3").innerHTML = "you need two five number codes to open this door.";
            checkCode();
        }
    })
    
}

if (ten) {
    ten.addEventListener("click", function() {
        textChange(noteDialogue, "text4", "note-text", "", "kitchen.html", true, 1);
    })
}


let index = 0;
function textChange(dialogue, textId, textBoxId, imgId, location, go, add) {
    let text = document.getElementById(textId);
    let textBox = document.getElementById(textBoxId);
    let img = document.getElementById(imgId);
    if (index + add < dialogue.length) {
        text.innerHTML = dialogue[index + add];
        index++;
    } else if (go) {
        window.location.href = location;
        index = 0;
    } else {
        textBox.innerHTML = "";
        img.innerHTML = "";
        index = 0;
    }
}

function textBoxChange(dialogue, imgId, textId, newImg, newName, newButton) {
    let img = document.getElementById(imgId);
    let text = document.getElementById(textId);

    img.innerHTML = "<img class = '" + newName + "' src='" + newImg + "' alt= '" + newName + "' />";
    text.innerHTML = "<h1 id='name'>" + newName + "</h1>" +
                     "<h2 id='text2'>" + dialogue[0] + "</h2>" +
                     "<button id=" + newButton + ">click to continue...</button>";

    let four = document.getElementById(newButton);

    if (four) {
        four.addEventListener("click", function() {
            textChange(dialogue3, "text2", "party-text", "party-img", "kitchen.html", false, 1);
        })
    }


}

function pageChange(location) {
    window.location.href = location;
}

function checkCode() {
    document.getElementById("kitchen-text").innerHTML = "<h2 id='text3'>enter your code!</h2>" +
                                                        "<input type='text' id='code-input' placeholder='enter code'/>" +
                                                        "<button id='eleven-button'>submit</button>";

    let eleven = document.getElementById("eleven-button");
    if (eleven) {
        eleven.addEventListener("click", function() {
            let codeInput = document.getElementById("code-input").value;

            if (code1) {
                if (code2Value == codeInput) {
                    code2 = true;
                    document.getElementById("kitchen-text").innerHTML = "<h2 id='text3'>you got a code right!</h2>";
                } else {
                    document.getElementById("kitchen-text").innerHTML = "<h2 id='text3'>whoops, try again!</h2>";
                }
            } else if (code2) {
                if (code1Value == codeInput) {
                    code1 = true;
                    document.getElementById("kitchen-text").innerHTML = "<h2 id='text3'>you got a code right!</h2>";
                } else {
                    document.getElementById("kitchen-text").innerHTML = "<h2 id='text3'>whoops, try again!</h2>";
                }
            } else {
                if (code1Value == codeInput) {
                    code1 = true;
                    document.getElementById("kitchen-text").innerHTML = "<h2 id='text3'>you got a code right!</h2>";
                } else if (code2Value == codeInput) {
                    code2 = true;
                    document.getElementById("kitchen-text").innerHTML = "<h2 id='text3'>you got a code right!</h2>";
                } else {
                    document.getElementById("kitchen-text").innerHTML = "<h2 id='text3'>whoops, try again!</h2>";
                }
            }
        })
    }
    
   
}

