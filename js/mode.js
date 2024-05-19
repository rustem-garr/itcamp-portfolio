var video = document.getElementById('background-video');
var source = video.getElementsByTagName('source')[0];
var card = document.getElementById("card")
count = 1

function changeMode() {  
    if(count % 2 == 0){
            source.src = "media/video/itcamp_dark.mp4";
            card.style.backgroundColor = "rgb(52, 50, 50)";
            count+=1
        }
    else{
        source.src = "media/video/itcamp_light.mp4";
        card.style.backgroundColor = "rgb(206, 204, 204)";
        count+=1
    }
    video.load(); 
}