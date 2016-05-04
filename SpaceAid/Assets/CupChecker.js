var Cost : PerCup;
var Val : UI.Slider;
var Funds = 200000;
function Start () {

}

function Update () {
	Val.maxValue = (Funds / Cost.TotalCost);
}