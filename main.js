var note = 0;
var prevnote = 0; 
function Start()
{
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/DAU-dno7T/model.json', modelReady);
    
    
}

function modelReady()
{
    console.log("Model Is Loaded");
    classifier.classify(gotResults);
    
}

function gotResults(error, results)
{
  note = results[0].label;
  if(error)
  {
    console.error(error);
  }
  if(results.length > 0.5)
  {
    if(prevnote = !note)
    {
    navigator.vibrate(2000);
  if(note =="C")
  {
    document.getElementById("canvas").style.backgroundColor = "red";
    document.getElementById("note").innerHTML = "C";
    console.log("C");
    
  }
  else if(note =="C#")
  {
    document.getElementById("canvas").style.backgroundColor = "tomato";
    document.getElementById("note").innerHTML = "C#";
    console.log("C#");
    
  }

  else if(note =="D")
  {
    document.getElementById("canvas").style.backgroundColor = "orange";
    document.getElementById("note").innerHTML = "D";
    console.log("D");

  }
  else if(note =="D#")
  {
    document.getElementById("canvas").style.backgroundColor = "lightsalmon";
    document.getElementById("note").innerHTML = "D#";
    console.log("D#");
  }
  else if(note =="E")
  {
    document.getElementById("canvas").style.backgroundColor = "yellow";
    document.getElementById("note").innerHTML = "E";
    console.log("E");

  }
  else if(note =="F")
  {
    document.getElementById("canvas").style.backgroundColor = "gold";
    document.getElementById("note").innerHTML = "F";
    console.log("F");

  }
  else if(note =="F#")
  {
    document.getElementById("canvas").style.backgroundColor = "lime";
    document.getElementById("note").innerHTML = "F#";
    console.log("F#");

  }
  else if(note =="G")
  {
    document.getElementById("canvas").style.backgroundColor = "greenyellow";
    document.getElementById("note").innerHTML = "G";
    console.log("G");

  }
  else if(note =="G#")
  {
    document.getElementById("canvas").style.backgroundColor = "cyan";
    document.getElementById("note").innerHTML = "G#";
    console.log("G#");
  }
  else if(note == "A")
  {
    document.getElementById("canvas").style.backgroundColor = "deepskyblue";
    document.getElementById("note").innerHTML = "A";
    console.log("A");
  }

  else if(note == "A#")
  {
    document.getElementById("canvas").style.backgroundColor = "deeporchid";
    document.getElementById("note").innerHTML = "A#";
    console.log("A#");
  }

  else if(note == "B")
  {
    document.getElementById("canvas").style.backgroundColor = "violet";
    document.getElementById("note").innerHTML = "B";
    console.log("B");
  }
  
 

  note="";
}
  }
}

function Back()
{
  window.location = "home.html";
}


  
