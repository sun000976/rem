var news = {};
news.news_hd0 = {
    "success": "ok",
    "data": {
        "list": [{
            "sysId": 1,
            "title": "《忍者必须死3》建设家园活动说明",
            "time": "2018-12-25",
            "img": "img/5c21dc3386942.jpg"
        },
        {
            "sysId": 2,
            "title": "【冲击百万忍币！】忍3圣诞滑雪挑战赛",
            "time": "2018-12-21",
            "img": "img/5c1cc95d02d2d.jpg"
        },
        {
            "sysId": 3,
            "title": "【前方福利来袭】定个小目标：先送一个亿忍币！",
            "time": "2018-12-20",
            "img": "img/5c1b58616adc3.jpg"
        },
        {
            "sysId": 4,
            "title": "《忍者必须死3》雪地速降活动说明",
            "time": "2018-12-18",
            "img": "img/5c18c5203dca1.png"
        },
        {
            "sysId": 5,
            "title": "【踏雪集结】忍者必须死3 & bilibili主播招募计划启动！",
            "time": "2018-12-15",
            "img": "img/5c146cfb6ad17.png"
        },
        {
            "sysId": 6,
            "title": "《忍者必须死3》忍者激斗活动说明",
            "time": "2018-12-11",
            "img": "img/5c0f5d44eed14.png"
        },
        ]
    }
}
news.news_hd1 = {
    "success": "ok",
    "data": {
        "list": [{
            "sysId": 7,
            "title": "多人竞速丨《忍者必须死3》周末活动开放",
            "time": "2018-12-04",
            "img": "img/5c062fcd0267e.png"
        },{
            "sysId": 8,
            "title": "【忍者大师集结令】丨忍者必须死3触手主播招募全新升级启动！",
            "time": "2018-11-30",
            "img": "img/5c0100856edf2.jpg"
        },{
            "sysId": 9,
            "title": "讨伐恶龙丨《忍者必须死3》周末活动开放",
            "time": "2018-11-27",
            "img": "img/5bfd158a34586.png"
        },{
            "sysId": 10,
            "title": "【主播大神集结令】丨《忍者必须死3》斗鱼主播招募开启！",
            "time": "2018-11-22",
            "img": "img/5bf63f870e98f.jpg"
        },{
            "sysId": 11,
            "title": "忍者的料理之道！《忍者必须死3》周末新活动上线",
            "time": "2018-11-20",
            "img": "img/5bf36600de74e.jpg"
        },{
            "sysId": 12,
            "title": "万圣节狂欢活动一览！鬼族：不给糖果就捣蛋~",
            "time": "2018-10-22",
            "img": "img/5bcdb7681ea76.jpg"
        }
        ]
    }
}
news.news_hd2 = {
    "success": "ok",
    "data": {
        "list": [{
            "sysId": 13,
            "title": "《忍者必须死3》活动实物展示",
            "time": "2018-10-19",
            "img": "img/5bcdb5d2b8c31.png"
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

            var result = news["news_hd" + global.loadStart]
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
                if(global.loadStart>=2){
                   $(".jiazai a").hide() 
                }
                
            })
            // $(".content-box-nei-xia").delegate("li", "click", function () {
            //     var articleId = $(this).attr("ids");
            //     window.open("active.html?news=xiaoniaoNews" + articleId)
            // })

        }
    })();




})


