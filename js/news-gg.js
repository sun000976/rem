var news = {};
news.news_gg0 = {
    "success": "ok",
    "data": {
        "list": [{
            "sysId": 1,
            "title": "12月28日 停服维护公告",
            "time": "2018-12-27",
            "img": "img/5c125d363d946.jpg"
        },
        {
            "sysId": 2,
            "title": "12月20日 停服维护公告",
            "time": "2018-12-20",
            "img": "img/5c125d363d946.jpg"
        },
        {
            "sysId": 3,
            "title": "12月14日 停服维护公告",
            "time": "2018-12-13",
            "img": "img/5c125d363d946.jpg"
        },
        {
            "sysId": 4,
            "title": "冰雪节庆典丨双旦版本预告",
            "time": "2018-12-13",
            "img": "img/5c12123c6c0ab.jpg"
        },
        {
            "sysId": 5,
            "title": "12月7日 停服维护公告",
            "time": "2018-12-06",
            "img": "img/5c125d363d946.jpg"
        },
        {
            "sysId": 6,
            "title": "11月30日 停服维护公告",
            "time": "2018-11-29",
            "img": "img/5c125d363d946.jpg"
        },
        ]
    }
}
news.news_gg1 = {
    "success": "ok",
    "data": {
        "list": [{
            "sysId": 7,
            "title": "《忍者必须死3》海滨假日活动公告",
            "time": "2018-09-29",
            "img": "img/5bae555c0d065.jpg"
        }
        ]
    }
}

$(function () {

    (function () {

        var global = global || {};
        global.loadStart = 0;
        loadArticleList()
        function loadArticleList() {

            var result = news["news_gg" + global.loadStart]
            var list = result.data.list

            if (!list || !list.length) {
                $('.content-box-nei-xia').html('您请求的数据不存在');
            } else {

                for (var i = 0; i < list.length; i++) {
                    var htmlModel = $('#moban').html()
                    htmlModel = htmlModel.replace("$id$", list[i].sysId)
                    htmlModel = htmlModel.replace("img/5c2774e404873.png", list[i].img)
                    htmlModel = htmlModel.replace("$title$", list[i].title)
                    htmlModel = htmlModel.replace("$time$", list[i].time)
                    $('.content-box-nei-xia').append(htmlModel)
                }
            }

            $(".jiazai a").click(function () {
                global.loadStart++;
                loadArticleList()
                $(".jiazai a").hide()
            })
            // $(".content-box-nei-xia").delegate("li", "click", function () {
            //     var articleId = $(this).attr("ids");
            //     window.open("active.html?news=xiaoniaoNews" + articleId)
            // })

        }
    })();




})


