var Weather : String[];
var DailyWeather : String;
var WeatherIcon : UI.Image;
var WeatherImages : Sprite[];
var Temp : int;
var TempText : UI.Text;
var Clock : UI.Text;
var DayNumber = 0;
var Profit : float;
var CupsSold : float;
var Cups : UI.Slider;
var Price : PerCup;
var MoneyMade : float;
var Dollar : UI.Text;
var Cent : UI.Text;
function Start () {
NewDay();
DayNumber += 1;
Clock.text = "6/"+DayNumber.ToString()+"/2094";
}

function Update () {

}

function NewDay() {
WeatherPanel(Random.Range(0,5));
}

function WeatherPanel(Choice : int) {
WeatherIcon.sprite = WeatherImages[Choice];
DailyWeather = Weather[Choice];
if (Choice == 1) {
Temp = Random.Range(50,70);
}
if (Choice == 2) {
Temp = Random.Range(71,80);
}
if (Choice == 3) {
Temp = Random.Range(85,95);
}
if (Choice == 4) {
Temp = Random.Range(95,100);
}
if (Choice == 0) {
Temp = Random.Range(60,80);
}
TempText.text = Temp.ToString() + "°";
}

function Begin () {
var FairPrice = ((Temp *2)/100);
var PriceCalc = float.Parse(Dollar.text) + (float.Parse(Cent.text) / 100);
CupsSold = (Cups.value * (Temp / 100)) - ((PriceCalc - FairPrice) * 100); 
MoneyMade = PriceCalc * CupsSold;
Debug.Log(MoneyMade);
}