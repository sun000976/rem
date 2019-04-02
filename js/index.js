$(function () {
    var ch = false;
    var width = $(window).innerWidth();
    var height = $(window).innerHeight();
    $(".head-right").click(function () {
        $(".head-right").toggleClass("open");
        if (ch) {
            $("html,body").animate({ "left": 0 })
            $(".menu").animate({ "right": -400 })
            ch = false;
        } else {

            $("html,body").animate({ "left": -400 })
            $(".menu").animate({ "right": 0 }, 400)
            ch = true;
        }

    })

    $(".renzhe-xuan ul li").click(function () {
        $(this).addClass("active").siblings().removeClass("active")
        $(".rz-box").eq($(this).index()).show().siblings().hide()
    })



    $(".zhezhao").css({ "width": width, "height": height })
    $(".zhezhao-bai").css({ "width": width, "height": height })
    $(".banner-vid-tu").click(function () {
        $(".zhezhao").show();
        $("#xc").show();
        xc.play();
    })
    $(".videos-kc").click(function () {
        $(".zhezhao").show();
        $("#kcdh").show();
        kcdh.play();
    })
    $(".videos-xc").click(function () {
        $(".zhezhao").show();
        $("#xc").show();
        xc.play();
    })
    $(".zhezhao").click(function () {
        $(".zhezhao").hide();
        $("video").hide();
        xc.pause();
        kcdh.pause();
        xc.currentTime=0;
        kcdh.currentTime=0;
    })
    $(".zhezhao video").click(function(ev){
        ev.stopPropagation()
    })
    $(".zhezhao-bai").click(function () {
        $(".zhezhao-bai").hide();
    })
    $(".zhezhao-bai .denglu").click(function(ev){
        ev.stopPropagation()
    })
  


    $(".banner-logo img").animate({ "bottom": 0, "opacity": 1 })
    $(".banner-vid").delay(200).animate({ "bottom": 0, "opacity": 1 })
    $(".banner-xiazai ul li:first-of-type").delay(400).animate({ "bottom": 0, "opacity": 1 })
    $(".banner-xiazai ul li:last-of-type").delay(600).animate({ "bottom": 0, "opacity": 1 })

    $(".xinwen-box-xia").click(function () {
        $(".xinwen-box-xia").addClass("now")
        $(".xinwen-box-xia p").addClass("now")
        setTimeout(function () {
            window.open("news-zx.html", "_self")
        }, 550)
    })




    setCookie("zhanghao",123123,10)
    setCookie("mima",111111,10)
    // setCookie("zhuangtai",0,10)

    $(".denglu .dl").click(function(){
       if($(".uname").val()==getCookieByName("zhanghao")&&$(".umi").val()==getCookieByName("mima")){
        $(".zhezhao-bai").hide()
        setCookie("zhuangtai","1",10)
       }else{
           alert("帐号或密码错误!")
       }
    })

    $(".jrwm-nei-box-r a").click(function(){
        console.log(1)
        if(getCookieByName("zhuangtai")){
            alert("已加入该群")
        }else{
            $(".zhezhao-bai").show()
        }
    })





})






