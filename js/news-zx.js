var news = {};


news.news_zx= {
    "success": "ok",
    "data": {
        "list": [{
            "sysId": 1,
            "title": "2018年忍界风云事件簿，机密数据揭秘！（内含彩蛋）",
            "time": "2018-12-29",
            "img": "img/5c2774e404873.png"
        },
        {
            "sysId": 2,
            "title": "雪花舞满天·铃儿响叮当——圣诞特别壁纸大公开",
            "time": "2018-12-21",
            "img": "img/5c1ccb9f0a12f.jpg"
        },
        {
            "sysId": 3,
            "title": "《忍者必须死3》冰雪庆典活动物品展示",
            "time": "2018-12-18",
            "img": "img/5c1a449fbf021.jpg"
        },
        {
            "sysId": 4,
            "title": "《忍者必须死3》主题壁纸——【皓月玄龙】",
            "time": "2018-12-01",
            "img": "img/5c02958657d56.jpg"
        },
        {
            "sysId": 5,
            "title": "《忍者必须死3》主题壁纸——【枫色狐憩】",
            "time": "2018-11-22",
            "img": "img/5bf6627f07302.png"
        }
        ]
    }
}

$(function () {

    (function () {

        var global = global || {};

        loadArticleList()
        function loadArticleList() {

            var result = news.news_zx
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


            // $(".content-box-nei-xia").delegate("li", "click", function () {
            //     var articleId = $(this).attr("ids");
            //     window.open("active.html?news=xiaoniaoNews" + articleId)
            // })

        }
    })();


})


