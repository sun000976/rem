var news = {};
news.news_gl0 = {
    "success": "ok",
    "data": {
        "list": [{
            "sysId": 1,
            "title": "【玩家攻略-合理分配资源篇】轻松觉醒不是梦！",
            "time": "2018-12-04",
            "img": "img/5c073cbe7bfdb.jpg"
        },
        {
            "sysId": 2,
            "title": "【新手向攻略】武器图谱| 风系",
            "time": "2018-11-30",
            "img": "img/5c00f065944f4.jpg"
        },
        {
            "sysId": 3,
            "title": "【新手向攻略】武器图谱| 雷系",
            "time": "2018-11-30",
            "img": "img/5c00f083d4c6a.jpg"
        },
        {
            "sysId": 4,
            "title": "【新手向攻略】武器图谱| 火系",
            "time": "2018-11-30",
            "img": "img/5c00f08f661fb.jpg"
        },
        {
            "sysId": 5,
            "title": "【新手向攻略】武器图谱| 水系",
            "time": "2018-11-30",
            "img": "img/5c00f0a0873f6.jpg"
        },
        {
            "sysId": 6,
            "title": "【新手向攻略】角色介绍——小黑",
            "time": "2018-11-30",
            "img": "img/5c00a963b308e.jpg"
        },
        ]
    }
}
news.news_gl1 = {
    "success": "ok",
    "data": {
        "list": [{
            "sysId": 7,
            "title": "【新手向攻略】角色介绍——琳",
            "time": "2018-11-30",
            "img": "img/5c00a9503006d.jpg"
        }, {
            "sysId": 8,
            "title": "【新手向攻略】角色介绍——阿力",
            "time": "2018-11-30",
            "img": "img/5c00a93a23ca4.jpg"
        }, {
            "sysId": 9,
            "title": "【新手向攻略】角色介绍——苍牙",
            "time": "2018-11-30",
            "img": "img/5c00a923a9a2b.jpg"
        }, {
            "sysId": 10,
            "title": "【新手向攻略】《忍者必须死3》家族介绍",
            "time": "2018-11-30",
            "img": "img/5c00d73395e1d.jpg"
        }, {
            "sysId": 11,
            "title": "【新手向攻略】《忍者必须死3》世界观—地域篇",
            "time": "2018-11-30",
            "img": "img/5c00d71ec4fb8.jpg"
        }, {
            "sysId": 12,
            "title": "【新手向攻略】《忍者必须死3》日常资源获取",
            "time": "2018-11-30",
            "img": "img/5c00d70c2b381.jpg"
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

            var result = news["news_gl" + global.loadStart]
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
            $(".content-box-nei-xia").delegate("li", "click", function () {
                if ($(this).attr("sysId") > 1 && $(this).attr("sysId") < 6) {
                    var articleId = $(this).attr("sysId");
                    window.open("xiangqing.html?news=xiangqing" + articleId,"_self")
                }

            })

        }
    })();




})


