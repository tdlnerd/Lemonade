var Weather : String[];
var DailyWeather : String;
var WeatherIcon : UI.Image;
var WeatherImages : Sprite[];
var Temp : float;
var TempText : UI.Text;
var Clock : UI.Text;
var DayNumber = 0;
var Profit : float;
var CupsSold : int;
var Cups : UI.Slider;
var Price : PerCup;
var MoneyMade : float;
var Dollar : UI.Text;
var Cent : UI.Text;
var Amount : float;
var Finances : Funds;
var Expense : UI.Text;
var FairPrice : float;
var PriceCalc : float;
var Score : Rating;
var Rain = false;
var AdDollar : UI.Text;
var AdCent : UI.Text;
var DateTxt : UI.Text;
function Start () {
NewDay();
}

function Update () {
Amount = Cups.value;
}

function NewDay() {
DayNumber += 1;
Clock.text = "6/"+DayNumber.ToString()+"/2094";
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
Rain = true;
}
TempText.text = Temp.ToString() + "°";
}

function Begin () {
Debug.Log("Slider " + Cups.value);
FairPrice = ((Temp *2)/100);
Debug.Log(FairPrice);
PriceCalc = float.Parse(Dollar.text) + (float.Parse(Cent.text));
var AdCalc = float.Parse(AdDollar.text) + (float.Parse(AdCent.text));
var TempCalc = Temp / 100;
Debug.Log(TempCalc);

CupsSold = Amount * (TempCalc) + ((FairPrice - PriceCalc)) + (AdCalc * 100);
if (CupsSold > Amount) {
CupsSold = Amount;
}
if (CupsSold < 0) {
CupsSold = 0;
}
if (Rain == true) {
CupsSold = (CupsSold / Random.Range(4,8));
}
Debug.Log(CupsSold);
MoneyMade = PriceCalc * CupsSold;
Debug.Log(MoneyMade);
Finances.Total += MoneyMade - float.Parse(Expense.text);
NewDay();
Score.ChangeRating();
Rain = false;
}