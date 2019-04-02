(function(doc,win){
    var docEl=doc.documentElement;
    //设备重置  orientationchange: 屏幕旋转   resize
    //DOMContentLoaded
    var resizeEvt="orientationchange" in window?"orientationchange":"resize";
    var relalc=function(){
        // 获取屏幕宽高
        var clrenWidth=docEl.clientWidth;
        if(!clrenWidth) return;
        docEl.style.fontSize=clrenWidth/7.5+"px"
    }
    if(!addEventListener) return
    win.addEventListener(resizeEvt,relalc,false);
    doc.addEventListener('DOMContentLoaded',relalc,false)

})(document,window)


    var w=window.screen.width;
    var target=750;
    var scale=w/target;
    var meta=document.createElement('meta');
    meta.name='viewport';
    meta.content='initial-scale='+scale+',maximum-scale='+scale+',minimum-scale='+scale;
    document.head.appendChild(meta)
