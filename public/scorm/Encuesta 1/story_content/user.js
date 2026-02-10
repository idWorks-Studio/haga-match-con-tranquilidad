window.InitUserScripts = function()
{
var player = GetPlayer();
var object = player.object;
var once = player.once;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
var update = player.update;
var pointerX = player.pointerX;
var pointerY = player.pointerY;
var showPointer = player.showPointer;
var hidePointer = player.hidePointer;
var slideWidth = player.slideWidth;
var slideHeight = player.slideHeight;
window.Script39 = function()
{
  var player = GetPlayer();
var calificacion = player.GetVar("v_calificacion");

window.parent.postMessage(
  {
    tipo: "calificacion",
    valor: calificacion
  },
  "*"
);

}

};
