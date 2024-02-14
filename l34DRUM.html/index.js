//detecting button press
var noofbuttons=document.querySelectorAll(".drum").length;
for(var i=0;i<noofbuttons;i++)
{
document.querySelectorAll(".drum")[i].addEventListener("click", function() {
var buttonInnerHTML=this.innerHTML;
makeSound(buttonInnerHTML);
buttonAnimation(buttonInnerHTML);
});}
//detecting keyboard press

        document.addEventListener("keypress",function(event){
            makeSound(event.key);
            buttonAnimation(event.key);
        });
        function makeSound(key){
            switch(key)
            {
                case "w":
                    var alwaysq=new Audio("sounds/always.mp3");
                    alwaysq.play();
                    break;
                    case "a":
                        var forestq=new Audio("sounds/forest.mp3");
                        forestq.play();
                        break;
                        case "s":
                            var indiaq=new Audio("sounds/india.mp3");
                            indiaq.play();
                            break;
                             case "d":
                            var indianq=new Audio("sounds/indian.mp3");
                            indianq.play();
                            break;
                            case "j":
                                var letq=new Audio("sounds/let.mp3");
                                letq.play();
            
                                break;
                                case "k":
                                    var pianoq=new Audio("sounds/piano.mp3");
                                    pianoq.play();
                                    break;
                                    case "l":
                                        var runningq =new Audio("sounds/running.mp3");
                                        runningq.play();
                                        break;
                                        default:
                                            console.log(buttonInnerHTML);
                                        }
                        }
                        function buttonAnimation(currentKey)
                        {
                            var activeButton=document.querySelector("."+currentKey);
                            activeButton.classList.add("pressed");
                            setTimeout(function(){
                                activeButton.classList.remove("pressed");
                            },100);
                        }
                         


                    
            