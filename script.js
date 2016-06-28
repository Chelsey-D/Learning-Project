document.getElementById("demo").onclick = function() {clickHandler()};


var clickHandler = function() {
  var user = prompt("You meet a scary witch in the woods. You can create an EXPLOSION, FLY away, or EAT a mushroom.", "Pick EXPLOSION, FLY or EAT.").toUpperCase();
  stepOne(user);
}


var stepOne = function(user) {

switch(user) {
    case 'EXPLOSION':
        var ashes = prompt("You explode. Now you're dead. But at least the witch didn't get you! As ashes, do you fly into the witches eyes?", "Pick YES or NO.").toUpperCase();
        var drift = prompt("Now that you're ashes, do you drift away on the wind and try to see the world?", "Pick YES or NO.").toUpperCase();
        if(ashes === 'YES' && drift === 'YES'){
            alert("There was not enough of you left after blinding the witch to see everywhere you wanted in the world, but you made it to Fiji. Good work.");
        } else if (ashes === 'NO' && drift === 'NO') {
            alert("The witch is shocked by your explosion. She is grateful you didn't stab her in the eyes as ashes and decides to resurrect you. She runs off into the woods.");
        } else if (ashes === 'YES' && drift === 'NO') {
            alert("The witch shrieks and frantically rubs her eyes. 'These contacts will be ruined,' she thinks. Well, at least you feel vindicated for being scared by a witch.");
        } else if (ashes === 'NO' && drift === 'YES') {
            alert("You see Mexico City, Ireland, Fiji, Cleaveland, and ultimately come to rest in Hawaii. It is beautiful. There are whales here. And no witches ever bother you again.");
        } else {
            alert("Did you forget to choose either YES or NO? In your moment of indecision, the witch pokes you in the tummy & yells 'HOO HOOOOO'(pillsbury doughboy style) and runs off cackling into the woods.");
        }
    break;
    case 'FLY':
        var fly = prompt("Are you good at flying or only just a beginner?", "Type EXPERT or BEGINNER.").toUpperCase();
        var tree = prompt("Did you notice the tree directly above you before you took off like Harry Potter after a horcrux-crusted snitch?", "Type YES or NO.").toUpperCase();
        if(fly === 'EXPERT' || tree === 'YES') {
            alert("You fly away! Good job. You are safe. OH WAIT, WATCH OUT FOR THAT GIANT EAGLE... ARRGRAGARRRHHH.....oh no... no... um... the end.");
        } else {
            alert("Just as you're about to take off, you notice a giant eagle in the sky circling your position looking for a tasty snack. You decide to fly through the woods like those things in Star Wars for a bit before taking to the skies. You escape the witch and live happily ever after.");
        }
    break;
    case 'EAT':
        var color = prompt("You see two mushrooms growing at your feet on the forest floor. Do you eat the red one or the green one?", "Type RED or GREEN.").toUpperCase();
        if (color === 'RED') {
            alert("YOU GROW ABSOLUTELY MASSIVE. You crush the witch under your foot like a heartless bastard. What did you expect?");
        } else if (color === 'GREEN') {
            alert("You remain in the matrix, blissfully ignorant of being a battery for the evil machines. Just kidding. EXTRA LIFE! The witch is impressed by your gumption and imbues you with magical star powers for the rest of your life.");
        } else {
            alert("You didn't choose Red or Green. The witch Avada Kedavra's the shit out of you before you can make up your mind.");
            }
    break;
    default:
        user = prompt("You can't do that. Try again!", "Pick EXPLOSION, FLY or EAT.");
        stepOne(user);
    
}
}

//stepOne(user);

var slideIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none"; 
    }
    slideIndex++;
    if (slideIndex > x.length) {slideIndex = 1} 
    x[slideIndex-1].style.display = "block"; 
    setTimeout(carousel, 2000); // Change image every 2 seconds
}