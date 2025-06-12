const audio = document.querySelector("audio");
const muteBtn = document.querySelector("#mute-button");
const [iconUnmuted, iconMuted] = muteBtn.querySelectorAll("#mute-icon");
const soundwave = document.getElementById("soundwave");

audio.volume = 0.05;
audio.muted = true;
iconUnmuted.style.display = "none";
iconMuted.style.display = "block";
muteBtn.style.borderColor = "#F90052";

// Set initial soundwave image for muted state
soundwave.src = "images/soundwave-off.png";

muteBtn.addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
  }
  audio.muted = !audio.muted;
  if (audio.muted) {
    iconUnmuted.style.display = "none";
    iconMuted.style.display = "block";
    muteBtn.style.borderColor = "#F90052";
    soundwave.src = "images/soundwave-off.png"; // Muted image
  } else {
    iconUnmuted.style.display = "block";
    iconMuted.style.display = "none";
    muteBtn.style.borderColor = "#04DF7F";
    soundwave.src = "images/soundwave.gif"; // Unmuted image
  }
});