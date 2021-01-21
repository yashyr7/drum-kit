var buttons = document.querySelectorAll(".drum")
for (var i = 0; i <= buttons.length - 1; i++) {
  buttons[i].addEventListener("click", function () {
    buttonAnimation(this.innerHTML);
    playSound(this.innerHTML);
  });
};


document.addEventListener("keydown", function (event) {
  buttonAnimation(event.key);
  playSound(event.key);
})

function playSound (k) {
  if(k === "w") {
    var audio = new Audio('./sounds/crash.mp3');
    audio.play();
  } else if(k === "a") {
    var audio = new Audio('./sounds/kick-bass.mp3');
    audio.play();
  } else if(k === "s") {
    var audio = new Audio('./sounds/snare.mp3');
    audio.play();
  } else if(k === "d") {
    var audio = new Audio('./sounds/tom-1.mp3');
    audio.play();
  } else if(k === "j") {
    var audio = new Audio('./sounds/tom-2.mp3');
    audio.play();
  } else if(k === "k") {
    var audio = new Audio('./sounds/tom-3.mp3');
    audio.play();
  } else if(k === "l") {
    var audio = new Audio('./sounds/tom-4.mp3');
    audio.play();
  }
}

function buttonAnimation(k) {
  var btn  = document.querySelector("." + k);
  btn.classList.add("pressed");
  setTimeout(() => {
    btn.classList.remove("pressed");
  }, 100)

}