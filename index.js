for (let i = 0; i < document.querySelectorAll("button.drum").length; i++) {
  document
    .querySelectorAll("button.drum")
    [i].addEventListener("click", function () {
      let soundToPlay = `tom-${i}`;
      if (i < 4) {
        soundToPlay = `tom-${i + 1}`;
      } else if (i === 4) {
        soundToPlay = "snare";
      } else if (i === 5) {
        soundToPlay = "crash";
      } else if (i === 6) {
        soundToPlay = "kick-bass";
      } else if (i === 7) {
        soundToPlay = "witco";
      } else {
        console.log("Wrong button, there is no sound");
      }

      let audio = new Audio(`sounds/${soundToPlay}.mp3`);
      audio.play();
      buttonAddAnimation(this.innerHTML);
    });
}

document.addEventListener("keydown", function (event) {
  let audio;
  switch (event.key) {
    case "x":
      audio = new Audio("sounds/tom-1.mp3");
      audio.play();
      break;
    case "a":
      audio = new Audio("sounds/tom-2.mp3");
      audio.play();
      break;
    case "s":
      audio = new Audio("sounds/tom-3.mp3");
      audio.play();
      break;

    case "d":
      audio = new Audio("sounds/tom-4.mp3");
      audio.play();
      break;
    case "j":
      audio = new Audio("sounds/snare.mp3");
      audio.play();
      break;
    case "k":
      audio = new Audio("sounds/crash.mp3");
      audio.play();
      break;
    case "l":
      audio = new Audio("sounds/kick-bass.mp3");
      audio.play();
      break;
    case "w":
      audio = new Audio("sounds/witco.mp3");
      audio.play();
      break;
    default:
      console.log("There is no sound for this key");
      break;
  }
  buttonAddAnimation(event.key);
});

function buttonAddAnimation(key) {
  document.querySelector("." + key).classList.add("pressed");
  setTimeout(function () {
    document.querySelector("." + key).classList.remove("pressed");
  }, 100);
}

