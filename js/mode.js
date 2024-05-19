let video = document.getElementById('background-video');
let source = video.getElementsByTagName('source')[0];
let card = document.getElementById("card")
let user_info = document.getElementById("user-info")

count = 1

function changeMode() {  
    if(count % 2 == 0){
            source.src = "media/video/itcamp_dark.mp4";
            card.style.backgroundColor = "rgb(52, 50, 50)";
            user_info.style.color="white";
            count+=1
        }
    else{
        source.src = "media/video/itcamp_light.mp4";
        card.style.backgroundColor = "rgb(206, 204, 204)";
        user_info.style.color="black";
        count+=1
    }
    video.play(); 
}
