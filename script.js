let started;
let timer;
let interval;

$(document).ready(function () {
  started = false;

  $("#test-area").on("input", start);

  $("#reset").on("click", reset);
});

function reset() {
  started = false;
  clearInterval(interval);
  $("#test-area").val("");
  $("#timer").text("00:00:00");
}

function start() {
  if (!started) {
    started = true;
    timer = new Date();
    interval = setInterval(function () {
      let value = new Date();
      value.setTime(value - timer);
      $("#timer").text(formatTime(value));
    }, 1000);
  } else {
    if ($("#test-area").val() == $("#expected").text()) {
        clearInterval(interval);
        $("#timer").css("color", "green");
    }
  }
}

function formatTime(date) {
  return (
    concat(date.getUTCHours()) + ":" + concat(date.getUTCMinutes()) + ":" + concat(date.getUTCSeconds())
  );
}

function concat(value) {
  if (value.toString().length == 1) {
    return "0" + value;
  }
  return value;
}
