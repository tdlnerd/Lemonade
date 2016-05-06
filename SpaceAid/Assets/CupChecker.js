var Cost : PerCup;
var Val : UI.Slider;
var Finance : Funds;
var Counter : UI.Text;
function Start () {

}

function Update () {
	Val.maxValue = ((Finance.Total / Cost.TotalCost) - 1);
	Counter.text = Val.value.ToString();
}