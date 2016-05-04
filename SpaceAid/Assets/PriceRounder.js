#pragma strict

function Start () {

}

function Update () {
if (GetComponent.<UI.InputField>().text != null) {
var NumberVal = float.Parse(GetComponent.<UI.InputField>().text);
var Calc = System.Math.Round(NumberVal,2);
GetComponent.<UI.InputField>().text = Calc.ToString();
}
}