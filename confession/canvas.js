var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
ctx.font = "60px monospace";
lineheight = eval(getComputedStyle(document.documentElement).getPropertyValue('--height').replace("v", "*").replace("w", "window.innerWidth").replace("h", "window.innerHeight")) / 100 * 60 / 2000 * 2.7; //      fontsize + linespacing
alert(lineheight);
var offset;

function update() {
  offset = 0;
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  ctx.fillStyle = document.getElementById('bgcolor').value;
  ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  ctx.font = "60px monospace";
  ctx.fillStyle = document.getElementById('textcolor').value;
  var maintext = document.getElementById('maintext').value.split(/\n/g);
  for (var n = 0; n < maintext.length; n++) {
    wrapText(ctx, maintext[n], 200, (300 + offset * lineheight), 1200, lineheight);
    offset += 1;
  }
  // ctx.fillText(document.getElementById('maintext').value, 200, 300, 1200);
  ctx.font = "50px monospace";
  ctx.fillText(document.getElementById('sign').value, 200, 1700, 800);
  ctx.font = "40px monospace";
  ctx.fillText(btoa(new Date().valueOf()), 200, 1750, 450);
  colorChanger();
}

function firstrun() {
  document.querySelector('input[id="bgcolor"]').value = hslToRgb(rand(0, 360) / 360, rand(60, 80) / 100, rand(70, 90) / 100);
  document.querySelector('input[id="textcolor"]').value = hslToRgb(rand(0, 360) / 360, rand(60, 100) / 100, rand(20, 40) / 100);
  update();
  colorChanger();
}

function getdataurl() {
  var dataURL = canvas.toDataURL("image/jpeg").replace("image/jpeg", "image/octet-stream");
  console.log(dataURL);
  alert(dataURL);
}

function wrapText(context, text, x, y, maxWidth, lineHeight) {
  var words = text.split(" ");
  var line = "";
  for (var n = 0; n < words.length; n++) {
    var testLine = line + words[n] + " ";
    var metrics = context.measureText(testLine);
    var testWidth = metrics.width;

    if (testWidth > maxWidth) {
      context.fillText(line, x, y, maxWidth);
      line = words[n] + " ";
      y += lineHeight;
      offset += 1;
    } else {
      line = testLine;
    }
  }
  context.fillText(line, x, y, maxWidth);
}
