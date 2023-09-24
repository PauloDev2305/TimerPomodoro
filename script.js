let acao = document.getElementById("acao");
let pausa = document.getElementById("pausa");
let sessoes = document.getElementById("sessoes");
let segundos;

var bell = new Audio("./audio/bell.mp3");
var volta = new Audio("./audio/volta.mp3");
var final = new Audio("audio/final.mp3");

var lofi = document.getElementById("lofi");
var pause = document.getElementById("pause");
var play = document.getElementById("play");

function iniciar() {
  if (acao.value == 0) {
    document.getElementById("err_acao").innerHTML = "Adicione os minutos";
    acao.focus();
  } else if (pausa.value == 0) {
    document.getElementById("err_pausa").innerHTML = "Adicione a pausa";
    pausa.focus();
  } else if (sessoes.value == 0) {
    document.getElementById("err_sessao").innerHTML =
      "Adicione a(s) sessão(ões)";
    sessoes.focus();
  } else {
    lofi.play();
    pausa.style.setProperty("display", "block", "important");

    localStorage.setItem("acao", String(acao.value));
    localStorage.setItem("pausa", String(pausa.value));
    localStorage.setItem("sessoes", String(sessoes.value));

    document
      .getElementById("config")
      .style.setProperty("display", "none", "important");

    document
      .getElementById("timer")
      .style.setProperty("display", "block", "important");
  }
}

function momentoAcao() {
  let sessoes_valor = document.getElementById("title_sessao");

  if (sessoes_valor != 1) {
    sessoes_valor.innerHTML = `${sessoes_valor} sessões restantes`;
  } else {
    sessoes_valor.innerHTML = `${sessoes_valor} sessão restante`;
  }

  let title = document.getElementById("title");

  title.innerHTML = `AÇÃO`;
  title.style.fontSize = "25pt";
}
function momentoPausa() {}
