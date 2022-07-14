const video = document.getElementById("video");
const play = document.getElementById("play");
const stop = document.getElementById("stop");
const progress = document.getElementById("progress");
const timestamp = document.getElementById("timestamp");

// Play & Pause Video
function toggleVideoStatus() {
  video.paused ? video.play() : video.pause();
}

// Update Play & Pause Icon
function updatePlayIcon() {
  video.paused
    ? (play.innerHTML = `<i class="fa fa-play fa-2x"></i>`)
    : (play.innerHTML = `<i class="fa fa-pause fa-2x"></i>`);
}

// Update progress & Timestamp
function updateProgress() {
  progress.value = (video.currentTime / video.duration) * 100;

  //   Get minutes
  let mins = Math.floor(video.currentTime / 60);
  if (mins < 10) mins = "0" + String(mins);

  //   Get Secondes
  let secs = Math.floor(video.currentTime % 60);
  if (secs < 10) secs = "0" + String(secs);

  timestamp.innerHTML = `${mins}:${secs}`;
}

// Set Video Time to Progress
function setVideoProgress() {
  video.currentTime = (progress.value * video.duration) / 100;
}

// Stop video
function stopVideo() {
  video.currentTime = 0;
  video.pause();
}

// Add Event Listeners
video.addEventListener("click", toggleVideoStatus);
video.addEventListener("pause", updatePlayIcon);
video.addEventListener("play", updatePlayIcon);
video.addEventListener("timeupdate", updateProgress);

play.addEventListener("click", toggleVideoStatus);

stop.addEventListener("click", stopVideo);

progress.addEventListener("change", setVideoProgress);
