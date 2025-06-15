const audio = document.querySelector("audio");
const muteBtn = document.querySelector("#mute-button");
const [iconUnmuted, iconMuted] = muteBtn.querySelectorAll("#mute-icon");
const soundwave = document.getElementById("soundwave");

/* all defaulted to be either low, muted, or off */
audio.volume = 0.05;
audio.muted = true;
iconUnmuted.style.display = "none";
iconMuted.style.display = "block";
muteBtn.style.borderColor = "#F90052";

soundwave.src = "images/soundwave-off.png"; 

/* this interchanges the border and svg inside to correspond with the current playstate, 
as well as changing the soundwave at the navbar */
muteBtn.addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
  }
  audio.muted = !audio.muted; 
  if (audio.muted) {
    iconUnmuted.style.display = "none";
    iconMuted.style.display = "block";
    muteBtn.style.borderColor = "#F90052";
    soundwave.src = "images/soundwave-off.png"; 
  } else {
    iconUnmuted.style.display = "block";
    iconMuted.style.display = "none";
    muteBtn.style.borderColor = "#04DF7F";
    soundwave.src = "images/soundwave.gif"; 
  }
});