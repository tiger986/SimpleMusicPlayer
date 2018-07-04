## A simple music player
#### code
```javascript
audios = document.getElementsByTagName("audio");

[].forEach.call(audios, function (i) {
    //console.log(i);
    i.addEventListener("play", pauseAll.bind(i));
    i.addEventListener('ended',audioEnded,false);
});
            
function pauseAll() {
    var self = this;
    [].forEach.call(audios, function (i) {
         if(i !== self){
             i.currentTime = 0;
             i.pause();
         }
    })
}
        
function audioEnded(){
    if(model.audioId != 11){
        model.playAudio(model.audioId + 1);
    }else{
        $("#" + model.audioId).next().find("p").removeClass("play");
        $("#" + model.audioId).prev().removeClass("rotate");
    }
}
