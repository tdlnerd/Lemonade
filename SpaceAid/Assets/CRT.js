#pragma strict

function Start () {

}

function Update () {
GetComponent.<UnityStandardAssets.ImageEffects.ScreenOverlay>().intensity = Random.Range(0.2,0.4);
}