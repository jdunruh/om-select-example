window.onload = initPage;

function initPage() {
  var speakers = document.getElementById("wireFrame").getElementsByTagName("div");

  for (var i=0; i < speakers.length; i++) {
    if (speakers[i].id.slice(0,5) == "thumb") {
      addEventHandler(speakers[i], "click", getFrame);
    }
  }
}

function getFrame(e) {
  e = getActivatedObject(e);
  var frame = e.parentNode.id.slice(5);
  changeSpeaker(frame);
}

function changeSpeaker(n) {
  var speakers = document.getElementById("wireFrame").getElementsByTagName("div");
  var spkrIndex = 0;

  for (var i=0; i < speakers.length; i++) {
    if (speakers[i].id.slice(0,5) == "thumb") {
      spkrIndex = speakers[i].id.slice(5);
      if (spkrIndex == n) {
        changeOpacity(speakers[i], 1);
        document.getElementById("bio" + spkrIndex).style.display = "block";
        changeArrow(spkrIndex);
      }
      else {
        changeOpacity(speakers[i], 0.5);
        document.getElementById("bio" + spkrIndex).style.display="none";
      }
    }
  }
}

function changeArrow(n) {
  var pct = ((n * 20) + 8);
  document.getElementById("arrow").style.left = pct + "%";
}
