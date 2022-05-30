function shout(greeting){
    return greeting.toUpperCase();
}

function whisper(word){
    return word.toLowerCase();
}

function logShout(string){
    console.log(string.toUpperCase())
}

function logWhisper(word){
    console.log(word.toLowerCase());
}


function sayHiToHeadphonedRoommate(string){
   switch (string) {
       case string.toLowerCase():
           return "I can't hear you!";
           break;
        case string.toUpperCase():
            return "YES INDEED!";
            break;
        case string = "Let's have dinner together!":
            return "I would love to!";
            break;
       default:
           break;
   }
   
}

