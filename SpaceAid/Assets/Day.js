var Weather : String[];
var DailyWeather : String;
var WeatherIcon : UI.Image;
var WeatherImages : Sprite[];
var Temp : int;
var TempText : UI.Text;
var Clock : UI.Text;
var DayNumber = 0;
var Profit : float;
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
Temp = Random.Range(90,105);
}
if (Choice == 4) {
Temp = Random.Range(105,120);
}
if (Choice == 0) {
Temp = Random.Range(60,80);
}
TempText.text = Temp.ToString() + "°";
}