var Cups : UI.Slider;
var Cost : PerCup;
function Start () {

}

function Update () {
GetComponent.<UI.Text>().text = (Cups.value * Cost.TotalCost).ToString();
}