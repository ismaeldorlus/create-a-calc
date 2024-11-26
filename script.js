document.getElementById("but").addEventListener("click", surf);

function surf() {
  let rad = Number(document.getElementById("radius").value);
  let pi = Math.PI;
  let surface = 4 * 3.14 * rad ** 2;
  console.log(rad);
  console.log(surface);
  surface = surface.toFixed(2);
  console.log(pi);
  document.getElementById("spanish").innerHTML = surface;
  document.getElementById("radius").value = "";
}
// Dark Mode Code
document.getElementById("dark").addEventListener("click", darken);

function darken() {
  document.getElementById("html").style.background = "black";
  document.getElementById("theBody").style.background = "#0D003D";
  document.getElementById("white").style.color = "white";
  document.getElementById("whiter").style.color = "white";
  document.getElementById("whitest").style.color = "white";
  document.getElementById("whity").style.color = "white";
  document.getElementById("INV").innerHTML =
    "<img width='300px' 50px src='img/betterINVbettersphere.png' alt='' />";
  document.getElementById("radius").style.backgroundColor = "white";
  document.getElementById("linky").style.color = "white";
  document.getElementById("warn").style.color = "white";
  document.getElementById("test").style.color = "white";
  document.getElementById("testing").style.color = "white";
  document.getElementById("test").style.backgroundColor = "#0D003D";
  document.getElementById("testy").style.color = "white";
  document.getElementById("moreTest").style.color = "white";
  document.getElementById("volimg").innerHTML =
    "<img src='img/INVSVolume.png' alt='' />";
  // Background Stripes
  document.getElementById("stripe").style.backgroundColor = "#190074";
  document.getElementById("striper").style.backgroundColor = "#190074";
  document.getElementById("stripy").style.backgroundColor = "#190074";
  document.getElementById("striped").style.backgroundColor = "#190074";
  document.getElementById("stripes").style.backgroundColor = "#190074";
  document.getElementById("stripest").style.backgroundColor = "#190074";
}
// Light Mode Code
document.getElementById("brighten").addEventListener("click", brighten);

function brighten() {
  document.getElementById("html").style.background = "";
  document.getElementById("theBody").style.background = "";
  document.getElementById("white").style.color = "";
  document.getElementById("whiter").style.color = "";
  document.getElementById("whitest").style.color = "";
  document.getElementById("whity").style.color = "";
  document.getElementById("INV").innerHTML =
    "<img width='300px' src='img/bettersphere.png' alt='' />";
  ("");
  document.getElementById("radius").style.backgroundColor = "";
  document.getElementById("linky").style.color = "";
  document.getElementById("warn").style.color = "";
  // Background Stripes
  document.getElementById("stripe").style.backgroundColor = "";
  document.getElementById("striper").style.backgroundColor = "";
  document.getElementById("stripy").style.backgroundColor = "";
  document.getElementById("striped").style.backgroundColor = "";
  document.getElementById("stripes").style.backgroundColor = "";
  document.getElementById("stripest").style.backgroundColor = "";
  // volume brighten
  document.getElementById("test").style.color = "";
  document.getElementById("testing").style.color = "";
  document.getElementById("test").style.backgroundColor = "";
  document.getElementById("testy").style.color = "";
  document.getElementById("moreTest").style.color = "";
  document.getElementById("volimg").innerHTML =
    "<img id='tests' src='img/BetterSVolume.png' alt='' />";
}

// Volume Code
document.getElementById("lotsOfTests").addEventListener("click", Volcalc);

function Volcalc() {
  let volR = Number(document.getElementById("Vol").value);
  console.log(volR);
  let pi = Math.PI;
  let volanswer = (4 / 3) * pi * volR ** 3;
  volanswer = volanswer.toFixed(2);
  console.log(volanswer);

  document.getElementById("espanol").innerHTML = volanswer;
}
