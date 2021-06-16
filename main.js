
//https://teachablemachine.withgoogle.com/models/enufJxmj6/
Webcam.set({
    width:350,
    height:300,
    image_format:"png",
    png_quality:90
});

var camera=document.getElementById("camera");
Webcam.attach(camera);

function take_snapshot()
{
    Webcam.snap(function(data_uri)
    {
        document.getElementById("result").innerHTML='<img id="captured_image" src="'+data_uri+'"/>';
    });

}
console.log("The ml5 version is",ml5.version);

classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/GKOO4aLT4/model.json",modelLoaded)

function modelLoaded()
{
    console.log("Model is loaded");

}

Prediction_1="";
Prediction_2="";

function speak()
    {
var synth=window.speechSynthesis;
speak_data_1="The first prediction is"+ Prediction_1;
speak_data_2="The second prediction is"+ Prediction_2;
utter_this= new SpeechSynthesisUtterance( speak_data_1 + speak_data_2)
synth.speak(utter_this);
    }

