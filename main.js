function setup () {
    video=createCapture (VIDEO);
    video.size (550, 500);
    canvas= canvasCreate (550,550);
    canvas.position (560,150);
    postNet= ml5.postNet(video,modelLoaded);
    postNet.on ('pose',gotPoses); 
    }
    
    function draw () {
    background ('#FFC0CB');  
    }
    
    function modelLoaded () {
    console.log ('postNet is Initialized!');    
    }
    
    function gotPoses(results) {
    if (results.length > 0)
    {console.log (results);}
    }