var Sugar : UI.Slider;
var Lemon : UI.Slider;
var Water : UI.Slider;
var Mint : UI.Slider;
var Gross = 3;
var Manager : Day;

function Start () {
GetComponent.<UI.Slider>().value = 1;
}

function ChangeRating () {
if (Water.value > Sugar.value || Water.value > Lemon.value) {
Gross -= 1;
}
if (Manager.PriceCalc > Manager.FairPrice) {
Gross -= 1;
}
if (Manager.Cups.value < 1000) {
Gross -= 2;
}
if (Manager.PriceCalc <= Manager.FairPrice) {
Gross += 1;
}

if (Mint.value > 0.25 && Mint.value < 0.75) {
Gross += 1;
}

if (Mint.value > 0.75) {
Gross += 2;
}

GetComponent.<UI.Slider>().value = Gross;
}

function Update () {

}