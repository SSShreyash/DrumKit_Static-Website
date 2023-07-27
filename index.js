var btnlist = document.querySelectorAll(".drum");

for(var i=0; i<btnlist.length; i++){

    btnlist[i].addEventListener("click", 
    function (){
        var selectedbtn = this.innerHTML;
        playAudio(selectedbtn);
        pressedAnimation(selectedbtn);
    }
                                         );

}

document.addEventListener("keydown",
function (event){
    playAudio(event.key);
    pressedAnimation(event.key);
}
                                     );

function playAudio(arg){

    switch(arg){
        case "w":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
        break;
    
        case "a":
            var kickbass = new Audio("sounds/kick-bass.mp3");
            kickbass.play();
        break;

        case "s":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
        break;

        case "d":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
        break;

        case "j":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
        break;

        case "k":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
        break;
        
        case "l":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
        break;    

        default:
            this.innerHTML;
        break;
    }

}

function pressedAnimation(arg){
    var activeButton = "." + arg;
    document.querySelector(activeButton).classList.toggle("pressed");
    
    setTimeout(function (){
                    document.querySelector(activeButton).classList.remove("pressed");
               }, 100 )
    
}