$(function(){
    var ch=false;
    $(".head-right").click(function(){
        $(".head-right").toggleClass("open");
        if(ch){
            $("html,body").animate({"left":0})
            $(".menu").animate({"right":-400})
            ch=false;
        }else{
            $("html,body").animate({"left":-400})
            $(".menu").animate({"right":0},400)
            ch=true;
        }
        
    })




})