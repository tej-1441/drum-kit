for(var i=0;i<document.querySelectorAll(".drum").length;i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
       fun2(this.innerHTML);
       animation(this.innerHTML);
    });

}
document.addEventListener("keypress",function(event){
    fun2(event.key);
    animation(event.key);
})

function fun2(variable)
{
  switch(variable)
  {
    case "w":
      var audio=new Audio("sounds/crash.mp3");
      audio.play();
    break;
    case "a":
      var audio=new Audio("sounds/kick-bass.mp3");
      audio.play();
    break;
    case "s":
      var audio=new Audio("sounds/snare.mp3");
      audio.play();
    break;
    case "d":
      var audio=new Audio("sounds/tom-1.mp3");
      audio.play();
    break;
    case "j":
      var audio=new Audio("sounds/tom-2.mp3");
      audio.play();
    break;
    case "k":
      var audio=new Audio("sounds/tom-3.mp3");
      audio.play();
    break;
    case "l":
      var audio=new Audio("sounds/tom-4.mp3");
      audio.play();
    break;
    default:alert("something uneven typed or say typo happened");
  }
}
function animation(variable)
{
  var activebutton=document.querySelector("."+variable);
  activebutton.classList.add("pressed");
  setTimeout(function(){activebutton.classList.remove("pressed")},100)
}
