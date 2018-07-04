define([], function(){
    var model = avalon.define({
        $id: "index",

        info: [
            {src: "mp3/1.mp3", img: "img/1.jpg", name: "爱情鸟--林依轮"},
            {src: "mp3/2.mp3", img: "img/2.jpg", name: "方芳--摇太阳"},
            {src: "mp3/3.mp3", img: "img/3.jpg", name: "李琛--窗外"},
            {src: "mp3/4.mp3", img: "img/4.jpg", name: "韩宝仪--往事只能回味"},
            {src: "mp3/5.mp3", img: "img/5.jpg", name: "田震--执着"},
            {src: "mp3/6.mp3", img: "img/6.jpg", name: "黄安--新鸳鸯蝴蝶梦"},
            {src: "mp3/7.mp3", img: "img/7.jpg", name: "江珊--梦里水乡"},
            {src: "mp3/8.mp3", img: "img/8.jpg", name: "陈少华--九九女儿红"},
            {src: "mp3/9.mp3", img: "img/9.jpg", name: "罗大佑--皇后大道东"},
            {src: "mp3/10.mp3", img: "img/10.jpg", name: "林志颖--17岁那年的雨季"},
            {src: "mp3/11.mp3", img: "img/11.jpg", name: "唐磊--丁香花"},
            {src: "mp3/12.mp3", img: "img/12.jpg", name: "张信哲--信仰"},
        ],

        audio: null,
        audioId: "",
        audioName: "经典回顾",
        playAudio: function(n){
            model.audioId = n;
            model.audioName = model.info[n].name;
            model.audio = $('#' + n).get(0);
            if(model.audio.paused){
                model.audio.play();
                $(".box_con_btn").find("p").removeClass("play");
                $("#" + model.audioId).next().find("p").addClass("play");
                $(".box_con").find("img").removeClass("rotate");
                $("#" + model.audioId).prev().addClass("rotate");
            }else{
                model.audio.pause();
                $(this).removeClass("play");
                $(this).parent().prev().prev().removeClass("rotate");
            }
        }

    });

    return model;
});