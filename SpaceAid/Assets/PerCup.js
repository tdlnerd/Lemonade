var Sugar : UI.Slider;
var Lemon : UI.Slider;
var Water : UI.Slider;
var Mint : UI.Slider;
var Cost : UI.Text;
var TotalCost : float;
var Fill : Sprite[];
var Cup : UI.Image;
var Sat = false;
function Start () {

}

function Update () {
var SugarCost = Sugar.value * 0.25;
var LemonCost = Lemon.value * 0.50;
var WaterCost = Water.value * 0.04;
var MintCost =  Mint.value * 5.89;
TotalCost = SugarCost + LemonCost + WaterCost + MintCost;
Cost.text = (System.Math.Round(TotalCost,2)).ToString();

if ((Sugar.value + Lemon.value + Water.value) < 0.5) {
Cup.sprite = Fill[0];
Sat = false;
}
if ((Sugar.value + Lemon.value + Water.value) >= 0.5 && (Sugar.value + Lemon.value + Water.value) <= 1) {
Cup.sprite = Fill[1];
Sat = false;
}
if ((Sugar.value + Lemon.value + Water.value) > 1 && (Sugar.value + Lemon.value + Water.value) < 1.5) {
Cup.sprite = Fill[2];
Sat = true;
}
if ((Sugar.value + Lemon.value + Water.value) >= 1.5) {
Cup.sprite = Fill[3];
Sat = true;
}
}