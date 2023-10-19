let started;
let timer;
let interval;

const gabaritos = [
  "A chuva cai suavemente, tocando a terra com carinho, trazendo vida e renovação a cada gota que desce do céu.",
  "Em dias chuvosos, a natureza canta uma melodia serena, convidando-nos a refletir e apreciar sua beleza.",
  "Cada pingo de chuva conta uma história, unindo-se para criar rios, alimentar florestas e abraçar a terra.",
];

$(document).ready(function () {
  started = false;

  definirGabarito();

  $("#test-area").on("input", start);

  $("#reset").on("click", reset);

  $("#test-area").bind("paste", function (e) {
    e.preventDefault();
  });
});

function definirGabarito() {
  $("#expected").text(gabaritos[Math.floor(Math.random() * gabaritos.length)]);
}

function reset() {
  started = false;
  clearInterval(interval);
  $("#test-area").val("");
  $("#timer").text("00:00:00");
  $("#timer").css("color", "black");
  definirGabarito();
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
    concat(date.getUTCHours()) +
    ":" +
    concat(date.getUTCMinutes()) +
    ":" +
    concat(date.getUTCSeconds())
  );
}

function concat(value) {
  if (value.toString().length == 1) {
    return "0" + value;
  }
  return value;
}
