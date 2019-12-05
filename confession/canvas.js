var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
ctx.font = "60px monospace";

function changebg() {
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  ctx.fillStyle = document.getElementById('bgcolor').value;
  ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  ctx.fillStyle = document.getElementById('textcolor').value;
  ctx.fill();
}

function changemaintext() {
  ctx.fillText(document.getElementById('maintext').value, 200, 300, 1200);
}

function update() {
  //context.save()
  // changebg();
  // changemaintext();
  //context.restore()
  // ctx.fillStyle = "#00000000";
  // ctx.fill();
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  ctx.fillStyle = document.getElementById('bgcolor').value;
  ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  ctx.font = "60px monospace";
  ctx.fillStyle = document.getElementById('textcolor').value;
  ctx.fillText(document.getElementById('maintext').value, 200, 300, 1200);
  ctx.font = "50px monospace";
  ctx.fillText(document.getElementById('sign').value, 200, 1700, 800);
  ctx.font = "40px monospace";
  ctx.fillText(btoa(new Date().valueOf()), 200, 1750, 450);
  // ctx.fill();
}

function getdataurl() {
  var dataURL = canvas.toDataURL("image/jpeg").replace("image/jpeg", "image/octet-stream");
  console.log(dataURL);
  alert(dataURL);
}
